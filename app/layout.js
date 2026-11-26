import { Rozha_One, Mukta } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const display = Rozha_One({ weight: '400', subsets: ['latin', 'devanagari'], variable: '--font-display', display: 'swap' });
const body = Mukta({ weight: ['400', '500', '600', '700'], subsets: ['latin', 'devanagari'], variable: '--font-body', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://upmukhiyachai.vercel.app'),
  title: { default: 'उपमुखिया चाय | Upmukhiya Chai – Tea Franchise in Uttar Pradesh', template: '%s | Upmukhiya Chai' },
  description: 'Upmukhiya Chai (उपमुखिया चाय) serves kulhad chai, masala chai and fresh snacks. Apply for a tea franchise across Uttar Pradesh. Based in Moradabad.',
  openGraph: { title: 'उपमुखिया चाय | Upmukhiya Chai', description: 'Chai franchise opportunity in Uttar Pradesh.', images: ['/logo.jpg'], type: 'website' },
};
export const viewport = { themeColor: '#A30F26', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
