'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/components/AuthProvider'
import ProtectedRoute from '@/components/ProtectedRoute'
import { supabase } from '@/lib/supabase'

interface EnergySystem {
  id: string
  name: string
  location: string
  system_type: string
  status: string
  capacity_mw: number
  current_output_mw: number
  efficiency_percent: number
  alerts: any[]
}

interface Notification {
  id: string
  type: string
  title: string
  message: string
  read: boolean
  created_at: string
}

export default function CustomerDashboard() {
  const { user } = useAuth()
  const [systems, setSystems] = useState<EnergySystem[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch energy systems
        const { data: systemsData, error: systemsError } = await supabase
          .from('energy_systems')
          .select('*')
          .order('created_at', { ascending: false })

        if (systemsError) throw systemsError
        setSystems(systemsData || [])

        // Fetch notifications
        const { data: notificationsData, error: notificationsError } = await supabase
          .from('notifications')
          .select('*')
          .eq('user_id', user?.id)
          .order('created_at', { ascending: false })
          .limit(5)

        if (notificationsError) throw notificationsError
        setNotifications(notificationsData || [])

      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (user) {
      fetchData()
    }
  }, [user])

  const totalCapacity = systems.reduce((sum, system) => sum + (system.capacity_mw || 0), 0)
  const totalOutput = systems.reduce((sum, system) => sum + (system.current_output_mw || 0), 0)
  const avgEfficiency = systems.length > 0 
    ? systems.reduce((sum, system) => sum + (system.efficiency_percent || 0), 0) / systems.length 
    : 0

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'operational': return 'text-green-400'
      case 'maintenance': return 'text-amber-400'
      case 'offline': return 'text-red-400'
      default: return 'text-slate-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'operational': return '●'
      case 'maintenance': return '◐'
      case 'offline': return '○'
      default: return '◯'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-navy-600 border-t-gold-500 mx-auto mb-4"
          />
          <p className="text-slate-400 font-mono text-sm tracking-wider">LOADING SYSTEM DATA...</p>
        </div>
      </div>
    )
  }

  return (
    <ProtectedRoute requiredRole="customer">
      <div className="min-h-screen bg-zinc-950 font-sans">
        {/* Header */}
        <div className="border-b border-slate-800 bg-zinc-900/50 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-mono font-bold text-slate-100 tracking-wider">
                CUSTOMER PORTAL
              </h1>
              <p className="text-sm font-mono text-slate-400 tracking-widest mt-1">
                ENERGY INFRASTRUCTURE MONITORING
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-mono text-slate-100">{user?.user_metadata?.full_name || 'CUSTOMER'}</p>
                <p className="text-xs font-mono text-slate-500 tracking-widest">{user?.user_metadata?.company || 'ORGANIZATION'}</p>
              </div>
              <button 
                onClick={() => window.location.href = '/auth'}
                className="border border-slate-700 text-slate-300 px-4 py-2 font-mono text-xs tracking-wider hover:border-slate-500 hover:text-slate-100 transition-all duration-300"
              >
                SIGN OUT
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6 space-y-8">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900 border border-slate-800 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">TOTAL CAPACITY</h3>
                <div className="w-3 h-3 bg-navy-500 border border-gold-500" />
              </div>
              <div className="text-3xl font-mono font-bold text-gold-500 mb-2">
                {totalCapacity.toFixed(1)} MW
              </div>
              <p className="text-xs font-mono text-slate-400 tracking-widest">MAXIMUM GENERATION</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900 border border-slate-800 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">CURRENT OUTPUT</h3>
                <div className="w-3 h-3 bg-green-500 animate-pulse" />
              </div>
              <div className="text-3xl font-mono font-bold text-green-400 mb-2">
                {totalOutput.toFixed(1)} MW
              </div>
              <p className="text-xs font-mono text-slate-400 tracking-widest">ACTIVE GENERATION</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-900 border border-slate-800 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">EFFICIENCY</h3>
                <div className="w-3 h-3 bg-blue-500" />
              </div>
              <div className="text-3xl font-mono font-bold text-blue-400 mb-2">
                {avgEfficiency.toFixed(1)}%
              </div>
              <p className="text-xs font-mono text-slate-400 tracking-widest">AVERAGE PERFORMANCE</p>
            </motion.div>
          </div>

          {/* Energy Systems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-zinc-900 border border-slate-800"
          >
            <div className="border-b border-slate-800 p-6">
              <h2 className="text-xl font-mono font-bold text-slate-100 tracking-wider">ENERGY SYSTEMS</h2>
              <p className="text-sm font-mono text-slate-400 tracking-widest mt-1">REAL-TIME MONITORING</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {systems.map((system, index) => (
                  <motion.div
                    key={system.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-zinc-800 border border-slate-700 p-4 hover:border-navy-500 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className={`text-lg ${getStatusColor(system.status)} animate-pulse`}>
                          {getStatusIcon(system.status)}
                        </span>
                        <div>
                          <h3 className="font-mono font-bold text-slate-100 tracking-wider">{system.name}</h3>
                          <p className="text-sm font-mono text-slate-400">{system.location} • {system.system_type?.toUpperCase()}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-right">
                        <div>
                          <p className="font-mono font-bold text-slate-100">{system.current_output_mw?.toFixed(1)} MW</p>
                          <p className="text-xs font-mono text-slate-500">of {system.capacity_mw?.toFixed(1)} MW</p>
                        </div>
                        <div>
                          <p className="font-mono font-bold text-slate-100">{system.efficiency_percent?.toFixed(1)}%</p>
                          <p className="text-xs font-mono text-slate-500">EFFICIENCY</p>
                        </div>
                        <div className={`px-3 py-1 border font-mono text-xs tracking-wider ${
                          system.status === 'operational' 
                            ? 'border-green-500 text-green-400 bg-green-500/10'
                            : system.status === 'maintenance'
                            ? 'border-amber-500 text-amber-400 bg-amber-500/10'
                            : 'border-red-500 text-red-400 bg-red-500/10'
                        }`}>
                          {system.status.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-zinc-900 border border-slate-800"
          >
            <div className="border-b border-slate-800 p-6">
              <h2 className="text-xl font-mono font-bold text-slate-100 tracking-wider">SYSTEM NOTIFICATIONS</h2>
              <p className="text-sm font-mono text-slate-400 tracking-widest mt-1">RECENT ACTIVITY</p>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-zinc-800 border border-slate-700"
                    >
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.read ? 'bg-slate-600' : 'bg-gold-500 animate-pulse'
                      }`} />
                      <div className="flex-1">
                        <h4 className="font-mono font-bold text-slate-100 text-sm tracking-wider">
                          {notification.title}
                        </h4>
                        <p className="text-sm text-slate-400 mt-1">{notification.message}</p>
                        <p className="text-xs font-mono text-slate-500 tracking-widest mt-2">
                          {notification.created_at.slice(0, 10).toUpperCase()}
                        </p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-slate-500 font-mono text-sm tracking-wider">NO RECENT NOTIFICATIONS</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  )
}