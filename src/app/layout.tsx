import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "C.S.Web - Soluții Web Personalizate | Dezvoltator Web Iași",
  description: "Specializat în dezvoltarea de soluții web moderne și eficiente. Ofer servicii complete de creare și implementare pentru platforme digitale de ultimă generație. Aplicații web, portofolii digitale, site-uri de prezentare și landing pages optimizate.",
  keywords: [
    "dezvoltator web",
    "soluții web",
    "aplicații web",
    "portofolii digitale", 
    "site-uri web",
    "landing pages",
    "React",
    "Next.js",
    "TypeScript",
    "Iași",
    "România"
  ],
  authors: [{ name: "Sergiu Ceica" }],
  creator: "Sergiu Ceica",
  publisher: "C.S.Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://your-domain.com', 
    siteName: 'C.S.Web - Soluții Web Personalizate',
    title: 'C.S.Web - Soluții Web Personalizate | Dezvoltator Web Iași',
    description: 'Specializat în dezvoltarea de soluții web moderne și eficiente. Ofer servicii complete de creare și implementare pentru platforme digitale de ultimă generație.',
    images: [
      {
        url: '/og-image.jpg', // Va trebui să creezi această imagine
        width: 1200,
        height: 630,
        alt: 'C.S.Web - Soluții Web Personalizate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'C.S.Web - Soluții Web Personalizate | Dezvoltator Web Iași',
    description: 'Specializat în dezvoltarea de soluții web moderne și eficiente. Ofer servicii complete de creare și implementare pentru platforme digitale de ultimă generație.',
    images: ['/og-image.jpg'], // Aceeași imagine ca pentru Open Graph
    creator: '@sergiutzuusdevlab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', 

  },
  category: 'technology',
  classification: 'Web Development Services',
  other: {
    'geo.region': 'RO-IS', 
    'geo.placename': 'Iași',
    'geo.position': '47.1585;27.6014', 
    'ICBM': '47.1585, 27.6014',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sergiu Ceica",
              "jobTitle": "Web Developer",
              "url": "https://your-domain.com",
              "sameAs": [
                "https://www.linkedin.com/in/sergiu-ceica-82498318a/",
                "https://instagram.com/sergiutzuusdevlab"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "C.S.Web"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Iași",
                "addressCountry": "RO"
              },
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "MongoDB"
              ],
              "description": "Specializat în dezvoltarea de soluții web moderne și eficiente"
            })
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
