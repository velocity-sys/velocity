'use client'

import { useState, useEffect } from 'react'

export default function DashboardOverview() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toISOString().slice(0, 19).replace('T', ' ') + ' UTC')
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Mock data - would come from Supabase in production
  const metrics = {
    energyOutput: 1847.2,
    activeSystems: 17,
    efficiency: 97.4,
    threatLevel: 'NOMINAL'
  }

  const systemStatus = [
    { id: 'PWR_GRID_01', status: 'OPTIMAL', output: 342.1, efficiency: 98.2 },
    { id: 'PWR_GRID_02', status: 'OPTIMAL', output: 289.7, efficiency: 96.8 },
    { id: 'PWR_GRID_03', status: 'MONITOR', output: 267.3, efficiency: 94.1 },
    { id: 'PWR_GRID_04', status: 'OPTIMAL', output: 398.2, efficiency: 99.1 },
    { id: 'PWR_GRID_05', status: 'DEGRADED', output: 156.8, efficiency: 78.3 },
  ]

  const recentActivity = [
    { id: 1, event: 'SYSTEM PWR_GRID_05 EFFICIENCY DEGRADED', time: '14:32:17', level: 'WARNING' },
    { id: 2, event: 'BRIEFING REQUEST RECEIVED - TECH_CORP', time: '14:28:43', level: 'INFO' },
    { id: 3, event: 'AUTONOMOUS RESPONSE INITIATED - GRID_02', time: '14:15:22', level: 'SUCCESS' },
    { id: 4, event: 'PREDICTIVE MAINTENANCE SCHEDULED', time: '13:59:08', level: 'INFO' },
  ]

  // Energy Systems Data
  const energySystems = [
    { 
      id: 'SOLAR_ALPHA_TX', 
      type: 'SOLAR', 
      location: 'WEST TEXAS', 
      capacity: 2500, 
      current: 2347, 
      status: 'OPERATIONAL',
      lastMaintenance: '2024-08-15',
      nextMaintenance: '2024-12-15',
      alerts: []
    },
    { 
      id: 'WIND_BRAVO_OK', 
      type: 'WIND', 
      location: 'OKLAHOMA', 
      capacity: 1800, 
      current: 1654, 
      status: 'OPERATIONAL',
      lastMaintenance: '2024-09-01',
      nextMaintenance: '2025-01-01',
      alerts: ['LOW_WIND_FORECAST']
    },
    { 
      id: 'HYDRO_CHARLIE_CO', 
      type: 'HYDRO', 
      location: 'COLORADO', 
      capacity: 950, 
      current: 847, 
      status: 'MAINTENANCE',
      lastMaintenance: '2024-09-25',
      nextMaintenance: '2025-03-25',
      alerts: ['SCHEDULED_MAINTENANCE']
    },
    { 
      id: 'NUCLEAR_DELTA_FL', 
      type: 'NUCLEAR', 
      location: 'FLORIDA', 
      capacity: 3200, 
      current: 3198, 
      status: 'OPERATIONAL',
      lastMaintenance: '2024-07-10',
      nextMaintenance: '2024-10-10',
      alerts: []
    }
  ]

  // Intel Briefings Data
  const intelBriefings = [
    {
      id: 'BRIEF_001',
      classification: 'CONFIDENTIAL',
      title: 'GRID VULNERABILITY ASSESSMENT - SECTOR 7',
      timestamp: '2024-09-28 13:45:00',
      source: 'GRID_ANALYSIS_UNIT',
      priority: 'HIGH',
      summary: 'Potential infrastructure weakness identified in eastern grid connections. Recommend immediate hardening protocols.',
      actions: ['DEPLOY_SECURITY_TEAM', 'UPGRADE_FIREWALLS', 'INCREASE_MONITORING']
    },
    {
      id: 'BRIEF_002', 
      classification: 'SECRET',
      title: 'FOREIGN ENERGY MARKET INTELLIGENCE',
      timestamp: '2024-09-28 11:30:00',
      source: 'EXTERNAL_INTEL',
      priority: 'MEDIUM',
      summary: 'Competitor analysis reveals new renewable deployment strategies. Strategic advantages identified for Velocity Systems.',
      actions: ['MARKET_ANALYSIS', 'STRATEGIC_POSITIONING']
    },
    {
      id: 'BRIEF_003',
      classification: 'UNCLASSIFIED',
      title: 'WEATHER PATTERN ANALYSIS - Q4 2024',
      timestamp: '2024-09-28 09:15:00',
      source: 'METEOROLOGICAL_UNIT',
      priority: 'LOW',
      summary: 'Seasonal weather projections indicate favorable conditions for renewable energy generation through December.',
      actions: ['OPTIMIZE_FORECASTING', 'ADJUST_CAPACITY_PLANNING']
    }
  ]

  // Threat Analysis Data
  const threatAnalysis = [
    {
      id: 'THREAT_001',
      level: 'CRITICAL',
      type: 'CYBER_ATTACK',
      title: 'ADVANCED PERSISTENT THREAT DETECTED',
      description: 'Sophisticated intrusion attempt targeting SCADA systems. Automated countermeasures deployed.',
      affectedSystems: ['PWR_GRID_03', 'PWR_GRID_05'],
      mitigationStatus: 'ACTIVE_COUNTERMEASURES',
      estimatedImpact: 'MINIMAL',
      timeToResolution: '2.5 HOURS',
      lastUpdate: '14:45:23'
    },
    {
      id: 'THREAT_002',
      level: 'HIGH',
      type: 'PHYSICAL_SECURITY',
      title: 'UNAUTHORIZED PERIMETER APPROACH',
      description: 'Motion sensors triggered at Solar Alpha facility. Security team dispatched for investigation.',
      affectedSystems: ['SOLAR_ALPHA_TX'],
      mitigationStatus: 'INVESTIGATING',
      estimatedImpact: 'LOW',
      timeToResolution: '1.0 HOURS',
      lastUpdate: '14:20:15'
    },
    {
      id: 'THREAT_003',
      level: 'MEDIUM',
      type: 'SUPPLY_CHAIN',
      title: 'COMPONENT DELIVERY DELAY',
      description: 'Critical transformer shipment delayed due to logistics disruption. Backup units on standby.',
      affectedSystems: ['HYDRO_CHARLIE_CO'],
      mitigationStatus: 'CONTINGENCY_ACTIVE',
      estimatedImpact: 'NEGLIGIBLE',
      timeToResolution: '72 HOURS',
      lastUpdate: '13:55:47'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPTIMAL': return 'text-electric-400'
      case 'OPERATIONAL': return 'text-electric-400'
      case 'MONITOR': return 'text-amber-400'
      case 'MAINTENANCE': return 'text-amber-400'
      case 'DEGRADED': return 'text-red-400'
      case 'OFFLINE': return 'text-red-400'
      default: return 'text-slate-400'
    }
  }

  const getActivityColor = (level: string) => {
    switch (level) {
      case 'WARNING': return 'border-l-amber-400 bg-amber-400/5'
      case 'SUCCESS': return 'border-l-electric-400 bg-electric-400/5'
      case 'INFO': return 'border-l-slate-500 bg-slate-500/5'
      default: return 'border-l-slate-600 bg-slate-600/5'
    }
  }

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case 'SECRET': return 'text-red-400 bg-red-400/10 border-red-400'
      case 'CONFIDENTIAL': return 'text-amber-400 bg-amber-400/10 border-amber-400'
      case 'UNCLASSIFIED': return 'text-electric-400 bg-electric-400/10 border-electric-400'
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400'
      case 'MEDIUM': return 'text-amber-400'
      case 'LOW': return 'text-electric-400'
      default: return 'text-slate-400'
    }
  }

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'CRITICAL': return 'border-l-red-500 bg-red-500/10'
      case 'HIGH': return 'border-l-amber-500 bg-amber-500/10'
      case 'MEDIUM': return 'border-l-blue-500 bg-blue-500/10'
      case 'LOW': return 'border-l-green-500 bg-green-500/10'
      default: return 'border-l-slate-500 bg-slate-500/10'
    }
  }

  const getSystemTypeIcon = (type: string) => {
    switch (type) {
      case 'SOLAR': return '☀️'
      case 'WIND': return '💨'
      case 'HYDRO': return '💧'
      case 'NUCLEAR': return '⚛️'
      default: return '⚡'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-mono font-bold text-slate-100 tracking-wider mb-2">
              TACTICAL OVERVIEW
            </h1>
            <p className="text-slate-400 font-mono text-sm tracking-wider">
              REAL-TIME INFRASTRUCTURE MONITORING
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-mono text-slate-500 tracking-widest">SYSTEM TIME</p>
            <p className="text-sm font-mono text-slate-300">{currentTime}</p>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-slate-800 bg-zinc-900/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-3 h-3 bg-electric-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-slate-500">KWH</span>
          </div>
          <p className="text-2xl font-mono font-bold text-slate-100 mb-1">
            {metrics.energyOutput.toFixed(1)}
          </p>
          <p className="text-xs font-mono tracking-wider text-slate-400">TOTAL OUTPUT</p>
        </div>

        <div className="border border-slate-800 bg-zinc-900/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-3 h-3 bg-electric-400" />
            <span className="text-xs font-mono tracking-widest text-slate-500">SYS</span>
          </div>
          <p className="text-2xl font-mono font-bold text-slate-100 mb-1">
            {metrics.activeSystems}
          </p>
          <p className="text-xs font-mono tracking-wider text-slate-400">ACTIVE SYSTEMS</p>
        </div>

        <div className="border border-slate-800 bg-zinc-900/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-3 h-3 bg-electric-400" />
            <span className="text-xs font-mono tracking-widest text-slate-500">PCT</span>
          </div>
          <p className="text-2xl font-mono font-bold text-slate-100 mb-1">
            {metrics.efficiency}%
          </p>
          <p className="text-xs font-mono tracking-wider text-slate-400">EFFICIENCY</p>
        </div>

        <div className="border border-slate-800 bg-zinc-900/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-3 h-3 bg-electric-400" />
            <span className="text-xs font-mono tracking-widest text-slate-500">THR</span>
          </div>
          <p className="text-xl font-mono font-bold text-electric-400 mb-1">
            {metrics.threatLevel}
          </p>
          <p className="text-xs font-mono tracking-wider text-slate-400">THREAT LEVEL</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* System Status */}
        <div className="border border-slate-800 bg-zinc-900/30">
          <div className="border-b border-slate-800 px-6 py-4">
            <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">
              SYSTEM STATUS
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {systemStatus.map((system) => (
                <div key={system.id} className="border border-slate-800 bg-zinc-950/50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-slate-300 tracking-wider">
                      {system.id}
                    </span>
                    <span className={`font-mono text-sm font-bold tracking-wider ${getStatusColor(system.status)}`}>
                      {system.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-500 tracking-widest">OUTPUT:</span>
                      <span className="text-slate-300 ml-2">{system.output} kWh</span>
                    </div>
                    <div>
                      <span className="text-slate-500 tracking-widest">EFF:</span>
                      <span className="text-slate-300 ml-2">{system.efficiency}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border border-slate-800 bg-zinc-900/30">
          <div className="border-b border-slate-800 px-6 py-4">
            <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">
              ACTIVITY LOG
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className={`border-l-2 pl-4 py-3 ${getActivityColor(activity.level)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-slate-500 tracking-widest">
                      {activity.time}
                    </span>
                    <span className="text-xs font-mono text-slate-500 tracking-widest">
                      {activity.level}
                    </span>
                  </div>
                  <p className="text-sm font-mono text-slate-300 leading-relaxed">
                    {activity.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Energy Systems Section */}
      <div className="border border-slate-800 bg-zinc-900/30">
        <div className="border-b border-slate-800 px-6 py-4">
          <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">
            ENERGY SYSTEMS
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {energySystems.map((system) => (
              <div key={system.id} className="border border-slate-800 bg-zinc-950/50 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getSystemTypeIcon(system.type)}</span>
                    <div>
                      <h4 className="font-mono text-sm font-bold text-slate-100 tracking-wider">
                        {system.id}
                      </h4>
                      <p className="text-xs font-mono text-slate-500 tracking-widest">
                        {system.type} • {system.location}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-mono font-bold tracking-wider ${getStatusColor(system.status)}`}>
                    {system.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-mono text-slate-500 tracking-widest mb-1">CAPACITY</p>
                    <p className="text-lg font-mono font-bold text-slate-100">{system.capacity} MW</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 tracking-widest mb-1">CURRENT OUTPUT</p>
                    <p className="text-lg font-mono font-bold text-electric-400">{system.current} MW</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-500 tracking-widest">EFFICIENCY:</span>
                    <span className="text-slate-300">{((system.current / system.capacity) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1">
                    <div 
                      className="bg-electric-400 h-1 transition-all duration-300" 
                      style={{ width: `${(system.current / system.capacity) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 tracking-widest">LAST MAINT:</span>
                    <span className="text-slate-300 ml-2">{system.lastMaintenance}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 tracking-widest">NEXT MAINT:</span>
                    <span className="text-slate-300 ml-2">{system.nextMaintenance}</span>
                  </div>
                </div>

                {system.alerts.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <p className="text-xs font-mono text-slate-500 tracking-widest mb-2">ALERTS:</p>
                    {system.alerts.map((alert, index) => (
                      <div key={index} className="bg-amber-400/10 border border-amber-400 px-3 py-2 mb-2">
                        <span className="text-xs font-mono text-amber-400 tracking-wider">{alert}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intel Briefings Section */}
      <div className="border border-slate-800 bg-zinc-900/30">
        <div className="border-b border-slate-800 px-6 py-4">
          <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">
            INTEL BRIEFINGS
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {intelBriefings.map((briefing) => (
              <div key={briefing.id} className="border border-slate-800 bg-zinc-950/50 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-mono font-bold tracking-wider border ${getClassificationColor(briefing.classification)}`}>
                        {briefing.classification}
                      </span>
                      <span className={`text-xs font-mono font-bold tracking-wider ${getPriorityColor(briefing.priority)}`}>
                        {briefing.priority} PRIORITY
                      </span>
                    </div>
                    <h4 className="font-mono text-base font-bold text-slate-100 tracking-wider mb-2">
                      {briefing.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-xs font-mono text-slate-500 tracking-widest mb-3">
                      <span>ID: {briefing.id}</span>
                      <span>SOURCE: {briefing.source}</span>
                      <span>TIME: {briefing.timestamp}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-mono text-slate-500 tracking-widest mb-2">SUMMARY:</p>
                  <p className="text-sm font-mono text-slate-300 leading-relaxed">
                    {briefing.summary}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-mono text-slate-500 tracking-widest mb-2">RECOMMENDED ACTIONS:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {briefing.actions.map((action, index) => (
                      <button 
                        key={index}
                        className="text-left border border-slate-700 text-slate-300 px-3 py-2 font-mono text-xs tracking-wider hover:border-electric-500 hover:text-electric-400 transition-all duration-300"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Threat Analysis Section */}
      <div className="border border-slate-800 bg-zinc-900/30">
        <div className="border-b border-slate-800 px-6 py-4">
          <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">
            THREAT ANALYSIS
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {threatAnalysis.map((threat) => (
              <div key={threat.id} className={`border-l-4 pl-6 pr-6 py-6 ${getThreatLevelColor(threat.level)}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-lg font-mono font-bold text-slate-100 tracking-wider">
                        {threat.level} THREAT
                      </span>
                      <span className="text-xs font-mono text-slate-500 tracking-widest">
                        {threat.type}
                      </span>
                    </div>
                    <h4 className="font-mono text-base font-bold text-slate-100 tracking-wider mb-2">
                      {threat.title}
                    </h4>
                    <p className="text-sm font-mono text-slate-300 leading-relaxed mb-3">
                      {threat.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-slate-500 tracking-widest">LAST UPDATE</p>
                    <p className="text-sm font-mono text-slate-300">{threat.lastUpdate}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-mono text-slate-500 tracking-widest mb-1">AFFECTED SYSTEMS</p>
                    <div className="space-y-1">
                      {threat.affectedSystems.map((system, index) => (
                        <p key={index} className="text-xs font-mono text-amber-400 tracking-wider">
                          {system}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 tracking-widest mb-1">MITIGATION STATUS</p>
                    <p className="text-xs font-mono text-electric-400 tracking-wider">
                      {threat.mitigationStatus}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 tracking-widest mb-1">ESTIMATED IMPACT</p>
                    <p className="text-xs font-mono text-slate-300 tracking-wider">
                      {threat.estimatedImpact}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 tracking-widest mb-1">TIME TO RESOLUTION</p>
                    <p className="text-xs font-mono text-slate-300 tracking-wider">
                      {threat.timeToResolution}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="border border-red-600 text-red-400 px-4 py-2 font-mono text-xs tracking-wider hover:bg-red-600/10 transition-all duration-300">
                    ESCALATE THREAT
                  </button>
                  <button className="border border-slate-700 text-slate-300 px-4 py-2 font-mono text-xs tracking-wider hover:border-electric-500 hover:text-electric-400 transition-all duration-300">
                    VIEW DETAILS
                  </button>
                  <button className="border border-slate-700 text-slate-300 px-4 py-2 font-mono text-xs tracking-wider hover:border-electric-500 hover:text-electric-400 transition-all duration-300">
                    UPDATE STATUS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Command Panel */}
      <div className="border border-slate-800 bg-zinc-900/30 p-6">
        <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider mb-6">
          TACTICAL OPERATIONS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="border border-slate-700 text-slate-300 px-6 py-3 font-mono text-sm tracking-wider hover:border-electric-500 hover:text-electric-400 transition-all duration-300">
            DEPLOY COUNTERMEASURES
          </button>
          <button className="border border-slate-700 text-slate-300 px-6 py-3 font-mono text-sm tracking-wider hover:border-electric-500 hover:text-electric-400 transition-all duration-300">
            GENERATE INTEL REPORT
          </button>
          <button className="border border-slate-700 text-slate-300 px-6 py-3 font-mono text-sm tracking-wider hover:border-electric-500 hover:text-electric-400 transition-all duration-300">
            INITIATE MAINTENANCE
          </button>
          <button className="border border-slate-700 text-slate-300 px-6 py-3 font-mono text-sm tracking-wider hover:border-electric-500 hover:text-electric-400 transition-all duration-300">
            EMERGENCY PROTOCOL
          </button>
        </div>
      </div>
    </div>
  )
}