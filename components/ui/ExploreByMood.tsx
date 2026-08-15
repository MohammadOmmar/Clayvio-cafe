'use client';

import { useState } from 'react';
import { menuCategories } from '@/lib/menu-data';
import { formatPrice } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type Mood = 'warm' | 'cold' | 'quick' | 'sweet' | 'filling' | 'all';

const MOODS: { id: Mood; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'warm', label: 'Something Warm' },
  { id: 'cold', label: 'Something Cold' },
  { id: 'quick', label: 'Something Quick' },
  { id: 'sweet', label: 'Something Sweet' },
  { id: 'filling', label: 'Something Filling' },
];

// Map menu items to moods based on their category and name
function getItemMood(categoryName: string, itemName: string): Mood[] {
  const moods: Mood[] = [];

  if (
    categoryName.includes('Chai') ||
    categoryName.includes('Coffee') ||
    itemName.includes('Tea') ||
    itemName.includes('Coffee') ||
    itemName.includes('Toast') ||
    itemName.includes('Muska') ||
    itemName.includes('Maggie') ||
    itemName.includes('Samosa')
  ) {
    moods.push('warm');
  }

  if (
    itemName.includes('Cold') ||
    categoryName.includes('Shakes') ||
    categoryName.includes('Mojitos')
  ) {
    moods.push('cold');
  }

  if (
    itemName.includes('Toast') ||
    itemName.includes('Muska') ||
    itemName.includes('Samosa') ||
    itemName.includes('Patties') ||
    itemName.includes('Maggie')
  ) {
    moods.push('quick');
  }

  if (
    itemName.includes('Shake') ||
    itemName.includes('Mojito') ||
    itemName.includes('Chocolate') ||
    itemName.includes('Vanilla') ||
    itemName.includes('Rose') ||
    itemName.includes('Kesar')
  ) {
    moods.push('sweet');
  }

  if (
    categoryName.includes('Pizza') ||
    categoryName.includes('Sandwiches') ||
    itemName.includes('Maggie') ||
    itemName.includes('Patties')
  ) {
    moods.push('filling');
  }

  return moods;
}

export default function ExploreByMood() {
  const [activeMood, setActiveMood] = useState<Mood>('all');

  // Flatten all items with their category
  const allItems = menuCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.name,
      moods: getItemMood(category.name, item.name),
    }))
  );

  const filteredItems =
    activeMood === 'all'
      ? allItems
      : allItems.filter((item) => item.moods.includes(activeMood));

  return (
    <div>
      {/* Mood selector */}
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {MOODS.map((mood) => (
          <button
            key={mood.id}
            type="button"
            onClick={() => setActiveMood(mood.id)}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
              activeMood === mood.id
                ? 'border-espresso-800 bg-espresso-800 text-parchment-50'
                : 'border-espresso-300 text-espresso-700 hover:border-espresso-500'
            }`}
          >
            {mood.label}
          </button>
        ))}
      </div>

      {/* Filtered items */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMood}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid gap-x-10 gap-y-6 sm:grid-cols-2"
          >
            {filteredItems.slice(0, 8).map((item) => (
              <div
                key={`${item.category}-${item.name}`}
                className="flex items-start justify-between gap-4 border-b border-parchment-200 pb-4"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-clay-600">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-medium text-espresso-900">
                    {item.name}
                  </h3>
                </div>
                <div className="shrink-0 text-right">
                  {item.prices.map((p) => (
                    <p
                      key={p.variantName ?? 'price'}
                      className="font-display text-base font-semibold text-espresso-800"
                    >
                      {p.variantName && (
                        <span className="mr-1 text-[10px] uppercase text-espresso-500">
                          {p.variantName}
                        </span>
                      )}
                      {formatPrice(p.price)}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}