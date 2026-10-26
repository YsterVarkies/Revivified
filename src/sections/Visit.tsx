import { useRef } from 'react';
import Magnet from '@/components/Magnet';
import { contact, whatsappLink } from '@/data/site';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { asset } from '@/lib/asset';
import './Visit.css';

export default function Visit() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          '.visit__photo img',
          { yPercent: -5 },
          { yPercent: 5, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } },
        );
        gsap.from('.visit__card > *', {
          y: 22,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.07,
          scrollTrigger: { trigger: '.visit__card', start: 'top 85%', once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="visit" className="visit" aria-labelledby="visit-title">
      <div className="visit__photo">
        <img
          src={asset('images/lounge-window.webp')}
          alt="A bride in a beaded gown by the lounge window, beside a tufted silver settee"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>
      <div className="visit__card">
        <h2 id="visit-title">Visit the salon</h2>
        <address>
          {contact.street}
          <br />
          {contact.town}
        </address>
        <dl className="visit__rows">
          <div>
            <dt>Bookings</dt>
            <dd>Online, any time</dd>
          </div>
          <div>
            <dt>WhatsApp</dt>
            <dd>
              <a className="text-link" href={whatsappLink()} target="_blank" rel="noreferrer">
                {contact.whatsappDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt>Directions</dt>
            <dd>
              <a className="text-link" href={contact.maps} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </dd>
          </div>
        </dl>
        <Magnet padding={40} magnetStrength={6} wrapperClassName="visit__magnet">
          <a className="btn visit__book" href={contact.booksy} target="_blank" rel="noreferrer">
            Book on Booksy <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </Magnet>
      </div>
    </section>
  );
}
