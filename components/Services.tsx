'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Network, Code, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCard {
  icon: React.ReactNode;
  headline: string;
  description: string;
  features: string[];
  color: string;
}

const services: ServiceCard[] = [
  {
    icon: <Network className="w-8 h-8" />,
    headline: 'AI-Workflows',
    description:
      'Automatisieren Sie repetitive Prozesse mit n8n, Make und Custom AI-Integration. Sparen Sie Zeit und reduzieren Sie Fehler.',
    features: ['n8n Automation', 'Make Integration', 'Custom APIs', 'Zapier Alternative'],
    color: 'bg-ios-orange',
  },
  {
    icon: <Code className="w-8 h-8" />,
    headline: 'Web-Entwicklung',
    description:
      'Moderne Websites und Web-Apps mit React, Next.js und AI-Features. Schnell, sicher und skalierbar.',
    features: ['Next.js Apps', 'React Development', 'Responsive Design', 'SEO-optimiert'],
    color: 'bg-ios-blue',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    headline: 'AI-Integration',
    description:
      'ChatGPT, Claude & Custom AI-Modelle nahtlos in Ihre bestehenden Systeme integriert.',
    features: ['ChatGPT API', 'Claude Integration', 'Custom Models', 'RAG Systeme'],
    color: 'bg-ios-purple',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leistungen" className="py-24 md:py-32 bg-surface-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Maßgeschneiderte Lösungen für jede Herausforderung
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                'relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg shadow-black/5 p-8',
                'hover:shadow-xl hover:shadow-black/10 hover:-translate-y-2',
                'transition-all duration-300 ease-out',
                'border border-neutral-100'
              )}
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div
                  className={cn(
                    'w-16 h-16 rounded-2xl',
                    service.color,
                    'flex items-center justify-center',
                    'text-white shadow-lg shadow-black/10'
                  )}
                >
                  {service.icon}
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.headline}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3"
                  >
                    <div className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                      service.color,
                      "bg-opacity-20"
                    )}>
                      <svg
                        className={cn("w-4 h-4", service.color.replace('bg-', 'text-'))}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-neutral-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
