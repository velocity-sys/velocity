-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create custom types
CREATE TYPE user_role AS ENUM ('admin', 'operator', 'customer');
CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'qualified', 'converted', 'rejected');
CREATE TYPE notification_type AS ENUM ('lead_created', 'system_alert', 'booking_confirmed');

-- Create profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  company TEXT,
  role user_role DEFAULT 'customer',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create leads table
CREATE TABLE public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT,
  lead_type TEXT DEFAULT 'consultation', -- 'consultation' or 'waitlist'
  status lead_status DEFAULT 'new',
  source TEXT, -- Where the lead came from
  assigned_to UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create notifications table
CREATE TABLE public.notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  type notification_type NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  data JSONB, -- Additional data for the notification
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create energy_systems table (for dashboard monitoring)
CREATE TABLE public.energy_systems (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  system_type TEXT, -- 'solar', 'wind', 'grid', 'storage', etc.
  status TEXT DEFAULT 'operational', -- 'operational', 'maintenance', 'offline'
  capacity_mw NUMERIC,
  current_output_mw NUMERIC,
  efficiency_percent NUMERIC,
  last_maintenance TIMESTAMP WITH TIME ZONE,
  next_maintenance TIMESTAMP WITH TIME ZONE,
  alerts JSONB DEFAULT '[]',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create system_logs table (for activity tracking)
CREATE TABLE public.system_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  system_id UUID REFERENCES public.energy_systems(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id),
  action TEXT NOT NULL,
  details TEXT,
  severity TEXT DEFAULT 'info', -- 'info', 'warning', 'error', 'critical'
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.energy_systems ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for leads
CREATE POLICY "Admins and operators can manage leads" ON public.leads
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'operator')
    )
  );

-- RLS Policies for notifications
CREATE POLICY "Users can view own notifications" ON public.notifications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications" ON public.notifications
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "System can create notifications" ON public.notifications
  FOR INSERT WITH CHECK (true);

-- RLS Policies for energy_systems
CREATE POLICY "Authenticated users can view energy systems" ON public.energy_systems
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Operators and admins can manage energy systems" ON public.energy_systems
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'operator')
    )
  );

-- RLS Policies for system_logs
CREATE POLICY "Authenticated users can view system logs" ON public.system_logs
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "System can create logs" ON public.system_logs
  FOR INSERT WITH CHECK (true);

-- Create functions and triggers for updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER energy_systems_updated_at
  BEFORE UPDATE ON public.energy_systems
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, company, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'company', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'customer')::user_role
  );
  
  -- Create welcome notification
  INSERT INTO public.notifications (user_id, type, title, message)
  VALUES (
    NEW.id,
    'system_alert',
    'Welcome to Velocity Systems',
    'Your account has been created successfully. Access your energy infrastructure dashboard to begin monitoring your systems.'
  );
  
  RETURN NEW;
END;
$$;

-- Trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Create function to notify on new leads
CREATE OR REPLACE FUNCTION public.notify_new_lead()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Notify all admins and operators about new lead
  INSERT INTO public.notifications (user_id, type, title, message, data)
  SELECT 
    p.id,
    'lead_created',
    'New Lead Created',
    'A new ' || NEW.lead_type || ' lead has been submitted by ' || NEW.full_name || ' from ' || COALESCE(NEW.company, 'Unknown Company'),
    jsonb_build_object('lead_id', NEW.id, 'lead_type', NEW.lead_type)
  FROM public.profiles p
  WHERE p.role IN ('admin', 'operator');
  
  RETURN NEW;
END;
$$;

-- Trigger for new leads
CREATE TRIGGER on_lead_created
  AFTER INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_lead();

-- Insert sample energy systems data
INSERT INTO public.energy_systems (name, location, system_type, capacity_mw, current_output_mw, efficiency_percent, status) VALUES
('Alpha Grid Station', 'Texas, USA', 'grid', 500.0, 485.2, 97.04, 'operational'),
('Bravo Solar Array', 'Nevada, USA', 'solar', 250.0, 198.4, 79.36, 'operational'),
('Charlie Wind Farm', 'Wyoming, USA', 'wind', 300.0, 267.8, 89.27, 'operational'),
('Delta Storage Facility', 'California, USA', 'storage', 150.0, 142.1, 94.73, 'operational'),
('Echo Thermal Plant', 'Arizona, USA', 'thermal', 400.0, 0.0, 0.0, 'maintenance');