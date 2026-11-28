import PageHero from '@/components/PageHero';
import { BRAND, SOCIAL, waLink } from '@/components/data';
import { PhoneIcon, MailIcon, PinIcon, WhatsAppIcon, InstagramIcon } from '@/components/Icons';

export const metadata = { title: 'Contact', description: 'Call, WhatsApp or email Upmukhiya Chai in Moradabad.' };

export default function Contact() {
  return (
    <>
      <PageHero title="Contact us" hi="संपर्क करें" text="Call, message or visit our office in Moradabad." img="/images/hero/kulhad-spices.jpg" pos="center 45%" alt="Upmukhiya Chai kulhad with ginger, cardamom and spices" />
      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-cards">
            {BRAND.phones.map((p) => (
              <div key={p.tel} className="c-card">
                <PhoneIcon /><div><h3>+91 {p.display}</h3>
                  <div className="btn-row">
                    <a className="btn btn-sm btn-primary" href={`tel:${p.tel}`}>Call</a>
                    <a className="btn btn-sm btn-wa" href={waLink(p.wa, 'Hello Upmukhiya Chai')} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp</a>
                  </div></div>
              </div>
            ))}
            <div className="c-card"><InstagramIcon /><div><h3>Instagram</h3><a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">{SOCIAL.instagramHandle}</a></div></div>
            <div className="c-card"><MailIcon /><div><h3>Email</h3><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div></div>
            <div className="c-card"><PinIcon /><div><h3>Address</h3><p>{BRAND.address}</p></div></div>
          </div>
          <div className="map">
            <iframe title="Upmukhiya Chai office location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapQuery)}&output=embed`} />
          </div>
        </div>
      </section>
    </>
  );
}
