'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Coffee } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || isOpen
          ? 'bg-cream-50/95 shadow-warm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav
        className="container-cafe flex h-16 items-center justify-between lg:h-20"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 text-espresso-900"
          aria-label="Clayvio Cafe home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso-700 text-cream-50 transition-colors group-hover:bg-espresso-800">
            <Coffee className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Clayvio Cafe
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-golden-400',
                  pathname === link.href
                    ? 'bg-espresso-100 text-espresso-900'
                    : 'text-espresso-700 hover:bg-cream-100 hover:text-espresso-900'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-espresso-800 transition-colors hover:bg-cream-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-golden-400 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-cream-200 bg-cream-50/98 backdrop-blur-md lg:hidden"
        >
          <ul className="container-cafe flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-espresso-100 text-espresso-900'
                      : 'text-espresso-700 hover:bg-cream-100'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}