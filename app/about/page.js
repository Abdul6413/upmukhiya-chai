
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Launches from '@/components/Launches';

export const metadata = {
  title: 'About us',
  description: 'Meet the team behind Upmukhiya Chai: our CEO, Chief Master Tea and UP Head & COO.'
};

export default function About() {
  return (
    <>
      <PageHero
        title="About Upmukhiya Chai"
        hi="हमारी कहानी"
        text="A Moradabad chai brand growing into a franchise family across Uttar Pradesh."
        img="/images/hero/signboard-kulhad.jpg"
        pos="center 45%"
        alt="Upmukhiya Chai kulhad with signboard and spices"
      />

      <section className="section">
        <div className="wrap split">
          <div className="split-text">
            <h2>Our story</h2>
            <p>
              In Uttar Pradesh, chai is not a drink, it is a daily meeting place.
              Upmukhiya Chai brings that spirit to a clean, well-run outlet where
              the tea is strong, the kulhad is fresh and the welcome is warm.
            </p>
            <p>
              We pair classic chai with simple snacks and a consistent recipe,
              which makes the brand easy for franchise partners to run and easy
              for customers to love.
            </p>
          </div>

          <div className="photo-pair">
            <div className="ph tall">
              <Image
                src="/images/tea/kulhad-1.jpg"
                alt="Kulhad chai with spices"
                fill
                sizes="(max-width:800px) 90vw, 40vw"
              />
            </div>
            <div className="ph">
              <Image
                src="/images/tea/kulhad-3.jpg"
                alt="Upmukhiya Chai kulhad with signboard"
                fill
                sizes="(max-width:800px) 90vw, 30vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chief Master Tea */}
      <section className="section master">
        <div className="wrap master-grid">
          <div className="portrait">
            <Image
              src="/images/team/anadil-pasha.jpg"
              alt="Mr. Anadil Pasha, Chief Master Tea"
              fill
              sizes="(max-width:800px) 80vw, 30vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
            />
          </div>

          <div>
            <p className="role">Chief Master Tea · 10 years of experience</p>
            <h2>Mr. Anadil Pasha</h2>
            <p>
              With ten years in the tea trade, Mr. Anadil Pasha knows leaf
              the way a jeweller knows stones. He selects every lot, balances
              the ginger, cardamom and spice, and tastes each batch before
              it is approved for our outlets.
            </p>
            <p>
              His standard is simple: a cup of Upmukhiya Chai must taste
              the same in Moradabad as it does in any other town. He trains
              our franchise teams on the recipe, the brew time and the
              serving style that make that possible.
            </p>
          </div>
        </div>
      </section>

      {/* UP Head & COO and CEO */}
      <section className="section">
        <div className="wrap team-grid">

          <div className="person">
            <div className="portrait">
              <Image
                src="/images/team/haider-ali.jpg"
                alt="Mr. Haider Ali, UP Head and COO of Upmukhiya Chai"
                fill
                sizes="(max-width:800px) 80vw, 340px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 20%'
                }}
              />
            </div>

            <div>
              <p className="role dark">UP Head & COO</p>
              <h3>Mr. Haider Ali</h3>
              <p>
                Mr. Haider Ali serves as the Uttar Pradesh Head and
                Chief Operating Officer (COO) of Upmukhiya Chai.
                He oversees franchise operations, business expansion,
                outlet management and operational excellence across
                Uttar Pradesh.
              </p>
              <p>
                He supports new franchise partners, from location
                discussions to launch day and everyday outlet support.
              </p>
            </div>
          </div>

          <div className="person ceo-card">
            <div>
              <p className="role dark">Chief Executive Officer</p>
              <h3>Mr. Aamir Pasha</h3>
              <p>
                “Quality, honesty and a warm welcome are the three things
                we never compromise on. Every outlet that carries our
                name carries that promise.”
              </p>
              <p className="muted">Message from the CEO</p>
            </div>
          </div>

        </div>
      </section>

      <Launches />

      <section className="section tint">
        <div className="wrap values">
          <div>
            <h3>Honest ingredients</h3>
            <p>Strong leaf, fresh ginger, whole cardamom and real milk. No shortcuts in the cup.</p>
          </div>

          <div>
            <h3>Consistent recipe</h3>
            <p>A tested method and trained staff, so every outlet serves the same taste.</p>
          </div>

          <div>
            <h3>Partners first</h3>
            <p>Training, branding and ongoing guidance so your outlet can succeed.</p>
          </div>
        </div>
      </section>
    </>
  );
}
