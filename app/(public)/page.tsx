import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Coffee, MapPin, Utensils } from 'lucide-react';
import { CAFE } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-espresso-900 via-espresso-800 to-wood-800">
        {/* Decorative illustrated elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-golden-500/10 blur-3xl" />
          <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-cream-300/5 blur-3xl" />
          <div className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-golden-400/10 blur-3xl" />
          
          {/* Steam/aroma illustrations */}
          <svg className="absolute left-1/4 top-1/4 h-32 w-32 text-golden-400/20" viewBox="0 0 100 100" fill="none">
            <path d="M30 80 Q30 60 40 50 Q50 40 45 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M50 80 Q50 55 60 45 Q70 35 65 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M70 80 Q70 65 80 55 Q90 45 85 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        <div className="container-cafe relative z-10 px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl animate-slide-up">
            {/* Illustrated cup icon */}
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-golden-400/20 backdrop-blur-sm">
              <Coffee className="h-12 w-12 text-golden-300" aria-hidden="true" />
            </div>

            <p className="font-script text-3xl text-golden-300 sm:text-4xl">
              {CAFE.tagline}
            </p>
            <h1 className="mt-4 text-6xl font-bold tracking-tight text-cream-50 sm:text-7xl lg:text-8xl">
              Clayvio Cafe
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream-200 sm:text-xl">
              A warm, cozy corner in Sopore — where chai meets coffee and everyone feels at home.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/menu" className="btn-primary">
                Explore Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary border-cream-200 text-cream-100 hover:bg-cream-100/10 hover:border-cream-100"
              >
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Intro Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-cafe">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-warm-lg">
                <Image
                  src="/images/Screenshot_20260809_094555_Instagram.jpg"
                  alt="Clayvio Cafe interior with wood slat ceiling and warm pendant lighting"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div>
              <p className="font-script text-3xl text-golden-600">Welcome to</p>
              <h2 className="heading-display mt-2">
                A Cozy Corner for Chai & Coffee
              </h2>
              <div className="divider-warm mt-4 ml-0" />
              <p className="text-body mt-6">
                Clayvio Cafe is a warm, inviting space in Sopore where the aroma of fresh chai fills the air. With wooden interiors, soft golden lighting, and a relaxed atmosphere, it's the perfect place to sit back, sip, and unwind.
              </p>
              <p className="text-body mt-4">
                From traditional kulhad chai to freshly made pizzas and sandwiches, every cup and bite is prepared with care.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="card-cafe p-5">
                  <Coffee className="h-6 w-6 text-golden-600" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-espresso-900">
                    Chai & Coffee
                  </h3>
                  <p className="mt-1 text-sm text-espresso-600">
                    Traditional kulhad chai, classic brews, and more.
                  </p>
                </div>
                <div className="card-cafe p-5">
                  <MapPin className="h-6 w-6 text-golden-600" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-espresso-900">
                    Right in Sopore
                  </h3>
                  <p className="mt-1 text-sm text-espresso-600">
                    New Colony, Sopore — near Arco's & Khyber Medicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section-padding bg-cream-100">
        <div className="container-cafe">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-3xl text-golden-600">Our Menu</p>
            <h2 className="heading-display mt-2">What We Serve</h2>
            <div className="divider-warm mt-4" />
            <p className="text-body mt-6">
              A selection of chai, coffee, sandwiches, pizza, bites, and drinks — all served in a cozy, welcoming setting.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image: '/images/Screenshot_20260809_094514_Instagram.jpg',
                title: 'Chai in Kulhad',
                desc: 'Freshly brewed, served in traditional clay cups.',
              },
              {
                image: '/images/Screenshot_20260809_094526_Instagram.jpg',
                title: 'Cold Coffee',
                desc: 'Creamy, chilled, and made to order.',
              },
              {
                image: '/images/Screenshot_20260809_094539_Instagram.jpg',
                title: 'Pizza',
                desc: 'Hot, cheesy, and satisfying.',
              },
              {
                image: '/images/Screenshot_20260809_094615_Instagram.jpg',
                title: 'Snacks & More',
                desc: 'Sandwiches, bites, shakes, and mojitos.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-warm transition-shadow hover:shadow-warm-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.desc}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-espresso-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-espresso-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/menu" className="btn-primary">
              View Full Menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Atmosphere CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-espresso-900 via-espresso-800 to-wood-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-golden-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cream-300/5 blur-3xl" />
        </div>

        <div className="container-cafe relative z-10 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-golden-400/20 backdrop-blur-sm">
              <Utensils className="h-8 w-8 text-golden-300" aria-hidden="true" />
            </div>
            <p className="font-script text-3xl text-golden-300">
              Come Say Hello
            </p>
            <h2 className="mt-3 text-4xl font-bold text-cream-50 sm:text-5xl lg:text-6xl">
              Visit Clayvio Cafe
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream-200 sm:text-xl">
              Find us at {CAFE.location}, {CAFE.locationDetail}. Stop by for a hot cup of chai.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}