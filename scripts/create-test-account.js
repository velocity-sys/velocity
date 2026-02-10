#!/usr/bin/env node

// Simple script to create a test account
// This can be run with: node scripts/create-test-account.js

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables')
  console.log('Please ensure .env.local contains:')
  console.log('NEXT_PUBLIC_SUPABASE_URL=your_supabase_url')
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function createTestAccount() {
  console.log('🚀 Creating test account...')
  
  const testEmail = 'test@v.com'
  const testPassword = '123'
  
  try {
    // Attempt to sign up the test user
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        data: {
          full_name: 'Test User',
          company: 'Velocity Test Corp',
          role: 'admin'
        }
      }
    })

    if (error) {
      if (error.message.includes('already registered')) {
        console.log('✅ Test account already exists!')
        console.log(`📧 Email: ${testEmail}`)
        console.log(`🔑 Password: ${testPassword}`)
        console.log('🔗 Go to: http://localhost:3000/auth to login')
        console.log('🔗 Dashboard: http://localhost:3000/dashboard')
      } else {
        console.error('❌ Error creating account:', error.message)
      }
    } else {
      console.log('✅ Test account created successfully!')
      console.log(`📧 Email: ${testEmail}`)
      console.log(`🔑 Password: ${testPassword}`)
      console.log('📨 Check email for confirmation link (if email confirmation is enabled)')
      console.log('🔗 Go to: http://localhost:3000/auth to login')
      console.log('🔗 Dashboard: http://localhost:3000/dashboard')
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err.message)
  }
}

createTestAccount()