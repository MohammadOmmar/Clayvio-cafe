import Link from 'next/link';
import { Coffee, MapPin, Phone, Instagram, ArrowUpRight } from 'lucide-react';
import { CAFE, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-espresso-800/50 bg-espresso-950 text-parchment-200">
      <div className="container-cafe py-20 lg:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-parchment-50">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-parchment-100 text-espresso-900">
                <Coffee className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                Clayvio Cafe
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-parchment-300">
              {CAFE.tagline}. A warm corner in Sopore for chai, coffee, and good company.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={`https://instagram.com/${CAFE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-parchment-50/20 text-parchment-300 transition-all duration-300 hover:border-parchment-50/50 hover:bg-parchment-50/10 hover:text-parchment-50"
                aria-label="Follow on Instagram"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 lg:col-span-3 lg:col-start-6">
            <h3 className="text-xs font-medium uppercase tracking-eyebrow text-parchment-400">
              Explore
            </h3>
            <ul className="mt-6 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline inline-flex items-center gap-1 text-sm text-parchment-300 transition-colors hover:text-parchment-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-eyebrow text-parchment-400">
              Visit Us
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-parchment-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" aria-hidden="true" />
                <span className="leading-relaxed">
                  {CAFE.location}<br />
                  {CAFE.locationDetail}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brass-400" aria-hidden="true" />
                <span>{CAFE.contact}</span>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${CAFE.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-sm text-parchment-300 transition-colors hover:text-parchment-50"
                >
                  @{CAFE.instagram}
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-espresso-800/50 pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-parchment-400 sm:flex-row sm:justify-between sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} Clayvio Cafe. All rights reserved.
            </span>
            <span className="font-body uppercase tracking-[0.25em] text-espresso-500/60">
              Designed by OMMANZ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}