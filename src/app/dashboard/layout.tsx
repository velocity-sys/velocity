'use client'

import { useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigationItems = [
    { name: 'TACTICAL OVERVIEW', href: '/dashboard', icon: '◇' },
    { name: 'ENERGY SYSTEMS', href: '/dashboard/systems', icon: '▣' },
    { name: 'INTEL BRIEFINGS', href: '/dashboard/bookings', icon: '◈' },
    { name: 'THREAT ANALYSIS', href: '/dashboard/analytics', icon: '◈' },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 font-sans">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-zinc-900 border-r border-slate-800">
          <div className="flex items-center h-20 flex-shrink-0 px-6 bg-zinc-950 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-navy-600 border border-gold-500" />
              <div>
                <h1 className="text-lg font-mono font-bold tracking-wider text-slate-100">VELOCITY SYSTEMS</h1>
                <p className="text-xs font-mono tracking-widest text-slate-500">COMMAND CENTER</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center px-4 py-3 text-sm font-mono tracking-wider text-slate-400 hover:text-slate-100 hover:bg-zinc-800 border border-transparent hover:border-slate-700 transition-all duration-300"
              >
                <span className="mr-4 text-navy-400 font-bold">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex-shrink-0 border-t border-slate-800 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-zinc-800 border border-slate-700 flex items-center justify-center">
                <span className="text-slate-400 font-mono text-xs">OP</span>
              </div>
              <div>
                <p className="text-sm font-mono text-slate-100">OPERATOR_01</p>
                <p className="text-xs font-mono text-slate-500 tracking-widest">CLEARANCE: ALPHA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-80 bg-zinc-900 border-r border-slate-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between h-20 px-6 bg-zinc-950 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-navy-600 border border-gold-500" />
            <div>
              <h1 className="text-lg font-mono font-bold tracking-wider text-slate-100">VELOCITY SYSTEMS</h1>
              <p className="text-xs font-mono tracking-widest text-slate-500">COMMAND CENTER</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-slate-400 hover:text-slate-100"
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex items-center px-4 py-3 text-sm font-mono tracking-wider text-slate-400 hover:text-slate-100 hover:bg-zinc-800 border border-transparent hover:border-slate-700 transition-all duration-300"
            >
              <span className="mr-4 text-navy-400 font-bold">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-80 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-20 bg-zinc-950 border-b border-slate-800">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-6 border-r border-slate-800 text-slate-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy-500 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex-1 px-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-mono font-bold text-slate-100 tracking-wider">CONTROL CENTER</h2>
              <p className="text-xs font-mono text-slate-500 tracking-widest">ENTERPRISE INFRASTRUCTURE MONITORING</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-electric-400 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-slate-400 tracking-widest">SECURE</span>
              </div>
              
              <button className="border border-slate-700 text-slate-300 px-4 py-2 font-mono text-xs tracking-wider hover:border-slate-500 hover:text-slate-100 transition-all duration-300">
                TERMINATE SESSION
              </button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-8 bg-zinc-950">
          {children}
        </main>
      </div>
    </div>
  )
}