'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CodeBracketSquareIcon, WrenchScrewdriverIcon, MagnifyingGlassCircleIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Development",
    subtitle: "Launch a high-converting website that works 24/7 to grow your business and outshine competitors.",
    icon: CodeBracketSquareIcon,
  },
  {
    title: "Google Business Profile Management",
    subtitle: "Get more leads from Google by optimizing your profile and ensuring your business appears in the right places.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "SEO Optimization",
    subtitle: "Dominate page one of Google and watch qualified leads find you instead of your competition.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    title: "Website Maintenance & Security",
    subtitle: "Sleep soundly knowing your site is bulletproof, lightning-fast, and always generating revenue.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Support & Consulting",
    subtitle: "Get instant answers and strategic insights from me, and I will treat your success like my mission.",
    icon: UserGroupIcon,
  },
];

function Services() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Card animations
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.6,
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
    <div className="bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-dark text-center max-w-4xl mx-auto leading-tight"
        >
          Professional Web Development Services
        </h2>

        {/* Grid layout for all cards */}
        <div ref={cardsRef} className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="service-card group relative bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-3xl p-8 hover:bg-dark/[0.07] hover:border-accent/30 hover:-translate-y-2 hover:shadow-glow transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Icon with glow effect */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/40 transition-all duration-500" />
                <service.icon className="relative h-16 w-16 text-accent group-hover:text-accent-dark group-hover:scale-110 transition-all duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-dark mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-dark-200 leading-relaxed">
                {service.subtitle}
              </p>

              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
