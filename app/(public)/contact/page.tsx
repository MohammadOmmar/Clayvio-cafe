import type { Metadata } from 'next';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { CAFE } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';
import ParallaxImage from '@/components/animations/ParallaxImage';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Clayvio Cafe. Located at New Colony, Sopore - near Arco's & Khyber Medicos.",
};

export default function ContactPage() {
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
            <p className="eyebrow text-brass-300">Find Us</p>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-parchment-50 sm:text-6xl lg:text-7xl">
              Visit Clayvio Cafe
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-parchment-200">
              We'd love to see you — come say hello for a cup of chai.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-parchment-100 py-24 sm:py-32">
        <div className="container-cafe">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8">
              {/* Location */}
              <ScrollReveal>
                <div className="group flex items-start gap-6 border-b border-parchment-200 pb-8 transition-colors duration-300 hover:border-clay-400/50">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-clay-100 transition-colors duration-300 group-hover:bg-clay-200">
                    <MapPin className="h-7 w-7 text-clay-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-espresso-900">
                      Location
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-espresso-700">
                      {CAFE.location}
                      <br />
                      {CAFE.locationDetail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Call or DM */}
              <ScrollReveal delay={0.05}>
                <div className="group flex items-start gap-6 border-b border-parchment-200 pb-8 transition-colors duration-300 hover:border-clay-400/50">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-clay-100 transition-colors duration-300 group-hover:bg-clay-200">
                    <Phone className="h-7 w-7 text-clay-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-espresso-900">
                      Call or DM
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-espresso-700">
                      {CAFE.contact}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Instagram */}
              <ScrollReveal delay={0.1}>
                <div className="group flex items-start gap-6 border-b border-parchment-200 pb-8 transition-colors duration-300 hover:border-clay-400/50">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-clay-100 transition-colors duration-300 group-hover:bg-clay-200">
                    <Instagram className="h-7 w-7 text-clay-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-espresso-900">
                      Instagram
                    </h2>
                    <a
                      href={`https://instagram.com/${CAFE.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-3 inline-block text-lg font-medium text-espresso-700 transition-colors hover:text-clay-600"
                    >
                      @{CAFE.instagram}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Cafe image */}
            <ScrollReveal delay={0.15}>
              <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-3xl shadow-warm-lg">
                <ParallaxImage
                  src="/images/Screenshot_20260809_094555_Instagram.jpg"
                  alt="Clayvio Cafe interior with warm wooden ceiling and lighting"
                  className="h-full w-full"
                  parallaxAmount={40}
                  sizes="(max-width: 1024px) 100vw, 768px"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}