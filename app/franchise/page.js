import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FranchiseForm from '@/components/FranchiseForm';
import Launches from '@/components/Launches';
import { BENEFITS, STEPS, FAQ, PACKAGES, BRAND, waLink } from '@/components/data';

export const metadata = {
  title: 'Chai Franchise in Uttar Pradesh',
  description: 'Apply for an Upmukhiya Chai franchise in Uttar Pradesh. Branding, training, tested recipes and ongoing support from our Moradabad head office.',
  alternates: { canonical: '/franchise' },
};

const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Franchise() {
  return (
    <>
      <PageHero title="Open an Upmukhiya Chai outlet" hi="फ्रेंचाइज़ी के लिए आवेदन करें" text="Be part of our growing chai brand." img="/images/store/interior-heritage.jpg" pos="center 60%" alt="Upmukhiya Chai heritage-style outlet interior" />
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Why partner with us</h2></div>
          <div className="grid benefit-grid">
            {BENEFITS.map(([t, d]) => (<div key={t} className="benefit"><h3>{t}</h3><p>{d}</p></div>))}
          </div>
        </div>
      </section>

      {PACKAGES.length > 0 && (
        <section className="section" id="packages">
          <div className="wrap">
            <div className="section-head"><h2>Franchise packages</h2></div>
            <div className="pkg-grid">
              {PACKAGES.map((p) => (
                <article key={p.name} className={`pkg ${p.featured ? 'featured' : ''}`}>
                  <h3>{p.name}</h3>
                  {p.note && <p className="pkg-note">{p.note}</p>}
                  <ul className="pkg-list">{p.includes.map((i) => <li key={i}>{i}</li>)}</ul>
                  <a className="btn btn-primary" href={waLink(BRAND.phones[0].wa, `Hello Upmukhiya Chai, I am interested in the ${p.name}.`)} target="_blank" rel="noopener noreferrer">Get package details</a>
                </article>
              ))}
            </div>
            <p className="tiny">Investment details and inclusions for each package are shared by our team on enquiry.</p>
          </div>
        </section>
      )}

      <section className="section tint">
        <div className="wrap split">
          <div className="poster"><Image src="/images/store/franchise-poster.jpg" alt="Upmukhiya Chai franchise opportunity poster" fill sizes="(max-width:900px) 100vw, 50vw" /></div>
          <div className="split-text">
            <h2>How it works</h2>
            <ol className="steps">
              {STEPS.map(([t, d]) => (<li key={t}><strong>{t}</strong><span>{d}</span></li>))}
            </ol>
          </div>
        </div>
      </section>

      <Launches title="Our outlets are opening across the state" text="A look at recent inaugurations. Your outlet could be the next one we celebrate." />

      <section className="section" id="apply">
        <div className="wrap apply-grid">
          <FranchiseForm />
          <div className="apply-side">
            <div className="ph"><Image src="/images/store/wall.jpg" alt="Upmukhiya Chai outlet wall" fill sizes="(max-width:900px) 100vw, 40vw" /></div>
            <p>Investment details and terms are shared by our team after your enquiry, based on your city and outlet size.</p>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap faq">
          <h2>Franchise questions, answered</h2>
          {FAQ.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
