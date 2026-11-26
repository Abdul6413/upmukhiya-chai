import Image from 'next/image';
export default function PageHero({ title, hi, text, img, pos = 'center' }) {
  return (
    <section className="page-hero">
      <Image src={img} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: pos }} />
      <div className="page-hero-shade" />
      <div className="wrap page-hero-copy">
        {hi && <p className="hi sub-hi">{hi}</p>}
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  );
}
