import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import type { InsertTables } from '@/lib/supabase'

interface BookingRequest {
  name: string
  email: string
  company: string
  phone: string
  message: string
  preferredTime: string
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log booking request (in production, save to database)
    console.log('New booking request:', {
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone,
      preferredTime: body.preferredTime,
      message: body.message,
      timestamp: new Date().toISOString()
    })

    // TODO: Save to Supabase database
    // const { data, error } = await supabase
    //   .from('bookings')
    //   .insert([{
    //     name: body.name,
    //     email: body.email,
    //     company: body.company,
    //     phone: body.phone,
    //     preferred_time: body.preferredTime,
    //     message: body.message,
    //     created_at: new Date().toISOString()
    //   }])

    // TODO: Send confirmation email
    // await sendBookingConfirmation(body.email, body.name)

    // Return success response
    return NextResponse.json(
      { 
        message: 'Booking request submitted successfully',
        id: Date.now().toString() // Temporary ID until database integration
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle unsupported HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}