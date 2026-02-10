'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TypingEffect from '@/components/TypingEffect'

export default function Capabilities() {
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
    <div className="min-h-screen bg-zinc-950 text-slate-100">
      <Header />
      <main className="bg-zinc-950 text-slate-100 overflow-hidden">
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


      {/* Page Header */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center border border-slate-700 bg-slate-900/50 px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-operational-green rounded-full mr-3 animate-blink-green" />
              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                <TypingEffect text="ADVANCED INFRASTRUCTURE CAPABILITIES" speed={25} delay={200} />
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-slate-100">INFRASTRUCTURE</span>
            <br />
            <span className="text-gold-500 font-mono">EXCELLENCE</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Advanced monitoring, predictive analysis, and autonomous optimization systems for critical infrastructure
          </motion.p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group border border-slate-800 bg-zinc-900/30 p-8 hover:border-electric-500/50 hover:animate-glow-strong transition-all duration-500"
            >
              <div className="mb-6">
                <div className="w-12 h-12 border border-navy-500 bg-navy-500/10 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-navy-400 animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4 font-mono tracking-wider">
                DISTRIBUTED GRID OBSERVATION
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Real-time monitoring of renewable energy infrastructure with microsecond precision. 
                Advanced sensing and pattern recognition detect anomalies before they impact American energy independence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group border border-slate-800 bg-zinc-900/30 p-8 hover:border-electric-500/50 hover:animate-glow-strong transition-all duration-500"
            >
              <div className="mb-6">
                <div className="w-12 h-12 border border-navy-500 bg-navy-500/10 flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-navy-400 to-navy-600 animate-pulse-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4 font-mono tracking-wider">
                ADAPTIVE ENERGY OPTIMIZATION
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Distributed intelligence networks predict and optimize renewable energy distribution across homes, businesses, and grid infrastructure. 
                Accelerate deployment <span className="text-gold-500">3x faster</span> than conventional methods.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group border border-slate-800 bg-zinc-900/30 p-8 hover:border-electric-500/50 hover:animate-glow-strong transition-all duration-500"
            >
              <div className="mb-6">
                <div className="w-12 h-12 border border-navy-500 bg-navy-500/10 flex items-center justify-center">
                  <div className="w-6 h-6 border border-navy-400 bg-navy-500/20 animate-blink-green" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4 font-mono tracking-wider">
                AUTONOMOUS INFRASTRUCTURE
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Self-governing grid systems with continuous observation and instant optimization. 
                Deploy renewable energy solutions from American homes to enterprise infrastructure with unmatched efficiency and speed.
              </p>
            </motion.div>
          </div>

          {/* American Energy Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border border-slate-800 bg-zinc-900/50 p-12 relative overflow-hidden"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-mono font-bold text-slate-100 tracking-wider mb-4">
                AMERICAN ENERGY GRID
              </h3>
              <p className="text-slate-400 font-mono text-sm tracking-widest">
                REAL-TIME INFRASTRUCTURE MONITORING
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Map Section */}
              <div className="lg:col-span-2">
                {/* Simplified US Map with Grid Points */}
                <div className="relative w-full aspect-[2/1] max-w-4xl mx-auto">
                  {/* Map Background */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute inset-0 border-2 border-slate-700 bg-slate-900/20 backdrop-blur"
                    style={{
                      clipPath: "polygon(15% 25%, 85% 25%, 90% 35%, 95% 50%, 90% 75%, 80% 85%, 20% 85%, 10% 75%, 5% 50%, 10% 35%)"
                    }}
                  />

                  {/* Grid Monitoring Points */}
                  {/* Texas */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                    className="absolute top-[60%] left-[35%] transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-blink-green shadow-lg shadow-green-400/50" />
                  </motion.div>

                  {/* California */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                    className="absolute top-[50%] left-[15%] transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-4 h-4 bg-gold-500 rounded-full shadow-lg shadow-gold-500/50" />
                  </motion.div>

                  {/* New York */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                    className="absolute top-[35%] left-[75%] transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-4 h-4 bg-amber-400 rounded-full animate-blink-amber shadow-lg shadow-amber-400/50" />
                  </motion.div>

                  {/* Florida */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                    className="absolute top-[75%] left-[70%] transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-blink-green shadow-lg shadow-green-400/50" />
                  </motion.div>

                  {/* Wyoming */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.0 }}
                    className="absolute top-[40%] left-[40%] transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
                  </motion.div>

                  {/* Illinois */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.2 }}
                    className="absolute top-[45%] left-[55%] transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-blink-green shadow-lg shadow-green-400/50" />
                  </motion.div>

                  {/* Connection Lines */}
                  <motion.svg
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.3, pathLength: 1 }}
                    transition={{ duration: 1, delay: 2.4 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <path
                      d="M 35% 60% L 55% 45% L 75% 35% L 70% 75% L 40% 40% L 15% 50%"
                      stroke="rgba(255,229,165,0.4)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="2,2"
                    />
                  </motion.svg>
                </div>

                {/* Power Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                  className="text-center mt-8"
                >
                  <div className="flex justify-center space-x-12">
                    <div className="text-center">
                      <div className="text-2xl font-mono font-bold text-green-400">2,847 MW</div>
                      <div className="text-xs font-mono text-slate-500 tracking-widest">CURRENT OUTPUT</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-mono font-bold text-gold-500">89.0%</div>
                      <div className="text-xs font-mono text-slate-500 tracking-widest">GRID EFFICIENCY</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-mono font-bold text-blue-400">6</div>
                      <div className="text-xs font-mono text-slate-500 tracking-widest">ACTIVE NODES</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Monitoring System */}
              <div className="lg:col-span-1">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="space-y-4"
                >
                  {/* Grid Status Monitor */}
                  <div className="border border-slate-800 bg-zinc-900/80 p-6 backdrop-blur">
                    <div className="font-mono text-xs text-slate-500 mb-3">
                      AMERICAN ENERGY GRID STATUS
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-300">TEXAS_ERCOT</span>
                        <span className="font-mono text-xs text-green-400 animate-blink-green">ONLINE</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-300">CALIFORNIA</span>
                        <span className="font-mono text-xs text-gold-500">OPTIMAL</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-300">NEW_YORK</span>
                        <span className="font-mono text-xs text-amber-400 animate-blink-amber">MONITOR</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-300">FLORIDA</span>
                        <span className="font-mono text-xs text-green-400 animate-blink-green">ONLINE</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-300">WYOMING</span>
                        <span className="font-mono text-xs text-blue-400">ACTIVE</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-300">ILLINOIS</span>
                        <span className="font-mono text-xs text-green-400 animate-blink-green">ONLINE</span>
                      </div>
                    </div>
                  </div>

                  {/* Regional Power Output */}
                  <div className="border border-slate-800 bg-zinc-900/80 p-4 backdrop-blur">
                    <div className="font-mono text-xs text-slate-500 mb-2">REGIONAL OUTPUT</div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-400">TEXAS</span>
                        <span className="font-mono text-xs text-green-400">1,247 MW</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-400">CALIFORNIA</span>
                        <span className="font-mono text-xs text-gold-500">892 MW</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-400">NORTHEAST</span>
                        <span className="font-mono text-xs text-amber-400">534 MW</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-slate-400">FLORIDA</span>
                        <span className="font-mono text-xs text-green-400">174 MW</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 bg-zinc-950 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-navy-600 border border-gold-500" />
              <div>
                <h3 className="text-xl font-mono font-bold tracking-wider text-slate-100">VELOCITY SYSTEMS</h3>
                <p className="text-xs font-mono tracking-widest text-slate-500">PUBLIC BENEFIT CORPORATION</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mx-auto mb-6">
              Advanced distributed infrastructure solutions accelerating American energy independence.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-operational-green rounded-full animate-blink-green" />
              <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">
                Systems Operational • Securing American Energy
              </span>
            </div>
            <div className="border-t border-slate-800 pt-8 mt-8">
              <p className="text-slate-500 font-mono text-sm tracking-wider">
                © 2025 Velocity Systems, PBC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      </main>
      <Footer />
    </div>
  )
}