import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' })

const siteUrl = 'https://yemedhnatclinic.com'
const siteName = 'Yemedhnat Internal Medicine Clinic'
const siteDescription =
  'Comprehensive internal medicine care built on 30 years of compassionate expertise. Modern diagnostics, personalized treatment plans, and lasting patient relationships in Bole Bulbula, Addis Ababa.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yemedhnat Internal Medicine Clinic | Expert Care in Addis Ababa',
    template: '%s | Yemedhnat Internal Medicine Clinic',
  },
  description: siteDescription,
  keywords: ['internal medicine', 'clinic', 'Addis Ababa', 'healthcare', 'Dr. Medhanit Aberra', 'chronic disease', 'preventive care'],
  category: 'Healthcare',
  authors: [{ name: 'Dr. Medhanit Aberra' }],
  creator: 'Yemedhnat Internal Medicine Clinic',
  publisher: 'Yemedhnat Internal Medicine Clinic',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Yemedhnat Internal Medicine Clinic | Expert Care in Addis Ababa',
    description: siteDescription,
    siteName,
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/yemedhnat-team.JPG`,
        width: 1200,
        height: 800,
        alt: 'Yemedhnat Clinic medical team welcoming patients in Addis Ababa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yemedhnat Internal Medicine Clinic | Expert Care in Addis Ababa',
    description: siteDescription,
    images: [`${siteUrl}/yemedhnat-team.JPG`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F3D3E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
