import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

import SakuraPetals from '../components/SakuraPetals';
import SectionHeading from '../components/SectionHeading';
import { GALLERY_ITEMS } from '../data/business';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'ambience', label: 'Ambience' },
  { id: 'people', label: 'People' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) => item.category === filter
        );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selected) return;

      if (event.key === 'Escape') {
        setSelected(null);
      }

      if (event.key === 'ArrowRight') {
        const index = filtered.findIndex(
          (item) => item.id === selected.id
        );

        setSelected(
          filtered[(index + 1) % filtered.length]
        );
      }

      if (event.key === 'ArrowLeft') {
        const index = filtered.findIndex(
          (item) => item.id === selected.id
        );

        setSelected(
          filtered[
            (index - 1 + filtered.length) %
              filtered.length
          ]
        );
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
  }, [selected, filtered]);

  useEffect(() => {
    document.body.style.overflow = selected
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <div className="page">
      <section className="page-hero page-hero-small">
        <div className="page-hero-pattern" />

        <SakuraPetals count={8} zIndex={2} />

        <div className="page-hero-content">
          <span className="page-japanese">
            写真
          </span>

          <h1>Gallery</h1>

          <p>
            Moments at Itadaki.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <SectionHeading
            eyebrow="A Visual Taste"
            title="Inside Itadaki"
            subtitle="Placeholder imagery used to demonstrate the visual direction. Replace with original or appropriately licensed restaurant photography before production."
          />

          <div className="gallery-filters">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  filter === item.id ? 'active' : ''
                }
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((item) => (
              <button
                type="button"
                key={item.id}
                className="gallery-item"
                onClick={() => setSelected(item)}
                aria-label={`Open ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />

                <span className="gallery-overlay">
                  <strong>{item.caption}</strong>
                  <small>
                    View image
                  </small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.caption}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();

              const index = filtered.findIndex(
                (item) => item.id === selected.id
              );

              setSelected(
                filtered[
                  (index - 1 + filtered.length) %
                    filtered.length
                ]
              );
            }}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>

          <figure
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={selected.src}
              alt={selected.alt}
            />

            <figcaption>
              {selected.caption}
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox-next"
            onClick={(event) => {
              event.stopPropagation();

              const index = filtered.findIndex(
                (item) => item.id === selected.id
              );

              setSelected(
                filtered[
                  (index + 1) % filtered.length
                ]
              );
            }}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}