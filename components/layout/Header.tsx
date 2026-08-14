'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Coffee, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const isTransparent = !scrolled && !isOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'border-b border-parchment-200/80 bg-parchment-100/95 shadow-warm-sm backdrop-blur-md'
      )}
    >
      <nav
        className="container-cafe flex h-16 items-center justify-between lg:h-20"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Clayvio Cafe home"
        >
          <span
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300',
              isTransparent
                ? 'bg-parchment-50/20 text-parchment-50 backdrop-blur-sm'
                : 'bg-espresso-800 text-parchment-50'
            )}
          >
            <Coffee className="h-5 w-5" aria-hidden="true" />
          </span>
          <span
            className={cn(
              'font-display text-xl font-bold tracking-tight transition-colors duration-300',
              isTransparent ? 'text-parchment-50' : 'text-espresso-900'
            )}
          >
            Clayvio Cafe
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'link-underline text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400',
                  isTransparent
                    ? 'text-parchment-100 hover:text-parchment-50'
                    : 'text-espresso-700 hover:text-espresso-900',
                  pathname === link.href &&
                    (isTransparent ? 'text-parchment-50' : 'text-espresso-900')
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/menu"
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400',
                isTransparent
                  ? 'border border-parchment-50/40 text-parchment-50 hover:bg-parchment-50/10'
                  : 'bg-espresso-800 text-parchment-50 hover:bg-espresso-700 hover:shadow-warm'
              )}
            >
              View Menu
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 lg:hidden',
            isTransparent
              ? 'text-parchment-50 hover:bg-parchment-50/10'
              : 'text-espresso-800 hover:bg-parchment-200'
          )}
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
          className="border-t border-parchment-200 bg-parchment-100/98 backdrop-blur-md lg:hidden"
        >
          <ul className="container-cafe flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-parchment-200 text-espresso-900'
                      : 'text-espresso-700 hover:bg-parchment-200/60'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-4">
              <Link
                href="/menu"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-espresso-800 px-6 py-3 text-sm font-medium text-parchment-50 transition-colors hover:bg-espresso-700"
              >
                View Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}