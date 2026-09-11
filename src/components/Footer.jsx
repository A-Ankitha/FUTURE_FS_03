import {
  Camera,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import { BUSINESS } from '../data/business';

const LINKS = [
  ['Home', '/'],
  ['Menu', '/menu'],
  ['About', '/about'],
  ['Gallery', '/gallery'],
  ['Visit Us', '/visit'],
  ['Contact', '/contact'],
];

export default function Footer() {
  const hasPhone = Boolean(BUSINESS.contact.phone);
  const hasEmail = Boolean(BUSINESS.contact.email);

  const socialLinks = [
    {
      key: 'instagram',
      url: BUSINESS.social.instagram,
      label: 'Instagram',
      icon: <Camera size={17} />,
    },
    {
      key: 'facebook',
      url: BUSINESS.social.facebook,
      label: 'Facebook',
      icon: 'f',
    },
  ].filter((social) => Boolean(social.url));

  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-brand-mark">
            <span>頂</span>

            <div>
              <strong>ITADAKI</strong>
              <small>RAMEN SHOP</small>
            </div>
          </div>

          <p>
            {BUSINESS.slogan}
          </p>

          <p>
            {BUSINESS.japaneseSlogan}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="footer-heading">
            Explore
          </h3>

          <ul className="footer-links">
            {LINKS.map(([label, path]) => (
              <li key={path}>
                <Link to={path}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-heading">
            Contact
          </h3>

          <div className="footer-contact">

            <div>
              <MapPin size={14} />
              <span>
                {BUSINESS.address.full}
              </span>
            </div>

            {hasPhone && (
              <a
                href={`tel:${BUSINESS.contact.phone}`}
              >
                <Phone size={14} />
                <span>
                  {BUSINESS.contact.phone}
                </span>
              </a>
            )}

            {hasEmail && (
              <a
                href={`mailto:${BUSINESS.contact.email}`}
              >
                <Mail size={14} />
                <span>
                  {BUSINESS.contact.email}
                </span>
              </a>
            )}

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="footer-heading">
            Follow Us
          </h3>

          {socialLinks.length > 0 ? (
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          ) : (
            <p className="footer-social-note">
              Social links are not provided for this
              independent concept project.
            </p>
          )}

          <p
            style={{
              marginTop: '22px',
              color: 'rgba(212,165,116,.65)',
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              fontSize: '15px',
              lineHeight: 1.5,
            }}
          >
            A taste of Japan
            <br />
            in Mangalore
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container footer-bottom">
        <div>
          <p>
            © {new Date().getFullYear()} Itadaki Ramen Shop.
          </p>

          <p className="footer-disclaimer">
            Independent student project created for educational
            purposes. Not affiliated with or endorsed by
            Itadaki Ramen Shop.
          </p>
        </div>

        <p>
          Crafted as an independent concept project.
        </p>
      </div>

      <div
        className="footer-decoration"
        aria-hidden="true"
      >
        頂
      </div>
    </footer>
  );
}