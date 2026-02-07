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
    <div className="relative min-h-screen overflow-hidden bg-surface-gray flex flex-col items-center justify-center px-4">{/* Clean, minimal Apple design - no decorative elements */}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline - Apple Style */}
        <motion.h1
          className="text-6xl md:text-8xl font-semibold text-foreground leading-tight mb-4 tracking-tight"
          variants={itemVariants}
        >
          AI Solutions
        </motion.h1>

        {/* Subheadline - Apple Style */}
        <motion.p
          className="text-2xl md:text-3xl text-foreground mb-8 leading-snug max-w-3xl mx-auto font-normal"
          variants={itemVariants}
        >
          Intelligente Automation für moderne Unternehmen.
        </motion.p>

        {/* CTA Buttons - Apple Style */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          variants={itemVariants}
        >
          {/* Primary CTA - Apple Blue Pill Button */}
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-normal text-white bg-apple-blue hover:bg-apple-blue-hover rounded-full transition-colors duration-200 min-w-[200px]"
          >
            Weitere Infos
          </a>

          {/* Secondary CTA - Outlined Pill Button */}
          <a
            href="#use-cases"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-normal text-apple-blue border-2 border-apple-blue hover:bg-apple-blue hover:text-white rounded-full transition-colors duration-200 min-w-[200px]"
          >
            Projekte ansehen
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
