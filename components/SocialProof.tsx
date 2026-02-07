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
      <div className="text-5xl md:text-6xl font-semibold text-foreground">
        {count}
        {suffix}
      </div>
      <p className="text-neutral-600 text-xl mt-3 font-normal">{label}</p>
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
      className="bg-white rounded-2xl p-10 flex flex-col h-full border border-neutral-300"
    >
      <p className="text-xl text-foreground leading-relaxed mb-6 flex-grow font-normal">
        "{quote}"
      </p>

      <div className="border-t border-neutral-300 pt-6">
        <p className="text-base font-normal text-neutral-600">{author}</p>
      </div>
    </motion.div>
  );
};

export default function SocialProof() {
  return (
    <section className="bg-surface-gray py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tight">
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
