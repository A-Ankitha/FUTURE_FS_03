import {
  Clock3,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

import SakuraPetals from '../components/SakuraPetals';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../data/business';

export default function Visit() {
  const phoneAvailable = Boolean(BUSINESS.contact.phone);
  const whatsappAvailable = Boolean(BUSINESS.contact.whatsapp);
  const emailAvailable = Boolean(BUSINESS.contact.email);

  return (
    <div className="page">
      <section className="page-hero page-hero-small">
        <div className="page-hero-pattern" />

        <SakuraPetals count={8} zIndex={2} />

        <div className="page-hero-content">
          <span className="page-japanese">
            ご来店
          </span>

          <h1>Visit Us</h1>

          <p>
            Find your way to Itadaki.
          </p>
        </div>
      </section>

      <section className="visit-section">
        <div className="container">
          <SectionHeading
            eyebrow="Concept Location"
            title="Concept Location in Mangalore"
            subtitle="Location, contact and opening information shown here is development content and should be verified before any public or production use."
          />

          <div className="visit-grid">
            <div className="visit-details">

              {/* Address */}
              <div className="info-card">
                <div className="info-icon">
                  <MapPin />
                </div>

                <div>
                  <span>Address</span>

                  <p>
                    {BUSINESS.address.line1}
                    <br />
                    {BUSINESS.address.line2}
                    <br />
                    {BUSINESS.address.city},{' '}
                    {BUSINESS.address.state}
                    <br />
                    {BUSINESS.address.pincode}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="info-card">
                <div className="info-icon">
                  <Clock3 />
                </div>

                <div>
                  <span>Concept Hours</span>

                  {BUSINESS.hours.map((hour) => (
                    <p key={hour.days}>
                      <strong>
                        {hour.days}
                      </strong>
                      <br />
                      {hour.time}
                    </p>
                  ))}
                </div>
              </div>

              {/* Phone — only show when available */}
              {phoneAvailable && (
                <div className="info-card">
                  <div className="info-icon">
                    <Phone />
                  </div>

                  <div>
                    <span>Call Us</span>

                    <p>
                      {BUSINESS.contact.phone}
                    </p>
                  </div>
                </div>
              )}

              {/* Actions */}
              {(phoneAvailable || whatsappAvailable) && (
                <div className="visit-actions">

                  {phoneAvailable && (
                    <a
                      href={`tel:${BUSINESS.contact.phone}`}
                      className="btn-primary"
                    >
                      <Phone size={17} />
                      Call
                    </a>
                  )}

                  {whatsappAvailable && (
                    <a
                      href={`https://wa.me/${BUSINESS.contact.whatsapp.replace(
                        /\D/g,
                        ''
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      <MessageCircle size={17} />
                      WhatsApp
                    </a>
                  )}

                </div>
              )}

              {/* Development-only contact note */}
              {!phoneAvailable &&
                !whatsappAvailable &&
                !emailAvailable && (
                  <div className="verification-note">
                    <strong>Contact information:</strong>{' '}
                    Phone, WhatsApp and email details are not
                    provided in this independent concept project.
                  </div>
                )}
            </div>

            {/* Map */}
            <div className="map-card">
              <iframe
                title="Concept location map for Mangalore"
                src={BUSINESS.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="map-directions"
              >
                Open in Google Maps
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          <div className="verification-note">
            <strong>Before launch:</strong> verify the
            address, phone, WhatsApp number, hours and
            Google Maps location in{' '}
            <code>src/data/business.js</code>.
          </div>
        </div>
      </section>
    </div>
  );
}