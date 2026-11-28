import Image from 'next/image';
import { LAUNCHES } from './data';

export default function Launches({ title = 'Outlet openings and celebrations', text = 'Every new Upmukhiya Chai outlet opens with the people who make it special: family, neighbours and the whole community.' }) {
  return (
    <section className="section launches">
      <div className="wrap">
        <div className="gallery-head">
          <h2>{title}</h2>
          <p className="muted">{text}</p>
        </div>
        <div className="launch-grid">
          {LAUNCHES.map((l) => (
            <figure key={l.img} className="launch">
              <Image src={l.img} alt={l.alt} fill sizes="(max-width:700px) 50vw, 25vw" style={{ objectFit: 'cover', objectPosition: l.pos }} />
              <figcaption>
                <strong>{l.title}</strong>
                <span>{l.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
