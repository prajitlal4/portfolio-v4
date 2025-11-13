'use client';
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Testimonial() {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={cardRef} className="relative isolate overflow-hidden bg-dark px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <figure className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-glass p-10 sm:p-12 lg:p-16">
          {/* Blue accent bar */}
          <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-apple-blue-light to-apple-blue-dark rounded-full" />

          <blockquote className="text-left pl-8">
            <p className="text-2xl sm:text-3xl font-bold font-heading text-apple-blue-light leading-relaxed mb-8">
              &quot;Prajit is an exceptional talent. I would recommend him to
              any business or person.&quot;
            </p>
            <p className="text-base sm:text-lg text-light-muted leading-relaxed">
              He solved an issue within my website in 1 day saving my business,
              something that had left other developers answerless and
              floundering for 5 months unresolved. He then went further and did
              SEO, made the entire site more user friendly and significantly
              boosted my rankings which continue to improve daily. Prajit is a
              true gentleman and a pleasure to deal with. He also has extensive
              knowledge across multiple disciplines from website design all the
              way through to the development of apps. I would recommend him to
              anybody except people in my industry because he gives me such a
              competitive advantage. I would sing from the rooftops about what
              Prajit has done for myself and business.
            </p>
          </blockquote>

          <figcaption className="mt-10 pl-8">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="font-semibold text-light text-lg">Chris Price</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-light-muted"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-light-muted">Owner</div>
              </div>
              <div className="flex items-center">
                <div className="bg-white rounded-lg p-2">
                  <Image
                    className="h-10 w-auto"
                    src="/PerthLiquidLimestoneLogo.png"
                    alt="Perth Liquid Limestone logo"
                    width={120}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </figcaption>

          {/* Decorative gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-apple-blue/5 via-transparent to-transparent pointer-events-none" />
        </figure>
      </div>
    </section>
  );
}

export default Testimonial;
