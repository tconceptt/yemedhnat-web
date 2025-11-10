'use client'

import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13 3h3.1c.4 2.1 2 3.7 3.9 4V10c-1.9-.1-3.6-.7-5-1.7v7.1c0 3.4-2.7 6.1-6.1 6.1S2.8 18.8 2.8 15.4c0-3.4 2.7-6.1 6.1-6.1.6 0 1.2.1 1.8.2V12c-.5-.3-1.1-.5-1.8-.5-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2V3z" />
  </svg>
)

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.9 2.6L2.7 10.2c-1 .4-.9 1.8.1 2.1l4.8 1.5 1.8 5c.3 1 .7 1 1.3.2l3.3-5.2 5.4 4c.8.6 1.9.1 2.1-.9l2.1-13c.2-1-.7-1.8-1.7-1.3z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <Image src="/logo-transparent.png" alt="Yemedhnat Clinic logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight">Yemedhnat Clinic</h3>
            </div>
            <p className="text-sm sm:text-base text-primary-light/80 leading-relaxed mb-3 sm:mb-4">
              Comprehensive internal medicine care built on 30 years of compassionate expertise. Proudly serving Addis Ababa since 2022.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61551855060700"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@yemedhnat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://t.me/yemedhinat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/yemedhnat?igsh=MTdtYzRyNmkxdWs1NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#services" className="text-sm sm:text-base text-primary-light/80 hover:text-accent-teal transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm sm:text-base text-primary-light/80 hover:text-accent-teal transition-colors">
                  About Dr. Medhanit
                </a>
              </li>
              <li>
                <a href="tel:+251974246764" className="text-sm sm:text-base text-primary-light/80 hover:text-accent-teal transition-colors">
                  Call Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Information</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-teal flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-primary-light/80">
                  Bole Bulbula<br />Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent-teal flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary-light/80">+251 974 246 764</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-teal flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary-light/80 break-words">info@yemedhnatclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-primary-light/60 text-xs sm:text-sm px-4">
          <p>© {new Date().getFullYear()} Yemedhnat Internal Medicine Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
