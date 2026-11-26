import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FranchiseForm from '@/components/FranchiseForm';

export const metadata = { title: 'Franchise', description: 'Apply for an Upmukhiya Chai franchise in Uttar Pradesh. Branding, training and support from our team.' };

const BENEFITS = [
  ['Trusted brand', 'A recognisable name, logo and outlet look that customers remember.'],
  ['Tested recipes', 'Our Chief Master Tea sets the blends and the method for every cup.'],
  ['Training', 'Hands-on training for you and your staff before launch.'],
  ['Outlet design', 'Warm, modern interiors and branded kulhads, cups and signage.'],
  ['Simple menu', 'Chai, snacks and cold drinks that are quick to prepare and easy to manage.'],
  ['Ongoing support', 'Our UP Head and head office stay in touch after you open.'],
];
const STEPS = [
  ['Enquire', 'Send your details through the form or call us.'],
  ['Discuss', 'We talk about your city, space and budget.'],
  ['Agreement', 'Finalise the franchise terms with our team.'],
  ['Set up and train', 'Design the outlet and train your staff.'],
  ['Launch', 'Open your doors with our support on the ground.'],
];

export default function Franchise() {
  return (
    <>
      <PageHero title="Open an Upmukhiya Chai outlet" hi="फ्रेंचाइज़ी के लिए आवेदन करें" text="Be part of our growing chai brand." img="/images/store/interior-heritage.jpg" pos="center 60%" />
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Why partner with us</h2></div>
          <div className="grid benefit-grid">
            {BENEFITS.map(([t, d]) => (<div key={t} className="benefit"><h3>{t}</h3><p>{d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap split">
          <div className="poster"><Image src="/images/store/franchise-poster.jpg" alt="Upmukhiya Chai franchise opportunity" fill sizes="(max-width:800px) 95vw, 45vw" /></div>
          <div className="split-text">
            <h2>How it works</h2>
            <ol className="steps">
              {STEPS.map(([t, d]) => (<li key={t}><strong>{t}</strong><span>{d}</span></li>))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" id="apply">
        <div className="wrap apply-grid">
          <FranchiseForm />
          <div className="apply-side">
            <div className="ph"><Image src="/images/store/wall.jpg" alt="Upmukhiya Chai outlet wall" fill sizes="(max-width:800px) 95vw, 40vw" /></div>
            <p>Investment details and terms are shared by our team after your enquiry, based on your city and outlet size.</p>
          </div>
        </div>
      </section>
    </>
  );
}
