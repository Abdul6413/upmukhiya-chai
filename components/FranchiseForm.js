'use client';
import { useState } from 'react';
import { BRAND, waLink } from './data';
import { WhatsAppIcon } from './Icons';

export default function FranchiseForm() {
  const [f, setF] = useState({ name: '', phone: '', city: '', budget: '', space: '', note: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const text = () =>
    `Franchise enquiry – Upmukhiya Chai\nName: ${f.name}\nMobile: ${f.phone}\nCity: ${f.city}\nInvestment budget: ${f.budget || '-'}\nAvailable space: ${f.space || '-'}\nMessage: ${f.note || '-'}`;
  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(BRAND.phones[1].wa, text()), '_blank', 'noopener');
  };
  return (
    <form className="form" onSubmit={submit}>
      <h3>Apply for a franchise</h3>
      <p className="muted">Fill in your details. Your enquiry opens in WhatsApp so our team can reply to you directly.</p>
      <div className="form-grid">
        <label>Full name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
        <label>Mobile number<input required type="tel" inputMode="tel" pattern="[0-9+\s-]{10,15}" value={f.phone} onChange={set('phone')} autoComplete="tel" /></label>
        <label>City and state<input required value={f.city} onChange={set('city')} placeholder="e.g. Lucknow, U.P." /></label>
        <label>Investment budget
          <select value={f.budget} onChange={set('budget')}>
            <option value="">Select</option>
            <option>Below ₹5 lakh</option><option>₹5 – 10 lakh</option><option>₹10 – 20 lakh</option><option>Above ₹20 lakh</option>
          </select>
        </label>
        <label>Space available (sq ft)<input value={f.space} onChange={set('space')} inputMode="numeric" /></label>
        <label className="full">Message (optional)<textarea rows={3} value={f.note} onChange={set('note')} /></label>
      </div>
      <button className="btn btn-wa" type="submit"><WhatsAppIcon size={20} /> Send enquiry on WhatsApp</button>
      <p className="tiny">Prefer email? Write to <a href={`mailto:${BRAND.email}?subject=Franchise enquiry&body=${encodeURIComponent(text())}`}>{BRAND.email}</a></p>
    </form>
  );
}
