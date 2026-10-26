import { useRef } from 'react';
import SplitText from '@/components/SplitText';
import TiltedCard from '@/components/TiltedCard';
import { boutique, whatsappLink } from '@/data/site';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import './Boutique.css';

// Offsets from the centre of the band (px at 1440 wide), width, and how far each picture drifts.
const layout = [
  { x: -430, y: -360, w: 220, drift: 10 },
  { x: 170, y: -390, w: 200, drift: 5 },
  { x: -480, y: 20, w: 200, drift: 8 },
  { x: 260, y: -40, w: 220, drift: 12 },
  { x: -90, y: 220, w: 200, drift: 6 },
];

export default function Boutique() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('.boutique__photo').forEach((photo, i) => {
          const drift = layout[i]?.drift ?? 6;
          gsap.fromTo(
            photo,
            { yPercent: drift },
            {
              yPercent: -drift,
              ease: 'none',
              scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          );
        });
        gsap.from('.boutique__photo .tilted-card', {
          opacity: 0,
          scale: 0.92,
          duration: 1.1,
          ease: 'expo.out',
          stagger: { each: 0.07, from: 'center' },
          scrollTrigger: { trigger: root.current, start: 'top 70%', once: true },
        });
        gsap.from('.boutique__center p, .boutique__center a', {
          y: 20,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.08,
          delay: 0.3,
          scrollTrigger: { trigger: '.boutique__center', start: 'top 80%', once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="boutique" className="boutique" aria-labelledby="boutique-title">
      <div className="boutique__band">
        {boutique.photos.map((photo, i) => {
          const spot = layout[i];
          return (
            <div
              key={photo.src}
              className="boutique__photo"
              data-slot={i}
              style={{
                left: `calc(50% + ${spot.x}px)`,
                top: `calc(50% + ${spot.y}px)`,
                width: spot.w,
              }}
            >
              <TiltedCard
                imageSrc={photo.src}
                altText={photo.alt}
                containerWidth="100%"
                containerHeight="100%"
                imageWidth="100%"
                imageHeight="100%"
                radius={0}
                rotateAmplitude={9}
                scaleOnHover={1.05}
                showTooltip={false}
                flipOnClick={false}
                glare={0}
                shadow={0}
                gyroscope={false}
                intro={false}
              />
            </div>
          );
        })}

        <div className="boutique__center">
          <SplitText
            tag="h2"
            text="Elegantly Styled Boutique"
            textAlign="center"
            splitType="words"
            mask
            delay={90}
            duration={1.1}
            ease="expo.out"
            from={{ yPercent: 110 }}
            to={{ yPercent: 0 }}
          />
          <p>
            Ella Carlé clothing to shop in the salon, with formal wear for hire and Woman on the Move phone cases.
          </p>
          <a
            className="text-link"
            href={whatsappLink('Hello Revivified Beauty, I would like to know more about the boutique.')}
            target="_blank"
            rel="noreferrer"
          >
            Ask about the boutique on WhatsApp <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
