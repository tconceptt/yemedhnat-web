'use client'

import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl sm:text-2xl font-medium mb-3 sm:mb-4 tracking-tight">Yemedhnat Clinic</h3>
            <p className="text-sm sm:text-base text-primary-light/80 leading-relaxed mb-3 sm:mb-4">
              Comprehensive internal medicine care built on 30 years of compassionate expertise. Proudly serving Addis Ababa since 2022.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
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
                <a href="#contact" className="text-sm sm:text-base text-primary-light/80 hover:text-accent-teal transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-primary-light/80 hover:text-accent-teal transition-colors">
                  Patient Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-primary-light/80 hover:text-accent-teal transition-colors">
                  Privacy Policy
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
                <span className="text-sm sm:text-base text-primary-light/80">+251 11 XXX XXXX</span>
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
          <p className="mt-1 sm:mt-2">Proudly serving Addis Ababa since 2022</p>
        </div>
      </div>
    </footer>
  )
}
