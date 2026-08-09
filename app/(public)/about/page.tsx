import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Coffee, MapPin, Users, BookOpen } from 'lucide-react';
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
      <section className="relative bg-gradient-to-br from-espresso-900 via-espresso-800 to-wood-800 pt-32 pb-16 sm:pt-40 sm:pb-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-golden-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cream-300/5 blur-3xl" />
        </div>

        <div className="container-cafe relative z-10 text-center">
          <p className="font-script text-3xl text-golden-300 sm:text-4xl">
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
            {/* Illustrated graphic */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-golden-100 via-cream-200 to-wood-100 shadow-warm-lg">
                <div className="flex h-full items-center justify-center">
                  <svg viewBox="0 0 200 200" className="h-48 w-48 text-espresso-700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Open book illustration */}
                    <path d="M40 140 L40 60 Q40 50 50 50 L100 50 L100 140" stroke="currentColor" strokeWidth="3" fill="none"/>
                    <path d="M100 50 L150 50 Q160 50 160 60 L160 140" stroke="currentColor" strokeWidth="3" fill="none"/>
                    <path d="M100 50 L100 140" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M55 70 L95 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <path d="M55 85 L95 85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <path d="M55 100 L85 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <path d="M105 70 L145 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <path d="M105 85 L145 85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <path d="M105 100 L135 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <p className="font-script text-3xl text-golden-600">Welcome to</p>
              <h2 className="heading-display mt-2">
                A Cozy Space Built Around Chai
              </h2>
              <div className="divider-warm mt-4 ml-0" />
              <p className="text-body mt-6">
                Clayvio Cafe is a warm, inviting cafe in Sopore. Step inside and you'll find wooden furniture, cream-beige walls, a wood-slat ceiling, and soft golden pendant lighting — a space designed to feel like home.
              </p>
              <p className="text-body mt-4">
                Our menu centers on chai, served the traditional way in kulhad cups, alongside coffee, sandwiches, pizza, bites, shakes, and mojitos. Whether you're catching up with friends or taking a quiet moment for yourself, there's a corner here for you.
              </p>
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
                Traditional chai served in authentic clay kulhads — the way it's meant to be enjoyed.
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
                A warm, welcoming space for friends, family, and the local community to gather.
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
      <section className="bg-gradient-to-br from-espresso-900 via-espresso-800 to-wood-900 py-16">
        <div className="container-cafe text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-golden-400/20 backdrop-blur-sm">
            <BookOpen className="h-8 w-8 text-golden-300" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold text-cream-50 sm:text-3xl">
            Come Experience It Yourself
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-cream-200">
            Explore our menu or visit us to see the cafe in person.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/menu" className="btn-primary">
              View Menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-secondary border-cream-200 text-cream-100 hover:bg-cream-100/10 hover:border-cream-100">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}