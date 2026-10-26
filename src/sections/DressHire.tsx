import { useRef } from 'react';
import { dressHire, whatsappLink } from '@/data/site';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import './DressHire.css';

export default function DressHire() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('.hire__copy > *', {
          y: 28,
          opacity: 0,
          duration: 0.95,
          ease: 'expo.out',
          stagger: 0.09,
          scrollTrigger: { trigger: '.hire__copy', start: 'top 80%', once: true },
        });
        gsap.fromTo(
          '.hire__flyer',
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'expo.out',
            delay: 0.15,
            scrollTrigger: { trigger: '.hire__flyer', start: 'top 85%', once: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="dress-hire" className="hire" aria-labelledby="hire-title">
      <div className="hire__copy">
        <h2 id="hire-title">Dress hire</h2>
        <p>Formal wear to hire from the Elegantly Styled Boutique. Try yours on in the salon.</p>
        <a
          className="text-link"
          href={whatsappLink('Hello Revivified Beauty, I would like to come in and try on a dress for hire.')}
          target="_blank"
          rel="noreferrer"
        >
          Book a fitting on WhatsApp <span className="btn__arrow" aria-hidden="true">→</span>
        </a>
      </div>
      <figure className="hire__flyer">
        <img src={dressHire.image} alt={dressHire.alt} width={999} height={999} loading="lazy" />
      </figure>
    </section>
  );
}
