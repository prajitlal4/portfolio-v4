'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { 
  CodeBracketSquareIcon, 
  WrenchScrewdriverIcon, 
  MagnifyingGlassCircleIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CTA from "@/components/CTA";

gsap.registerPlugin(ScrollTrigger);

const coreServices = [
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

const industryServices = [
  {
    title: "Websites for Plumbers",
    description: "Turn emergency searches into phone calls. Mobile-first websites built specifically for plumbing businesses.",
    href: "/services/websites-for-plumbers",
    available: true,
  },
  {
    title: "Websites for Electricians",
    description: "Get more emergency callouts with fast, professional websites designed for electrical contractors.",
    href: "/services/websites-for-electricians",
    available: true,
  },
  {
    title: "Websites for Landscapers",
    description: "Showcase your best work with stunning galleries and win premium landscaping projects.",
    href: "/services/websites-for-landscapers",
    available: true,
  },
  {
    title: "Websites for Renovators",
    description: "Powerful before/after portfolios that attract high-value renovation clients.",
    href: "/services/websites-for-renovators",
    available: true,
  },
];

export default function ServicesPageContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const coreServicesRef = useRef<HTMLDivElement>(null);
  const industryServicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
      });

      // Core services cards animation
      const coreCards = coreServicesRef.current?.querySelectorAll('.service-card');
      if (coreCards) {
        coreCards.forEach((card, index) => {
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

      // Industry services cards animation
      const industryCards = industryServicesRef.current?.querySelectorAll('.industry-card');
      if (industryCards) {
        industryCards.forEach((card, index) => {
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
    <main className="bg-light min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div ref={heroRef}>
        <Header
          secondaryText="Services"
          headerText="What We Offer"
          description="From custom websites to SEO and ongoing support—everything you need to grow your business online."
          showButton={false}
        />
      </div>

      {/* Core Services Section */}
      <section className="bg-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-dark mb-16 text-center">
            Core Services
          </h2>
          
          <div ref={coreServicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service, idx) => (
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
      </section>

      {/* Industry-Specific Services */}
      <section className="relative bg-light-100 py-24 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-16 sm:mb-20">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Specialized Solutions
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark leading-tight mb-6">
              Industry-Specific Websites
            </h2>
            <p className="text-lg sm:text-xl text-dark-200 max-w-3xl leading-relaxed">
              Specialized websites designed for your industry's unique needs and growth opportunities.
            </p>
          </div>
          
          <div ref={industryServicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryServices.map((service, idx) => (
              <div
                key={service.title}
                className="industry-card relative bg-light border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light-100 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-heading text-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-dark-200 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {service.available ? (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
                      >
                        Learn More
                        <ArrowRightIcon className="h-5 w-5" />
                      </Link>
                    ) : (
                      <span className="inline-block text-dark-200 font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </main>
  );
}


