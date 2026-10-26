import { useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { badges, story } from '@/data/site';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import './Intro.css';

export default function Intro() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          '.intro__flyer',
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: { trigger: '.intro__flyer', start: 'top 88%', once: true },
          },
        );
        gsap.from('.intro__badges img', {
          y: 24,
          opacity: 0,
          rotate: -12,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '.intro__badges', start: 'top 88%', once: true },
        });
        gsap.from('.intro__note', {
          y: 20,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: { trigger: '.intro__note', start: 'top 92%', once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="intro" aria-labelledby="intro-title">
      <h2 id="intro-title" className="sr-only">
        About the salon
      </h2>
      <div className="intro__grid">
        <a className="intro__flyer" href="/images/services-flyer.webp" target="_blank" rel="noreferrer">
          <img
            src="/images/services-flyer.webp"
            alt="Revivified Beauty services: laser treatments, teeth whitening, hair and upstyles, make-up, aesthetic skincare, slimming, nails in acrylic and gel, permanent make-up, waxing, massage, sunbed and spray tan. WhatsApp 071 359 4956, Revivified.booksy.com, 32 Peter Mokaba Street, Potchefstroom."
            width={1000}
            height={1778}
            loading="lazy"
          />
        </a>
        <ScrollReveal
          as="p"
          containerClassName="intro__statement"
          baseOpacity={0.14}
          enableBlur={false}
          baseRotation={0}
          wordAnimationEnd="top 30%"
        >
          {story}
        </ScrollReveal>
        <figure className="intro__badges" aria-label="Memberships">
          {badges.map(badge => (
            <img key={badge.src} src={badge.src} alt={badge.alt} width={320} height={320} loading="lazy" />
          ))}
        </figure>
        <p className="intro__note">
          Welkom by Revivified Beauty.
          <br />
          Established August 2016.
          <br />
          32 Peter Mokaba Street,
          <br />
          Potchefstroom.
        </p>
      </div>
    </section>
  );
}
