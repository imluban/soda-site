import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { FlavorProvider } from '@/lib/FlavorContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Diet Soda | Pure Zero Refreshment',
  description: 'Experience the crisp, clean taste of Diet Soda. Zero sugar, zero compromise.',
  keywords: ['diet soda', 'zero sugar', 'refreshment', 'natural flavors'],
  openGraph: {
    title: 'Diet Soda | Pure Zero Refreshment',
    description: 'Zero sugar, zero compromise. Pure refreshment redefined.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <FlavorProvider>
          <Header />
          {children}
          <Footer />
        </FlavorProvider>
      </body>
    </html>
  );
}
