import { useEffect, useRef, useState } from 'react';
import SplitText from '@/components/SplitText';
import { reviews } from '@/data/site';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import './Reviews.css';

export default function Reviews() {
  const root = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (step: number) => setIndex(i => (i + step + reviews.length) % reviews.length);

  // Move through the reviews on their own while the section is on screen, unless the reader is
  // pointing at them, has focused a control, or asked for less motion.
  useEffect(() => {
    const section = root.current;
    if (!section || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer = 0;
    const observer = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer);
      if (entry.isIntersecting) timer = window.setInterval(() => go(1), 6500);
    });
    observer.observe(section);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [paused]);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          '.reviews__photo',
          { scale: 1.14 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="reviews"
      className="reviews"
      aria-labelledby="reviews-title"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <h2 id="reviews-title" className="reviews__title">
        Testimonials
      </h2>
      <img
        className="reviews__photo"
        src="/images/calla-lily.webp"
        alt=""
        width={2400}
        height={1350}
        loading="lazy"
      />
      <blockquote className="reviews__quote" aria-live="polite">
        <SplitText
          key={index}
          tag="p"
          text={`“${reviews[index]}”`}
          textAlign="left"
          splitType="words"
          mask
          delay={45}
          duration={0.9}
          ease="expo.out"
          rootMargin="0px"
          from={{ yPercent: 110 }}
          to={{ yPercent: 0 }}
        />
      </blockquote>
      <div className="reviews__meta">
        <p>Client review, five stars</p>
        <div className="reviews__controls">
          <button type="button" onClick={() => go(-1)} aria-label="Previous review">
            ←
          </button>
          <span>
            {index + 1} of {reviews.length}
          </span>
          <button type="button" onClick={() => go(1)} aria-label="Next review">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
