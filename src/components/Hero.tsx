"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QuickQuoteForm from "./QuickQuoteForm";

gsap.registerPlugin(ScrollTrigger);

const servicePills = [
  "Website Design & Build",
  "Google Maps Setup",
  "Local SEO",
  "Website Maintenance",
  "Direct Support",
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animation
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
      });

      // Subheadline animation
      gsap.from(subheadlineRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        delay: 0.1,
      });

      // Pills animation
      const pills = pillsRef.current?.querySelectorAll('span');
      if (pills) {
        pills.forEach((pill, index) => {
          gsap.from(pill, {
            opacity: 0,
            y: 15,
            duration: 0.3,
            delay: 0.2 + index * 0.05,
          });
        });
      }

      // Form animation
      gsap.from(formRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        delay: 0.15,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-light pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 w-full">
        {/* Left: Headline and content */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="mb-8">
            <h1
              ref={headlineRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight"
            >
              Get Your Business{" "}
              <span className="text-accent">
                Found Online
              </span>
            </h1>
            <p
              ref={subheadlineRef}
              className="mt-8 text-xl sm:text-2xl text-dark-200 leading-relaxed"
            >
              I build websites for tradie businesses across Perth. You get a site that works, direct access to me, and someone who actually understands your industry.
            </p>
          </div>
          <div ref={pillsRef} className="flex flex-wrap gap-3 mt-8">
            {servicePills.map((pill) => (
              <span
                key={pill}
                className="bg-light-100 border border-dark/20 text-dark font-medium rounded-lg px-4 py-2 text-sm hover:border-accent hover:bg-light transition-colors duration-200"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div ref={formRef} className="flex-1 w-full flex justify-center items-center">
          <QuickQuoteForm title="GET IN TOUCH" subtitle="Let's discuss your project" />
        </div>
      </div>
    </section>
  );
}
