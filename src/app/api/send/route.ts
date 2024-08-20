import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactEmailTemplate } from '@/components/contact/email-template'
import { type ContactEmailTemplateProps } from '@/types'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { firstName, lastName, email, message } =
    (await request.json()) as ContactEmailTemplateProps

  try {
    const { data, error } = await resend.emails.send({
      from: 'Emanuel Peire <resend@emapeire.xyz>',
      to: 'hi@emapeire.xyz',
      subject: 'Message from contact form',
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        message
      })
    })

    if (error) {
      return NextResponse.json({
        status: 500,
        body: { message: 'Error sending email' }
      })
    }

    return NextResponse.json({
      status: 200,
      body: { message: data }
    })
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: { message: error }
    })
  }
}
