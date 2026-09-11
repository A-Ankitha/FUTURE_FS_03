import {
  Heart,
  Leaf,
  Sparkles,
  Users,
} from 'lucide-react';

import SakuraPetals from '../components/SakuraPetals';
import SectionHeading from '../components/SectionHeading';

const VALUES = [
  {
    icon: Sparkles,
    title: 'A Taste of Japan',
    text: 'A Japanese-inspired dining experience designed around food, atmosphere and togetherness.',
  },
  {
    icon: Leaf,
    title: 'Quality First',
    text: 'Food and ingredient information will be kept centralized so verified restaurant details can replace development placeholders easily.',
  },
  {
    icon: Users,
    title: 'Community',
    text: 'A welcoming space where meals become shared moments and conversations.',
  },
  {
    icon: Heart,
    title: 'Made With Care',
    text: 'Every visual detail is designed to make the dining experience feel warm, memorable and considered.',
  },
];

export default function About() {
  return (
    <div className="page">
      <section className="page-hero page-hero-small">
        <div className="page-hero-pattern" />

        <SakuraPetals count={10} zIndex={2} />

        <div className="page-hero-content">
          <span className="page-japanese">
            私たち
          </span>

          <h1>Our Story</h1>

          <p>
            More than a meal. A place to gather.
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="container story-grid">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=80"
              alt="Japanese-inspired restaurant interior"
              loading="lazy"
            />

            <div className="story-kanji">
              頂
            </div>
          </div>

          <div className="story-copy">
            <span className="small-label">
              ITADAKI
            </span>

            <h2>
              More Than A Meal,
              <em> It&apos;s A Story.</em>
            </h2>

            <p>
                This independent student concept explores how a
                Japanese-inspired restaurant experience could be
                presented through food, atmosphere, storytelling
                and digital design.
            </p>

            <p className="placeholder-copy">
              Restaurant history, founding story and
              ownership details will be added here only
              after they are verified with the business.
            </p>

            <div className="story-signature">
              <span>いただきます</span>
              <small>
                Thank you for the meal.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <SectionHeading
            eyebrow="What We Value"
            title="The Itadaki Way"
            subtitle="The visual language of the brand is built around warmth, craft, culture and community."
          />

          <div className="values-grid">
            {VALUES.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (
                <article
                  className="value-card"
                  key={title}
                >
                  <div className="value-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}