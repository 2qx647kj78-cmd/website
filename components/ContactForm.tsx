'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, Send } from 'lucide-react';

// Zod validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name muss mindestens 2 Zeichen lang sein')
    .max(100, 'Name darf maximal 100 Zeichen lang sein'),
  email: z
    .string()
    .email('Bitte geben Sie eine gültige E-Mail-Adresse ein')
    .min(1, 'E-Mail ist erforderlich'),
  companyType: z
    .enum(['Startup', 'KMU', 'Enterprise', 'Sonstiges'], {
      errorMap: () => ({ message: 'Bitte wählen Sie einen Unternehmenstyp aus' }),
    }),
  message: z
    .string()
    .max(500, 'Nachricht darf maximal 500 Zeichen lang sein')
    .optional()
    .or(z.literal('')),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    console.log('Form Data:', data);

    // Simulate API call with 1.5s delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    reset();
  };

  return (
    <section
      id="kontakt"
      className="relative min-h-screen py-24 md:py-32 overflow-hidden"
    >
      {/* Apple-style background */}
      <div
        className="absolute inset-0 bg-surface-gray pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            Bereit durchzustarten?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-normal">
            Lassen Sie uns in einem kostenlosen Beratungsgespräch herausfinden,
            wie AI Ihr Business transformieren kann.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          {!isSubmitted ? (
            // Contact Form
            <div className="bg-white border border-neutral-300 rounded-2xl p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="text-foreground text-base font-normal block mb-2">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    placeholder="Ihr Name"
                    className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-foreground placeholder-neutral-400 focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 transition-all outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="text-foreground text-base font-normal block mb-2">
                    E-Mail
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    placeholder="ihre.email@beispiel.de"
                    className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-foreground placeholder-neutral-400 focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 transition-all outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Company Type Field */}
                <div>
                  <label
                    htmlFor="companyType"
                    className="text-foreground text-base font-normal block mb-2"
                  >
                    Unternehmenstyp
                  </label>
                  <select
                    {...register('companyType')}
                    id="companyType"
                    className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-foreground focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Bitte wählen Sie...
                    </option>
                    <option value="Startup">Startup</option>
                    <option value="KMU">KMU</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                  {errors.companyType && (
                    <p className="text-red-400 text-sm mt-1">{errors.companyType.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="text-foreground text-base font-normal block mb-2">
                    Nachricht
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    placeholder="Erzählen Sie uns von Ihren AI-Anforderungen (optional)"
                    rows={4}
                    className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-foreground placeholder-neutral-400 focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 transition-all outline-none resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button - Apple Style */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-apple-blue text-white hover:bg-apple-blue-hover disabled:bg-neutral-300 disabled:text-neutral-500 font-normal text-lg py-3 px-6 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Wird versendet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Jetzt Gespräch buchen</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            // Success State
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-neutral-300 rounded-2xl p-8 md:p-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-center mb-6"
              >
                <CheckCircle className="w-16 h-16 text-apple-blue" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-semibold text-foreground mb-3 tracking-tight"
              >
                Vielen Dank!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-neutral-600 mb-8 font-normal"
              >
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={handleReset}
                className="bg-apple-blue text-white hover:bg-apple-blue-hover font-normal text-lg py-3 px-8 rounded-full transition-colors duration-200"
              >
                Weitere Anfrage senden
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
