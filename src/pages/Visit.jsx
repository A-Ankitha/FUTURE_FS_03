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
  const phoneAvailable =
    !BUSINESS.contact.phone.includes('XXXXX');

  const whatsappAvailable =
    !BUSINESS.contact.whatsapp.includes('XXXXX');

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
            title="Find Us in Mangalore"
            subtitle="Location, contact and opening information shown here is development content and should be verified before any public or production use."
          />

          <div className="visit-grid">
            <div className="visit-details">
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

              <div className="info-card">
                <div className="info-icon">
                  <Clock3 />
                </div>

                <div>
                  <span>Opening Hours</span>

                  {BUSINESS.hours.map(
                    (hour) => (
                      <p key={hour.days}>
                        <strong>
                          {hour.days}
                        </strong>
                        <br />
                        {hour.time}
                      </p>
                    )
                  )}
                </div>
              </div>

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

              <div className="visit-actions">
                <a
                  href={
                    phoneAvailable
                      ? `tel:${BUSINESS.contact.phone}`
                      : '#'
                  }
                  className="btn-primary"
                  onClick={(event) => {
                    if (!phoneAvailable) {
                      event.preventDefault();
                    }
                  }}
                >
                  <Phone size={17} />
                  Call
                </a>

                <a
                  href={
                    whatsappAvailable
                      ? `https://wa.me/${BUSINESS.contact.whatsapp.replace(
                          /\D/g,
                          ''
                        )}`
                      : '#'
                  }
                  className="btn-outline"
                  onClick={(event) => {
                    if (!whatsappAvailable) {
                      event.preventDefault();
                    }
                  }}
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="map-card">
              <iframe
                title="Itadaki Ramen Shop location map"
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