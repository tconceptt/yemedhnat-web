'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import Button from './Button'

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 border border-white rounded-full" />
        <div className="absolute bottom-10 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-4 sm:mb-6 px-4 tracking-tight">
            Ready to Experience Compassionate, Expert Care?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-light mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Join hundreds of patients who trust Yemedhnat for their healthcare needs
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <motion.a
              href={`tel:+251974246764`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-br from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white text-base sm:text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              Call Us Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-8 text-primary-light/80 text-xs sm:text-sm px-4"
          >
            New patients welcome • Same-day appointments available
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
