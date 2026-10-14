import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeRegistry from '@/components/providers/ThemeRegistry';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vritika Travel | Tours, Packages & Luxury Escapes',
  description: 'Curated tours, package holidays, destination guides, and travel inspiration with a premium service experience.',
icons: {
    icon: '/favicon.svg',
  },
} 

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Header />
            {children}
            <Footer />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
