'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Newsroom() {
  const newsArticles = [
    {
      id: 1,
      category: 'PRESS RELEASE',
      title: 'Velocity Systems Secures $150M Series B to Accelerate American Energy Independence',
      excerpt: 'Strategic funding round led by Andreessen Horowitz and Sequoia Capital will expand renewable infrastructure deployment across critical US sectors.',
      date: '2024-09-25',
      readTime: '3 min read',
      featured: true
    },
    {
      id: 2,
      category: 'PARTNERSHIP',
      title: 'Strategic Alliance with US Department of Energy Advances Grid Modernization',
      excerpt: 'Multi-year collaboration will deploy AI-powered grid optimization technology across federal facilities and critical infrastructure.',
      date: '2024-09-20',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 3,
      category: 'TECHNOLOGY',
      title: 'Breakthrough: 0.3-Second Grid Response Time Achieved in ERCOT Deployment',
      excerpt: 'Revolutionary autonomous response system demonstrates unprecedented speed in energy infrastructure optimization.',
      date: '2024-09-18',
      readTime: '4 min read',
      featured: true
    },
    {
      id: 4,
      category: 'SECURITY',
      title: 'Palantir Integration Enhances Energy Infrastructure Threat Detection',
      excerpt: 'Advanced analytics platform provides real-time cybersecurity monitoring for critical energy systems.',
      date: '2024-09-15',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      category: 'EXPANSION',
      title: 'Texas Solar Array Deployment Exceeds 2.5GW Capacity Milestone',
      excerpt: 'Largest distributed solar installation in state history now powers over 400,000 American homes.',
      date: '2024-09-12',
      readTime: '3 min read',
      featured: false
    },
    {
      id: 6,
      category: 'DEFENSE',
      title: 'Anduril Partnership Brings Military-Grade Security to Energy Grid',
      excerpt: 'Joint defense technology initiative protects critical infrastructure from emerging cyber threats.',
      date: '2024-09-10',
      readTime: '7 min read',
      featured: false
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'PRESS RELEASE': return 'text-electric-400 border-electric-400 bg-electric-400/10'
      case 'PARTNERSHIP': return 'text-blue-400 border-blue-400 bg-blue-400/10'
      case 'TECHNOLOGY': return 'text-gold-500 border-gold-500 bg-gold-500/10'
      case 'SECURITY': return 'text-red-400 border-red-400 bg-red-400/10'
      case 'EXPANSION': return 'text-green-400 border-green-400 bg-green-400/10'
      case 'DEFENSE': return 'text-amber-400 border-amber-400 bg-amber-400/10'
      default: return 'text-slate-400 border-slate-400 bg-slate-400/10'
    }
  }

  const featuredArticles = newsArticles.filter(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured)

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
              <span className="text-slate-100">NEWS</span>
              <span className="text-gold-500 font-mono ml-4">ROOM</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Latest developments in American energy infrastructure and national security
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="relative py-16 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-mono font-bold text-slate-100 tracking-wider mb-4">
              FEATURED STORIES
            </h2>
            <div className="w-16 h-1 bg-gold-500"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="bg-zinc-900 border border-slate-800 p-8 hover:animate-glow-strong transition-all duration-500 cursor-pointer"
              >
                <div className="mb-4">
                  <span className={`px-3 py-1 text-xs font-mono font-bold tracking-wider border ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-mono font-bold text-slate-100 tracking-wider mb-4 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 tracking-widest">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-mono font-bold text-slate-100 tracking-wider mb-4">
              ALL COVERAGE
            </h2>
            <div className="w-16 h-1 bg-gold-500"></div>
          </motion.div>

          <div className="space-y-6">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-slate-800 bg-zinc-900/50 p-6 hover:bg-zinc-900 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`px-2 py-1 text-xs font-mono font-bold tracking-wider border ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500 tracking-widest">
                        {article.date}
                      </span>
                      <span className="text-xs font-mono text-slate-500 tracking-widest">
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-mono font-bold text-slate-100 tracking-wider mb-3">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="border border-slate-700 text-slate-300 px-4 py-2 font-mono text-xs tracking-wider hover:border-electric-500 hover:text-electric-400 transition-all duration-300">
                      READ MORE
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="relative py-16 border-t border-slate-800/50 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-mono font-bold text-slate-100 tracking-wider mb-6">
              PRESS INQUIRIES
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              For media requests, strategic partnership announcements, and security-cleared briefings
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="border border-slate-800 bg-zinc-900/50 p-6">
                <div className="text-electric-400 font-mono text-lg mb-3">📧</div>
                <h3 className="font-mono font-bold text-slate-100 tracking-wider mb-2">MEDIA RELATIONS</h3>
                <p className="text-xs font-mono text-slate-500 tracking-widest">press@velocitysystems.com</p>
              </div>
              
              <div className="border border-slate-800 bg-zinc-900/50 p-6">
                <div className="text-gold-500 font-mono text-lg mb-3">🤝</div>
                <h3 className="font-mono font-bold text-slate-100 tracking-wider mb-2">PARTNERSHIPS</h3>
                <p className="text-xs font-mono text-slate-500 tracking-widest">partners@velocitysystems.com</p>
              </div>
              
              <div className="border border-slate-800 bg-zinc-900/50 p-6">
                <div className="text-red-400 font-mono text-lg mb-3">🔒</div>
                <h3 className="font-mono font-bold text-slate-100 tracking-wider mb-2">SECURITY BRIEFINGS</h3>
                <p className="text-xs font-mono text-slate-500 tracking-widest">security@velocitysystems.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}