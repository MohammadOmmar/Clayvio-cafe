import type { Metadata } from 'next';
import { menuCategories } from '@/lib/menu-data';
import { formatPrice } from '@/lib/utils';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Explore the full Clayvio Cafe menu — chai, coffee, sandwiches, pizza, bites, mojitos, and shakes.',
};

function PriceDisplay({
  prices,
}: {
  prices: { variantName: string | null; price: number }[];
}) {
  if (prices.length === 1 && prices[0].variantName === null) {
    return (
      <span className="font-display text-lg font-semibold text-espresso-800">
        {formatPrice(prices[0].price)}
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {prices.map((p) => (
        <div key={p.variantName ?? 'price'} className="flex items-baseline gap-2">
          <span className="text-xs uppercase tracking-wide text-espresso-500">
            {p.variantName}
          </span>
          <span className="font-display text-lg font-semibold text-espresso-800">
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
      <section className="relative bg-espresso-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-brass-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-clay-500/10 blur-3xl" />
        </div>

        <div className="container-cafe relative z-10 text-center">
          <p className="eyebrow text-brass-300">Clayvio Cafe</p>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-parchment-50 sm:text-6xl lg:text-7xl">
            The Menu
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-parchment-200">
            Chai, coffee, and everything in between — served fresh, with
            warmth.
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <div className="sticky top-16 z-30 border-b border-parchment-200 bg-parchment-100/95 py-3 backdrop-blur-md lg:top-20">
        <nav className="container-cafe">
          <ul className="no-scrollbar flex gap-6 overflow-x-auto pb-1" aria-label="Menu categories">
            {menuCategories.map((category) => (
              <li key={category.name} className="shrink-0">
                <a
                  href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="link-underline text-sm font-medium uppercase tracking-wide text-espresso-700 transition-colors hover:text-espresso-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menu categories */}
      <div className="bg-parchment-100 py-16 sm:py-24">
        <div className="container-cafe space-y-20 sm:space-y-28">
          {menuCategories.map((category, categoryIndex) => (
            <section
              key={category.name}
              id={category.name.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-32"
            >
              {/* Category header */}
              <ScrollReveal>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-medium text-clay-600">
                    {String(categoryIndex + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso-900 sm:text-4xl">
                    {category.name}
                  </h2>
                </div>
                {category.note && (
                  <p className="mt-3 text-sm font-medium uppercase tracking-wide text-espresso-500">
                    {category.note}
                  </p>
                )}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-brass-400/50 via-parchment-200 to-transparent" />
              </ScrollReveal>

              {/* Items */}
              <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
                {category.items.map((item, itemIndex) => (
                  <ScrollReveal key={item.name} delay={itemIndex * 0.05}>
                    <div className="group flex items-start justify-between gap-6 border-b border-parchment-200 pb-5 transition-colors duration-300 hover:border-clay-400/50">
                      <div>
                        <h3 className="font-display text-lg font-medium text-espresso-900 transition-colors duration-300 group-hover:text-clay-700 sm:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <div className="shrink-0">
                        <PriceDisplay prices={item.prices} />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}