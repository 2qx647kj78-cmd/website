# AI Solutions Website

Moderne Next.js 14 Website für AI Solutions – spezialisiert auf KI-gestützte Business-Automation, Web-Entwicklung und AI-Integration.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Formulare:** React Hook Form + Zod Validation

## Setup

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktion Build
npm run build

# Produktion Server starten
npm start
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Projektstruktur

```
/app
  layout.tsx       → Root Layout mit Fonts & Metadata
  page.tsx         → Hauptseite mit allen Sektionen
  globals.css      → Tailwind Imports & Custom Styles
/components
  Hero.tsx         → Hero-Sektion mit Animationen
  Services.tsx     → Leistungen (3 Service-Karten)
  SocialProof.tsx  → Social Proof mit animierten Zählern
  UseCases.tsx     → Use Cases mit alternierendem Layout
  ContactForm.tsx  → Kontaktformular mit Validierung
  Footer.tsx       → Footer mit Links & Social Icons
/lib
  utils.ts         → Hilfsfunktionen (cn für Tailwind)
```

## Deployment auf Vercel

```bash
# Vercel CLI installieren
npm i -g vercel

# Deployen
vercel
```

Alternativ: Repository mit [Vercel](https://vercel.com) verbinden für automatische Deployments.

## Sektionen

1. **Hero** – Animierte Landing-Sektion mit CTAs
2. **Leistungen** – AI-Workflows, Web-Entwicklung, AI-Integration
3. **Social Proof** – Kennzahlen und Kundenstimmen
4. **Use Cases** – E-Commerce, Support, Content Pipeline
5. **Kontakt** – Formular mit Glasmorphismus-Effekt
6. **Footer** – Navigation, Social Links, Rechtliches

## Lizenz

© 2025 AI Solutions. Alle Rechte vorbehalten.
