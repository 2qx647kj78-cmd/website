import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Solutions - Intelligente Automation & AI-Integration",
  description:
    "Professionelle AI-Workflows, Web-Entwicklung und AI-Integration für moderne Unternehmen. Von n8n Automation bis Custom AI-Lösungen.",
  keywords:
    "AI Automation, n8n, Workflows, Web-Entwicklung, AI Integration, ChatGPT, Claude",
  authors: [{ name: "AI Solutions" }],
  creator: "AI Solutions",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://ai-solutions.de",
    siteName: "AI Solutions",
    title: "AI Solutions - Intelligente Automation & AI-Integration",
    description:
      "Professionelle AI-Workflows, Web-Entwicklung und AI-Integration für moderne Unternehmen.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Solutions - Intelligente Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions - Intelligente Automation & AI-Integration",
    description:
      "Professionelle AI-Workflows, Web-Entwicklung und AI-Integration für moderne Unternehmen.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
