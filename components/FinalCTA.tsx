'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Button from './Button'

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Ready to Experience Compassionate, Expert Care?
          </h2>
          <p className="text-xl text-primary-light mb-10 max-w-2xl mx-auto">
            Join hundreds of patients who trust Yemedhnat for their healthcare needs
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent-teal text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:bg-accent-teal/90 transition-all duration-300"
            >
              <Calendar className="w-6 h-6" />
              Book Your Appointment
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-primary-light/80 text-sm"
          >
            New patients welcome • Same-day appointments available
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
