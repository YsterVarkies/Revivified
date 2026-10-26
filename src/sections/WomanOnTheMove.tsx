import { useRef } from 'react';
import { whatsappLink, womanOnTheMove } from '@/data/site';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import './WomanOnTheMove.css';

export default function WomanOnTheMove() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('.wotm__copy > *', {
          y: 28,
          opacity: 0,
          duration: 0.95,
          ease: 'expo.out',
          stagger: 0.09,
          scrollTrigger: { trigger: '.wotm__copy', start: 'top 80%', once: true },
        });
        gsap.from('.wotm__photo', {
          y: 32,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.09,
          scrollTrigger: { trigger: '.wotm__photos', start: 'top 85%', once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="woman-on-the-move" className="wotm" aria-labelledby="wotm-title">
      <div className="wotm__copy">
        <h2 id="wotm-title">Woman on the Move</h2>
        <p>Crossbody phone cases, so your phone stays with you and your hands stay free.</p>
        <a
          className="text-link"
          href={whatsappLink('Hello Revivified Beauty, I would like to know more about the Woman on the Move phone cases.')}
          target="_blank"
          rel="noreferrer"
        >
          Ask about phone cases on WhatsApp <span className="btn__arrow" aria-hidden="true">→</span>
        </a>
      </div>
      <div className="wotm__photos">
        {womanOnTheMove.photos.map((photo, i) => (
          <figure key={photo.src} className="wotm__photo" data-slot={i}>
            <img src={photo.src} alt={photo.alt} width={352} height={352} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
