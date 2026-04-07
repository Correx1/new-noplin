import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import './globals.css';
import ThemeProvider from './components/providers/ThemeProvider';
import LenisProvider from './components/providers/LenisProvider';
import ScrollToTop from './components/providers/ScrollToTop';
import ConditionalLayoutWrapper from './components/layout/ConditionalLayoutWrapper';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import MetaPixel from './components/analytics/MetaPixel';
import { OrganizationSchema } from './components/seo/JsonLd';

import localFont from 'next/font/local';

const spaceGrotesk = localFont({
  src: [
    { path: '../public/fonts/SpaceGrotesk-Medium.woff2', weight: '500' },
    { path: '../public/fonts/SpaceGrotesk-SemiBold.woff2', weight: '600' },
    { path: '../public/fonts/SpaceGrotesk-Bold.woff2', weight: '700' },
  ],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = localFont({
  src: [
    { path: '../public/fonts/DMSans-Regular.woff2', weight: '400' },
    { path: '../public/fonts/DMSans-Medium.woff2', weight: '500' },
  ],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0D0D2B',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://noplin.com'),
  title: 'Noplin Digital — Premium Digital Agency Nigeria',
  description:
    'Results-obsessed digital agency delivering premium design, development, content and marketing. Trusted by startups, SMEs and growing businesses across Africa and beyond.',
  keywords:
    'digital agency Nigeria, web design agency Nigeria, brand identity design Nigeria',
  openGraph: {
    title: 'Noplin Digital — Premium Digital Agency Nigeria',
    description:
      'Results-obsessed digital agency delivering premium design, development, content and marketing.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'Noplin Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noplin Digital — Premium Digital Agency Nigeria',
    description: 'Results-obsessed digital agency delivering premium design, development, content and marketing.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('noplin-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}` }} />
        <OrganizationSchema />
      </head>
      <body className="font-body overflow-x-hidden antialiased" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
        <ThemeProvider>
          <LenisProvider>
            <ScrollToTop />
            <ConditionalLayoutWrapper>
              {children}
            </ConditionalLayoutWrapper>
          </LenisProvider>
        </ThemeProvider>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <Suspense>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  );
}

