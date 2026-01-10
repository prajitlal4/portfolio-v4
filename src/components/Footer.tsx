'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Guides", href: "/guides" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-light border-t border-dark/10 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-32 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-dark hover:text-accent transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-sage transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full" />

          {/* Copyright */}
          <p className="text-center text-sm text-dark max-w-md">
            &copy; 2025 PL Solutions. Crafted with care for Australian businesses.
          </p>
        </div>
      </div>

      {/* Hidden static form for Netlify detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
    </footer>
  );
}
