import { useRef } from 'react';
import CountUp from '@/components/CountUp';
import { academy, whatsappLink } from '@/data/site';
import { gsap, MOTION_OK, useGSAP } from '@/lib/gsap';
import { asset } from '@/lib/asset';
import './Academy.css';

const courseCount = academy.slips.reduce((sum, slip) => sum + slip.courses.length, 0);

// Each slip is a course card from the training room, standing along the foot of the photograph.
const slipHeights = ['31svh', '37svh', '28svh', '35svh', '24svh', '22svh'];
const slipTilts = [0, -1.5, 0, 1.2, 0, -1];

export default function Academy() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('.academy__copy > *', {
          y: 28,
          opacity: 0,
          duration: 0.95,
          ease: 'expo.out',
          stagger: 0.09,
          scrollTrigger: { trigger: '.academy__copy', start: 'top 80%', once: true },
        });
        gsap.from('.academy__slip', {
          yPercent: 60,
          duration: 1.2,
          ease: 'expo.out',
          stagger: 0.07,
          scrollTrigger: { trigger: '.academy__slips', start: 'top 95%', once: true },
        });
        gsap.fromTo(
          '.academy__photo',
          { yPercent: -6 },
          { yPercent: 6, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="academy" className="academy" aria-labelledby="academy-title">
      <img
        className="academy__photo"
        src={asset('images/treatment-room.webp')}
        alt="The treatment room: a silver desk, tall windows onto the garden and a gown on a mannequin"
        width={1440}
        height={810}
        loading="lazy"
      />
      <div className="academy__copy">
        <h2 id="academy-title">Skills development</h2>
        <p>
          {academy.before} <CountUp to={courseCount} duration={1.4} /> {academy.after}
        </p>
        <a
          className="text-link"
          href={whatsappLink('Hello Revivified Beauty, I would like to know more about your skills development training.')}
          target="_blank"
          rel="noreferrer"
        >
          Ask about a course on WhatsApp <span className="btn__arrow" aria-hidden="true">→</span>
        </a>
      </div>
      <ul className="academy__slips" aria-label="Courses on offer">
        {academy.slips.map((slip, i) => (
          <li
            key={slip.name}
            className="academy__slip"
            style={{ minHeight: `max(${slipHeights[i]}, 200px)`, rotate: `${slipTilts[i]}deg` }}
          >
            <h3>{slip.name}</h3>
            <span className="academy__rule" aria-hidden="true">
              · · · · · · · · · · · · · ·
            </span>
            <ul className="academy__courses">
              {slip.courses.map(course => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
