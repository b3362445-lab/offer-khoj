'use client';

export default function OfferCard({ title, discount, location, category, accent }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className={`font-semibold text-lg ${accent}`}>{title}</h3>
        <span
          className={`${accent} bg-opacity-20 text-sm px-3 py-1 rounded-full`}
          style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
        >
          {discount}
        </span>
      </div>
      <p className="text-gray-600 text-sm">{location}</p>
    </div>
  );
}
