'use client';
import { useState } from 'react';
import { BRAND, waLink } from './data';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const msg = 'Hello Upmukhiya Chai, I would like to know more.';
  return (
    <div className="wa-float">
      {open && (
        <div className="wa-pop" role="dialog" aria-label="Chat on WhatsApp">
          <p>Chat with us on WhatsApp</p>
          {BRAND.phones.map((p) => (
            <a key={p.wa} href={waLink(p.wa, msg)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={20} /> +91 {p.display}
            </a>
          ))}
        </div>
      )}
      <button className="wa-btn" aria-label="Chat on WhatsApp" aria-expanded={open} onClick={() => setOpen(!open)}>
        <WhatsAppIcon size={32} />
      </button>
    </div>
  );
}
