'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { NAV, BRAND, SOCIAL } from './data';
import { PhoneIcon, InstagramIcon } from './Icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href="/" className="brand" aria-label="Upmukhiya Chai home">
          <Image src="/logo.jpg" alt="Upmukhiya Chai logo" width={56} height={56} priority className="brand-logo" />
          <span className="brand-text">
            <span className="hi" lang="hi">{BRAND.nameHi}</span>
            <small>Franchise · Moradabad, U.P.</small>
          </span>
        </Link>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={path === n.href ? 'active' : ''} aria-current={path === n.href ? 'page' : undefined}>{n.label}</Link>
          ))}
          <a className="nav-insta" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Upmukhiya Chai on Instagram"><InstagramIcon size={20} /><span className="nav-insta-label">Instagram</span></a>
          <a className="btn btn-sm btn-call" href={`tel:${BRAND.phones[0].tel}`}><PhoneIcon size={16} /> {BRAND.phones[0].display}</a>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
