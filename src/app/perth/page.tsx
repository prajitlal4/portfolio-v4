'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import GetStartedButton from '@/components/GetStartedButton';
import { projects } from '@/lib/data/projects';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const perthSuburbs = [
  // Northern Suburbs (priority)
  'Northbridge',
  'Osborne Park',
  'Leederville',
  'West Perth',
  'Mount Lawley',
  'Maylands',
  'Inglewood',
  'Subiaco',
  // Central
  'Perth CBD',
  'East Perth',
  'South Perth',
  // Other areas
  'Fremantle',
  'Cannington',
  'Armadale',
  'Belmont',
  'Bayswater',
];

export default function PerthPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const suburbsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
      });

      gsap.from(suburbsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        delay: 0.1,
        scrollTrigger: {
          trigger: suburbsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

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

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-light min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-light overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Perth, Western Australia
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-6">
              Perth's Website Developer for <span className="text-accent">Trade Businesses</span>
            </h1>
            <p className="text-xl sm:text-2xl text-dark-200 leading-relaxed max-w-2xl">
              Proudly Perth-based. Specializing in helping trade professionals across Perth get found online and book more jobs.
            </p>
            <div className="mt-8">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </section>

      {/* Why Perth Matters Section */}
      <section className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
                Why Choosing a Perth-Based Developer Matters
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">
                      Local Market Knowledge
                    </h3>
                    <p className="text-dark-200">
                      I know Perth's suburbs, local competition, and what works for WA-based businesses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">
                      Direct Access
                    </h3>
                    <p className="text-dark-200">
                      Same timezone. You can call or meet face-to-face when needed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">
                      Invested in Perth's Success
                    </h3>
                    <p className="text-dark-200">
                      I build businesses here. I want Perth's trade professionals to thrive.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">
                      Specialized Local SEO
                    </h3>
                    <p className="text-dark-200">
                      Perth-specific keyword optimization. Suburb pages targeting your actual service areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-sage/10 border border-dark/10 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-24 h-24 text-accent/50 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-dark-200 text-sm">Perth, WA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs Served Section */}
      <section ref={suburbsRef} className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              We Serve All of Perth
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              From Northbridge to Fremantle, Osborne Park to Cannington—we work with trade businesses across the Perth metro area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {perthSuburbs.map((suburb) => (
              <div
                key={suburb}
                className="bg-light-100 border border-dark/10 rounded-lg px-6 py-4 text-center hover:border-accent transition-colors duration-300"
              >
                <p className="font-semibold text-dark">{suburb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section ref={projectsRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              Perth Businesses We've Built For
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              Real Perth trade businesses. Real results. Here's who we've worked with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.title}
                href={`/case-studies/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-light-200 border border-dark/10 hover:border-accent transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <span className="text-xs sm:text-sm font-bold text-accent mb-2 uppercase">
                    {project.trade}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              Trade Services We Specialize In
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              Every trade has unique needs. Here's what we build for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/services/websites-for-plumbers"
              className="bg-light-100 border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light transition-colors"
            >
              <h3 className="text-2xl font-bold text-dark mb-3">
                Websites for Plumbers
              </h3>
              <p className="text-dark-200 mb-4">
                Emergency response focus. Service area maps. Lead conversion.
              </p>
              <p className="text-accent font-semibold">Learn more →</p>
            </Link>

            <Link
              href="/services/websites-for-electricians"
              className="bg-light-100 border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light transition-colors"
            >
              <h3 className="text-2xl font-bold text-dark mb-3">
                Websites for Electricians
              </h3>
              <p className="text-dark-200 mb-4">
                24/7 availability. Certifications. Emergency callout highlighting.
              </p>
              <p className="text-accent font-semibold">Learn more →</p>
            </Link>

            <Link
              href="/services/websites-for-landscapers"
              className="bg-light-100 border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light transition-colors"
            >
              <h3 className="text-2xl font-bold text-dark mb-3">
                Websites for Landscapers
              </h3>
              <p className="text-dark-200 mb-4">
                Portfolio galleries. Before/afters. Seasonal services.
              </p>
              <p className="text-accent font-semibold">Learn more →</p>
            </Link>

            <Link
              href="/services/websites-for-renovators"
              className="bg-light-100 border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light transition-colors"
            >
              <h3 className="text-2xl font-bold text-dark mb-3">
                Websites for Renovators
              </h3>
              <p className="text-dark-200 mb-4">
                Transformation showcases. Case studies. Project timelines.
              </p>
              <p className="text-accent font-semibold">Learn more →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA with Form */}
      <section ref={ctaRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-6">
                Ready to Get Your Perth Business Online?
              </h2>
              <p className="text-lg sm:text-xl text-dark-200 max-w-2xl mx-auto">
                Let's build a website that gets you found, ranks on Google, and brings in more jobs.
              </p>
            </div>

            <div className="flex justify-center">
              <QuickQuoteForm id="contact-form" title="Let's Get Started" subtitle="Tell us about your trade business" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
