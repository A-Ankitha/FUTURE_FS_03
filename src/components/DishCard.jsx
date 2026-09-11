import { Flame } from 'lucide-react';

const TAG_STYLES = {
  Veg: 'tag-veg',
  'Non-Veg': 'tag-nonveg',
  "Featured": 'tag-special',
  Spicy: 'tag-spicy',
};

export default function DishCard({ item }) {
  return (
    <article className="dish-card">
      <div className="dish-image-wrap">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="dish-image"
        />

        {item.popular && (
          <span className="dish-popular">
            Featured
          </span>
        )}

        <div className="dish-image-overlay" />
      </div>

      <div className="dish-content">
        <div className="dish-tags">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className={`tag ${
                TAG_STYLES[tag] || ''
              }`}
            >
              {tag === 'Spicy' && (
                <Flame size={11} />
              )}
              {tag}
            </span>
          ))}
        </div>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="dish-meta">
          <span className="dish-price">
            ₹{item.price}
          </span>

          <span className="dish-category">
            {item.category}
          </span>
        </div>
      </div>
    </article>
  );
}