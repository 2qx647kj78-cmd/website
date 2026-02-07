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
    <section id="leistungen" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            Unsere Leistungen
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-normal">
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
                'relative bg-surface-light rounded-2xl p-10',
                'hover:shadow-lg hover:shadow-black/5',
                'transition-all duration-300 ease-out',
                'border border-neutral-300'
              )}
            >
              {/* Headline - Apple Style */}
              <h3 className="text-3xl font-semibold text-foreground mb-3 tracking-tight">
                {service.headline}
              </h3>

              {/* Description - Apple Style */}
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-normal">
                {service.description}
              </p>

              {/* Features - Apple Style (simple list) */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-base text-neutral-600 font-normal"
                  >
                    • {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
