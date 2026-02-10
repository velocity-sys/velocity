import { supabase } from './supabase'
import { User, Session } from '@supabase/supabase-js'

export interface AuthUser extends User {
  user_metadata?: {
    full_name?: string
    company?: string
    role?: string
  }
}

export interface AuthState {
  user: AuthUser | null
  session: Session | null
  loading: boolean
}

// Auth functions
export const auth = {
  // Sign up with email and password
  async signUp(email: string, password: string, metadata?: {
    full_name?: string
    company?: string
    role?: string
  }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    })
    return { data, error }
  },

  // Sign in with email and password
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current user
  async getUser() {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  // Get current session
  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  },

  // Reset password
  async resetPassword(email: string) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`
    })
    return { data, error }
  },

  // Update password
  async updatePassword(password: string) {
    const { data, error } = await supabase.auth.updateUser({
      password
    })
    return { data, error }
  },

  // Update profile
  async updateProfile(updates: {
    full_name?: string
    company?: string
    role?: string
  }) {
    const { data, error } = await supabase.auth.updateUser({
      data: updates
    })
    return { data, error }
  },

  // Listen to auth changes
  onAuthStateChange(callback: (event: string, session: Session | null) => void) {
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Role-based access control
export const hasRole = (user: AuthUser | null, requiredRole: string): boolean => {
  if (!user) return false
  const userRole = user.user_metadata?.role || 'customer'
  
  const roleHierarchy = {
    'admin': ['admin', 'operator', 'customer'],
    'operator': ['operator', 'customer'],
    'customer': ['customer']
  }
  
  return roleHierarchy[userRole as keyof typeof roleHierarchy]?.includes(requiredRole) || false
}

// Check if user is authenticated
export const isAuthenticated = (user: AuthUser | null): boolean => {
  return !!user
}

// Check if user is admin
export const isAdmin = (user: AuthUser | null): boolean => {
  return hasRole(user, 'admin')
}

// Check if user is operator
export const isOperator = (user: AuthUser | null): boolean => {
  return hasRole(user, 'operator')
}