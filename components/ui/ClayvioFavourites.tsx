'use client';

import { menuCategories } from '@/lib/menu-data';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';
import KulhadChai from '@/components/illustrations/KulhadChai';

export default function ClayvioFavourites() {
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
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {favourites.map((item, index) => (
        <motion.div
          key={`${item.category}-${item.name}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group flex items-start gap-5 border-b border-espresso-900/8 pb-6 transition-colors duration-300 hover:border-clay-400/50"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-parchment-50 transition-colors duration-300 group-hover:bg-clay-50">
            <KulhadChai className="h-8 w-8 text-clay-500 transition-colors duration-300 group-hover:text-clay-600" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-eyebrow text-clay-500">
              {item.category}
            </p>
            <h3 className="mt-1 font-display text-lg font-medium text-espresso-900">
              {item.name}
            </h3>
            <p className="mt-1 text-sm text-espresso-600">
              {item.prices[0]?.variantName
                ? `${item.prices[0].variantName}: `
                : ''}
              {formatPrice(item.prices[0]?.price ?? 0)}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}