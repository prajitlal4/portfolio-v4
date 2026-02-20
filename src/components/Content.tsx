'use client';
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Content() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const row1TextRef = useRef<HTMLDivElement>(null);
  const row1ImageRef = useRef<HTMLDivElement>(null);
  const row2ImageRef = useRef<HTMLDivElement>(null);
  const row2TextRef = useRef<HTMLDivElement>(null);

  // Animations removed - keep it simple

  return (
    <div id="about" className="relative bg-light-100 py-24 sm:py-32 overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 lg:max-w-none">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl font-bold font-heading tracking-tight text-dark leading-tight"
          >
            About Me
          </h2>

          <div className="mt-8 flex flex-col gap-32">
            {/* Row 1: Text left, image right */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div
                ref={row1TextRef}
                className="flex-1 flex flex-col gap-6 order-2 lg:order-1"
              >
                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-dark">
                  I&apos;m Prajit
                </h3>
                <p className="text-lg sm:text-xl text-dark-200 leading-relaxed">
                  I build websites for tradie businesses across Perth. Plumbers, electricians, builders, renovators - I understand your industry and what works for you online.
                </p>
                <p className="text-lg sm:text-xl text-dark-200 leading-relaxed">
                  You get direct access to me. No agencies, no middlemen. You need a change? You call me. You have a question? You get me on the phone. That's how I work.
                </p>
              </div>
              
              <div
                ref={row1ImageRef}
                className="flex-1 flex justify-center order-1 lg:order-2"
              >
                <div className="relative">
                  <Image
                    src="/partnership.svg"
                    alt="Partnership illustration"
                    width={450}
                    height={300}
                    className="drop-shadow"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Image left, text right */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div
                ref={row2ImageRef}
                className="flex-1 flex justify-center order-1"
              >
                <div className="relative">
                  <Image
                    src="/website-traffic.svg"
                    alt="Website growth illustration"
                    width={450}
                    height={300}
                    className="drop-shadow"
                  />
                </div>
              </div>

              <div
                ref={row2TextRef}
                className="flex-1 flex flex-col gap-6 order-2"
              >
                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-dark">
                  How It Works
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Get Found on Google",
                      description: "I set up your Google Business Profile and get your site ranking locally so people searching in your area find you.",
                    },
                    {
                      title: "Direct Access",
                      description: "You work with me, not a support team. You need something updated or have a question? You get me.",
                    },
                    {
                      title: "Ongoing Support",
                      description: "I'm here after launch. No one-off project nonsense. I'll help you with updates and keep your site running smoothly.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="feature-card flex items-start gap-4 bg-light border border-dark/10 rounded-lg p-6 hover:border-accent hover:bg-light-100 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white font-bold flex-none text-sm mt-1">
                        ✓
                      </div>
                      <div className="flex-1">
                        <strong className="block text-lg sm:text-xl text-dark font-semibold mb-2">
                          {item.title}
                        </strong>
                        <p className="text-base sm:text-lg text-dark-200 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
