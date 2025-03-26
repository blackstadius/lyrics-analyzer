import type { Metadata } from 'next';
import { Poppins, Oooh_Baby } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});
const ooohBaby = Oooh_Baby({
  weight: ['400'],
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
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
