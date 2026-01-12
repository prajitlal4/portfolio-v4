'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CTA from '@/components/CTA';
import { projects } from '@/lib/data/projects';
import { CheckCircleIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const philosophies = [
  {
    title: 'Competitor Research First',
    description: 'Every site starts with deep analysis of what\'s ranking in your market. I find what\'s working for your competitors and build something better.',
    icon: SparklesIcon,
  },
  {
    title: 'Schema Markup & Technical SEO',
    description: 'Schema markup gets your reviews and phone number showing in Google maps. I validate everything so Google actually understands your business info.',
    icon: CheckCircleIcon,
  },
  {
    title: 'Content Built for Search',
    description: 'Service pages and suburb pages written for actual search terms your customers are making. No generic filler. Every word targets a real query.',
    icon: UserGroupIcon,
  },
];


export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
      });

      // Story section
      gsap.from(storyRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Philosophy cards
      const philosophyCards = philosophyRef.current?.querySelectorAll('.philosophy-card');
      if (philosophyCards) {
        philosophyCards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        });
      }

      // Projects section
      gsap.from(projectsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ]);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = breadcrumbSchema;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-light min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div ref={heroRef}>
        <Header
          secondaryText="About Me"
          headerText="Web Design Built for Perth Trade Businesses"
          description="I help trade professionals (plumbers, electricians, landscapers, renovators) get found online and turn visitors into customers. Direct access, real results, Perth-focused."
        />
      </div>

      {/* Personal Story Section */}
      <section ref={storyRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image/Photo Placeholder */}
            <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden bg-light border border-dark/10 flex items-center justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark/5 to-accent/5">
                <svg className="w-24 h-24 text-dark-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm text-dark-200 mt-4">[Your Photo Here]</p>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
                I Build Websites for Australian Trade Businesses
              </h2>

              <div className="space-y-5 text-lg text-dark-200 leading-relaxed">
                <p>
                  Most web agencies treat tradies like every other client. Template site, stock photos, done. But that doesn't work when your customers are searching "emergency plumber Fremantle" at 9pm on a Sunday.
                </p>

                <p>
                  <span className="text-accent font-semibold">Trade businesses need different things.</span> You're competing in tight local markets. Customers need to trust you before they call. And 90% of your leads come from Google searches, not people who already know your business name.
                </p>

                <p>
                  I don't just build websites. I study what's already ranking in your area first. Before I write any code, I analyze the top plumbers, electricians, or landscapers in your suburbs. What keywords are they using? How is their content structured? What technical stuff are they doing right or wrong? Then I build you something better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy/Approach Section */}
      <section ref={philosophyRef} className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-6">
              What You Actually Get
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              Every site is built with three core components that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => (
              <div
                key={philosophy.title}
                className="philosophy-card group relative bg-light border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light-100 transition-all duration-300"
              >
                {/* Icon Background */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300" />

                {/* Icon */}
                <div className="relative mb-6">
                  <philosophy.icon className="h-10 w-10 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-heading text-dark mb-3">
                  {philosophy.title}
                </h3>
                <p className="text-sm sm:text-base text-dark-200 leading-relaxed">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section ref={projectsRef} className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-6">
              Recent Work
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl">
              Real trade businesses. Real results. Here's what I've built recently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[projects[2], projects[3], projects[1], projects[0]].map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-light-200 border border-dark/10 hover:border-accent transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <span className="text-xs sm:text-sm font-bold text-accent mb-2 uppercase tracking-wide">
                    {project.trade}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {project.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors duration-200"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </main>
  );
}
