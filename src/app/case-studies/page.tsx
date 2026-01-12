'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  tagline: string;
  metric: string;
  metricValue: string;
  description: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'scope-bathrooms',
    title: 'Scope Bathrooms',
    industry: 'Bathroom Renovations',
    tagline: 'Web presence that drives bathroom renovation inquiries',
    metric: 'Increase in Qualified Leads',
    metricValue: 'TBD',
    description: 'A website built to showcase Scope Bathrooms\' work and bring in renovation inquiries.',
  },
  {
    id: 'highside-plumbing',
    title: 'Highside Plumbing',
    industry: 'Plumbing Services',
    tagline: 'Professional online presence for emergency and residential plumbing',
    metric: 'Increase in Service Calls',
    metricValue: 'TBD',
    description: 'A plumbing website that gets found on Google and shows they\'re available for emergencies.',
  },
];

export default function CaseStudiesPage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const card0Ref = useRef(null);
  const card1Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );

      // Individual card animations
      if (card0Ref.current) {
        gsap.from(card0Ref.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: card0Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      if (card1Ref.current) {
        gsap.from(card1Ref.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.15,
          scrollTrigger: {
            trigger: card1Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Our Work', url: '/case-studies' },
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
    <>
      <Navbar />
      <main className="bg-light min-h-screen">
        {/* Hero Section */}
        <section ref={titleRef} className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-light via-light to-light-100 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-40 -right-32 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Success Stories
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-6">
                Real Results from{" "}
                <span className="text-accent">
                  Trade Websites
                </span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-xl sm:text-2xl text-dark-200 leading-relaxed"
              >
                See how we've helped plumbing and bathroom renovation businesses grow their online presence and generate more leads.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="bg-light py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-dark mb-3">
                Our Work
              </h2>
              <p className="text-lg text-dark-200">
                Proven results for trade businesses looking to grow online.
              </p>
            </div>

            <div ref={card0Ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/case-studies/scope-bathrooms">
                <div className="group relative bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-3xl overflow-hidden p-8 hover:bg-dark/[0.07] hover:border-accent/30 hover:shadow-glow transition-all duration-500 cursor-pointer h-full flex flex-col">
                  {/* Placeholder for screenshot/image */}
                  <div className="relative w-full aspect-video bg-gradient-to-br from-dark/10 to-dark/5 rounded-2xl overflow-hidden flex items-center justify-center mb-6 border border-dark/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-dark/0 via-transparent to-dark/10" />
                    <div className="relative z-10 text-center">
                      <svg className="w-12 h-12 mx-auto text-accent/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                      </svg>
                      <p className="text-dark/50 text-xs font-medium">Website screenshot</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                      {caseStudies[0].industry}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                      {caseStudies[0].title}
                    </h3>
                    <p className="text-base sm:text-lg text-dark-200 mb-6 leading-relaxed">
                      {caseStudies[0].description}
                    </p>

                    {/* Key Metric */}
                    <div className="bg-dark/3 rounded-xl p-4 mb-6 border border-dark/5">
                      <p className="text-dark-200 text-xs uppercase tracking-widest font-semibold mb-1">
                        {caseStudies[0].metric}
                      </p>
                      <p className="text-2xl font-bold font-heading text-accent">
                        {caseStudies[0].metricValue}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all duration-300">
                    View Case Study
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/highside-plumbing">
                <div className="group relative bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-3xl overflow-hidden p-8 hover:bg-dark/[0.07] hover:border-accent/30 hover:shadow-glow transition-all duration-500 cursor-pointer h-full flex flex-col">
                  {/* Placeholder for screenshot/image */}
                  <div className="relative w-full aspect-video bg-gradient-to-br from-dark/10 to-dark/5 rounded-2xl overflow-hidden flex items-center justify-center mb-6 border border-dark/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-dark/0 via-transparent to-dark/10" />
                    <div className="relative z-10 text-center">
                      <svg className="w-12 h-12 mx-auto text-accent/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                      </svg>
                      <p className="text-dark/50 text-xs font-medium">Website screenshot</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                      {caseStudies[1].industry}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                      {caseStudies[1].title}
                    </h3>
                    <p className="text-base sm:text-lg text-dark-200 mb-6 leading-relaxed">
                      {caseStudies[1].description}
                    </p>

                    {/* Key Metric */}
                    <div className="bg-dark/3 rounded-xl p-4 mb-6 border border-dark/5">
                      <p className="text-dark-200 text-xs uppercase tracking-widest font-semibold mb-1">
                        {caseStudies[1].metric}
                      </p>
                      <p className="text-2xl font-bold font-heading text-accent">
                        {caseStudies[1].metricValue}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all duration-300">
                    View Case Study
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
