import type { Metadata } from 'next';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/lib/content';
import { assetPath } from '@/lib/assetPath';
import './globals.css';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://khalid-salman.github.io/portfolio',
  ),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: 'website',
    ...(site.seo.ogImage ? { images: [site.seo.ogImage] } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description,
    ...(site.seo.ogImage ? { images: [site.seo.ogImage] } : {}),
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.owner.name,
  jobTitle: site.owner.title,
  email: site.contact.email,
  ...(site.owner.photo ? { image: assetPath(site.owner.photo) } : {}),
  ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  sameAs: [site.contact.linkedin, ...(site.contact.github ? [site.contact.github] : [])],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${hanken.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');document.documentElement.classList.remove('dark');}else{document.documentElement.classList.remove('light');document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-screen font-sans">
        <div className="theme-ambient-glow" aria-hidden />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
