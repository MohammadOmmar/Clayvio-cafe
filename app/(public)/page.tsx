import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Coffee, MapPin } from 'lucide-react';
import { CAFE } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-espresso-950">
        <div className="absolute inset-0">
          <Image
            src="/images/Screenshot_20260809_094443_Instagram.jpg"
            alt="Clayvio Cafe cozy interior with warm wooden furniture and warm lighting"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-espresso-950/10" />
        </div>

        <div className="container-cafe relative z-10 pb-16 pt-40 sm:pb-24">
          <div className="max-w-2xl animate-slide-up">
            <p className="font-script text-2xl text-golden-300 sm:text-3xl">
              {CAFE.tagline}
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-cream-50 sm:text-6xl lg:text-7xl">
              Clayvio Cafe
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-200 sm:text-lg">
              A warm, cozy corner in Sopore — where chai meets coffee and
              everyone feels at home.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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
              <p className="font-script text-2xl text-golden-600">Welcome to</p>
              <h2 className="heading-display mt-2">
                A Cozy Corner for Chai & Coffee
              </h2>
              <div className="divider-warm mt-4 ml-0" />
              <p className="text-body mt-6">
                Clayvio Cafe is a warm, inviting space in Sopore where the
                aroma of fresh chai fills the air. With wooden interiors,
                soft golden lighting, and a relaxed atmosphere, it's the
                perfect place to sit back, sip, and unwind.
              </p>
              <p className="text-body mt-4">
                From traditional kulhad chai to freshly made pizzas and
                sandwiches, every cup and bite is prepared with care.
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
            <p className="font-script text-2xl text-golden-600">Our Menu</p>
            <h2 className="heading-display mt-2">What We Serve</h2>
            <div className="divider-warm mt-4" />
            <p className="text-body mt-6">
              A selection of chai, coffee, sandwiches, pizza, bites, and
              drinks — all served in a cozy, welcoming setting.
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
      <section className="relative overflow-hidden bg-espresso-900">
        <div className="absolute inset-0">
          <Image
            src="/images/Screenshot_20260809_094457_Instagram.jpg"
            alt="Clayvio Cafe menu board and interior"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="container-cafe relative z-10 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-2xl text-golden-300">
              Come Say Hello
            </p>
            <h2 className="mt-3 text-3xl font-bold text-cream-50 sm:text-4xl lg:text-5xl">
              Visit Clayvio Cafe
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-cream-200 sm:text-lg">
              Find us at {CAFE.location}, {CAFE.locationDetail}. Stop by
              for a hot cup of chai.
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