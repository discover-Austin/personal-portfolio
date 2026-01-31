import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// In-memory rate limiting store
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

// Rate limit configuration
const RATE_LIMIT_MAX_REQUESTS = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes

// Helper function to get client IP
function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp
  }
  return 'unknown'
}

// Helper function to check rate limit
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetAt) {
    // Reset or create new record
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateField(value: string, minLength: number, maxLength: number): boolean {
  return value.length >= minLength && value.length <= maxLength
}

// Helper function to sanitize email headers to prevent injection
function sanitizeEmailHeader(value: string): string {
  // Remove all control characters including newlines, carriage returns, null bytes
  return value.replace(/[\r\n\x00]/g, '').trim()
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, subject, message, company } = body

    // Honeypot check - if company field is filled, silently drop the request
    if (company && company.trim() !== '') {
      return NextResponse.json({ ok: true })
    }

    // Validate required fields exist
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: 'validation' },
        { status: 400 }
      )
    }

    // Validate field lengths and format
    if (!validateField(name, 2, 80)) {
      return NextResponse.json(
        { ok: false, error: 'validation' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { ok: false, error: 'validation' },
        { status: 400 }
      )
    }

    if (!validateField(subject, 2, 120)) {
      return NextResponse.json(
        { ok: false, error: 'validation' },
        { status: 400 }
      )
    }

    if (!validateField(message, 10, 5000)) {
      return NextResponse.json(
        { ok: false, error: 'validation' },
        { status: 400 }
      )
    }

    // Get client IP and check rate limit
    const clientIp = getClientIp(request)
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { ok: false, error: 'rate_limited' },
        { status: 429 }
      )
    }

    // Get environment variables
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL
    const resendApiKey = process.env.RESEND_API_KEY

    if (!toEmail || !fromEmail || !resendApiKey) {
      console.error('Missing required environment variables: CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, or RESEND_API_KEY')
      return NextResponse.json(
        { ok: false, error: 'server_error' },
        { status: 500 }
      )
    }

    // Initialize Resend with API key
    const resend = new Resend(resendApiKey)

    // Prepare email data
    const timestamp = new Date().toISOString()
    const userAgent = request.headers.get('user-agent') || 'unknown'

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Timestamp: ${timestamp}
IP: ${clientIp}
User Agent: ${userAgent}
`

    // Send email via Resend
    try {
      // Sanitize subject to prevent email header injection
      const sanitizedSubject = sanitizeEmailHeader(subject)

      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `[Portfolio Lead] ${sanitizedSubject}`,
        text: emailText,
      })

      return NextResponse.json({ ok: true })
    } catch (emailError) {
      console.error('Failed to send email:', emailError)
      return NextResponse.json(
        { ok: false, error: 'server_error' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { ok: false, error: 'server_error' },
      { status: 500 }
    )
  }
}
