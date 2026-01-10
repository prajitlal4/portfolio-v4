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

gsap.registerPlugin(ScrollTrigger);

const coreServices = [
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
    available: false,
  },
  {
    title: "Websites for Builders",
    description: "Showcase your projects and attract high-value clients with stunning portfolio websites.",
    href: "/services/websites-for-builders",
    available: false,
  },
  {
    title: "Websites for Tradies",
    description: "Custom websites for all trades—designed to get you more leads and less hassle.",
    href: "/services/websites-for-tradies",
    available: false,
  },
];

export default function ServicesPageContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const coreServicesRef = useRef<HTMLDivElement>(null);
  const industryServicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
      });

      // Core services animation
      const coreCards = coreServicesRef.current?.querySelectorAll('.service-card');
      if (coreCards) {
        coreCards.forEach((card, index) => {
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

      // Industry services animation
      const industryCards = industryServicesRef.current?.querySelectorAll('.industry-card');
      if (industryCards) {
        industryCards.forEach((card, index) => {
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
    <main className="bg-light min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-light via-light to-light-100 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3 animate-gradientShift opacity-50"
             style={{ backgroundSize: "200% 200%" }} />

        {/* Decorative orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight max-w-5xl mx-auto">
            Digital Services That{" "}
            <span className="bg-gradient-to-r from-accent via-sage to-charcoal bg-clip-text text-transparent">
              Drive Results
            </span>
          </h1>
          <p className="mt-8 text-xl sm:text-2xl text-dark-200 leading-relaxed max-w-3xl mx-auto">
            From custom websites to SEO and ongoing support—everything you need to grow your business online.
          </p>
        </div>
      </section>

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
                className="service-card group relative bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-3xl p-8 hover:bg-dark/[0.07] hover:border-accent/30 hover:-translate-y-2 hover:shadow-glow transition-all duration-500 flex flex-col items-center text-center"
              >
                {/* Icon with glow effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/40 transition-all duration-500" />
                  <service.icon className="relative h-16 w-16 text-accent group-hover:text-accent group-hover:scale-110 transition-all duration-500" />
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
      </section>

      {/* Industry-Specific Services */}
      <section className="relative bg-light-100 py-24 overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-32 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-16 sm:mb-20">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Specialized Solutions
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark leading-tight mb-6">
              Industry-Specific <span className="bg-gradient-to-r from-accent via-sage to-charcoal bg-clip-text text-transparent">Websites</span>
            </h2>
            <p className="text-lg sm:text-xl text-dark-200 max-w-3xl leading-relaxed">
              Specialized websites designed for your industry's unique needs and growth opportunities.
            </p>
          </div>
          
          <div ref={industryServicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryServices.map((service, idx) => (
              <div
                key={service.title}
                className="industry-card group relative bg-light border border-dark/10 rounded-3xl p-8 hover:border-accent/30 hover:shadow-glow transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-heading text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg text-dark-200 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {service.available ? (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors group-hover:gap-3 duration-300"
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

      {/* CTA Section */}
      <section className="relative bg-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3 animate-gradientShift opacity-50"
             style={{ backgroundSize: "200% 200%" }} />

        {/* Decorative orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
              <span className="text-dark">Ready to Grow Your </span>
              <span className="bg-gradient-to-r from-accent via-sage to-charcoal bg-clip-text text-transparent">
                Business Online?
              </span>
            </h2>
            <p className="mt-8 text-xl sm:text-2xl text-dark-200 leading-relaxed">
              Let's chat about your business goals and find the right solution for you.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="rounded-xl bg-gradient-to-r from-accent to-sage px-8 py-4 text-lg font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Get in Touch
              </a>
              <Link
                href="/#projects"
                className="rounded-xl border-2 border-accent text-accent px-8 py-4 text-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


