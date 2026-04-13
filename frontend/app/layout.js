import '../styles/globals.css';
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato'
});

export const metadata = {
  title: 'FEmmE - Beauty, Care & Confidence',
  description: 'Premium women-only beauty clinic in Sylhet. Herbal, safe, and non-toxic beauty services.',
  keywords: 'beauty clinic, Sylhet, makeup, skincare, spa, bridal, women only',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}