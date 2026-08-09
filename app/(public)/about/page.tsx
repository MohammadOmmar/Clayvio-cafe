import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Coffee, MapPin, Users } from 'lucide-react';
import { CAFE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Clayvio Cafe — a cozy cafe in Sopore with warm wooden interiors, chai, coffee, and snacks.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-espresso-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/Screenshot_20260809_094555_Instagram.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 to-espresso-950/50" />
        </div>
        <div className="container-cafe relative z-10 text-center">
          <p className="font-script text-2xl text-golden-300 sm:text-3xl">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold text-cream-50 sm:text-5xl">
            Our Cafe
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-cream-300 sm:text-base">
            {CAFE.tagline}
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding bg-cream-50">
        <div className="container-cafe">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="heading-display">
                A Cozy Space Built Around Chai
              </h2>
              <div className="divider-warm mt-4 ml-0" />
              <p className="text-body mt-6">
                Clayvio Cafe is a warm, inviting cafe in Sopore. Step inside
                and you'll find wooden furniture, cream-beige walls, a
                wood-slat ceiling, and soft golden pendant lighting — a space
                designed to feel like home.
              </p>
              <p className="text-body mt-4">
                Our menu centers on chai, served the traditional way in
                kulhad cups, alongside coffee, sandwiches, pizza, bites,
                shakes, and mojitos. Whether you're catching up with friends
                or taking a quiet moment for yourself, there's a corner here
                for you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl shadow-warm">
                <Image
                  src="/images/Screenshot_20260809_094443_Instagram.jpg"
                  alt="Clayvio Cafe interior with wooden furniture"
                  width={400}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl shadow-warm">
                <Image
                  src="/images/Screenshot_20260809_094555_Instagram.jpg"
                  alt="Clayvio Cafe wood slat ceiling and pendant lighting"
                  width={400}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What defines us */}
      <section className="section-padding bg-cream-100">
        <div className="container-cafe">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-display">What Defines Clayvio</h2>
            <div className="divider-warm mt-4" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="card-cafe p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-golden-100">
                <Coffee className="h-6 w-6 text-golden-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-espresso-900">
                Kulhad Chai
              </h3>
              <p className="mt-2 text-sm text-espresso-600">
                Traditional chai served in authentic clay kulhads — the way
                it's meant to be enjoyed.
              </p>
            </div>
            <div className="card-cafe p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-golden-100">
                <Users className="h-6 w-6 text-golden-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-espresso-900">
                Community
              </h3>
              <p className="mt-2 text-sm text-espresso-600">
                A warm, welcoming space for friends, family, and the local
                community to gather.
              </p>
            </div>
            <div className="card-cafe p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-golden-100">
                <MapPin className="h-6 w-6 text-golden-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-espresso-900">
                In Sopore
              </h3>
              <p className="mt-2 text-sm text-espresso-600">
                Located at {CAFE.location}, near {CAFE.locationDetail}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso-900 py-16">
        <div className="container-cafe text-center">
          <h2 className="text-2xl font-bold text-cream-50 sm:text-3xl">
            Come Experience It Yourself
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-cream-200">
            Explore our menu or check out photos of the cafe before you visit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/menu" className="btn-primary">
              View Menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}