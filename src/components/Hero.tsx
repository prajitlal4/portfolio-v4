"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const servicePills = [
  "Website Development",
  "Google Business Profile",
  "SEO Optimization",
  "Maintenance & Security",
  "Support & Consulting",
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
          headlineRef.current,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
          }
        )
        .fromTo(
          subheadlineRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5"
        )
        .fromTo(
          pillsRef.current?.children || [],
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.4"
        )
        .fromTo(
          formRef.current,
          {
            x: 60,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
          },
          "-=0.8"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-dark via-dark to-dark-100 pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/10 via-transparent to-apple-blue/5 animate-gradientShift opacity-50" 
           style={{ backgroundSize: "200% 200%" }} />
      
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 w-full">
        {/* Left: Headline and content */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="mb-8">
            <h1 
              ref={headlineRef}
              className="opacity-0 text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-light leading-[1.1] tracking-tight"
            >
              Websites That{" "}
              <span className="bg-gradient-to-r from-apple-blue-light via-apple-blue to-apple-blue-dark bg-clip-text text-transparent">
                Get You Leads
              </span>
              , Not Just Seen.
            </h1>
            <p 
              ref={subheadlineRef}
              className="opacity-0 mt-8 text-xl sm:text-2xl text-light-muted leading-relaxed"
            >
              From the first click to the final quote, I help you land real jobs with proven digital strategies tailored to your business.
            </p>
          </div>
          <div ref={pillsRef} className="flex flex-wrap gap-3 mt-8">
            {servicePills.map((pill) => (
              <span 
                key={pill} 
                className="opacity-0 bg-white/5 backdrop-blur-sm border border-white/10 text-light font-medium rounded-full px-5 py-2.5 text-sm hover:bg-white/10 hover:border-apple-blue/50 transition-all duration-300"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div ref={formRef} className="opacity-0 flex-1 w-full flex justify-center items-center">
          <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-glass p-8 hover:bg-white/[0.07] transition-all duration-500">
            <h2 className="text-2xl font-bold font-heading text-light mb-6 text-center">
              GET IN TOUCH
            </h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you"
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don&apos;t fill this out if you&apos;re human:
                  <input name="bot-field" />
                </label>
              </p>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-light placeholder:text-light-muted focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue transition-all duration-300 text-base backdrop-blur-sm"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email *"
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-light placeholder:text-light-muted focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue transition-all duration-300 text-base backdrop-blur-sm"
              />
              <textarea
                name="message"
                rows={4}
                required
                placeholder="How can we help your business?"
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-light placeholder:text-light-muted focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue transition-all duration-300 text-base backdrop-blur-sm resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-apple-blue to-apple-blue-dark px-6 py-4 text-base font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                ENQUIRE NOW
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Hidden static form for Netlify detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
    </section>
  );
}
