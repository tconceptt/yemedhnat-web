'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function FounderSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent-teal/20 rounded-full blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                  alt="Dr. Medhanit Aberra"
                  className="relative rounded-full w-full aspect-square object-cover shadow-2xl ring-8 ring-primary-light"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-3">
                  Meet Dr. Medhanit Aberra
                </h2>
                <p className="text-lg text-accent-sage font-medium">
                  Founder & Lead Physician
                </p>
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-2 w-12 h-12 text-primary/20" />
                <blockquote className="relative pl-8 space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    For me, medicine has always been about more than treating an illness; it&apos;s about caring for the whole person. Over my nearly 30-year career in medicine, I&apos;ve learned that the most critical diagnostic tool is often the simplest: taking the time to truly listen.
                  </p>
                  <p className="text-lg">
                    My patients often tell me they feel heard and understood, and that is the foundation upon which I&apos;ve built my practice. I believe that compassion and deep medical knowledge are not separate, but are partners in the journey to healing.
                  </p>
                </blockquote>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-primary">30+</p>
                    <p className="text-sm text-gray-600 mt-1">Years in Medicine</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">1000s</p>
                    <p className="text-sm text-gray-600 mt-1">Patients Served</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
