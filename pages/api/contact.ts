import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  // Log the form submission (in a real application, you would send an email or save to a database)
  console.log('Contact form submission:', {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  })

  // Here you would typically:
  // 1. Send an email using a service like SendGrid, Mailgun, or Resend
  // 2. Save to a database
  // 3. Send to a CRM
  // For now, we'll just return success

  return res.status(200).json({ message: 'Message sent successfully' })
}
