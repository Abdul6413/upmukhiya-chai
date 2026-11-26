import Image from 'next/image';
import Link from 'next/link';
import { TEAS, SNACKS, BRAND, waLink } from '@/components/data';
import { WhatsAppIcon } from '@/components/Icons';

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="/images/hero/brand-table.jpg" alt="Upmukhiya Chai cup with kettle and whole spices" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: '70% center' }} />
        <div className="hero-shade" />
        <div className="wrap hero-copy">
          <h1 className="hero-title hi" lang="hi">{BRAND.nameHi}</h1>
          <p className="hero-sub">Kulhad chai, masala chai and fresh snacks, brewed the way Uttar Pradesh likes it. Open your own outlet with a brand people already trust.</p>
          <div className="btn-row">
            <Link href="/franchise" className="btn btn-primary">Apply for franchise</Link>
            <Link href="/menu" className="btn btn-ghost">See our menu</Link>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap strip-grid">
          <p><strong>Kulhad &amp; glass chai</strong> Served hot in clay and glass</p>
          <p><strong>Master-blended leaf</strong> Every blend approved by our Chief Master Tea</p>
          <p><strong>Tea + snacks</strong> Samosa, sandwich, burger and shakes</p>
          <p><strong>Franchise support</strong> Led by our UP Head and head office</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="split-text">
            <h2>Chai that feels like home</h2>
            <p>Upmukhiya Chai began with a simple idea: a cup of tea should taste honest. We start with strong leaf, fresh ginger, green cardamom and whole spices, and serve it in a kulhad so every sip carries the smell of the earth.</p>
            <p>Today we are growing as a franchise brand from Moradabad, bringing the same cup to new towns across Uttar Pradesh.</p>
            <Link href="/about" className="text-link">Read our story</Link>
          </div>
          <div className="photo-pair">
            <div className="ph tall"><Image src="/images/hero/kulhad-cardamom.jpg" alt="Kulhad chai with cardamom and spices" fill sizes="(max-width:800px) 90vw, 40vw" /></div>
            <div className="ph"><Image src="/images/hero/ginger-brass.jpg" alt="Kulhad chai with ginger and cinnamon" fill sizes="(max-width:800px) 90vw, 30vw" /></div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2>Our signature teas</h2>
            <Link href="/menu" className="text-link">Full menu</Link>
          </div>
          <div className="grid tea-grid">
            {TEAS.slice(0, 6).map((t) => (
              <article key={t.name} className="tea-card">
                <div className="ph"><Image src={t.img} alt={t.name} fill sizes="(max-width:700px) 90vw, (max-width:1100px) 45vw, 30vw" /></div>
                <div className="tea-body">
                  <h3>{t.name} <span className="hi">{t.hi}</span></h3>
                  <p>{t.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pack">
        <div className="wrap split rev">
          <div className="pack-img"><Image src="/images/hero/pack-kettle.jpg" alt="Upmukhiya Chai Premium CTC tea pack" fill sizes="(max-width:800px) 95vw, 50vw" /></div>
          <div className="split-text">
            <h2>Premium CTC tea, packed for your kitchen</h2>
            <p>The same blend our outlets serve is also available in our branded Premium CTC pack, so the taste of Upmukhiya Chai can follow you home.</p>
            <a className="btn btn-primary" href={waLink(BRAND.phones[0].wa, 'Hello Upmukhiya Chai, I want to order the tea pack.')} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Ask for the pack</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Chai needs company</h2></div>
          <div className="snack-row">
            {SNACKS.map((s) => (
              <figure key={s.name} className="snack">
                <div className="ph"><Image src={s.img} alt={s.name} fill sizes="(max-width:700px) 45vw, 16vw" /></div>
                <figcaption>{s.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section master">
        <div className="wrap master-grid">
          <div className="portrait"><Image src="/images/team/anadil-pasha.jpg" alt="Mr. Anadil Pasha, Chief Master Tea" fill sizes="(max-width:800px) 80vw, 30vw" style={{ objectFit: 'cover', objectPosition: 'center 20%' }} /></div>
          <div>
            <p className="role">Chief Master Tea · 10 years of experience</p>
            <h2>Mr. Anadil Pasha</h2>
            <p>Behind every Upmukhiya cup is a decade of tasting, testing and refining. Mr. Anadil Pasha chooses the leaf, balances the spices and signs off each blend before it reaches an outlet.</p>
            <p>He also trains franchise partners and their teams so the chai tastes the same in every town.</p>
            <Link href="/about" className="text-link light">Meet our team</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap gallery-head">
          <h2>Cafés built for conversation</h2>
          <p className="muted">Warm interiors, green walls and a counter that does the talking. Our outlet formats are designed to be inviting and easy to run.</p>
        </div>
        <div className="wrap gallery">
          <div className="ph g1"><Image src="/images/store/interior-green.jpg" alt="Upmukhiya Chai café interior" fill sizes="(max-width:800px) 95vw, 50vw" /></div>
          <div className="ph"><Image src="/images/store/counter.jpg" alt="Upmukhiya Chai counter" fill sizes="(max-width:800px) 95vw, 25vw" /></div>
          <div className="ph"><Image src="/images/store/outdoor.jpg" alt="Outdoor seating at dusk" fill sizes="(max-width:800px) 95vw, 25vw" /></div>
        </div>
      </section>

      <section className="section ceo">
        <div className="wrap ceo-box">
          <h2>A note from our CEO</h2>
          <blockquote>
            <p>We did not set out to sell tea. We set out to give every town a place where people can sit, talk and feel at home over a good cup of chai.</p>
            <p>Our franchise partners are part of that promise. We stand with you from the first plan to the first customer, and we keep the quality of every cup the same as the first one we served.</p>
            <p>Come and grow with us.</p>
          </blockquote>
          <p className="sign"><strong>Mr. Aamir Pasha</strong>CEO, Upmukhiya Chai</p>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-grid">
          <div>
            <h2>Ready to open your own chai outlet?</h2>
            <p>Tell us your city and budget. Our team will call you with the next steps.</p>
          </div>
          <Link href="/franchise" className="btn btn-light">Apply for franchise</Link>
        </div>
      </section>
    </>
  );
}
