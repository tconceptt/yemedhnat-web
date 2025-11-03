'use client'

import { motion } from 'framer-motion'
import { Users, Smile } from 'lucide-react'
import Image from 'next/image'

export default function TeamSection() {
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
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-primary/20 to-accent-teal/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-70" />
                
                {/* Main image */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-primary-light/20">
                  <Image
                    src="/yemedhnat-team.JPG"
                    alt="Yemedhnat Clinic team of medical experts"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full mb-4 sm:mb-6">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-xs sm:text-sm font-medium text-primary tracking-wide">
                    Our Expert Team
                  </span>
                </div>
                
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary-dark mb-3 sm:mb-4 tracking-tight">
                  Caring Experts, Warm Smiles
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  At Yemedhnat Clinic, exceptional medical care comes with a human touch. Our dedicated team of experts, led by Dr. Medhanit Aberra, is committed to delivering the highest quality healthcare with compassion, expertise, and yes—genuine smiles on our faces.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We believe that healing begins with a warm welcome and a caring attitude. Every member of our team is carefully selected not just for their medical expertise, but for their genuine commitment to patient comfort and well-being.
                </p>

                <div className="flex items-start gap-3 pt-2">
                  <div className="flex-shrink-0 mt-1">
                    <Smile className="w-6 h-6 sm:w-7 sm:h-7 text-accent-teal" />
                  </div>
                  <p className="text-base sm:text-lg text-primary-dark font-medium italic">
                    Because quality healthcare should always be delivered with kindness and a smile.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

