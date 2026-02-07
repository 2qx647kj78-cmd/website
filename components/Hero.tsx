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
    <div className="relative min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center px-4">{/* Warm, inviting Anthropic design */}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline - Anthropic Style with Serif */}
        <motion.h1
          className="text-6xl md:text-8xl font-serif font-normal text-foreground leading-tight mb-6 tracking-tight"
          variants={itemVariants}
        >
          AI Solutions
        </motion.h1>

        {/* Subheadline - Anthropic Style */}
        <motion.p
          className="text-xl md:text-2xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto font-normal"
          variants={itemVariants}
        >
          Intelligente Automation und KI-Lösungen, die Ihr Unternehmen voranbringen.
        </motion.p>

        {/* CTA Buttons - Anthropic Style */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          variants={itemVariants}
        >
          {/* Primary CTA - Anthropic Orange Button */}
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-anthropic-orange hover:bg-anthropic-orange-hover rounded-xl transition-all duration-200 shadow-lg shadow-anthropic-orange/20 hover:shadow-xl hover:shadow-anthropic-orange/30"
          >
            Kostenlose Beratung
          </a>

          {/* Secondary CTA - Outlined Button */}
          <a
            href="#use-cases"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground border-2 border-neutral-300 hover:border-foreground rounded-xl transition-all duration-200"
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
