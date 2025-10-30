'use client'

import { motion } from 'framer-motion'
import { Heart, Activity, Users } from 'lucide-react'

const approaches = [
  {
    icon: Heart,
    title: 'Comprehensive Care',
    description: 'From prevention to chronic disease management, we cover the full spectrum of internal medicine including diabetes, hypertension, and heart disease.',
  },
  {
    icon: Activity,
    title: 'Modern Diagnostics',
    description: 'State-of-the-art on-site diagnostic tools ensure accurate, timely results without the need for multiple facility visits.',
  },
  {
    icon: Users,
    title: 'Lasting Relationships',
    description: 'We build evidence-based, compassionate care partnerships with our patients that span years, not just appointments.',
  },
]

export default function OurApproach() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-primary-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Our Approach to Care
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Every patient deserves comprehensive, personalized healthcare delivered with compassion and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full">
                <div className="mb-6 inline-flex p-4 bg-primary-light rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <approach.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-4">
                  {approach.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
