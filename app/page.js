'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './lib/firebase';
import CategoryCard from './components/CategoryCard';
import OfferCard from './components/OfferCard';
import AdminAddOffer from './components/AdminAddOffer';

export default function Home() {
  const [offers, setOffers] = useState([]);
  const [theme, setTheme] = useState('default'); // default, restaurant, cosmetics, electronics
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('all');

  // 🔹 Theme Colors
  const themeColors = {
    default: {
      bg: 'bg-white',          // homepage white background
      accent: 'text-yellow-700',
    },
    restaurant: {
      bg: 'bg-red-50',
      accent: 'text-red-700',
    },
    cosmetics: {
      bg: 'bg-pink-50',
      accent: 'text-pink-700',
    },
    electronics: {
      bg: 'bg-blue-50',
      accent: 'text-blue-700',
    },
  };

  // 🔹 Realtime Firestore fetch
  useEffect(() => {
    const q = collection(db, "offers");
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOffers(data);
    });
    return () => unsubscribe();
  }, []);

  return (
      <main className={`${themeColors[theme].bg} min-h-screen p-4 transition-colors duration-500`}>
        <h1 className="text-2xl font-bold mb-4">
  আপনার শহরের সেরা অফার এক জায়গায়
</h1>

<h2 className="text-gray-600 mb-6">
  Restaurant, Cosmetics ও Electronics এর আজকের ডিসকাউন্ট
</h2>
      {/* 🔹 Admin Form */}
      <AdminAddOffer />

      {/* 🔹 Category Filter */}
      <div className="flex items-center mb-4 space-x-3">
        <CategoryCard
          title="All"
          theme="default"
          currentTheme={theme}
          onClick={() => setTheme('default')}
        />
        <CategoryCard
          title="Restaurant"
          theme="restaurant"
          currentTheme={theme}
          onClick={() => setTheme('restaurant')}
        />
        <CategoryCard
          title="Cosmetics"
          theme="cosmetics"
          currentTheme={theme}
          onClick={() => setTheme('cosmetics')}
        />
        <CategoryCard
          title="Electronics"
          theme="electronics"
          currentTheme={theme}
          onClick={() => setTheme('electronics')}
        />
      </div>

      {/* 🔹 Search + City Filter */}
      <div className="flex items-center mb-6 space-x-3">
        <input
placeholder="ঢাকা, রেস্টুরেন্ট, ডিসকাউন্ট খুঁজুন"
          className="flex-1 border rounded-lg px-4 py-3 text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border rounded-lg px-4 py-3 text-sm"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="all">All Cities</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
        </select>
      </div>

      {/* 🔹 Offers Grid */}
    <section className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {offers
    .filter(o => (theme === 'default' || o.category === theme) &&
                 (cityFilter === 'all' || o.location?.includes(cityFilter)) &&
                 o.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map((offer) => (
      <OfferCard key={offer.id} {...offer} accent={themeColors[theme].accent} />
    ))}
</section>
    </main>
  );
}
