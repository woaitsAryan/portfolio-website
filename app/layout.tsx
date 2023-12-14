import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from './section/navbar';
import Footer from './section/footer';
import Particles from './components/Particles';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://aryanbharti.com'),
  title: {
    default: 'Aryan Bharti',
    template: '%s | Aryan Bharti',
  },
  description: 'Developer, speaker and writer.',
  authors:[{name: 'Aryan Bharti'}],
  creator: 'Aryan Bharti',
  publisher: 'Aryan Bharti',
  category: 'Technology',
  openGraph: {
    title: 'Aryan Bharti',
    description: 'Developer, speaker and writer.',
    url: 'https://aryanbharti.com',
    siteName: 'Aryan Bharti',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://aryanbharti.com/opengraph.png',
        width: 256,
        height: 256,
        alt: 'Aryan Bharti\'s portfolio website',
      },
    ]
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
  twitter: {
    title: 'Aryan Bharti',
    card: 'summary_large_image',
    images: 'https://aryanbharti.com/opengraph.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-10 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <SpeedInsights />
        <Analytics />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={150}
          />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
