'use client'

import { useState } from 'react'
import WaitlistModal from './WaitlistModal'

export default function Header() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  return (
    <>
      <nav className="relative z-50 border-b border-slate-800/50 bg-zinc-950/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-navy-600 rounded border border-gold-500" />
              <a href="/" className="text-xl font-mono font-bold tracking-tight text-slate-100 hover:text-gold-500 transition-colors">
                VELOCITY SYSTEMS
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/case-studies" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">CASE STUDIES</a>
              <a href="/newsroom" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">NEWSROOM</a>
              <a href="/capabilities" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">CAPABILITIES</a>
              <button 
                onClick={() => setIsWaitlistModalOpen(true)}
                className="border border-slate-700 text-slate-400 px-4 py-2 font-mono text-xs tracking-wider hover:bg-slate-700/20 transition-all duration-300"
              >
                EARLY ACCESS
              </button>
            </div>
          </div>
        </div>
      </nav>

      <WaitlistModal 
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </>
  )
}