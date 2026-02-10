'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CaseStudies() {
  // Trusted by organizations - duplicated for seamless loop
  const trustedBy = [
    { name: 'ERCOT', logo: '⚡' },
    { name: 'US DEPT OF ENERGY', logo: '🏛️' },
    { name: 'PALANTIR', logo: '🔍' },
    { name: 'ANDURIL', logo: '🛡️' },
    { name: 'SEQUOIA', logo: '🌲' },
    { name: 'A16Z', logo: '💎' }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100">
      <Header />
      {/* Header */}
      <section className="relative py-20 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-slate-100">CASE</span>
              <span className="text-gold-500 font-mono ml-4">STUDIES</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Proven deployments across critical American infrastructure sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Auto-Scrolling Logos */}
      <section className="relative py-16 border-b border-slate-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-mono font-bold text-slate-100 tracking-wider mb-4">
              TRUSTED BY
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Strategic partnerships with America's most critical energy and defense organizations
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-16 items-center" style={{ width: 'calc(200% + 64px)' }}>
              {/* Multiple sets for truly seamless loop */}
              {[...Array(4)].map((_, setIndex) => (
                trustedBy.map((org, index) => (
                  <div
                    key={`set-${setIndex}-${index}`}
                    className="flex flex-col items-center space-y-3 min-w-[160px] flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="text-4xl">{org.logo}</div>
                    <h3 className="text-sm font-mono font-bold text-slate-300 tracking-wider text-center whitespace-nowrap">
                      {org.name}
                    </h3>
                  </div>
                ))
              ))}
            </div>
            
            {/* Extended gradient overlays for complete fade coverage */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      {/* American Energy Solutions Section - Moved from Homepage */}
      <section className="relative py-20 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-slate-100">AMERICAN ENERGY</span>
              <span className="text-gold-500 font-mono ml-4">SOLUTIONS</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Powering American independence across every sector - from family homes to frontier AI research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Residential Solar + Storage */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-slate-800 p-8 hover:animate-glow-strong transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-400/20 border border-green-400 flex items-center justify-center mr-4">
                  <span className="text-green-400 font-mono text-lg">🏠</span>
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-slate-100 tracking-wider">RESIDENTIAL SOLAR</h3>
                  <p className="text-sm text-slate-500 font-mono tracking-widest">HOME ENERGY INDEPENDENCE</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-zinc-800/50 p-4 border border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-slate-300">CASE: CALIFORNIA NEIGHBORHOOD</span>
                    <span className="font-mono text-xs text-green-400 animate-blink-green">ACTIVE</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">
                    150-home solar + battery microgrid with AI optimization. Residents achieve 92% grid independence 
                    while reducing energy costs by 68% annually.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-500">COST REDUCTION:</span>
                      <span className="text-green-400 ml-2">68%</span>
                    </div>
                    <div>
                      <span className="text-slate-500">GRID INDEPENDENCE:</span>
                      <span className="text-gold-500 ml-2">92%</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-mono text-slate-500 tracking-widest">
                    "Our electric bill went from $380 to $95" - Sarah Chen, Palo Alto
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Tech Company Clean Energy */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-slate-800 p-8 hover:animate-glow-strong transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-400/20 border border-blue-400 flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-mono text-lg">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-slate-100 tracking-wider">TECH CAMPUS</h3>
                  <p className="text-sm text-slate-500 font-mono tracking-widest">CARBON-NEUTRAL OPERATIONS</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-zinc-800/50 p-4 border border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-slate-300">CASE: SEATTLE DATA CENTER</span>
                    <span className="font-mono text-xs text-blue-400">OPTIMIZED</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">
                    75MW renewable energy system powers AI training and cloud infrastructure. 
                    Achieved 100% clean energy with 99.97% uptime reliability.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-500">CLEAN ENERGY:</span>
                      <span className="text-blue-400 ml-2">100%</span>
                    </div>
                    <div>
                      <span className="text-slate-500">UPTIME:</span>
                      <span className="text-gold-500 ml-2">99.97%</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-mono text-slate-500 tracking-widest">
                    "Carbon neutral without compromising performance" - DataCore Systems
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Wind Farm Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-slate-800 p-6 hover:animate-glow-strong transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-400/20 border border-amber-400 flex items-center justify-center mr-3">
                  <span className="text-amber-400 font-mono text-sm">💨</span>
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">WIND ENERGY</h3>
                  <p className="text-xs text-slate-500 font-mono tracking-widest">PREDICTIVE OPTIMIZATION</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-zinc-800/50 p-3 border border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs text-slate-300">TEXAS WIND FARM</span>
                    <span className="font-mono text-xs text-amber-400 animate-blink-amber">OPTIMIZING</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">
                    AI-powered wind prediction increases turbine efficiency by 23%. 
                    Powers 85,000 homes with minimal maintenance downtime.
                  </p>
                  <div className="text-xs font-mono">
                    <span className="text-slate-500">EFFICIENCY GAIN:</span>
                    <span className="text-amber-400 ml-2">+23%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Electric Vehicle Charging */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-slate-800 p-6 hover:animate-glow-strong transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-electric-400/20 border border-electric-400 flex items-center justify-center mr-3">
                  <span className="text-electric-400 font-mono text-sm">🔌</span>
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">EV CHARGING</h3>
                  <p className="text-xs text-slate-500 font-mono tracking-widest">SMART GRID INTEGRATION</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-zinc-800/50 p-3 border border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs text-slate-300">URBAN CHARGING NETWORK</span>
                    <span className="font-mono text-xs text-electric-400">ACTIVE</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">
                    Solar-powered fast charging stations with battery storage. 
                    200+ locations serving 15,000 EVs daily across major cities.
                  </p>
                  <div className="text-xs font-mono">
                    <span className="text-slate-500">DAILY CHARGES:</span>
                    <span className="text-electric-400 ml-2">15,000</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Agricultural Solar */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-slate-800 p-6 hover:animate-glow-strong transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-400/20 border border-green-400 flex items-center justify-center mr-3">
                  <span className="text-green-400 font-mono text-sm">🌾</span>
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider">AGRIVOLTAICS</h3>
                  <p className="text-xs text-slate-500 font-mono tracking-widest">DUAL-USE FARMING</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-zinc-800/50 p-3 border border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs text-slate-300">MIDWEST FARM NETWORK</span>
                    <span className="font-mono text-xs text-green-400">GROWING</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">
                    Solar panels + crop production on same land. 
                    Farmers generate 40% more revenue while maintaining crop yields.
                  </p>
                  <div className="text-xs font-mono">
                    <span className="text-slate-500">REVENUE BOOST:</span>
                    <span className="text-green-400 ml-2">+40%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="border border-slate-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-mono font-bold text-slate-100 tracking-wider mb-6">
                CLEAN ENERGY DEPLOYMENT ACROSS AMERICA
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-mono font-bold text-green-400 mb-2">2.4M+</div>
                  <div className="text-xs font-mono text-slate-500 tracking-widest">HOMES POWERED</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-amber-400 mb-2">1,200+</div>
                  <div className="text-xs font-mono text-slate-500 tracking-widest">WIND TURBINES</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-electric-400 mb-2">75,000</div>
                  <div className="text-xs font-mono text-slate-500 tracking-widest">EV CHARGING SESSIONS</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-blue-400 mb-2">350+</div>
                  <div className="text-xs font-mono text-slate-500 tracking-widest">SOLAR INSTALLATIONS</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}