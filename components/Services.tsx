'use client'

import { motion } from 'framer-motion'
import { Shield, Stethoscope, FlaskConical, Thermometer, HeartPulse, ClipboardList } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Preventive Care & Wellness',
    description: 'Comprehensive health screenings, vaccinations, and lifestyle counseling to keep you healthy.',
  },
  {
    icon: Stethoscope,
    title: 'Chronic Disease Management',
    description: 'Expert ongoing care for diabetes, hypertension, heart disease, and other chronic conditions.',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic Services',
    description: 'On-site laboratory and imaging services for quick, accurate diagnoses.',
  },
  {
    icon: Thermometer,
    title: 'Acute Care',
    description: 'Prompt treatment for sudden illnesses, infections, and urgent medical concerns.',
  },
  {
    icon: HeartPulse,
    title: 'Geriatric Medicine',
    description: 'Specialized care tailored to the unique needs of older adults.',
  },
  {
    icon: ClipboardList,
    title: 'Personalized Treatment Plans',
    description: 'Individualized care strategies designed specifically for your health goals.',
  },
]

export default function Services() {
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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary-dark mb-3 sm:mb-4 tracking-tight">
            Comprehensive Services
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Full-spectrum internal medicine care under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-primary-light to-white border border-primary/10 rounded-xl p-5 sm:p-6 hover:shadow-xl transition-all duration-300 h-full">
                <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 bg-white rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-primary-dark mb-2 sm:mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
