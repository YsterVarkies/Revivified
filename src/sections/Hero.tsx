import { useRef } from 'react';
import SplitText from '@/components/SplitText';
import Magnet from '@/components/Magnet';
import { contact } from '@/data/site';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { asset } from '@/lib/asset';
import './Hero.css';

// The salon's own lounge is the first thing you see: a small window onto the room
// that opens to the edges of the screen as you scroll into it.
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const openOver = () => window.innerHeight * (window.innerWidth < 1100 ? 0.7 : 1);
        const trigger = { trigger: root.current, start: 'top top', scrub: true };

        gsap.fromTo('.hero__picture', { '--k': 1 }, { '--k': 0, ease: 'none', scrollTrigger: { ...trigger, end: () => `+=${openOver()}` } });
        gsap.fromTo('.hero__picture img', { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { ...trigger, end: () => `+=${openOver()}` } });
        gsap.to('.hero__picture', {
          filter: 'brightness(0.62)',
          ease: 'none',
          scrollTrigger: { ...trigger, end: () => `+=${openOver() * 0.38}` },
        });
        gsap.to('.hero__words', {
          color: '#ffffff',
          ease: 'none',
          scrollTrigger: { ...trigger, end: () => `+=${openOver() * 0.38}` },
        });
        gsap.from('.hero__aside > *', { y: 24, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.09, delay: 0.55 });
        gsap.from('.hero__picture', { opacity: 0, duration: 1.2, ease: 'power2.out' });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__stage">
        <div className="hero__picture">
          <img
            src={asset('images/salon-lounge.webp')}
            alt="The lounge at Revivified Beauty: silver cane chairs around a glass table, shelves of GHD stylers and the Welkom board"
            width={2340}
            height={1560}
            fetchPriority="high"
          />
        </div>
        <div className="hero__words">
          <div className="hero__title" id="hero-title">
            <SplitText
              tag="h1"
              text="Revivified Beauty"
              textAlign="left"
              splitType="chars"
              mask
              trigger="load"
              delay={16}
              duration={0.85}
              ease="expo.out"
              from={{ yPercent: 108 }}
              to={{ yPercent: 0 }}
            />
            <p className="hero__kind">Aesthetic and beauty salon, Potchefstroom</p>
          </div>
          <div className="hero__aside">
            <p>
              Skin, laser, make-up, nails and body treatments on Peter Mokaba Street since 2016, in a calm and private
              salon.
            </p>
            <Magnet padding={60} magnetStrength={4} wrapperClassName="magnet-wrap">
              <a className="btn" href={contact.booksy} target="_blank" rel="noreferrer">
                Book on Booksy <span className="btn__arrow" aria-hidden="true">→</span>
              </a>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
