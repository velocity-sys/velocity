import { createClient } from '@supabase/supabase-js'

// These would come from environment variables in production
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type UserRole = 'admin' | 'operator' | 'customer'
export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'rejected'
export type NotificationType = 'lead_created' | 'system_alert' | 'booking_confirmed'

// Database types (would be auto-generated from Supabase CLI)
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          company: string | null
          role: UserRole
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          company?: string | null
          role?: UserRole
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          company?: string | null
          role?: UserRole
          created_at?: string
          updated_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          email: string
          full_name: string
          company: string | null
          phone: string | null
          message: string | null
          lead_type: string
          status: LeadStatus
          source: string | null
          assigned_to: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          company?: string | null
          phone?: string | null
          message?: string | null
          lead_type?: string
          status?: LeadStatus
          source?: string | null
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          company?: string | null
          phone?: string | null
          message?: string | null
          lead_type?: string
          status?: LeadStatus
          source?: string | null
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: NotificationType
          title: string
          message: string
          read: boolean
          data: any | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: NotificationType
          title: string
          message: string
          read?: boolean
          data?: any | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: NotificationType
          title?: string
          message?: string
          read?: boolean
          data?: any | null
          created_at?: string
        }
      }
      energy_systems: {
        Row: {
          id: string
          name: string
          location: string | null
          system_type: string | null
          status: string
          capacity_mw: number | null
          current_output_mw: number | null
          efficiency_percent: number | null
          last_maintenance: string | null
          next_maintenance: string | null
          alerts: any[]
          metadata: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          location?: string | null
          system_type?: string | null
          status?: string
          capacity_mw?: number | null
          current_output_mw?: number | null
          efficiency_percent?: number | null
          last_maintenance?: string | null
          next_maintenance?: string | null
          alerts?: any[]
          metadata?: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          location?: string | null
          system_type?: string | null
          status?: string
          capacity_mw?: number | null
          current_output_mw?: number | null
          efficiency_percent?: number | null
          last_maintenance?: string | null
          next_maintenance?: string | null
          alerts?: any[]
          metadata?: any
          created_at?: string
          updated_at?: string
        }
      }
      system_logs: {
        Row: {
          id: string
          system_id: string
          user_id: string | null
          action: string
          details: string | null
          severity: string
          timestamp: string
        }
        Insert: {
          id?: string
          system_id: string
          user_id?: string | null
          action: string
          details?: string | null
          severity?: string
          timestamp?: string
        }
        Update: {
          id?: string
          system_id?: string
          user_id?: string | null
          action?: string
          details?: string | null
          severity?: string
          timestamp?: string
        }
      }
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type InsertTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type UpdateTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']