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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Row 1 animations
      gsap.from(row1TextRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        scrollTrigger: {
          trigger: row1TextRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(row1ImageRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: row1ImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Row 2 animations
      gsap.from(row2ImageRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: row2ImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(row2TextRef.current, {
        opacity: 0,
        x: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: row2TextRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Card animations
      const cards = row2TextRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" className="relative bg-light-100 py-24 sm:py-32 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-32 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 lg:max-w-none">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl font-bold font-heading tracking-tight text-dark leading-tight"
          >
            Building Trust Through Excellence in Web Development
          </h2>

          <div className="mt-20 flex flex-col gap-32">
            {/* Row 1: Text left, image right */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div
                ref={row1TextRef}
                className="flex-1 flex flex-col gap-6 order-2 lg:order-1"
              >
                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-dark">
                  Your Strategic Partner in Digital Growth
                </h3>
                <p className="text-lg sm:text-xl text-dark-200 leading-relaxed">
                  I&apos;m Prajit, a Perth-based software developer dedicated to helping businesses grow online through high-performance websites and applications.
                </p>
                <p className="text-lg sm:text-xl text-dark-200 leading-relaxed">
                  My process is personal, transparent, and streamlined from day one so you get clarity and results without the confusion. With direct access to me at every step, you&apos;re always informed and never left in the dark.
                </p>
              </div>
              
              <div
                ref={row1ImageRef}
                className="flex-1 flex justify-center order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                  <Image
                    src="/partnership.svg"
                    alt="Strategic partnership illustration"
                    width={450}
                    height={300}
                    className="relative z-10 drop-shadow-2xl"
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
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                  <Image
                    src="/website-traffic.svg"
                    alt="Website traffic growth illustration"
                    width={450}
                    height={300}
                    className="relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>

              <div
                ref={row2TextRef}
                className="flex-1 flex flex-col gap-6 order-2"
              >
                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-dark">
                  What Sets My Approach Apart
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Local-First Focus",
                      description: "I prioritise your Google Business Profile because it's what people see first when they search for businesses near them.",
                    },
                    {
                      title: "Strategic Website Pairing",
                      description: "Your website is designed to match and support your profile, building trust with both Google and your customers.",
                    },
                    {
                      title: "No Wasted Effort",
                      description: "No blog spam or fluff. Just consistent, meaningful updates that improve rankings and bring in leads.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="feature-card flex items-start gap-4 bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-2xl p-6 hover:bg-dark/[0.07] hover:border-accent/30 hover:shadow-glow transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent via-sage to-charcoal flex items-center justify-center text-white font-bold flex-none mt-1">
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
