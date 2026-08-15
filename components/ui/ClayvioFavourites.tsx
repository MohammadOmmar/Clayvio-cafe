'use client';

import { useState } from 'react';
import { menuCategories } from '@/lib/menu-data';
import { formatPrice } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { SVGProps } from 'react';
import KulhadChai from '@/components/illustrations/KulhadChai';

export default function ClayvioFavourites() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Flatten all items
  const allItems = menuCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.name,
    }))
  );

  // Get first 6 items as favourites
  const favourites = allItems.slice(0, 6);

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-3xl font-semibold text-espresso-900">
          Clayvio Favourites
        </h2>
        <a
          href="/menu"
          className="text-clay-600 hover:text-clay-800 transition-colors text-sm uppercase tracking-wide"
        >
          View Full Menu
        </a>
      </div>

      <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {favourites.map((item, index) => (
            <div
              key={`${item.category}-${item.name}`}
              className="border border-espresso-900/10 rounded-lg p-6 hover:border-clay-400 transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="h-20 w-20 rounded-lg bg-parchment-50 flex items-center justify-center mb-4"
              >
                <KulhadChai className="h-8 w-8 text-clay-600" />
              </motion.div>

              <h3 className="font-display text-lg font-medium text-espresso-900">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-espresso-600">
                {item.prices[0]?.variantName
                  ? `${item.prices[0].variantName}: `
                  : ''}
                {formatPrice(item.prices[0]?.price ?? 0)}
              </p>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}