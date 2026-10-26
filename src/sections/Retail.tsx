import { useRef } from 'react';
import SplitText from '@/components/SplitText';
import { counterNote, retail } from '@/data/site';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import './Retail.css';

export default function Retail() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('.retail__lede', {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          delay: 0.35,
          scrollTrigger: { trigger: '.retail__head', start: 'top 75%', once: true },
        });
        gsap.utils.toArray<HTMLElement>('.retail__row').forEach(row => {
          gsap.from(row.querySelectorAll('.retail__text > *'), {
            y: 26,
            opacity: 0,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.08,
            scrollTrigger: { trigger: row, start: 'top 82%', once: true },
          });
          gsap.fromTo(
            row.querySelector('.retail__photo'),
            { clipPath: 'inset(0% 0% 100% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.3,
              ease: 'expo.out',
              delay: 0.15,
              scrollTrigger: { trigger: row, start: 'top 82%', once: true },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="products" className="retail" aria-labelledby="retail-title">
      <div className="retail__head">
        <SplitText
          tag="h2"
          text="The products on our shelves"
          textAlign="center"
          splitType="words"
          mask
          delay={80}
          duration={1.1}
          ease="expo.out"
          from={{ yPercent: 110 }}
          to={{ yPercent: 0 }}
        />
        <p className="retail__lede">
          The ranges we use in treatment are the ones we sell, so the care you get in the chair carries on at home.
        </p>
      </div>

      {retail.map(item => (
        <article key={item.name} className="retail__row">
          <div className="retail__text">
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </div>
          <figure className={`retail__photo retail__photo--${item.size}`}>
            <img src={item.image} alt={item.alt} loading="lazy" width={800} height={1000} />
          </figure>
        </article>
      ))}

      <p className="retail__note">{counterNote}</p>
    </section>
  );
}
