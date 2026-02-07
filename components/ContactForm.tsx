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
      {/* Colorful iOS background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-ios-indigo via-ios-purple to-ios-pink pointer-events-none"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bereit für die KI-Revolution?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="text-gray-200 text-sm font-medium block mb-2">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    placeholder="Ihr Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-ios-blue focus:ring-1 focus:ring-ios-blue transition-all outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="text-gray-200 text-sm font-medium block mb-2">
                    E-Mail
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    placeholder="ihre.email@beispiel.de"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-ios-blue focus:ring-1 focus:ring-ios-blue transition-all outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Company Type Field */}
                <div>
                  <label
                    htmlFor="companyType"
                    className="text-gray-200 text-sm font-medium block mb-2"
                  >
                    Unternehmenstyp
                  </label>
                  <select
                    {...register('companyType')}
                    id="companyType"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-ios-blue focus:ring-1 focus:ring-ios-blue transition-all outline-none appearance-none cursor-pointer"
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
                  <label htmlFor="message" className="text-gray-200 text-sm font-medium block mb-2">
                    Nachricht
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    placeholder="Erzählen Sie uns von Ihren AI-Anforderungen (optional)"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-ios-blue focus:ring-1 focus:ring-ios-blue transition-all outline-none resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-ios-indigo hover:bg-white/90 disabled:bg-neutral-300 disabled:text-neutral-500 font-semibold py-3 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75 shadow-lg"
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
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-center mb-4"
              >
                <CheckCircle className="w-16 h-16 text-green-400" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-white mb-3"
              >
                Vielen Dank für Ihre Anfrage!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-300 mb-8"
              >
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={handleReset}
                className="bg-white text-ios-indigo hover:bg-white/90 font-semibold py-3 px-8 rounded-2xl transition-all duration-200 shadow-lg"
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
