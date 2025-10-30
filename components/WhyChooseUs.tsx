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
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-sage/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Yemedhnat?
          </h2>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Experience the difference that compassionate, expert care makes
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="mb-6 inline-flex p-5 bg-white/10 backdrop-blur-sm rounded-2xl group-hover:bg-accent-teal transition-colors duration-300"
              >
                <highlight.icon className="w-10 h-10 text-accent-teal group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {highlight.title}
              </h3>
              <p className="text-primary-light/80 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
