import Link from 'next/link';
import { Coffee, MapPin, Phone, Instagram } from 'lucide-react';
import { CAFE, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-espresso-800 bg-espresso-950 text-cream-200">
      <div className="container-cafe py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-cream-50">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100 text-espresso-900">
                <Coffee className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold">Clayvio Cafe</span>
            </Link>
            <p className="mt-4 text-sm text-cream-300">{CAFE.tagline}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-lg font-semibold text-cream-100">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 transition-colors hover:text-golden-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream-100">
              Visit Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-golden-400" aria-hidden="true" />
                <span>
                  {CAFE.location}
                  <br />
                  {CAFE.locationDetail}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-golden-400" aria-hidden="true" />
                <span>{CAFE.contact}</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 shrink-0 text-golden-400" aria-hidden="true" />
                <a
                  href={`https://instagram.com/${CAFE.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-golden-300"
                >
                  @{CAFE.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-espresso-800 pt-6 text-center text-xs text-cream-400">
          © {new Date().getFullYear()} Clayvio Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}