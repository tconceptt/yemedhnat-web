'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FounderSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-primary/20 to-accent-teal/20 rounded-full blur-2xl" />
                <Image
                  src="/founder-headshot.jpg"
                  alt="Dr. Medhanit Aberra"
                  width={600}
                  height={600}
                  className="relative rounded-full w-full aspect-square object-cover shadow-2xl ring-4 sm:ring-8 ring-primary-light"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="mb-4 sm:mb-6">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary-dark mb-2 sm:mb-3 tracking-tight">
                  Meet Dr. Medhanit Aberra
                </h2>
                <p className="text-base sm:text-lg text-accent-sage font-medium">
                  Founder & Lead Physician
                </p>
              </div>

              <div className="relative">
                {/* Elegant decorative line instead of quote mark */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-light via-primary to-primary-light rounded-full opacity-60" />
                <div className="relative pl-6 sm:pl-8 space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-base sm:text-lg">
                    For me, medicine has always been about more than treating an illness; it&apos;s about caring for the whole person. Over my nearly 30-year career in medicine, I&apos;ve learned that the most critical diagnostic tool is often the simplest: taking the time to truly listen.
                  </p>
                  <p className="text-base sm:text-lg">
                    My patients often tell me they feel heard and understood, and that is the foundation upon which I&apos;ve built my practice. I believe that compassion and deep medical knowledge are not separate, but are partners in the journey to healing.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200"
              >
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-primary">30+</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Years in Medicine</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-primary leading-tight">Internal Medicine</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Specialist</p>
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
