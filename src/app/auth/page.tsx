'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuth } from '@/components/AuthProvider'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    company: '',
    role: 'customer' as const
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null)

  const { signIn, signUp } = useAuth()
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      if (isLogin) {
        const { error } = await signIn(formData.email, formData.password)
        if (error) {
          setMessage({ type: 'error', text: error.message })
        } else {
          router.push('/dashboard')
        }
      } else {
        const { error } = await signUp(formData.email, formData.password, {
          full_name: formData.full_name,
          company: formData.company,
          role: formData.role
        })
        if (error) {
          setMessage({ type: 'error', text: error.message })
        } else {
          setMessage({ type: 'success', text: 'Check your email to confirm your account' })
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 border border-slate-800 p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-navy-600 border border-gold-500 mx-auto mb-4" />
            <h1 className="text-2xl font-mono font-bold text-slate-100 tracking-wider mb-2">
              VELOCITY SYSTEMS
            </h1>
            <p className="text-sm font-mono text-slate-400 tracking-widest">
              {isLogin ? 'SECURE ACCESS' : 'AUTHORIZATION REQUEST'}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex border border-slate-700 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 font-mono text-sm tracking-wider transition-all duration-300 ${
                isLogin 
                  ? 'bg-navy-600 text-slate-100' 
                  : 'bg-zinc-800 text-slate-400 hover:text-slate-300'
              }`}
            >
              SIGN IN
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 font-mono text-sm tracking-wider transition-all duration-300 ${
                !isLogin 
                  ? 'bg-navy-600 text-slate-100' 
                  : 'bg-zinc-800 text-slate-400 hover:text-slate-300'
              }`}
            >
              REGISTER
            </button>
          </div>

          {/* Message */}
          {message && (
            <div className={`mb-6 p-4 border font-mono text-sm ${
              message.type === 'error' 
                ? 'border-red-500 bg-red-500/10 text-red-400' 
                : 'border-green-500 bg-green-500/10 text-green-400'
            }`}>
              {message.text}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                    placeholder="FULL NAME"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                    placeholder="COMPANY NAME"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                    ROLE
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 text-slate-100 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                  >
                    <option value="customer">CUSTOMER</option>
                    <option value="operator">OPERATOR</option>
                    <option value="admin">ADMINISTRATOR</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                placeholder="EMAIL@COMPANY.COM"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-slate-400 mb-2 uppercase">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-navy-500 focus:outline-none transition-all duration-300 font-mono"
                placeholder="PASSWORD"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-navy-600 text-slate-100 px-8 py-4 font-mono font-bold tracking-wider hover:bg-navy-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-slate-300 border-t-transparent rounded-full mx-auto animate-spin" />
              ) : (
                isLogin ? 'ACCESS SYSTEM' : 'REQUEST ACCESS'
              )}
            </motion.button>
          </form>

          {isLogin && (
            <div className="mt-6 text-center">
              <button
                onClick={() => {/* TODO: Implement forgot password */}}
                className="text-sm font-mono text-slate-400 hover:text-slate-300 tracking-wider"
              >
                FORGOT PASSWORD?
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}