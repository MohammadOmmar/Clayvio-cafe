import type { Metadata } from 'next';
import { menuCategories } from '@/lib/menu-data';
import { formatPrice } from '@/lib/utils';
import { Coffee, Utensils } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Explore the full Clayvio Cafe menu — chai, coffee, sandwiches, pizza, bites, mojitos, and shakes.',
};

function PriceDisplay({
  prices,
  columns,
}: {
  prices: { variantName: string | null; price: number }[];
  columns?: string[];
}) {
  if (prices.length === 1 && prices[0].variantName === null) {
    return (
      <span className="font-semibold text-espresso-800">
        {formatPrice(prices[0].price)}
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {prices.map((p) => (
        <div
          key={p.variantName ?? 'price'}
          className="flex items-center gap-1.5 rounded-lg bg-cream-100 px-2.5 py-1"
        >
          <span className="text-xs text-espresso-600">{p.variantName}</span>
          <span className="text-sm font-semibold text-espresso-800">
            {formatPrice(p.price)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-espresso-900 via-espresso-800 to-wood-800 pt-32 pb-16 sm:pt-40 sm:pb-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-golden-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cream-300/5 blur-3xl" />
        </div>

        <div className="container-cafe relative z-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-golden-400/20 backdrop-blur-sm">
            <Utensils className="h-8 w-8 text-golden-300" aria-hidden="true" />
          </div>
          <p className="font-script text-3xl text-golden-300 sm:text-4xl">
            Our Menu
          </p>
          <h1 className="mt-3 text-4xl font-bold text-cream-50 sm:text-5xl">
            Chai • Coffee • Community
          </h1>
          <p className="mt-4 text-sm text-cream-300 sm:text-base">
            Everything served fresh, with warmth
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <div className="sticky top-16 z-30 bg-cream-100/95 py-3 shadow-warm-sm backdrop-blur-md lg:top-20">
        <nav className="container-cafe">
          <ul className="flex gap-2 overflow-x-auto pb-1" aria-label="Menu categories">
            {menuCategories.map((category) => (
              <li key={category.name}>
                <a
                  href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="whitespace-nowrap rounded-full border border-espresso-200 bg-white px-4 py-1.5 text-sm font-medium text-espresso-700 transition-colors hover:border-espresso-400 hover:text-espresso-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-golden-400"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menu categories */}
      <div className="bg-cream-50 py-16 sm:py-20">
        <div className="container-cafe space-y-16">
          {menuCategories.map((category) => (
            <section
              key={category.name}
              id={category.name.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-28"
            >
              {/* Category header */}
              <div className="flex items-center gap-4">
                <Coffee className="h-5 w-5 shrink-0 text-golden-600" aria-hidden="true" />
                <h2 className="heading-section">{category.name}</h2>
              </div>
              {category.note && (
                <p className="mt-2 text-sm font-medium text-golden-700">
                  {category.note}
                </p>
              )}

              {/* Items grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group rounded-2xl border border-cream-200 bg-white p-5 shadow-warm-sm transition-all duration-300 hover:border-golden-300 hover:shadow-warm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-base font-semibold text-espresso-900 sm:text-lg">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3">
                      <PriceDisplay prices={item.prices} columns={category.columns} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}