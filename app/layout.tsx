import type { Metadata } from 'next'
import './globals.css'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Yemedhnat Internal Medicine Clinic | Expert Care in Addis Ababa',
  description: 'Comprehensive internal medicine care built on 30 years of compassionate expertise. Modern diagnostics, personalized treatment plans, and lasting patient relationships in Bole Bulbula, Addis Ababa.',
  keywords: ['internal medicine', 'clinic', 'Addis Ababa', 'healthcare', 'Dr. Medhanit Aberra', 'chronic disease', 'preventive care'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${sourceSans.className} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
