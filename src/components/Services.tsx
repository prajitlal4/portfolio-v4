'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CodeBracketSquareIcon, WrenchScrewdriverIcon, MagnifyingGlassCircleIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Design & Build",
    subtitle: "A professional website that showcases your work and makes it easy for customers to find you and book jobs.",
    icon: CodeBracketSquareIcon,
  },
  {
    title: "Google Maps Setup",
    subtitle: "Get your business on Google Maps so locals can find you when they search for your trade in their area.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Local SEO",
    subtitle: "Show up in Google search results for the areas you service. Simple as that.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    title: "Website Maintenance",
    subtitle: "Keep your site secure, fast, and up to date. No surprises, no downtime.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Direct Support",
    subtitle: "You get my number. Direct access when you need changes, advice, or just have a question.",
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
        y: 20,
        duration: 0.3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            delay: 0.1 + index * 0.05,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
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
          What We Do
        </h2>

        {/* Grid layout for all cards */}
        <div ref={cardsRef} className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="service-card group relative bg-light border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light-100 transition-colors duration-200 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold font-heading text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-dark-200 leading-relaxed">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
