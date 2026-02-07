'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShoppingCart,
  Package,
  TrendingUp,
  MessageSquare,
  Headphones,
  Users,
  PenTool,
  FileText,
  Share2,
  CheckCircle,
} from 'lucide-react';

interface UseCase {
  id: string;
  tag: string;
  headline: string;
  description: string;
  features: string[];
  icons: React.ReactNode[];
  color: string;
  bgColor: string;
}

const useCases: UseCase[] = [
  {
    id: 'ecommerce',
    tag: 'E-Commerce',
    headline: 'Intelligente E-Commerce Automation',
    description:
      'Automatische Produktbeschreibungen, Preisoptimierung und Bestandsverwaltung mit AI. Steigern Sie Ihren Umsatz bei gleichzeitig reduziertem manuellem Aufwand.',
    features: [
      'AI-generierte Beschreibungen',
      'Dynamische Preisoptimierung',
      'Automatisches Bestandsmanagement',
    ],
    icons: [
      <ShoppingCart key="cart" size={48} className="text-ios-blue" />,
      <Package key="package" size={48} className="text-ios-blue/70" />,
      <TrendingUp key="trending" size={48} className="text-ios-blue/50" />,
    ],
    color: 'ios-blue',
    bgColor: 'bg-ios-blue/10',
  },
  {
    id: 'support',
    tag: 'Support',
    headline: '24/7 AI-Kundenservice',
    description:
      '24/7 AI-Chatbot mit Wissensdatenbank und nahtloser Übergabe an menschliche Agents. Reduzieren Sie Wartezeiten und steigern Sie die Kundenzufriedenheit.',
    features: [
      'Intelligenter Chatbot',
      'Wissensdatenbank-Integration',
      'Nahtlose Agent-Übergabe',
    ],
    icons: [
      <MessageSquare key="message" size={48} className="text-ios-teal" />,
      <Headphones key="headphones" size={48} className="text-ios-teal/70" />,
      <Users key="users" size={48} className="text-ios-teal/50" />,
    ],
    color: 'ios-teal',
    bgColor: 'bg-ios-teal/10',
  },
  {
    id: 'content',
    tag: 'Content',
    headline: 'Automatisierte Content Pipeline',
    description:
      'Von der Idee bis zur Veröffentlichung – vollautomatische Content-Generierung und -Distribution über alle Kanäle.',
    features: [
      'Multi-Channel Distribution',
      'SEO-optimierte Inhalte',
      'Automatische Planung',
    ],
    icons: [
      <PenTool key="pen" size={48} className="text-ios-purple" />,
      <FileText key="file" size={48} className="text-ios-purple/70" />,
      <Share2 key="share" size={48} className="text-ios-purple/50" />,
    ],
    color: 'ios-purple',
    bgColor: 'bg-ios-purple/10',
  },
];

function UseCaseItem({
  useCase,
  index,
}: {
  useCase: UseCase;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const isEven = index % 2 === 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center lg:items-stretch`}
    >
      {/* Visual Section - Anthropic Style */}
      <motion.div variants={itemVariants} className="flex-1 w-full">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl bg-anthropic-orange-light overflow-hidden border border-neutral-200 flex items-center justify-center shadow-sm">
          <div className="text-anthropic-orange">
            {useCase.icons[0]}
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        variants={itemVariants}
        className="flex-1 w-full flex flex-col justify-center"
      >
        {/* Badge - Anthropic Style */}
        <motion.div
          variants={itemVariants}
          className="inline-flex w-fit mb-4"
        >
          <span className="text-sm text-anthropic-orange uppercase tracking-wider font-medium">
            {useCase.tag}
          </span>
        </motion.div>

        {/* Headline - Anthropic Style */}
        <motion.h3
          variants={itemVariants}
          className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-4 leading-tight"
        >
          {useCase.headline}
        </motion.h3>

        {/* Description - Anthropic Style */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-neutral-600 mb-8 leading-relaxed"
        >
          {useCase.description}
        </motion.p>

        {/* Features List - Anthropic Style */}
        <motion.ul
          variants={containerVariants}
          className="space-y-3"
        >
          {useCase.features.map((feature, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="flex items-start gap-2 text-lg text-neutral-700"
            >
              <span className="text-anthropic-orange mt-1">•</span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default function UseCases() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={titleVariants}
            className="text-5xl md:text-6xl font-serif font-normal text-foreground mb-6 tracking-tight"
          >
            Wie wir helfen
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Praxiserprobte Lösungen für echte Geschäftsherausforderungen
          </motion.p>
        </motion.div>

        {/* Use Cases */}
        <div className="space-y-20 lg:space-y-28">
          {useCases.map((useCase, index) => (
            <UseCaseItem key={useCase.id} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
