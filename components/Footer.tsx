'use client'

import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Yemedhnat Clinic</h3>
            <p className="text-primary-light/80 leading-relaxed mb-4">
              Comprehensive internal medicine care built on 30 years of compassionate expertise. Proudly serving Addis Ababa since 2022.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-teal transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-light/80 hover:text-accent-teal transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-light/80 hover:text-accent-teal transition-colors">
                  About Dr. Medhanit
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-light/80 hover:text-accent-teal transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-light/80 hover:text-accent-teal transition-colors">
                  Patient Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-light/80 hover:text-accent-teal transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-teal flex-shrink-0 mt-1" />
                <span className="text-primary-light/80">
                  Bole Bulbula<br />Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-teal flex-shrink-0" />
                <span className="text-primary-light/80">+251 11 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-teal flex-shrink-0" />
                <span className="text-primary-light/80">info@yemedhnatclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-primary-light/60 text-sm">
          <p>© {new Date().getFullYear()} Yemedhnat Internal Medicine Clinic. All rights reserved.</p>
          <p className="mt-2">Proudly serving Addis Ababa since 2022</p>
        </div>
      </div>
    </footer>
  )
}
