import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lyrics Analyzer',
  description: 'Find the meaning behind lyrics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
