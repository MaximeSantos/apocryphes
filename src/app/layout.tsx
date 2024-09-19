import type { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apocryphes',
  description: 'A learning experience, creating a forum in NextJS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
