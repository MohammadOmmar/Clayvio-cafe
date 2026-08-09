import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Caveat } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const script = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-script',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Clayvio Cafe | Chai, Coffee & Community',
    template: '%s | Clayvio Cafe',
  },
  description:
    'Clayvio Cafe — a warm, cozy cafe in Sopore serving chai, coffee, snacks, and more. Visit us at New Colony, Sopore.',
  keywords: [
    'Clayvio Cafe',
    'Cafe Sopore',
    'Chai Sopore',
    'Coffee Sopore',
    'Kulhad Chai',
    'Cafe Kashmir',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Clayvio Cafe',
    title: 'Clayvio Cafe | Chai, Coffee & Community',
    description:
      'A warm, cozy cafe in Sopore serving chai, coffee, snacks, and more. Visit us at New Colony, Sopore.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clayvio Cafe | Chai, Coffee & Community',
    description:
      'A warm, cozy cafe in Sopore serving chai, coffee, snacks, and more. Visit us at New Colony, Sopore.',
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
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${script.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}