'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(formRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="contact" className="relative bg-dark-100 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/10 via-transparent to-apple-blue/5 animate-gradientShift opacity-50" 
           style={{ backgroundSize: "200% 200%" }} />

      <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text */}
          <div className="flex-1 w-full max-w-2xl">
            <h2 ref={headlineRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
              <span className="text-light">Ready to Grow </span>
              <span className="bg-gradient-to-r from-apple-blue-light via-apple-blue to-apple-blue-dark bg-clip-text text-transparent">
                Your Business Online?
              </span>
            </h2>
            <p ref={textRef} className="mt-8 text-xl sm:text-2xl text-light-muted leading-relaxed">
              Let&apos;s build a website or app that helps your business grow. You get direct access, fast support, and a personal commitment to your success with no agencies or middlemen.
            </p>
          </div>

          {/* Right: Form */}
          <div ref={formRef} className="flex-1 w-full flex justify-center items-center">
            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-glass p-8 hover:bg-white/[0.07] transition-all duration-500">
              <h3 className="text-2xl font-bold font-heading text-light mb-6 text-center">
                GET IN TOUCH
              </h3>
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
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-light placeholder:text-light-muted focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue focus:shadow-glow transition-all duration-300 text-base backdrop-blur-sm"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email *"
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-light placeholder:text-light-muted focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue focus:shadow-glow transition-all duration-300 text-base backdrop-blur-sm"
                />
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="How can we help your business?"
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-light placeholder:text-light-muted focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue focus:shadow-glow transition-all duration-300 text-base backdrop-blur-sm resize-none"
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
      </div>

      {/* Hidden static form for Netlify detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
    </div>
  );
}

export default CTA;
