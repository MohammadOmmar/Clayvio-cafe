import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Coffee, MapPin, Users } from 'lucide-react';
import { CAFE } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal from '@/components/animations/ScrollReveal';
import CafeInterior from '@/components/illustrations/CafeInterior';
import CafeTable from '@/components/illustrations/CafeTable';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Clayvio Cafe — a cozy cafe in Sopore with warm wooden interiors, chai, coffee, and snacks.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-espresso-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-brass-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-clay-500/10 blur-3xl" />
        </div>

        <div className="container-cafe relative z-10 text-center">
          <FadeIn>
            <p className="eyebrow text-brass-300">About Clayvio</p>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-parchment-50 sm:text-6xl lg:text-7xl">
              Our Cafe
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-parchment-200">
              {CAFE.tagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-parchment-100 py-24 sm:py-32">
        <div className="container-cafe">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <p className="eyebrow">Our Story</p>
                <h2 className="heading-display mt-4">
                  Some places are built.
                  <br />
                  Others become part of your routine.
                </h2>
                <div className="divider-warm mt-6 ml-0" />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-body mt-8">
                  Clayvio Cafe is a warm, inviting cafe in Sopore. Step inside
                  and you'll find wooden furniture, cream-beige walls, a
                  wood-slat ceiling, and soft golden pendant lighting — a
                  space designed to feel like home.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-body mt-4">
                  Our menu centers on chai, served the traditional way in
                  kulhad cups, alongside coffee, sandwiches, pizza, bites,
                  shakes, and mojitos. Whether you're catching up with friends
                  or taking a quiet moment for yourself, there's a corner here
                  for you.
                </p>
              </ScrollReveal>
            </div>

            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-espresso-900/10 bg-parchment-50 shadow-warm-lg">
                  <CafeInterior className="h-full w-full object-cover" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-parchment-200 py-20 sm:py-28">
        <div className="container-cafe">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-script text-4xl text-clay-600 sm:text-5xl">
                &ldquo;Good chai, warm conversations and a place to stay
                awhile.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What defines us */}
      <section className="bg-parchment-100 py-24 sm:py-32">
        <div className="container-cafe">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <p className="eyebrow">What Defines Clayvio</p>
              <h2 className="heading-display mt-4">Three things we hold close</h2>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            <ScrollReveal delay={0.05}>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clay-100">
                  <Coffee className="h-7 w-7 text-clay-600" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-espresso-900">
                  Kulhad Chai
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso-600">
                  Traditional chai served in authentic clay kulhads — the way
                  it's meant to be enjoyed.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clay-100">
                  <Users className="h-7 w-7 text-clay-600" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-espresso-900">
                  Community
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso-600">
                  A warm, welcoming space for friends, family, and the local
                  community to gather.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clay-100">
                  <MapPin className="h-7 w-7 text-clay-600" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-espresso-900">
                  In Sopore
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso-600">
                  Located at {CAFE.location}, near {CAFE.locationDetail}.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-espresso-950 py-24 sm:py-32">
        <div className="absolute inset-0">
          <CafeTable className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso-950 via-espresso-950/70 to-espresso-950" />
        </div>

        <div className="container-cafe relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <p className="eyebrow text-brass-300">Come Experience It</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-parchment-50 sm:text-5xl">
                Come sit with us.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-parchment-200">
                Explore our menu or visit us to see the cafe in person.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/menu" className="btn-primary">
                  View Menu
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary border-parchment-50/40 text-parchment-50 hover:bg-parchment-50/10 hover:border-parchment-50"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}