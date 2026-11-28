import Image from 'next/image';
/* Split hero: text on the left, full uncovered photo on the right.
   `pos` controls which part of the photo stays in view. */
export default function PageHero({ title, hi, text, img, pos = 'center', alt = '' }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-grid">
        <div className="page-hero-copy">
          {hi && <p className="hi sub-hi" lang="hi">{hi}</p>}
          <h1>{title}</h1>
          {text && <p className="lead">{text}</p>}
        </div>
        <div className="page-hero-media">
          <Image src={img} alt={alt} fill priority sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: pos }} />
        </div>
      </div>
    </section>
  );
}
