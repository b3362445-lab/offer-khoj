'use client';

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function AdminAddOffer() {
  const [title, setTitle] = useState('');
  const [discount, setDiscount] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('restaurant');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'offers'), {
        title,
        discount,
        location,
        category,
        createdAt: new Date(),
      });

      // Reset form
      setTitle('');
      setDiscount('');
      setLocation('');
      setCategory('restaurant');

      alert('✅ Offer added successfully');
    } catch (err) {
      console.error(err);
      alert('❌ Error adding offer');
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-8"
    >
      <h2 className="text-lg font-semibold mb-4">Add New Offer (Admin)</h2>

      <input
        className="w-full border rounded-lg px-4 py-2 mb-3"
        placeholder="Title (e.g. KFC – 20% OFF)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className="w-full border rounded-lg px-4 py-2 mb-3"
        placeholder="Discount (e.g. 20% OFF / B1G1)"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        required
      />

      <input
        className="w-full border rounded-lg px-4 py-2 mb-3"
        placeholder="Location (e.g. Dhaka)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <select
        className="w-full border rounded-lg px-4 py-2 mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="restaurant">Restaurant</option>
        <option value="cosmetics">Cosmetics</option>
        <option value="electronics">Electronics</option>
      </select>

      <button
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded-lg hover:opacity-90"
      >
        {loading ? 'Adding...' : 'Add Offer'}
      </button>
    </form>
  );
}
