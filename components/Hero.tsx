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

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-surface-sky via-surface-lavender to-surface-peach flex flex-col items-center justify-center">
      {/* Decorative shapes (iOS style - sharp, colorful) */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-ios-orange/20 rounded-3xl rotate-12" />
      <div className="absolute bottom-32 left-10 w-40 h-40 bg-ios-mint/20 rounded-full" />
      <div className="absolute top-1/3 left-20 w-24 h-24 bg-ios-pink/20 rounded-2xl -rotate-12" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
          variants={itemVariants}
        >
          Intelligente Automation.{' '}
          <span className="text-ios-blue">
            Messbare Ergebnisse.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-neutral-700 mb-10 leading-relaxed max-w-2xl mx-auto"
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
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-ios-blue rounded-2xl transition-all duration-300 hover:bg-ios-indigo hover:shadow-xl hover:shadow-ios-blue/30 hover:scale-105"
          >
            Kostenlose Beratung buchen
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#use-cases"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-white/60 backdrop-blur-md rounded-2xl transition-all duration-300 hover:bg-white/80 hover:scale-105"
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
