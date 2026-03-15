'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/lib/data/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-dark/10">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://portfolio1.syd1.cdn.digitaloceanspaces.com/PL%20Solutions%20White.png"
              alt="Lal Solutions"
              width={130}
              height={34}
              className="h-8 w-auto"
              style={{ filter: 'brightness(0)' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium font-sans transition-colors duration-150 ${
                  isActive(link.href) ? 'text-accent' : 'text-dark-200 hover:text-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-dark hover:text-accent transition-colors duration-150"
            aria-label="Open menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-50 bg-dark/40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-dark/10 flex-shrink-0">
          <span className="text-sm text-dark-200 font-sans font-medium">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-dark hover:text-accent transition-colors duration-150"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Links — pushed to bottom right for thumb reach */}
        <div className="flex-1 flex flex-col justify-end items-end px-6 pb-10">
          <ul className="w-full space-y-1 text-right">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 text-xl font-heading font-bold transition-colors duration-150 ${
                    isActive(link.href) ? 'text-accent' : 'text-dark hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 w-full">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-3.5 rounded-xl text-base transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
