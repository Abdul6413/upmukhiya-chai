import { Rozha_One, Mukta } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { SITE, BRAND, SOCIAL } from '@/components/data';

const display = Rozha_One({ weight: '400', subsets: ['latin', 'devanagari'], variable: '--font-display', display: 'swap' });
const body = Mukta({ weight: ['400', '500', '600', '700'], subsets: ['latin', 'devanagari'], variable: '--font-body', display: 'swap' });

const DESC = 'Upmukhiya Chai (उपमुखिया चाय) serves kulhad chai, masala chai and fresh snacks. Apply for a chai franchise across Uttar Pradesh. Based in Moradabad.';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'उपमुखिया चाय | Upmukhiya Chai – Chai Franchise in Uttar Pradesh', template: '%s | Upmukhiya Chai' },
  description: DESC,
  keywords: ['Upmukhiya Chai', 'उपमुखिया चाय', 'chai franchise', 'tea franchise Uttar Pradesh', 'kulhad chai', 'chai franchise Moradabad', 'tea shop franchise India'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'उपमुखिया चाय | Upmukhiya Chai',
    description: 'Kulhad chai, masala chai and a chai franchise opportunity in Uttar Pradesh.',
    url: SITE.url, siteName: 'Upmukhiya Chai', locale: 'en_IN', type: 'website',
    images: [{ url: '/images/hero/brand-table.jpg', width: 1500, height: 1000, alt: 'Upmukhiya Chai cup, kettle and spices' }],
  },
  twitter: { card: 'summary_large_image', title: 'उपमुखिया चाय | Upmukhiya Chai', description: DESC, images: ['/images/hero/brand-table.jpg'] },
  robots: { index: true, follow: true },
  // After adding the site in Google Search Console, paste the verification code here:
  // verification: { google: 'YOUR_CODE' },
};
export const viewport = { themeColor: '#A30F26', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization', '@id': `${SITE.url}/#org`,
      name: BRAND.nameEn, alternateName: BRAND.nameHi, url: SITE.url,
      logo: `${SITE.url}/logo.jpg`, sameAs: [SOCIAL.instagram],
      contactPoint: BRAND.phones.map((p) => ({ '@type': 'ContactPoint', telephone: p.tel, contactType: 'sales', areaServed: 'IN', availableLanguage: ['Hindi', 'English'] })),
    },
    {
      '@type': 'CafeOrCoffeeShop', '@id': `${SITE.url}/#business`,
      name: BRAND.nameEn, url: SITE.url, image: `${SITE.url}/images/hero/brand-table.jpg`,
      telephone: BRAND.phones[0].tel, email: BRAND.email, servesCuisine: 'Indian tea and snacks',
      address: { '@type': 'PostalAddress', streetAddress: 'Ramganga Vihar, Near Sales Tax Office', addressLocality: BRAND.city, addressRegion: BRAND.state, addressCountry: 'IN' },
      parentOrganization: { '@id': `${SITE.url}/#org` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
