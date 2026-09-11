// ==========================================
// ITADAKI RAMEN SHOP
// Independent Student Concept Configuration
// ==========================================

export const BUSINESS = {
  name: 'Itadaki Ramen Shop',

  projectStatus:
    'Independent student project for educational purposes',

  tagline: 'A Japanese-Inspired Dining Concept',

  slogan: 'Good Food Brings Good People Together',

  japaneseSlogan: 'いただきます',

  kanjiLogo: '頂',

  // PLACEHOLDER — NOT VERIFIED
  address: {
    line1: 'First Floor, Lotus Anuradha,',
    line2: 'Kodailbail, Mangalore',
    city: 'Mangalore',
    state: 'Karnataka',
    pincode: '575003',
    full: 'First Floor, Lotus Anuradha, Kodailbail, Mangalore - 575003',
  },

  // PLACEHOLDER — NOT VERIFIED
  contact: {
    phone: '+91 XXXXX XXXXX',
    whatsapp: '+91 XXXXX XXXXX',
    email: 'itadaki.mangalore@gmail.com',
  },

  // PLACEHOLDER — NOT VERIFIED
  hours: [
    {
      days: 'Mon – Sat',
      time: '11:00 AM – 11:00 PM',
    },
    {
      days: 'Sunday',
      time: '11:00 AM – 10:00 PM',
    },
  ],

  // PLACEHOLDER — NOT VERIFIED
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d74.856!3d12.868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzA0LjgiTiA3NMKwNTEnMjEuNiJF!5e0!3m2!1sen!2sin!4v1234567890',

  mapsLink:
    'https://maps.google.com/?q=Mangalore,Karnataka,India',

  social: {
    instagram:
      'https://instagram.com/itadaki.mangalore',

    facebook:
      'https://facebook.com/itadakimangalore',

    youtube: '#',
  },
};


// ==========================================
// JAPANESE-INSPIRED CONCEPT MENU
// NOTE: Items and prices are fictional placeholders
// and are NOT verified Itadaki menu information.
// ==========================================

export const MENU_ITEMS = [
  {
    id: 1,
    name: 'Tonkotsu Ramen',
    category: 'ramen',
    description:
      'Rich pork-bone broth with chashu, soft-boiled egg, bamboo shoots, nori, and scallions.',
    price: 280,
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
    tags: ["Chef's Special", 'Non-Veg'],
    spicy: false,
    popular: true,
  },

  {
    id: 2,
    name: 'Miso Ramen',
    category: 'ramen',
    description:
      'Deep miso broth with noodles, sweet corn, spring onion, nori, and tender pork.',
    price: 260,
    image:
      'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=800&auto=format&fit=crop&q=80',
    tags: ['Miso', 'Non-Veg'],
    spicy: false,
    popular: true,
  },

  {
    id: 3,
    name: 'Spicy Shoyu Ramen',
    category: 'ramen',
    description:
      'Japanese soy-based broth layered with chili oil, egg, greens, mushrooms, and noodles.',
    price: 270,
    image:
      'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=800&auto=format&fit=crop&q=80',
    tags: ['Spicy', 'Non-Veg'],
    spicy: true,
    popular: false,
  },

  {
    id: 4,
    name: 'Vegetable Ramen',
    category: 'ramen',
    description:
      'Light Japanese-style broth with seasonal vegetables, tofu, mushrooms, nori, and spring onion.',
    price: 240,
    image:
      'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&auto=format&fit=crop&q=80',
    tags: ['Veg', 'Light'],
    spicy: false,
    popular: false,
  },

  {
    id: 5,
    name: 'Salmon Nigiri',
    category: 'sushi',
    description:
      'Fresh salmon layered over seasoned sushi rice with wasabi and pickled ginger.',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1747471447806-c56d99c348cd?w=800&auto=format&fit=crop&q=80',
    tags: ['Sushi', 'Non-Veg'],
    spicy: false,
    popular: true,
  },

  {
    id: 6,
    name: 'Japanese Nigiri Selection',
    category: 'sushi',
    description:
      'A refined selection of Japanese-style nigiri served with soy sauce, wasabi, and ginger.',
    price: 390,
    image:
      'https://images.unsplash.com/photo-1637074930269-089fde202b57?w=800&auto=format&fit=crop&q=80',
    tags: ['Sushi', "Chef's Special"],
    spicy: false,
    popular: false,
  },

  {
    id: 7,
    name: 'Gyoza',
    category: 'sides',
    description:
      'Golden Japanese pan-fried dumplings served with a light soy-vinegar dipping sauce.',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1738681336104-608b4e7dc3b0?w=800&auto=format&fit=crop&q=80',
    tags: ['Japanese', 'Non-Veg'],
    spicy: false,
    popular: true,
  },

  {
    id: 8,
    name: 'Edamame',
    category: 'sides',
    description:
      'Steamed young soybeans finished with sea salt for a simple Japanese-style starter.',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=800&auto=format&fit=crop&q=80',
    tags: ['Veg', 'Starter'],
    spicy: false,
    popular: false,
  },

  {
    id: 9,
    name: 'Matcha Latte',
    category: 'beverages',
    description:
      'Smooth Japanese matcha blended with steamed milk for a rich, earthy drink.',
    price: 140,
    image:
      'https://images.unsplash.com/photo-1560148196-df61132466ce?w=800&auto=format&fit=crop&q=80',
    tags: ['Matcha', 'Veg'],
    spicy: false,
    popular: true,
  },

  {
    id: 10,
    name: 'Yuzu Citrus Tea',
    category: 'beverages',
    description:
      'A bright Japanese-inspired citrus drink combining yuzu, honey, and chilled water.',
    price: 130,
    image:
      'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&auto=format&fit=crop&q=80',
    tags: ['Yuzu', 'Veg'],
    spicy: false,
    popular: false,
  },

  {
    id: 11,
    name: 'Mochi & Dango',
    category: 'desserts',
    description:
      'Soft Japanese rice sweets inspired by traditional mochi and colourful dango.',
    price: 160,
    image:
      'https://images.unsplash.com/photo-1783311392897-dd9167b50a85?w=800&auto=format&fit=crop&q=80',
    tags: ['Japanese', 'Veg'],
    spicy: false,
    popular: true,
  },

  {
    id: 12,
    name: 'Matcha Dessert Plate',
    category: 'desserts',
    description:
      'A Japanese-inspired dessert plate featuring matcha, mochi, and delicate sweet flavours.',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1783311392897-dd9167b50a85?w=800&auto=format&fit=crop&q=80',
    tags: ['Matcha', "Chef's Special"],
    spicy: false,
    popular: false,
  },
];


