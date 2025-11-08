import React from 'react';

const categories = [
  { name: 'Ladies Wear', emoji: '👗', color: 'from-pink-100 to-rose-50' },
  { name: 'Gents Wear', emoji: '👔', color: 'from-sky-100 to-blue-50' },
  { name: 'Kids Wear', emoji: '🧒', color: 'from-amber-100 to-yellow-50' },
  { name: 'Footwear', emoji: '👟', color: 'from-lime-100 to-green-50' },
  { name: 'Plastic Items', emoji: '🧺', color: 'from-emerald-100 to-teal-50' },
  { name: 'Daily necessities', emoji: '🧴', color: 'from-slate-100 to-gray-50' },
  { name: 'Crockery', emoji: '🍽️', color: 'from-indigo-100 to-violet-50' },
  { name: 'Kitchen essentials', emoji: '🍳', color: 'from-orange-100 to-amber-50' },
  { name: 'Homeware', emoji: '🏠', color: 'from-cyan-100 to-teal-50' },
  { name: 'Home decor', emoji: '🪴', color: 'from-green-100 to-emerald-50' },
  { name: 'Cosmetics', emoji: '💄', color: 'from-rose-100 to-pink-50' },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="text-sm text-gray-600">Quality products at honest prices</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`group rounded-xl border border-gray-200 bg-gradient-to-br ${cat.color} p-4 hover:shadow-md transition-shadow`}
            >
              <div className="text-3xl">{cat.emoji}</div>
              <div className="mt-3 font-semibold text-gray-800">{cat.name}</div>
              <div className="mt-1 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Explore now →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
