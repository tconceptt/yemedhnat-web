import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-sans">{children}</body>
    </html>
  )
}