// ==========================================
// JAPANESE-INSPIRED GALLERY
// Placeholder imagery — not actual Itadaki photos.
// ==========================================

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'food',
    src:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese ramen bowl',
    caption: 'Tonkotsu Ramen',
  },

  {
    id: 2,
    category: 'food',
    src:
      'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese miso ramen',
    caption: 'Miso Ramen',
  },

  {
    id: 3,
    category: 'japan',
    src:
      'https://images.unsplash.com/photo-1775807674880-e0ef33226fa0?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese ramen restaurant at night',
    caption: 'Japanese Night Dining',
  },

  {
    id: 4,
    category: 'food',
    src:
      'https://images.unsplash.com/photo-1747471447806-c56d99c348cd?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese nigiri sushi',
    caption: 'Salmon Nigiri',
  },

  {
    id: 5,
    category: 'japan',
    src:
      'https://images.unsplash.com/photo-1775807674880-e0ef33226fa0?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese ramen street atmosphere',
    caption: 'Japanese Street Food',
  },

  {
    id: 6,
    category: 'food',
    src:
      'https://images.unsplash.com/photo-1738681336104-608b4e7dc3b0?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese gyoza dumplings',
    caption: 'Gyoza',
  },

  {
    id: 7,
    category: 'food',
    src:
      'https://images.unsplash.com/photo-1637074930269-089fde202b57?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese sushi',
    caption: 'Sushi & Nigiri',
  },

  {
    id: 8,
    category: 'japan',
    src:
      'https://images.unsplash.com/photo-1775807674880-e0ef33226fa0?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese ramen shop atmosphere',
    caption: 'Ramen Shop Nights',
  },

  {
    id: 9,
    category: 'dessert',
    src:
      'https://images.unsplash.com/photo-1783311392897-dd9167b50a85?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese mochi and dango',
    caption: 'Mochi & Dango',
  },

  {
    id: 10,
    category: 'beverages',
    src:
      'https://images.unsplash.com/photo-1560148196-df61132466ce?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese matcha latte',
    caption: 'Matcha Latte',
  },

  {
    id: 11,
    category: 'food',
    src:
      'https://images.unsplash.com/photo-1738681336104-608b4e7dc3b0?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese gyoza',
    caption: 'Pan-Fried Gyoza',
  },

  {
    id: 12,
    category: 'japan',
    src:
      'https://images.unsplash.com/photo-1775807674880-e0ef33226fa0?w=1000&auto=format&fit=crop&q=80',
    alt: 'Japanese ramen restaurant at night',
    caption: 'Japanese Dining Atmosphere',
  },
];


// ==========================================
// JAPANESE-INSPIRED CONCEPT JOURNAL
// ==========================================

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Art of Ramen',
    excerpt:
      'Explore the craft behind a comforting Japanese bowl — from broth and noodles to toppings and presentation.',
    date: 'Concept Journal',
    category: 'Japanese Culture',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
    readTime: '4 min read',
  },

  {
    id: 2,
    title: 'A Taste of Japanese Tea',
    excerpt:
      'Discover the calm character of matcha and its place in Japanese food, drink, and everyday rituals.',
    date: 'Concept Journal',
    category: 'Tea & Tradition',
    image:
      'https://images.unsplash.com/photo-1560148196-df61132466ce?w=800&auto=format&fit=crop&q=80',
    readTime: '3 min read',
  },

  {
    id: 3,
    title: 'From Gyoza to Nigiri',
    excerpt:
      'A visual journey through some of the Japanese dishes that inspire this independent restaurant concept.',
    date: 'Concept Journal',
    category: 'Japanese Food',
    image:
      'https://images.unsplash.com/photo-1637074930269-089fde202b57?w=800&auto=format&fit=crop&q=80',
    readTime: '3 min read',
  },
];