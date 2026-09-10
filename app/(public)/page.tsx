'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Coffee } from 'lucide-react';
import { CAFE } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal from '@/components/animations/ScrollReveal';
import HorizontalScroll from '@/components/animations/HorizontalScroll';
import StickyStory from '@/components/animations/StickyStory';
import RevealText from '@/components/animations/RevealText';
import RevealImage from '@/components/animations/RevealImage';
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
import ExploreByMood from '@/components/ui/ExploreByMood';
import ClayvioFavourites from '@/components/ui/ClayvioFavourites';

export default function HomePage() {
  return (
    <>
      {/* ============ CINEMATIC HERO ============ */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-espresso-950">
        {/* Background illustration */}
        <div className="absolute inset-0">
          <CafeTable className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/70 to-espresso-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/80 via-transparent to-transparent" />
        </div>

        {/* Foreground content */}
        <div className="container-cafe relative z-10 pb-20 pt-28 lg:pb-28 lg:pt-36">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-4">
                  <OpeningStatus />
                  <p className="eyebrow-light">Clayvio Cafe · Sopore</p>
                </div>
              </FadeIn>

              <div className="mt-8 overflow-hidden">
                <RevealText delay={0.2} type="lines" className="text-display-xl text-parchment-50">
                  Where chai
                  <br />
                  meets comfort.
                </RevealText>
              </div>

              <FadeIn delay={0.5}>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-parchment-200">
                  A warm corner for chai, coffee, good food and even better
                  conversations.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <TimeAwareMessage className="mt-6" />
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/menu" className="btn-editorial-primary">
                    Explore the Menu
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-editorial border border-parchment-50/30 text-parchment-50 hover:bg-parchment-50/10 hover:border-parchment-50"
                  >
                    Find Us
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Hero illustration */}
            <div className="hidden lg:col-span-5 lg:block">
              <FadeIn delay={0.4} direction="left">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full bg-brass-400/5 blur-3xl" />
                  <div className="relative aspect-square max-w-md">
                    <CafeTable className="h-full w-full opacity-60" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-parchment-400/50">
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
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="eyebrow text-center">The Clayvio Way</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-6 text-display-lg text-center text-balance text-espresso-900">
                Not just a cafe.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 text-center font-script text-3xl text-clay-600 sm:text-4xl">
                A place to slow down.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mx-auto mt-10 max-w-xl text-center text-body-editorial">
                Born around chai, conversation and comfort — Clayvio is where
                the day slows down and every cup feels like home.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ LARGE EDITORIAL ILLUSTRATION ============ */}
      <section className="bg-parchment-100 pb-20 sm:pb-28">
        <div className="container-cafe">
          <RevealImage>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-espresso-900/8 bg-parchment-50 shadow-editorial-lg">
              <CafeInterior className="h-full w-full object-cover" />
            </div>
          </RevealImage>
        </div>
      </section>

      {/* ============ CLAYVIO FAVOURITES ============ */}
      <section className="section-editorial bg-parchment-50">
        <div className="container-cafe">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <ScrollReveal>
                <p className="eyebrow">Favourites</p>
                <h2 className="mt-4 text-display-lg text-balance text-espresso-900">
                  The ones
                </h2>
                <p className="mt-1 font-script text-3xl text-clay-600 sm:text-4xl">
                  we are known for.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <Link
                href="/menu"
                className="link-editorial inline-flex items-center gap-2 text-sm font-medium tracking-wide text-espresso-700 transition-colors hover:text-espresso-900"
              >
                View Full Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
          <div className="mt-14">
            <ClayvioFavourites />
          </div>
        </div>
      </section>

      {/* ============ EXPLORE BY MOOD ============ */}
      <section className="section-editorial bg-parchment-100">
        <div className="container-cafe">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow">Explore</p>
                <h2 className="mt-4 text-display-lg text-balance text-espresso-900">
                  Find your moment.
                </h2>
                <div className="divider-warm-left mt-6" />
                <p className="mt-6 text-body-editorial">
                  Whether you crave something warm, something cold, or something sweet — there is a Clayvio moment waiting for you.
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8">
              <ScrollReveal delay={0.1}>
                <ExploreByMood />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section className="section-editorial bg-espresso-950">
        <div className="container-cafe">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealImage delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <CafeInterior className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/50 to-transparent" />
                </div>
              </RevealImage>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ScrollReveal>
                <p className="eyebrow-light">Our Story</p>
                <h2 className="mt-5 text-display-lg text-parchment-50 text-balance">
                  Built on warmth.
                </h2>
                <p className="mt-2 font-script text-3xl text-brass-300 sm:text-4xl">
                  Served with love.
                </p>
                <div className="mt-8 h-px w-16 bg-gradient-to-r from-brass-400 to-transparent" />
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-8 text-body-editorial text-parchment-200">
                  Clayvio Cafe was born from a simple idea — that a cafe should feel like home. Warm wooden interiors, soft golden light, and the comforting aroma of chai brewing fresh throughout the day.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-5 text-body-editorial text-parchment-300">
                  From kulhad chai to wood-fired pizza, every item on our menu is crafted to bring people together. This is more than a cafe — it is a gathering place.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="mt-10">
                  <Link
                    href="/about"
                    className="btn-editorial border border-parchment-50/30 text-parchment-50 hover:bg-parchment-50/10 hover:border-parchment-50"
                  >
                    Our Story
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED MENU ============ */}
      <section className="section-editorial bg-parchment-100">
        <div className="container-cafe">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <ScrollReveal>
                <p className="eyebrow">From the Menu</p>
                <h2 className="mt-4 text-display-lg text-balance text-espresso-900">
                  What we serve.
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <Link
                href="/menu"
                className="link-editorial inline-flex items-center gap-2 text-sm font-medium tracking-wide text-espresso-700 hover:text-espresso-900"
              >
                View full menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-espresso-900/8 bg-parchment-50 shadow-warm-sm transition-all duration-500 group-hover:shadow-editorial group-hover:-translate-y-1">
                    <item.icon className="h-full w-full object-cover p-8 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-5">
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
      <section className="border-y border-espresso-900/5 bg-parchment-200 py-8">
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
      <section className="section-editorial bg-parchment-100">
        <div className="container-cafe">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <p className="eyebrow">The Atmosphere</p>
              <h2 className="mt-5 text-display-lg text-balance text-espresso-900">
                Step inside.
              </h2>
              <p className="mt-2 font-script text-3xl text-clay-600 sm:text-4xl">
                Stay awhile.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-12">
            <div className="sm:col-span-8">
              <RevealImage>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-espresso-900/8 bg-parchment-50 shadow-editorial">
                  <CafeInterior className="h-full w-full object-cover" />
                </div>
              </RevealImage>
            </div>
            <div className="sm:col-span-4">
              <RevealImage delay={0.15}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-espresso-900/8 bg-parchment-50 shadow-editorial">
                  <Botanical className="h-full w-full object-cover" />
                </div>
              </RevealImage>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VISIT / LOCATION ============ */}
      <section className="relative overflow-hidden bg-espresso-950 section-editorial">
        <div className="absolute inset-0">
          <CafeStorefront className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso-950 via-espresso-950/80 to-espresso-950" />
        </div>

        <div className="container-cafe relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brass-400/30 bg-brass-400/10">
                <MapPin className="h-7 w-7 text-brass-300" aria-hidden="true" />
              </div>
              <p className="eyebrow-light mt-10">Find Us</p>
              <h2 className="mt-5 text-display-xl text-parchment-50 text-balance">
                Come sit with us.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-parchment-200">
                {CAFE.location}, {CAFE.locationDetail}. Stop by for a hot cup
                of chai.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-editorial-primary">
                  Get Directions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/menu"
                  className="btn-editorial border border-parchment-50/30 text-parchment-50 hover:bg-parchment-50/10 hover:border-parchment-50"
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
