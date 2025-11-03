'use client'

import { motion } from 'framer-motion'
import { Award, Microscope, Ear, HeartHandshake } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: '30+ Years Expertise',
    description: 'Decades of experience in internal medicine and patient care',
  },
  {
    icon: Microscope,
    title: 'Modern Technology',
    description: 'State-of-the-art on-site diagnostic and treatment facilities',
  },
  {
    icon: Ear,
    title: 'Patient-Centered Listening',
    description: 'We take the time to truly hear and understand your concerns',
  },
  {
    icon: HeartHandshake,
    title: 'Comprehensive Approach',
    description: 'Treating the whole person, not just symptoms',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-primary-dark via-primary-dark to-primary text-white relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-5 px-4 tracking-tight text-white">
            Why Choose Yemedhnat?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto px-4 leading-relaxed font-light">
            Experience the difference that compassionate, expert care makes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="text-center group"
            >
              {/* Icon container with enhanced styling */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="mb-6 sm:mb-8 inline-flex items-center justify-center"
              >
                <div className="relative">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:bg-white/15 transition-all duration-300" />
                  
                  {/* Icon container */}
                  <div className="relative bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-5 sm:p-6 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <highlight.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white transition-all duration-300" />
                  </div>
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-medium mb-3 sm:mb-4 tracking-tight text-white">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-white font-normal leading-relaxed px-2 max-w-sm mx-auto">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
