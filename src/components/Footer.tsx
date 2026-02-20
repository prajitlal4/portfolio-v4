'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { footerColumns } from "@/lib/data/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 1023px)').matches) return;

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
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-32 lg:pb-16 lg:px-8">
        {/* Four Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-6">
              {footerColumns.services.title}
            </h3>
            <ul className="space-y-3">
              {footerColumns.services.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-200 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-6">
              {footerColumns.company.title}
            </h3>
            <ul className="space-y-3">
              {footerColumns.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-200 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-6">
              {footerColumns.resources.title}
            </h3>
            <ul className="space-y-3">
              {footerColumns.resources.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-200 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-6">
              {footerColumns.contact.title}
            </h3>
            <ul className="space-y-3">
              {footerColumns.contact.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-200 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-dark-200">Perth, WA</li>
              <li className="text-sm text-dark-200">9am - 5pm AWST</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark/10 pt-8">
          {/* Bottom Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <p className="text-sm text-dark-200">
              &copy; {new Date().getFullYear()} PL Solutions. Built for Australian tradies.
            </p>
          </div>

          {/* ABN */}
          <p className="text-xs text-dark-200 text-center">
            ABN: 98 796 976 416
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
