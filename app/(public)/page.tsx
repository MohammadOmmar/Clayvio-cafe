'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Coffee } from 'lucide-react';
import { CAFE } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal from '@/components/animations/ScrollReveal';
import HorizontalScroll from '@/components/animations/HorizontalScroll';
import StickyStory from '@/components/animations/StickyStory';
import CafeTable from '@/components/illustrations/CafeTable';
import CafeInterior from '@/components/illustrations/CafeInterior';
import KulhadChai from '@/components/illustrations/KulhadChai';
import CoffeeCup from '@/components/illustrations/CoffeeCup';
import Pizza from '@/components/illustrations/Pizza';
import Sandwich from '@/components/illustrations/Sandwich';
import Botanical from '@/components/illustrations/Botanical';
import CafeStorefront from '@/components/illustrations/CafeStorefront';
import OpeningStatus from '@/components/ui/OpeningStatus';
import TimeAwareMessage from '@/components/ui/TimeAwareMessage';
import DailyRhythm from '@/components/ui/DailyRhythm';
import ExploreByMood from '@/components/ui/ExploreByMood';
import ClayvioFavourites from '@/components/ui/ClayvioFavourites';

export default function HomePage() {
  return (
    <>
      {/* ============ CINEMATIC HERO ============ */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-espresso-950">
        {/* Background illustration */}
        <div className="absolute inset-0">
          <CafeTable className="h-full w-full object-cover opacity-30" />
          {/* Warm dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/70 via-transparent to-transparent" />
        </div>

        {/* Foreground content */}
        <div className="container-cafe relative z-10 pb-24 pt-32">
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3">
                <OpeningStatus />
                <p className="eyebrow text-brass-300">Clayvio Cafe · Sopore</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-parchment-50 sm:text-6xl lg:text-7xl">
                Where chai
                <br />
                meets comfort.
              </h1>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-parchment-200">
                A warm corner for chai, coffee, good food and even better
                conversations.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <TimeAwareMessage className="mt-6" />
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/menu" className="btn-primary">
                  Explore the Menu
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary border-parchment-50/40 text-parchment-50 hover:bg-parchment-50/10 hover:border-parchment-50"
                >
                  Find Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-eyebrow text-parchment-300/70">
              Scroll
            </span>
            <div className="h-12 w-px overflow-hidden bg-parchment-300/20">
              <div className="h-full w-full origin-top animate-scroll-line bg-brass-400" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ BRAND STATEMENT ============ */}
      <section className="bg-parchment-100 py-24 sm:py-32 lg:py-40">
        <div className="container-cafe">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <p className="eyebrow">The Clayvio Way</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-espresso-900 sm:text-5xl lg:text-6xl">
                Not just a cafe.
                <br />
                <span className="font-script text-5xl text-clay-600 sm:text-6xl lg:text-7xl">
                  A place to slow down.
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-espresso-700">
                Born around chai, conversation and comfort — Clayvio is where
                the day slows down and every cup feels like home.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ LARGE EDITORIAL ILLUSTRATION ============ */}
      <section className="bg-parchment-100 pb-24 sm:pb-32">
        <div className="container-cafe">
          <ScrollReveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-espresso-900/10 bg-parchment-50 shadow-warm-lg">
              <CafeInterior className="h-full w-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ DAILY RHYTHM ============ */}
      <DailyRhythm />

      {/* ============ CLAYVIO FAVOURITES ============ */}
      <section className="bg-parchment-100 py-24 sm:py-32">
        <div className="container-cafe">
          <ScrollReveal>
            <ClayvioFavourites />
          </ScrollReveal>
        </div>
      </section>

      {/* ============ EXPLORE BY MOOD ============ */}
      <section className="bg-parchment-200 py-24 sm:py-32">
        <div className="container-cafe">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <ScrollReveal>
              <p className="eyebrow">What are you craving?</p>
              <h2 className="heading-display mt-4">Explore by mood</h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <ExploreByMood />
          </ScrollReveal>
        </div>
      </section>

      {/* ============ STORY SECTION ============ */}
      <section className="bg-parchment-100 py-24 sm:py-32">
        <div className="container-cafe">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <p className="eyebrow">Our Story</p>
                <h2 className="heading-display mt-4">
                  Born around chai, conversation and comfort.
                </h2>
                <div className="divider-warm mt-6 ml-0" />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-body mt-8">
                  Clayvio Cafe is a warm, inviting space in Sopore where the
                  aroma of fresh chai fills the air. With wooden interiors,
                  soft golden lighting, and a relaxed atmosphere, it's the
                  perfect place to sit back, sip, and unwind.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-body mt-4">
                  From traditional kulhad chai to freshly made pizzas and
                  sandwiches, every cup and bite is prepared with care.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Link
                  href="/about"
                  className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-espresso-800 hover:text-clay-600"
                >
                  Read our story
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </ScrollReveal>
            </div>

            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-espresso-900/10 bg-parchment-50 shadow-warm-lg">
                  <KulhadChai className="h-full w-full object-cover" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED MENU ============ */}
      <section className="bg-parchment-100 py-24 sm:py-32">
        <div className="container-cafe">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <ScrollReveal>
                <p className="eyebrow">From the Menu</p>
                <h2 className="heading-display mt-4">What we serve</h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <Link
                href="/menu"
                className="link-underline inline-flex items-center gap-2 text-sm font-medium text-espresso-800 hover:text-clay-600"
              >
                View full menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: KulhadChai,
                title: 'Kulhad Chai',
                desc: 'Freshly brewed, served in traditional clay cups.',
              },
              {
                icon: CoffeeCup,
                title: 'Cold Coffee',
                desc: 'Creamy, chilled, and made to order.',
              },
              {
                icon: Pizza,
                title: 'Pizza',
                desc: 'Hot, cheesy, and satisfying.',
              },
              {
                icon: Sandwich,
                title: 'Snacks & More',
                desc: 'Sandwiches, bites, shakes, and mojitos.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <Link href="/menu" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-espresso-900/10 bg-parchment-50 shadow-warm-sm transition-shadow duration-500 group-hover:shadow-warm-lg">
                    <item.icon className="h-full w-full object-cover p-8 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-xl font-semibold text-espresso-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-espresso-600">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HORIZONTAL SCROLL STRIP ============ */}
      <section className="border-y border-parchment-200 bg-parchment-200 py-12">
        <HorizontalScroll
          items={['CHAI', 'COFFEE', 'PIZZA', 'SANDWICHES', 'SHAKES', 'MOJITOS', 'BITES']}
        />
      </section>

      {/* ============ STICKY STORYTELLING ============ */}
      <StickyStory
        title="Made fresh. Served warm."
        description="Every cup of chai is brewed to order. Every sandwich is made when you ask for it. Every pizza comes out of the oven hot and golden. That's the Clayvio promise — simple, honest, and always fresh."
        illustrations={[
          {
            component: KulhadChai,
            alt: 'Clayvio Cafe chai served in traditional kulhad cups',
          },
          {
            component: CoffeeCup,
            alt: 'Clayvio Cafe cold coffee with cream',
          },
          {
            component: Pizza,
            alt: 'Clayvio Cafe pizza fresh from the oven',
          },
        ]}
      />

      {/* ============ ATMOSPHERE ============ */}
      <section className="bg-parchment-100 py-24 sm:py-32">
        <div className="container-cafe">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <p className="eyebrow">The Atmosphere</p>
              <h2 className="heading-display mt-4">
                Step inside. Stay awhile.
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="sm:col-span-2 lg:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-espresso-900/10 bg-parchment-50 shadow-warm">
                <CafeInterior className="h-full w-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-espresso-900/10 bg-parchment-50 shadow-warm">
                <Botanical className="h-full w-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ VISIT / LOCATION ============ */}
      <section className="relative overflow-hidden bg-espresso-950 py-24 sm:py-32">
        <div className="absolute inset-0">
          <CafeStorefront className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso-950 via-espresso-950/70 to-espresso-950" />
        </div>

        <div className="container-cafe relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brass-400/20">
                <MapPin className="h-7 w-7 text-brass-300" aria-hidden="true" />
              </div>
              <p className="eyebrow mt-6 text-brass-300">Find Us</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-parchment-50 sm:text-5xl">
                Come sit with us.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-parchment-200">
                {CAFE.location}, {CAFE.locationDetail}. Stop by for a hot cup
                of chai.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Directions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/menu"
                  className="btn-secondary border-parchment-50/40 text-parchment-50 hover:bg-parchment-50/10 hover:border-parchment-50"
                >
                  <Coffee className="h-4 w-4" aria-hidden="true" />
                  View Menu
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
