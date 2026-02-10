'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

interface WaitlistForm {
  name: string
  email: string
  phone: string
  company: string
  role: string
  projectDetails: string
  budget: string
  urgency: string
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState<WaitlistForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    projectDetails: '',
    budget: '',
    urgency: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      console.log('Waitlist submission:', formData)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phone: '', company: '', role: '', projectDetails: '', budget: '', urgency: '' })
        onClose()
      }, 3000)
      
    } catch (error) {
      console.error('Waitlist error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitted) {
      onClose()
      setFormData({ name: '', email: '', phone: '', company: '', role: '', projectDetails: '', budget: '', urgency: '' })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-zinc-950 border border-slate-800 max-w-lg w-full max-h-[90vh] overflow-y-auto font-sans relative"
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Header */}
              <div className="border-b border-slate-800 p-6 bg-zinc-900/50">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-mono font-bold text-slate-100 tracking-wider">
                      ENGAGE
                    </h2>
                    <p className="text-xs text-slate-500 font-mono tracking-widest mt-1">
                      PRIORITY ACCESS & CONSULTATION
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-slate-400 hover:text-slate-100 transition-colors"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(255,229,165,0.3)',
                        '0 0 30px rgba(255,229,165,0.5)',
                        '0 0 20px rgba(255,229,165,0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-navy-600 border-2 border-gold-500 mx-auto mb-4 flex items-center justify-center"
                  >
                    <div className="w-8 h-8 border border-gold-500" />
                  </motion.div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Connect with Velocity Systems for priority access and consultation on <span className="text-gold-500">gold standard</span> energy infrastructure solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                      placeholder="FULL NAME"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                      placeholder="EMAIL@COMPANY.COM"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                      placeholder="+1 (555) 000-0000"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                      COMPANY/ORGANIZATION
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                      placeholder="ORGANIZATION NAME"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                    ROLE
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-slate-700 text-slate-100 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                  >
                    <option value="">SELECT ROLE</option>
                    <option value="cto">CTO / TECHNICAL EXECUTIVE</option>
                    <option value="ceo">CEO / BUSINESS EXECUTIVE</option>
                    <option value="operations">OPERATIONS DIRECTOR</option>
                    <option value="facilities">FACILITIES MANAGER</option>
                    <option value="engineer">INFRASTRUCTURE ENGINEER</option>
                    <option value="procurement">PROCUREMENT SPECIALIST</option>
                    <option value="other">OTHER</option>
                  </select>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                    PROJECT DETAILS
                  </label>
                  <textarea
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono resize-none"
                    placeholder="DESCRIBE YOUR ENERGY INFRASTRUCTURE REQUIREMENTS..."
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                      BUDGET RANGE
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-slate-700 text-slate-100 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                    >
                      <option value="">SELECT BUDGET</option>
                      <option value="under-100k">UNDER $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="over-5m">OVER $5M</option>
                      <option value="confidential">CONFIDENTIAL</option>
                    </select>
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                      HOW URGENT
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-slate-700 text-slate-100 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                    >
                      <option value="">SELECT URGENCY</option>
                      <option value="asap">IMMEDIATE / ASAP</option>
                      <option value="1-month">WITHIN 1 MONTH</option>
                      <option value="3-months">WITHIN 3 MONTHS</option>
                      <option value="6-months">WITHIN 6 MONTHS</option>
                      <option value="planning">PLANNING PHASE</option>
                      <option value="research">RESEARCH ONLY</option>
                    </select>
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-navy-600 text-slate-100 px-8 py-4 font-mono font-bold tracking-wider hover:bg-navy-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 mt-8"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-slate-300 border-t-transparent rounded-full mx-auto"
                    />
                  ) : (
                    'SUBMIT REQUEST'
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950"
            >
              <div className="text-center p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                  className="w-20 h-20 bg-operational-green/20 border-2 border-operational-green mx-auto mb-6 flex items-center justify-center"
                >
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="w-10 h-10 text-operational-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-2xl font-mono font-bold text-slate-100 tracking-wider mb-4"
                >
                  REQUEST RECEIVED
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-slate-400 font-mono text-sm tracking-wider"
                >
                  PRIORITY CONSULTATION SCHEDULED
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-slate-500 text-xs mt-4"
                >
                  Our team will contact you within 24 hours
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}