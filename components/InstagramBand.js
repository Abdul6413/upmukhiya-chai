import { SOCIAL } from './data';
import { InstagramIcon } from './Icons';

export default function InstagramBand() {
  return (
    <section className="insta">
      <div className="wrap insta-grid">
        <div>
          <h2>Follow our chai journey</h2>
          <p>New outlet openings, fresh brews and behind-the-scenes moments, every day on Instagram.</p>
        </div>
        <a className="btn btn-insta" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramIcon size={20} /> {SOCIAL.instagramHandle}
        </a>
      </div>
    </section>
  );
}
