'use client'

import { motion } from 'framer-motion'
import { Calendar, Award, MapPin, Stethoscope, ArrowRight } from 'lucide-react'
import Button from './Button'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-primary-light/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">
                30+ Years of Excellence
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-dark mb-6 leading-tight"
            >
              Comprehensive Internal Medicine Care Built on Compassionate Expertise
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed tracking-wide"
            >
              Experience personalized, evidence-based healthcare where every patient is truly heard and understood
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button variant="primary" size="lg" icon={ArrowRight}>
                Schedule Appointment
              </Button>
              <Button variant="outline" size="lg">
                Our Services
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary-dark">Modern Diagnostics</p>
                  <p className="text-sm text-gray-600">State-of-the-art facilities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary-dark">Convenient Location</p>
                  <p className="text-sm text-gray-600">Bole Bulbula, Addis Ababa</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent-teal/20 rounded-3xl blur-2xl opacity-70" />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
                  alt="Compassionate healthcare at Yemedhnat Clinic"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-dark">1000+</p>
                    <p className="text-sm text-gray-600">Patients Served</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  )
}
