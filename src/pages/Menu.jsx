import { useMemo, useState } from 'react';
import {
  Search,
  SlidersHorizontal,
} from 'lucide-react';

import DishCard from '../components/DishCard';
import SakuraPetals from '../components/SakuraPetals';
import SectionHeading from '../components/SectionHeading';
import { MENU_ITEMS } from '../data/business';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'ramen', label: 'Ramen' },
  { id: 'sushi', label: 'Sushi' },
  { id: 'sides', label: 'Sides' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'desserts', label: 'Desserts' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] =
    useState('all');

  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return MENU_ITEMS.filter((item) => {
      const categoryMatch =
        activeCategory === 'all' ||
        item.category === activeCategory;

      const searchMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description
          .toLowerCase()
          .includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <div className="page">
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1800&auto=format&fit=crop&q=80"
          alt=""
          aria-hidden="true"
        />

        <div className="page-hero-overlay" />

        <SakuraPetals count={8} zIndex={2} />

        <div className="page-hero-content">
          <span className="page-japanese">
            いただき
          </span>

          <h1>Our Menu</h1>

          <p>
            A journey through Japanese-inspired
            flavors.
          </p>
        </div>
      </section>

      <section className="menu-section">
        <div className="container">
          <SectionHeading
            eyebrow="From Our Kitchen"
            title="Choose Your Bowl"
            subtitle="Browse the menu and discover something worth coming back for."
          />

          <div className="menu-toolbar">
            <div className="category-tabs">
              <SlidersHorizontal
                size={17}
                className="filter-icon"
              />

              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={
                    activeCategory === category.id
                      ? 'active'
                      : ''
                  }
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                >
                  {category.label}
                </button>
              ))}
            </div>

            <label className="menu-search">
              <Search size={17} />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search dishes..."
                aria-label="Search dishes"
              />
            </label>
          </div>

          <div className="placeholder-notice">
            <strong>Development content:</strong>{' '}
            Menu names, prices, descriptions and imagery shown
            here are placeholders for this independent student
            project and should not be treated as official restaurant
            information.
          </div>

          {filteredItems.length > 0 ? (
            <div className="dish-grid">
              {filteredItems.map((item) => (
                <DishCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>料理</span>
              <h3>No dishes found</h3>
              <p>
                Try another category or search term.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}