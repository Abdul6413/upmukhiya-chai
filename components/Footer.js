import Image from 'next/image';
import Link from 'next/link';
import { BRAND, NAV, SOCIAL } from './data';
import { PhoneIcon, MailIcon, PinIcon, InstagramIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand">
            <Image src="/logo.jpg" alt="Upmukhiya Chai logo" width={64} height={64} className="brand-logo" />
            <span className="hi foot-hi" lang="hi">{BRAND.nameHi}</span>
          </div>
          <p className="muted">Honest chai, served the way Uttar Pradesh likes it. Join the family and open your own Upmukhiya Chai outlet.</p>
          <a className="foot-insta" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon size={20} /> {SOCIAL.instagramHandle}</a>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>{NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Reach us</h4>
          <ul className="contact-list">
            {BRAND.phones.map((p) => <li key={p.tel}><PhoneIcon size={18} /><a href={`tel:${p.tel}`}>{p.display}</a></li>)}
            <li><MailIcon size={18} /><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
            <li><PinIcon size={18} /><span>{BRAND.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Upmukhiya Chai. All rights reserved.</span>
        <span>Website developed by <a href="https://www.webgene.in/" target="_blank" rel="noopener noreferrer">WebGene Innovations</a></span>
      </div>
    </footer>
  );
}
