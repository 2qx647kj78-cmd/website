'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const chevronVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    bounce: {
      y: [0, 8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const blobVariants = (duration: number, delay: number) => ({
    animate: {
      x: [0, 50, 0],
      y: [0, 30, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  })

  return (
    <div className="relative min-h-screen overflow-hidden bg-white flex flex-col items-center justify-center">
      {/* Animated gradient background blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        variants={blobVariants(8, 0)}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        variants={blobVariants(10, 2)}
        animate="animate"
      />
      <motion.div
        className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        variants={blobVariants(12, 4)}
        animate="animate"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6"
          variants={itemVariants}
        >
          Intelligente Automation.{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Messbare Ergebnisse.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Wir entwickeln KI-gestützte Workflows und digitale Lösungen, die Ihr Unternehmen voranbringen.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          variants={itemVariants}
        >
          {/* Primary CTA */}
          <a
            href="#kontakt"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            }}
          >
            Kostenlose Beratung buchen
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#use-cases"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-gray-900 rounded-lg transition-all duration-300 hover:text-blue-600"
          >
            Unsere Projekte ansehen
            <ArrowRight className="w-4 h-4 transition-transform duration-300 hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        variants={chevronVariants}
        initial="hidden"
        animate={['visible', 'bounce']}
      >
        <button
          onClick={() => {
            const element = document.getElementById('leistungen')
            element?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
        </button>
      </motion.div>
    </div>
  )
}
