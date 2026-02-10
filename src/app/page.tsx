'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WaitlistModal from '@/components/WaitlistModal'
import TypingEffect from '@/components/TypingEffect'

export default function Home() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])


  return (
    <main className="min-h-screen bg-zinc-950 text-slate-100 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-50" />
      
      {/* Energy Flow Animation Layer - Single flows only */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Single Horizontal Energy Flow - starts off screen */}
        <div 
          className="absolute top-[40%] w-32 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-energy-flow-h"
          style={{ 
            animationDelay: '0s',
            left: '-200px'
          }}
        />
        
        {/* Single Vertical Energy Flow - starts off screen */}
        <div 
          className="absolute left-[30%] w-0.5 h-28 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-energy-flow-v"
          style={{ 
            animationDelay: '12s',
            top: '-200px'
          }}
        />
      </div>
      
      {/* Radial Gradient */}
      <div 
        className="fixed inset-0 bg-radial-fade pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52,69,121,0.15), transparent 50%)`
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 border-b border-slate-800/50 backdrop-blur-sm bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-navy-600 rounded border border-gold-500" />
              <span className="text-xl font-mono font-bold tracking-tight">VELOCITY SYSTEMS</span>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10"
        >
          <div className="max-w-5xl">
            <div className="mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center border border-slate-700 bg-slate-900/50 px-4 py-2 mb-6"
              >
                <div className="w-2 h-2 bg-operational-green rounded-full mr-3 animate-blink-green" />
                <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                  <TypingEffect 
                    text="OPERATIONAL STATUS: ACTIVE • DISTRIBUTED SYSTEMS ONLINE" 
                    speed={15}
                    delay={200}
                  />
                </span>
              </motion.div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-none"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-slate-300"
              >
                AMERICAN
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="text-slate-300"
              >
                ENERGY
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="text-gold-500 font-mono"
              >
                EXCELLENCE
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-12 font-light"
            >
              Advanced distributed systems accelerating American energy independence. 
              Real-time grid observation and autonomous optimization <span className="text-gold-500">3x faster</span> than conventional approaches for manufacturing, data centers, and critical infrastructure.
            </motion.p>
            
            <div className="flex justify-start">
              <button 
                onClick={() => setIsWaitlistModalOpen(true)}
                className="group relative bg-navy-600 text-slate-100 px-8 py-4 font-mono font-bold tracking-wider hover:bg-navy-500 transition-all duration-300 overflow-hidden hover:animate-glow-strong border border-transparent hover:border-gold-500"
              >
                <span className="relative z-10">JOIN EARLY ACCESS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-navy-700 to-navy-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>

      </section>


      {/* Hero Video Section */}
      <section className="relative py-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              <span className="text-slate-100">OPERATIONAL</span>
              <span className="text-electric-400 font-mono ml-4">DEMONSTRATION</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Live tactical deployment of advanced energy infrastructure monitoring systems
            </p>
          </div>
          
          <div className="relative aspect-video bg-zinc-900 border border-slate-800 overflow-hidden max-w-4xl mx-auto">
            {/* Video Container */}
            <div className="absolute inset-0">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/cElhIDdGz7M?autoplay=1&mute=1&loop=1&playlist=cElhIDdGz7M&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="Operational Demonstration"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Overlay Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-mono text-slate-300 tracking-wider">LIVE FEED</p>
                  <p className="text-xs font-mono text-slate-500 tracking-widest">CLASSIFIED DEMONSTRATION</p>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-operational-red rounded-full animate-blink-amber" />
                  <span className="text-xs font-mono text-slate-400 tracking-widest">
                    <TypingEffect text="RECORDING" speed={50} delay={1200} />
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Performance Comparison Section */}
      <section className="relative py-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-slate-100">AMERICAN ENERGY</span>
              <span className="text-gold-500 font-mono ml-4">SUPERIORITY</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Velocity Systems deploys renewable energy infrastructure faster and more efficiently than any competitor
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Performance Metrics */}
            <div className="bg-zinc-900 border border-slate-800 p-8 hover:animate-glow-strong transition-all duration-500">
              <h3 className="text-xl font-mono font-bold text-slate-100 tracking-wider mb-6">
                DEPLOYMENT EFFICIENCY
              </h3>
              <div className="space-y-6">
                <div className="border border-slate-700 bg-zinc-800/50 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-slate-300">Grid Integration Speed</span>
                    <span className="font-mono text-lg text-green-400">0.3 SEC</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2">
                    <div className="bg-green-400 h-2 w-[95%] animate-pulse"></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Industry Standard: 15+ minutes</p>
                </div>

                <div className="border border-slate-700 bg-zinc-800/50 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-slate-300">Energy Efficiency Gain</span>
                    <span className="font-mono text-lg text-gold-500">+347%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2">
                    <div className="bg-gold-500 h-2 w-[100%] animate-pulse-gold"></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Industry Standard: +15-30%</p>
                </div>

                <div className="border border-slate-700 bg-zinc-800/50 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-slate-300">Renewable Deployment Rate</span>
                    <span className="font-mono text-lg text-blue-400">3.2x FASTER</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2">
                    <div className="bg-blue-400 h-2 w-[90%] animate-pulse"></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Accelerating American energy independence</p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-zinc-900 border border-slate-800 overflow-hidden hover:animate-glow-strong transition-all duration-500">
              <div className="border-b border-slate-800 p-6 bg-zinc-800/50">
                <h3 className="text-xl font-mono font-bold text-slate-100 tracking-wider">
                  COMPETITIVE ANALYSIS
                </h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full font-mono text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-2 text-slate-400 font-bold tracking-wider">METRIC</th>
                        <th className="text-right py-3 px-2 text-slate-400 font-bold tracking-wider">INDUSTRY</th>
                        <th className="text-right py-3 px-2 text-gold-500 font-bold tracking-wider">VELOCITY</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-slate-800">
                        <td className="py-3 px-2 text-slate-300">System Response</td>
                        <td className="py-3 px-2 text-right text-slate-400">~15 min</td>
                        <td className="py-3 px-2 text-right text-green-400 animate-blink-green">0.3 sec</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-3 px-2 text-slate-300">Efficiency Boost</td>
                        <td className="py-3 px-2 text-right text-slate-400">15-30%</td>
                        <td className="py-3 px-2 text-right text-gold-500 animate-pulse-gold">347%</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-3 px-2 text-slate-300">Grid Uptime</td>
                        <td className="py-3 px-2 text-right text-slate-400">99.5%</td>
                        <td className="py-3 px-2 text-right text-green-400 animate-blink-green">99.97%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 text-slate-300">AI Integration</td>
                        <td className="py-3 px-2 text-right text-red-400">Limited</td>
                        <td className="py-3 px-2 text-right text-blue-400">Multimodal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Video Section */}
      <section className="relative py-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center border border-slate-700 bg-slate-900/50 px-4 py-2 mb-4">
                  <div className="w-2 h-2 bg-operational-green rounded-full mr-3" />
                  <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                    MISSION BRIEFING
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                <span className="text-slate-100">PROVEN</span>
                <br />
                <span className="text-gold-500 font-mono">DEPLOYMENTS</span>
              </h2>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Successful deployments showcasing enhanced energy infrastructure performance 
                across critical American industrial and defense installations.
              </p>
              
              <div className="space-y-4">
                <div className="border border-slate-800 bg-zinc-900/30 p-4 hover:animate-glow-strong transition-all duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-slate-300 tracking-wider">ALPHA_GRID_TEXAS</span>
                    <span className="font-mono text-xs text-green-400 tracking-widest animate-blink-green">OPERATIONAL</span>
                  </div>
                  <p className="text-sm text-slate-400">347% efficiency increase • 2.1GW renewable capacity • Zero grid failures in 18 months</p>
                  <div className="mt-2 text-xs text-gold-500 font-mono">Powering 1.2M American homes with clean energy</div>
                </div>
                
                <div className="border border-slate-800 bg-zinc-900/30 p-4 hover:animate-glow-strong transition-all duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-slate-300 tracking-wider">BRAVO_MANUFACTURING</span>
                    <span className="font-mono text-xs text-green-400 tracking-widest animate-blink-green">OPTIMAL</span>
                  </div>
                  <p className="text-sm text-slate-400">Multimodal AI deployment in 0.3 seconds • 99.97% uptime • $2.8M annual savings</p>
                  <div className="mt-2 text-xs text-gold-500 font-mono">Supporting American manufacturing dominance</div>
                </div>
                
                <div className="border border-slate-800 bg-zinc-900/30 p-4 hover:animate-glow-strong transition-all duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-slate-300 tracking-wider">CHARLIE_DATACENTER</span>
                    <span className="font-mono text-xs text-green-400 tracking-widest animate-blink-green">SECURED</span>
                  </div>
                  <p className="text-sm text-slate-400">AI-powered cooling optimization • 45% energy reduction • Critical systems protected</p>
                  <div className="mt-2 text-xs text-gold-500 font-mono">Enabling next-gen AI infrastructure</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-video bg-zinc-900 border border-slate-800 overflow-hidden">
                {/* Placeholder for Case Study Video */}
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-navy-500 bg-navy-500/10 mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 border border-navy-400" />
                    </div>
                    <p className="font-mono text-sm text-slate-400 tracking-wider">CASE STUDY VIDEO</p>
                    <p className="font-mono text-xs text-slate-500 tracking-widest mt-1">PASTE VIDEO URL HERE</p>
                  </div>
                </div>
                
                {/* Video Overlay UI */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-operational-green rounded-full animate-blink-green" />
                      <span className="text-xs font-mono text-slate-400 tracking-widest">SECURE FEED</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 tracking-widest">CLASSIFICATION: RESTRICTED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="border border-slate-800 bg-zinc-900/50 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 via-transparent to-navy-500/5" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
              STRENGTHEN AMERICAN ENERGY INFRASTRUCTURE
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Ready to build the future of American energy independence?
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => setIsWaitlistModalOpen(true)}
                className="group relative bg-navy-600 text-slate-100 px-12 py-4 font-mono font-bold tracking-wider hover:bg-navy-500 transition-all duration-300 overflow-hidden hover:animate-glow-strong border border-transparent hover:border-gold-500"
              >
                <span className="relative z-10">BUILD WITH VELOCITY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-navy-700 to-navy-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-navy-600 border border-gold-500" />
                <div>
                  <h3 className="text-xl font-mono font-bold tracking-wider text-slate-100">VELOCITY SYSTEMS</h3>
                  <p className="text-xs font-mono tracking-widest text-slate-500">PUBLIC BENEFIT CORPORATION</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md mb-6">
                Accelerating American energy independence through advanced distributed infrastructure solutions. 
                Powering the future of clean, reliable energy from homes to enterprise.
              </p>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-operational-green rounded-full animate-blink-green" />
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">
                  Systems Operational • Securing American Energy
                </span>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-sm font-mono font-bold tracking-wider text-slate-100 mb-6 uppercase">SOLUTIONS</h4>
              <ul className="space-y-3">
                <li><a href="#grid" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Grid Monitoring</a></li>
                <li><a href="#renewable" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Renewable Integration</a></li>
                <li><a href="#ai" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Multimodal AI</a></li>
                <li><a href="#optimization" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">System Optimization</a></li>
                <li><a href="#security" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Infrastructure Security</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-mono font-bold tracking-wider text-slate-100 mb-6 uppercase">COMPANY</h4>
              <ul className="space-y-3">
                <li><a href="/auth" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Customer Portal</a></li>
                <li><a href="/dashboard" className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors">Control Center</a></li>
                <li><button onClick={() => setIsWaitlistModalOpen(true)} className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors text-left">Contact</button></li>
                <li><button onClick={() => setIsWaitlistModalOpen(true)} className="text-slate-400 hover:text-slate-100 font-mono text-sm tracking-wider transition-colors text-left">Early Access</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                <p className="text-slate-500 font-mono text-sm tracking-wider">
                  © 2025 Velocity Systems, PBC. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                  <a href="/privacy" className="text-slate-500 hover:text-slate-300 font-mono text-xs tracking-wider transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-slate-500 hover:text-slate-300 font-mono text-xs tracking-wider transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse-gold" />
                  <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">
                    Gold Standard Security • Made in the USA
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-800/50">
              <p className="text-xs text-slate-600 font-mono tracking-wider text-center">
                Velocity Systems is committed to advancing American energy independence through innovative technology solutions.
                <br />
                Our distributed intelligence infrastructure accelerates clean energy deployment across residential, commercial, and industrial sectors.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <WaitlistModal 
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </main>
  )
}