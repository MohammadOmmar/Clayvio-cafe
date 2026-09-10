import type { Metadata } from 'next';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { CAFE } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal from '@/components/animations/ScrollReveal';
import CafeStorefront from '@/components/illustrations/CafeStorefront';

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
            <p className="eyebrow-light">Find Us</p>
            <h1 className="mt-6 text-display-xl text-parchment-50">
              Visit Clayvio Cafe
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-parchment-200">
              We'd love to see you — come say hello for a cup of chai.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact info */}
      <section className="section-editorial bg-parchment-100">
        <div className="container-cafe">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8">
              {/* Location */}
              <ScrollReveal>
                <div className="group flex items-start gap-6 border-b border-parchment-200 pb-8 transition-colors duration-300 hover:border-clay-400/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-clay-50 transition-colors duration-300 group-hover:bg-clay-100">
                    <MapPin className="h-6 w-6 text-clay-600" aria-hidden="true" />
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
                <div className="group flex items-start gap-6 border-b border-espresso-900/8 pb-8 transition-colors duration-300 hover:border-clay-400/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-clay-50 transition-colors duration-300 group-hover:bg-clay-100">
                    <Phone className="h-6 w-6 text-clay-600" aria-hidden="true" />
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
                <div className="group flex items-start gap-6 border-b border-espresso-900/8 pb-8 transition-colors duration-300 hover:border-clay-400/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-clay-50 transition-colors duration-300 group-hover:bg-clay-100">
                    <Instagram className="h-6 w-6 text-clay-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-espresso-900">
                      Instagram
                    </h2>
                    <a
                      href={`https://instagram.com/${CAFE.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-editorial mt-3 inline-block text-lg font-medium text-espresso-700 transition-colors hover:text-clay-600"
                    >
                      @{CAFE.instagram}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Cafe storefront illustration */}
            <ScrollReveal delay={0.15}>
              <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl border border-espresso-900/8 bg-parchment-50 shadow-editorial-lg">
                <CafeStorefront className="h-full w-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}