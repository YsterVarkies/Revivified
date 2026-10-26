import { useMemo, useRef, useState } from 'react';
import { contact, treatmentGroups, whatsappLink, type Treatment } from '@/data/site';
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from '@/lib/gsap';
import './TreatmentMenu.css';

const allTreatments = treatmentGroups.flatMap(group => group.items);

function visitMessage(chosen: Treatment[]) {
  if (!chosen.length) return 'Hello Revivified Beauty, I would like to make a booking.';
  return `Hello Revivified Beauty, I would like to book: ${chosen.map(t => t.name).join(', ')}. When do you have a gap?`;
}

// The live thing on the page: tick treatments on the printed menu and the visit is
// written out for you as a WhatsApp message to the salon.
function VisitTray({ chosen, onClear, compact = false }: { chosen: Treatment[]; onClear: () => void; compact?: boolean }) {
  const count = chosen.length;
  return (
    <div className={`tray${compact ? ' tray--compact' : ''}`} data-filled={count > 0 || undefined}>
      <p className="tray__summary" aria-live="polite">
        {count === 0
          ? 'Tick the treatments you would like and we will write the WhatsApp message for you.'
          : `Your visit: ${chosen.map(t => t.name).join(', ')}.`}
      </p>
      <div className="tray__actions">
        <a className="btn btn--paper" href={whatsappLink(visitMessage(chosen))} target="_blank" rel="noreferrer">
          {count === 0 ? 'Message us on WhatsApp' : `Send ${count === 1 ? 'it' : `all ${count}`} on WhatsApp`}
          <span className="btn__arrow" aria-hidden="true">
            →
          </span>
        </a>
        {count > 0 && (
          <button type="button" className="tray__clear" onClick={onClear}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default function TreatmentMenu() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);

  const chosen = useMemo(() => allTreatments.filter(t => picked.includes(t.id)), [picked]);
  const toggle = (id: string) => setPicked(list => (list.includes(id) ? list.filter(x => x !== id) : [...list, id]));

  useGSAP(
    () => {
      // The held frame swaps its photograph as each group of the menu passes the middle of the screen.
      // The last group whose top has passed the middle of the screen owns the frame, so jumps land right too.
      const groups = gsap.utils.toArray<HTMLElement>('.menu__group');
      const pick = () => {
        const line = window.innerHeight * 0.55;
        const index = groups.reduce((found, group, i) => (group.getBoundingClientRect().top < line ? i : found), 0);
        setActive(index);
      };
      ScrollTrigger.create({
        trigger: '.menu__sheet',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: pick,
        onRefresh: pick,
      });

      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('.menu__sheet-head > *', {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.08,
          scrollTrigger: { trigger: '.menu__sheet', start: 'top 80%', once: true },
        });
        gsap.utils.toArray<HTMLElement>('.menu__group').forEach(group => {
          gsap.from(group.querySelectorAll('.menu__group-title, .menu__item'), {
            y: 22,
            opacity: 0,
            duration: 0.8,
            ease: 'expo.out',
            stagger: 0.06,
            scrollTrigger: { trigger: group, start: 'top 85%', once: true },
          });
        });
        gsap.from('.menu__frame', {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: { trigger: '.menu__frame', start: 'top 85%', once: true },
        });
      });
    },
    { scope: root },
  );

  const group = treatmentGroups[active];

  return (
    <section ref={root} id="treatments" className="menu" aria-labelledby="menu-title">
      <div className="menu__inner">
        <div className="menu__aside">
          <figure className="menu__frame">
            {treatmentGroups.map((g, i) => (
              <img
                key={g.id}
                src={g.image}
                alt={i === active ? g.alt : ''}
                aria-hidden={i === active ? undefined : true}
                data-active={i === active || undefined}
                width={1000}
                height={1250}
                loading="lazy"
              />
            ))}
          </figure>
          <p className="menu__caption" aria-live="polite">
            {group.caption}
          </p>
          <VisitTray chosen={chosen} onClear={() => setPicked([])} />
        </div>

        <div className="menu__sheet">
          <div className="menu__sheet-head">
            <h2 id="menu-title">The treatment menu</h2>
            <p>
              Sixteen treatments in four groups. Prices and open times are on{' '}
              <a className="text-link" href={contact.booksy} target="_blank" rel="noreferrer">
                Booksy
              </a>
              .
            </p>
          </div>

          {treatmentGroups.map(g => (
            <div key={g.id} className="menu__group" data-group={g.id}>
              <img className="menu__group-photo" src={g.image} alt={g.alt} width={1000} height={1250} loading="lazy" />
              <h3 className="menu__group-title">{g.name}</h3>
              <ul className="menu__list">
                {g.items.map(item => {
                  const on = picked.includes(item.id);
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="menu__item"
                        aria-pressed={on}
                        onClick={() => toggle(item.id)}
                      >
                        <span className="menu__item-name">{item.name}</span>
                        <span className="menu__item-detail">{item.detail}</span>
                        <span className="menu__item-mark" aria-hidden="true">
                          {on ? 'Added' : 'Add'}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <p className="menu__foot">
            Prices and open times on revivified.booksy.com
            <br />
            WhatsApp {contact.whatsappDisplay}
          </p>
        </div>
      </div>

      <div className="menu__mobile-tray" data-show={chosen.length > 0 || undefined}>
        <VisitTray chosen={chosen} onClear={() => setPicked([])} compact />
      </div>
    </section>
  );
}
