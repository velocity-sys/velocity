'use client'

import { useState } from 'react'
import WaitlistModal from './WaitlistModal'

export default function Footer() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  return (
    <>
      <footer className="relative border-t border-slate-800/50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-navy-600 rounded border border-gold-500" />
                <span className="text-xl font-mono font-bold tracking-tight text-slate-100">VELOCITY SYSTEMS</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Advanced energy infrastructure systems powering American independence through 
                renewable energy deployment and grid optimization technology.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setIsWaitlistModalOpen(true)}
                  className="bg-navy-600 text-slate-100 px-6 py-3 font-mono font-bold tracking-wider hover:bg-navy-500 transition-colors duration-300"
                >
                  GET EARLY ACCESS
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider mb-6">QUICK LINKS</h3>
              <ul className="space-y-4">
                <li><a href="/case-studies" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Case Studies</a></li>
                <li><a href="/newsroom" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Newsroom</a></li>
                <li><a href="/capabilities" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Capabilities</a></li>
                <li><a href="/auth" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Dashboard</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider mb-6">CONTACT</h3>
              <ul className="space-y-4">
                <li><button onClick={() => setIsWaitlistModalOpen(true)} className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors text-left">Contact</button></li>
                <li><a href="/privacy" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-500 text-sm font-mono tracking-wider">
                © 2024 Velocity Systems. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs font-mono tracking-widest mt-4 md:mt-0">
                AMERICAN ENERGY INDEPENDENCE
              </p>
            </div>
          </div>
        </div>
      </footer>

      <WaitlistModal 
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </>
  )
}