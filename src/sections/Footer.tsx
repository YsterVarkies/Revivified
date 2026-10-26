import FlowingMenu from '@/components/FlowingMenu';
import { contact, credits, whatsappLink } from '@/data/site';
import './Footer.css';

const menu = [
  { text: 'Treatments', link: '#treatments', image: '/images/menu-face.webp', marquee: 'Skin, laser, make-up, nails' },
  { text: 'Academy', link: '#academy', image: '/images/treatment-room.webp', marquee: 'Twenty-nine courses' },
  { text: 'Boutique', link: '#boutique', image: '/images/ella-floral.webp', marquee: 'Dresses for hire' },
  { text: 'Products', link: '#products', image: '/images/retail-lovella.webp', marquee: 'On our shelves' },
  { text: 'Visit', link: '#visit', image: '/images/lounge-window.webp', marquee: '32 Peter Mokaba Street' },
];

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="footer__photo">
        <img
          src="/images/salon-mirror-chair.webp"
          alt="A silver baroque mirror, cane chairs and the GHD shelves in the salon lounge"
          width={1000}
          height={1288}
          loading="lazy"
        />
      </div>
      <div className="footer__field">
        <h2 id="footer-title" className="footer__name">
          Revivified Beauty
        </h2>
        <div className="footer__menu">
          <FlowingMenu
            items={menu}
            ariaLabel="Footer"
            bgColor="transparent"
            textColor="#eef0ec"
            marqueeBgColor="#f8f8f5"
            marqueeTextColor="#1c2a2c"
            dividers={false}
            dimInactive
            align="left"
            imageShape="rounded"
            speed={50}
          />
        </div>
        <div className="footer__blocks">
          <div>
            <h3>Find us</h3>
            <p>
              {contact.street}
              <br />
              {contact.town}
              <br />
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                WhatsApp {contact.whatsappDisplay}
              </a>
            </p>
          </div>
          <div>
            <h3>Follow</h3>
            <p>
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <br />
              <a href={contact.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <br />
              <a href={contact.youtube} target="_blank" rel="noreferrer">
                YouTube
              </a>
            </p>
          </div>
        </div>
        <div className="footer__legal">
          <p>
            Rejoice always, pray continually, give thanks in all circumstances. 1 Thessalonians 5:16-18
          </p>
          <p>
            © {new Date().getFullYear()} Revivified Beauty. Atmosphere photographs on Unsplash by{' '}
            {credits.map(c => c.who).join(', ')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
