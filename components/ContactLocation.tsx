'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'

export default function ContactLocation() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary-dark mb-3 sm:mb-4 px-4 tracking-tight">
            Visit Us Today
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            We welcome walk-in patients. Call ahead if you’d like to book with our specialist.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.05fr_1.2fr] max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-light/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-primary-light/30"
          >
            <h3 className="font-serif text-xl sm:text-2xl text-primary-dark mb-6 sm:mb-8 tracking-tight">
              Clinic Details
            </h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-3 sm:p-3.5 bg-white rounded-xl shadow-inner">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary/80 mb-1">Location</p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Bole Bulbula, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-3 sm:p-3.5 bg-white rounded-xl shadow-inner">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary/80 mb-1">Phone</p>
                  <a
                    href={`tel:+251974246764`}
                    className="text-sm sm:text-base text-gray-700 hover:text-primary transition-colors"
                  >
                    +251 974 246 764
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-3 sm:p-3.5 bg-white rounded-xl shadow-inner">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary/80 mb-1">Email</p>
                  <p className="text-sm sm:text-base text-gray-700 break-words">
                    info@yemedhnatclinic.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-3 sm:p-3.5 bg-white rounded-xl shadow-inner">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary/80 mb-1">Hours</p>
                  <p className="text-sm sm:text-base text-gray-700">Open 24/7</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-primary-light/40">
              <h4 className="font-serif text-lg text-primary-dark mb-2">Plan Your Visit</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Walk-ins are welcome any time. Prefer an appointment? Call ahead to book with our specialist or to get help with directions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6 sm:gap-8"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-primary-light/30 h-[260px] sm:h-[320px] lg:h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4527835629943!2d38.76397631477908!3d9.015785193539773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b6a9c1c8a5%3A0x6f8f1f1f1f1f1f1f!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1234567890123!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl border border-primary-light/40 shadow-lg p-5 sm:p-6 md:p-7">
              <h4 className="font-serif text-lg sm:text-xl text-primary-dark mb-3 sm:mb-4">
                Getting Here
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                We are located in the heart of Bole Bulbula. Use the map to plan your route, and give us a call if you need help with landmarks or directions.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Bole+Bulbula,+Addis+Ababa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Get Directions
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
