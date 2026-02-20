'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  description: string;
  href: string;
  screenshot: string;
  screenshotAlt: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'scope-bathrooms',
    title: 'Scope Bathrooms',
    industry: 'Bathroom Renovations',
    description: 'A website built to showcase Scope Bathrooms\' work and bring in renovation inquiries.',
    href: 'https://scopebathroomrenovations.com',
    screenshot: '/scopebathrooms-screenshot.jpg',
    screenshotAlt: 'Scope Bathroom Renovations website',
  },
  {
    id: 'highside-plumbing',
    title: 'Highside Plumbing',
    industry: 'Plumbing Services',
    description: 'A plumbing website that gets found on Google and shows they\'re available for emergencies.',
    href: 'https://highsideplumbing.com.au',
    screenshot: '/highside-screenshot.jpg',
    screenshotAlt: 'Highside Plumbing website',
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
              {caseStudies.map((study) => (
                <a
                  key={study.id}
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-3xl overflow-hidden p-8 h-full flex flex-col group hover:border-accent/30 hover:shadow-glow transition-all duration-300"
                >
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-dark/10">
                    <Image
                      src={study.screenshot}
                      alt={study.screenshotAlt}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="flex-grow">
                    <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-dark mb-3 group-hover:text-accent transition-colors duration-200">
                      {study.title}
                    </h3>
                    <p className="text-base sm:text-lg text-dark-200 leading-relaxed">
                      {study.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-accent">
                      View live site →
                    </p>
                  </div>
                </a>
              ))}
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
