import type { NextApiRequest, NextApiResponse } from 'next'
import twilio from 'twilio'

type ResponseData = {
  message: string
}

const MAX_BODY_LENGTH = 1600

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  const toNumber = process.env.TWILIO_TO_NUMBER
  const fromNumber = process.env.TWILIO_FROM_NUMBER

  if (!accountSid || !authToken || !toNumber || !fromNumber) {
    console.error('Missing Twilio environment variables')
    return res.status(500).json({ message: 'Server configuration error' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  const trimmedName = String(name).trim()
  const trimmedEmail = String(email).trim()
  const trimmedSubject = String(subject).trim()
  const trimmedMessage = String(message).trim()

  let body = [
    `[Portfolio Lead]`,
    `From: ${trimmedName} <${trimmedEmail}>`,
    `Subject: ${trimmedSubject}`,
    '',
    trimmedMessage,
  ].join('\n')

  if (body.length > MAX_BODY_LENGTH) {
    body = body.slice(0, MAX_BODY_LENGTH - 3) + '...'
  }

  try {
    const client = twilio(accountSid, authToken)

    await client.messages.create({
      body,
      from: fromNumber,
      to: toNumber,
    })

    return res.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Twilio send error:', error)
    return res.status(500).json({ message: 'Failed to send message' })
  }
}
