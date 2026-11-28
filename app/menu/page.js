import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { TEAS, SNACKS } from '@/components/data';

export const metadata = { title: 'Menu', description: 'Kulhad chai, masala chai, ginger and cardamom tea, green tea, iced tea and snacks at Upmukhiya Chai.' };

export default function Menu() {
  return (
    <>
      <PageHero title="Our menu" hi="हमारा मेन्यू" text="Chai in every mood, with snacks made to go alongside." img="/images/hero/pack-garden.jpg" pos="center 45%" alt="Upmukhiya Chai Premium CTC tea pack beside a glass of chai in a tea garden" />
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Chai and tea</h2></div>
          <div className="grid tea-grid">
            {TEAS.map((t) => (
              <article key={t.name} className="tea-card">
                <div className="ph"><Image src={t.img} alt={t.name} fill sizes="(max-width:700px) 90vw, (max-width:1100px) 45vw, 30vw" /></div>
                <div className="tea-body"><h3>{t.name} <span className="hi">{t.hi}</span></h3><p>{t.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="section-head"><h2>Snacks and cold drinks</h2></div>
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
      <section className="section">
        <div className="wrap split rev">
          <div className="pack-img"><Image src="/images/tea/kulhad-4.jpg" alt="Kulhad chai with brass pot" fill sizes="(max-width:800px) 95vw, 50vw" /></div>
          <div className="split-text"><h2>Served in kulhad, glass or paper cup</h2><p>Dine in with a clay kulhad, or take your chai away in our branded cup. Menu and availability may vary by outlet.</p></div>
        </div>
      </section>
    </>
  );
}
