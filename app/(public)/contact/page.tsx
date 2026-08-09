import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { CAFE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Clayvio Cafe. Located at New Colony, Sopore - near Arco's & Khyber Medicos.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-espresso-900 via-espresso-800 to-wood-800 pt-32 pb-16 sm:pt-40 sm:pb-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-golden-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cream-300/5 blur-3xl" />
        </div>

        <div className="container-cafe relative z-10 text-center">
          <p className="font-script text-3xl text-golden-300 sm:text-4xl">Find Us</p>
          <h1 className="mt-3 text-4xl font-bold text-cream-50 sm:text-5xl">Visit Clayvio Cafe</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-cream-300 sm:text-base">
            We'd love to see you — come say hello for a cup of chai.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-cafe">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-6">
              <div className="card-cafe flex items-start gap-5 p-6 sm:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-golden-100">
                  <MapPin className="h-6 w-6 text-golden-600" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-espresso-900">Location</h2>
                  <p className="mt-2 text-body">
                    {CAFE.location}
                    <br />
                    {CAFE.locationDetail}
                  </p>
                </div>
              </div>

              <div className="card-cafe flex items-start gap-5 p-6 sm:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-golden-100">
                  <Phone className="h-6 w-6 text-golden-600" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-espresso-900">Call or DM</h2>
                  <p className="mt-2 text-body">{CAFE.contact}</p>
                </div>
              </div>

              <div className="card-cafe flex items-start gap-5 p-6 sm:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-golden-100">
                  <Instagram className="h-6 w-6 text-golden-600" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-espresso-900">Instagram</h2>
                  <a
                    href={`https://instagram.com/${CAFE.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-body font-medium text-espresso-800 underline decoration-golden-400 underline-offset-4 transition-colors hover:text-golden-600"
                  >
                    @{CAFE.instagram}
                  </a>
                </div>
              </div>
            </div>

            {/* Cafe image */}
            <div className="mt-12 overflow-hidden rounded-3xl shadow-warm-lg">
              <Image
                src="/images/Screenshot_20260809_094555_Instagram.jpg"
                alt="Clayvio Cafe interior with warm wooden ceiling and lighting"
                width={1200}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}