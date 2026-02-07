import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const navigationLinks = [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Projekte', href: '#use-cases' },
    { label: 'Kontakt', href: '#kontakt' },
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-foreground text-neutral-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Left: Company Info */}
          <div className="flex flex-col justify-start">
            <h2 className="text-xl font-semibold text-white mb-2">AI Solutions</h2>
            <p className="text-sm text-neutral-500 leading-relaxed font-normal">
              Intelligente Lösungen für moderne Unternehmen
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-col items-start md:items-center">
            <nav className="flex flex-wrap gap-6 md:gap-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm font-normal"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center justify-start md:justify-end gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 AI Solutions. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
