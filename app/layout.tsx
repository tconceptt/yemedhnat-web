import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yemedhnat Internal Medicine Clinic | Expert Care in Addis Ababa',
  description: 'Comprehensive internal medicine care built on 30 years of compassionate expertise. Modern diagnostics, personalized treatment plans, and lasting patient relationships in Bole Bulbula, Addis Ababa.',
  keywords: ['internal medicine', 'clinic', 'Addis Ababa', 'healthcare', 'Dr. Medhanit Aberra', 'chronic disease', 'preventive care'],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
