'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Button from './Button'

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
            Call us to schedule your appointment or for any questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2.5 sm:p-3 bg-primary-light rounded-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-primary-dark mb-1">Location</h3>
                  <p className="text-sm sm:text-base text-gray-700">Bole Bulbula, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2.5 sm:p-3 bg-primary-light rounded-lg">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-primary-dark mb-1">Phone</h3>
                  <a href={`tel:+251974246764`} className="text-sm sm:text-base text-gray-700 hover:text-primary transition-colors">+251 974 246 764</a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2.5 sm:p-3 bg-primary-light rounded-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-primary-dark mb-1">Email</h3>
                  <p className="text-sm sm:text-base text-gray-700 break-words">info@yemedhnatclinic.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2.5 sm:p-3 bg-primary-light rounded-lg">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-primary-dark mb-1">Hours</h3>
                  <p className="text-sm sm:text-base text-gray-700">Open 24/7</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64">
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
          </motion.div>

          {/* Call CTA instead of form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <Button href={`tel:+251974246764`} variant="primary" size="lg" className="w-full sm:w-auto">
              Call Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
