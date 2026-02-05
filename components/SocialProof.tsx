'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface CounterProps {
  target: number;
  label: string;
  suffix: string;
}

const AnimatedCounter = ({ target, label, suffix }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrameId: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(target * easeOutQuad);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 text-lg mt-3">{label}</p>
    </motion.div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  delay: number;
}

const TestimonialCard = ({ quote, author, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-white rounded-2xl shadow-md p-8 flex flex-col h-full"
    >
      <div className="flex mb-4">
        <Quote className="w-8 h-8 text-blue-600 flex-shrink-0" />
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
        "{quote}"
      </p>

      <div className="flex items-center gap-3 border-t pt-6">
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
        </div>
      </div>

      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function SocialProof() {
  return (
    <section className="bg-muted py-24 md:py-32" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Vertraut von innovativen Unternehmen
          </h2>
        </motion.div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <AnimatedCounter target={500} label="Stunden gespart" suffix="+" />
          <AnimatedCounter target={98} label="Kundenzufriedenheit" suffix="%" />
          <AnimatedCounter target={15} label="Projekte erfolgreich" suffix="+" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Die AI-Workflows haben unsere Prozesse revolutioniert. Was früher Stunden dauerte, erledigt sich jetzt in Minuten."
            author="Sarah M., Geschäftsführerin"
            delay={0}
          />
          <TestimonialCard
            quote="Professionelle Umsetzung und exzellenter Support. Unser neues Web-Portal übertrifft alle Erwartungen."
            author="Michael K., CTO"
            delay={0.1}
          />
          <TestimonialCard
            quote="Die Integration von AI in unseren Kundenservice war ein Game-Changer. Antwortzeiten um 80% reduziert."
            author="Lisa R., Head of Operations"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
