import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  ChevronDown,
  Leaf,
  Users,
  Soup,
} from 'lucide-react';

import SakuraPetals from '../components/SakuraPetals';
import SectionHeading from '../components/SectionHeading';
import DishCard from '../components/DishCard';
import { MENU_ITEMS, BLOG_POSTS, BUSINESS } from '../data/business';

const FEATURES = [
  {
    icon: Soup,
    title: 'Japanese Flavors',
    desc: 'A Japanese-inspired food experience presented through ramen, sushi, sides, and tea.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    desc: 'A visual concept centered around carefully prepared dishes and thoughtful presentation.',
  },
  {
    icon: Users,
    title: 'A Warm Community',
    desc: 'A welcoming concept where food, atmosphere, and connection come together.',
  },
];

const FEATURED_ITEMS = MENU_ITEMS
  .filter((item) => item.popular)
  .slice(0, 4);

export default function Home() {
  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        {/* New Japanese interior / arched window background */}
        <div
          className="hero-background"
          role="img"
          aria-label="Japanese-inspired ramen shop interior with an arched wooden window and an original anime-inspired character"
        />

        {/* Dark readability overlay */}
        <div className="hero-overlay" />

        {/* Warm atmospheric texture */}
        <div className="hero-texture" />

        {/* Sakura petals */}
        <SakuraPetals count={18} zIndex={3} />

        {/* Hero content */}
        <div className="container hero-inner">

          <div className="hero-copy">

            {/* Location */}
            <div
              className="location-pill animate-fade-in-up"
              style={{ animationDelay: '120ms' }}
            >
              <MapPin size={13} />
              <span>MANGALORE, KARNATAKA</span>
            </div>

            {/* Japanese accent */}
            <div
              className="hero-japanese animate-fade-in-up"
              style={{ animationDelay: '180ms' }}
            >
              いただきます
            </div>

            {/* Main heading */}
            <h1
              className="animate-fade-in-up"
              style={{ animationDelay: '240ms' }}
            >
              A Taste of Japan
              <br />
              <em>in Mangalore</em>
            </h1>

            {/* Description */}
            <p
              className="hero-description animate-fade-in-up"
              style={{ animationDelay: '320ms' }}
            >
              A Japanese-inspired restaurant concept built around
              food, atmosphere, and connection.
            </p>

            {/* Buttons */}
            <div
              className="hero-actions animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <Link to="/menu" className="btn-primary">
                Explore Menu
                <ArrowRight size={18} />
              </Link>

              <Link to="/visit" className="btn-hero-secondary">
                <MapPin size={18} />
                Visit Us
              </Link>
            </div>

            {/* Project status */}
            <div
              className="project-label animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              <span>INDEPENDENT STUDENT CONCEPT</span>
              <i />
              <small>INTERNSHIP PROJECT</small>
            </div>

          </div>

          {/* Decorative Japanese character */}
          <div
            className="hero-kanji"
            aria-hidden="true"
          >
            頂
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          className="hero-scroll"
          aria-hidden="true"
        >
          <span>SCROLL</span>
          <i />
          <ChevronDown size={18} />
        </div>

      </section>


      {/* =====================================================
          VALUE PROPOSITIONS
      ===================================================== */}

      <section className="feature-strip">
        <div className="container feature-grid">

          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="feature-item"
            >
              <div className="feature-icon">
                <Icon size={22} />
              </div>

              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}

        </div>
      </section>


      {/* =====================================================
          SIGNATURE DISHES
      ===================================================== */}

      <section className="home-section signature-section">

        <div className="container">

          <SectionHeading
            eyebrow="Our Kitchen"
            title="Japanese-Inspired Dishes"
            subtitle="A curated selection of ramen, sushi, sides, tea, and desserts created for this independent student concept."
          />

          <div className="dish-grid">

            {FEATURED_ITEMS.map((item) => (
              <DishCard
                key={item.id}
                item={item}
              />
            ))}

          </div>

          <div className="center-action">
            <Link
              to="/menu"
              className="btn-primary"
            >
              View Full Menu
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </section>


      {/* =====================================================
          STORY BANNER
      ===================================================== */}

      <section className="story-banner">

        <div className="story-banner-image" />

        <div className="story-banner-overlay" />

        <SakuraPetals count={12} zIndex={1} />

        <div className="story-banner-content">

          <div className="story-kanji-large">
            頂
          </div>

          <span className="small-label light">
            THE IDEA
          </span>

          <h2>
            More Than a Meal,
            <br />
            <em>It&apos;s a Story</em>
          </h2>

          <p>
            This website is an independent student concept inspired
            by Japanese food culture, ramen shops, sakura, and the
            idea of bringing people together around food.
          </p>

          <Link
            to="/about"
            className="btn-primary"
          >
            Explore the Concept
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>


      {/* =====================================================
          JOURNAL / BLOG PREVIEW
      ===================================================== */}

      <section className="home-section journal-section">

        <div className="container">

          <SectionHeading
            eyebrow="Japanese Food Culture"
            title="Stories & Inspiration"
            subtitle="A small visual journal exploring Japanese dishes, ingredients, atmosphere, and food culture."
          />

          <div className="journal-grid">

            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="journal-card"
              >

                <div className="journal-image-wrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="journal-image"
                  />
                </div>

                <div className="journal-content">

                  <div className="journal-meta">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3>
                    {post.title}
                  </h3>

                  <p>
                    {post.excerpt}
                  </p>

                  <span className="journal-link">
                    Read concept note
                    <ArrowRight size={14} />
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONCEPT STATUS
      ===================================================== */}

      <section className="concept-note-section">

        <div className="container">

          <div className="concept-note">

            <span className="small-label">
              Independent Project
            </span>

            <h2>
              A Japanese-inspired web experience,
              <br />
              created as an internship project.
            </h2>

            <p>
              This website is an independent student concept.
              Business details, menu items, prices, contact information,
              and other restaurant-specific information should be
              verified before being treated as official.
            </p>

            <Link
              to="/contact"
              className="btn-outline"
            >
              Make an Enquiry
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}