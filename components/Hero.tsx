'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Award, MapPin, Stethoscope, Phone, X, Facebook, Users, Instagram } from 'lucide-react'

export default function Hero() {
  const [isSocialPopupOpen, setIsSocialPopupOpen] = useState(false)

  useEffect(() => {
    if (isSocialPopupOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isSocialPopupOpen])

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

  const phoneNumber = '+251974246764'

  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 3h3.1c.4 2.1 2 3.7 3.9 4V10c-1.9-.1-3.6-.7-5-1.7v7.1c0 3.4-2.7 6.1-6.1 6.1S2.8 18.8 2.8 15.4c0-3.4 2.7-6.1 6.1-6.1.6 0 1.2.1 1.8.2V12c-.5-.3-1.1-.5-1.8-.5-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2V3z" />
    </svg>
  )

  const TelegramIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.9 2.6L2.7 10.2c-1 .4-.9 1.8.1 2.1l4.8 1.5 1.8 5c.3 1 .7 1 1.3.2l3.3-5.2 5.4 4c.8.6 1.9.1 2.1-.9l2.1-13c.2-1-.7-1.8-1.7-1.3z" />
    </svg>
  )

  const socialLinks = [
    {
      name: 'TikTok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@yemedhnat',
      color: 'text-black',
    },
    {
      name: 'Telegram Channel',
      icon: TelegramIcon,
      url: 'https://t.me/yemedhinat',
      color: 'text-blue-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61551855060700',
      color: 'text-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/yemedhnat?igsh=MTdtYzRyNmkxdWs1NA==',
      color: 'text-pink-500',
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-primary-light/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left order-1 lg:order-1 relative z-10 max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-light rounded-full mb-6 sm:mb-8"
            >
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide">
                30+ Years of Excellence
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-primary-dark mb-6 sm:mb-8 leading-snug md:leading-tight tracking-tight"
            >
              Healing with Compassion and Clinical Excellence in Addis Ababa
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 md:mb-12 leading-loose max-w-2xl"
            >
              Experience personalized, evidence-based healthcare where every patient is truly heard and understood
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-primary to-primary-dark text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-2xl hover:from-primary-dark hover:to-primary transition-shadow duration-300 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button
                onClick={() => setIsSocialPopupOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg font-medium rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Users className="w-6 h-6" />
                Follow Our Socials
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base text-primary-dark">Modern Diagnostics</p>
                  <p className="text-xs sm:text-sm text-gray-600">State-of-the-art facilities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base text-primary-dark">Convenient Location</p>
                  <p className="text-xs sm:text-sm text-gray-600">Bole Bulbula, Addis Ababa</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative order-2 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-primary/20 to-accent-teal/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              {/* Main image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/doctor-and-patient.JPG"
                  alt="Doctor and patient consultation at Yemedhnat Clinic - compassionate, personalized healthcare"
                  width={1200}
                  height={800}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                  priority
                />
              </div>

              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-accent-teal/5 rounded-full blur-3xl opacity-50 sm:opacity-100 pointer-events-none" />
      <div className="absolute bottom-20 left-4 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl opacity-50 sm:opacity-100 pointer-events-none" />

      {/* Social Media Popup */}
      <AnimatePresence>
        {isSocialPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSocialPopupOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal content
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="relative p-6 sm:p-8">
                <button
                  onClick={() => setIsSocialPopupOpen(false)}
                  className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 bg-gray-100/0 hover:bg-gray-100 rounded-full transition-all"
                  aria-label="Close popup"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-light rounded-full mb-4 overflow-hidden">
                    <Image src="/logo-transparent.png" alt="Yemedhnat Clinic logo" width={40} height={40} className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 font-serif">
                    Follow For Medical Tips
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Stay updated with our latest news and health advice.</p>
                </div>

                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 w-full p-4 rounded-xl border-2 border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-primary/10 transition-colors duration-300`}>
                          <Icon className={`w-6 h-6 ${social.color} transition-colors duration-300`} />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                          {social.name}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
