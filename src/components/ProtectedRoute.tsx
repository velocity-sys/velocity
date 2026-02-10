'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from './AuthProvider'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'admin' | 'operator' | 'customer'
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-navy-600 border border-gold-500 mx-auto mb-4 animate-pulse" />
          <p className="text-slate-400 font-mono text-sm tracking-wider">AUTHENTICATING...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (requiredRole && user.user_metadata?.role !== requiredRole && user.user_metadata?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-red-600 border border-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-mono font-bold text-slate-100 tracking-wider mb-2">ACCESS DENIED</h1>
          <p className="text-slate-400 font-mono text-sm tracking-wider">INSUFFICIENT CLEARANCE LEVEL</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}