import { useRef } from 'react';
import StaggeredMenu from '@/components/StaggeredMenu';
import { contact, nav } from '@/data/site';
import { ScrollTrigger, useGSAP } from '@/lib/gsap';
import { asset } from '@/lib/asset';
import './Header.css';

const Wordmark = () => (
  <a className="wordmark" href="#top" aria-label="Revivified Beauty, back to the top">
    <img src={asset('logo-mark.png')} alt="" width={46} height={36} />
    <span>Revivified Beauty</span>
  </a>
);

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // A plain bar: transparent over the opening hero, solid once the page moves on,
  // tucked away while reading down and back as soon as the reader scrolls up.
  useGSAP(() => {
    const bar = ref.current;
    if (!bar) return;
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: self => {
        const y = self.scroll();
        const tucked = self.direction === 1 && y > window.innerHeight * 2.4;
        bar.toggleAttribute('data-solid', y > window.innerHeight * 0.6);
        bar.toggleAttribute('data-hidden', tucked);
        mobileRef.current?.toggleAttribute('data-hidden', tucked);
      },
    });
  });

  return (
    <>
      <header ref={ref} className="site-header">
        <Wordmark />
        <nav aria-label="Main">
          <ul className="site-header__links">
            {nav.map(item => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a className="site-header__book" href={contact.booksy} target="_blank" rel="noreferrer">
                Book
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div ref={mobileRef} className="mobile-nav">
        <StaggeredMenu
          isFixed
          position="right"
          logo={<Wordmark />}
          items={[
            ...nav.map(item => ({ label: item.label, ariaLabel: `Go to ${item.label}`, link: item.href })),
            { label: 'Book on Booksy', ariaLabel: 'Book on Booksy', link: contact.booksy },
          ]}
          socialItems={[
            { label: 'Instagram', link: contact.instagram },
            { label: 'Facebook', link: contact.facebook },
            { label: 'WhatsApp', link: `https://wa.me/${contact.whatsappNumber}` },
          ]}
          displayItemNumbering={false}
          colors={['#d5dad6', '#1e6f73']}
          accentColor="#1e6f73"
          menuButtonColor="#1c2a2c"
          openMenuButtonColor="#1c2a2c"
          changeMenuColorOnOpen={false}
        />
      </div>
    </>
  );
}
