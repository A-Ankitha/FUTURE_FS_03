import { useState } from 'react';
import {
  Camera,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import SakuraPetals from '../components/SakuraPetals';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../data/business';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(
    INITIAL_FORM
  );

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] =
    useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name =
        'Please enter your name.';
    }

    if (!form.email.trim()) {
      nextErrors.email =
        'Please enter your email.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email
      )
    ) {
      nextErrors.email =
        'Please enter a valid email.';
    }

    if (!form.message.trim()) {
      nextErrors.message =
        'Please enter a message.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: '',
    }));
  };

  return (
    <div className="page">
      <section className="page-hero page-hero-small">
        <div className="page-hero-pattern" />

        <SakuraPetals count={8} zIndex={2} />

        <div className="page-hero-content">
          <span className="page-japanese">
            お問い合わせ
          </span>

          <h1>Get In Touch</h1>

          <p>
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s Talk"
            subtitle="A frontend contact experience created for the student project. It is not connected to the restaurant."
          />

          <div className="contact-grid">
            <div className="contact-info">
              <span className="small-label">
                ITADAKI RAMEN SHOP
              </span>

              <h2>
                Good food begins with a good
                conversation.
              </h2>

              <p>
                Contact details shown here are
                centralized and can be replaced with
                verified business information before
                launch.
              </p>

              <div className="contact-list">
                <div>
                  <MapPin />
                  <span>
                    {BUSINESS.address.full}
                  </span>
                </div>

                <div>
                  <Phone />
                  <span>
                    {BUSINESS.contact.phone}
                  </span>
                </div>

                <div>
                  <Mail />
                  <span>
                    {BUSINESS.contact.email}
                  </span>
                </div>
              </div>

              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Camera size={18} />
                Instagram
              </a>
            </div>

            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle2 size={48} />

                  <h3>
                    Message prepared
                  </h3>

                  <p>
                    The form validation worked
                    successfully. No message has been
                    sent because a backend/email service
                    has not yet been connected.
                  </p>

                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_FORM);
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <Field
                      label="Name"
                      name="name"
                      value={form.name}
                      error={errors.name}
                      onChange={updateField}
                      required
                    />

                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      error={errors.email}
                      onChange={updateField}
                      required
                    />
                  </div>

                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    error={errors.phone}
                    onChange={updateField}
                  />

                  <div className="form-field">
                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={form.message}
                      onChange={(event) =>
                        updateField(
                          'message',
                          event.target.value
                        )
                      }
                      aria-invalid={
                        Boolean(errors.message)
                      }
                      aria-describedby={
                        errors.message
                          ? 'message-error'
                          : undefined
                      }
                    />

                    {errors.message && (
                      <small id="message-error">
                        {errors.message}
                      </small>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary form-submit"
                  >
                    Send Message
                  </button>

                  <p className="form-note">
                    Frontend demo only — connect
                    this form to your backend/email
                    service before production.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  value,
  error,
  onChange,
  required = false,
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span> *</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) =>
          onChange(name, event.target.value)
        }
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : undefined
        }
      />

      {error && (
        <small id={`${name}-error`}>
          {error}
        </small>
      )}
    </div>
  );
}