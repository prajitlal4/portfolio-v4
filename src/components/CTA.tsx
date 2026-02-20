'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QuickQuoteForm from "./QuickQuoteForm";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animation
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Text animation
      gsap.from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        delay: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Form animation
      gsap.from(formRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        delay: 0.15,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="contact" className="relative bg-light-100 overflow-hidden">
      <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text */}
          <div className="flex-1 w-full max-w-2xl">
            <h2 ref={headlineRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight text-dark">
              Ready to <span className="text-accent">Get Started?</span>
            </h2>
            <p ref={textRef} className="mt-8 text-xl sm:text-2xl text-dark-200 leading-relaxed">
              Get in touch and let's talk about what you need. You'll work directly with me, not through an agency. Simple as that.
            </p>
          </div>

          {/* Right: Form */}
          <div ref={formRef} className="flex-1 w-full flex justify-center items-center">
            <QuickQuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
