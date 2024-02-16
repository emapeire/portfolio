import type React from 'react'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Head } from '@/components/head'
import './globals.css'

const metadata: Metadata = {
  title: 'Portfolio | Emanuel Peire',
  description: 'My personal portfolio: showcasing my work and skills.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Head metadata={metadata} />
      <body>{children}</body>
    </html>
  )
}
