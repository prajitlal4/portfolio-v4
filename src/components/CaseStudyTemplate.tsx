'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Navbar from './Navbar';
import Footer from './Footer';
import CTA from './CTA';

gsap.registerPlugin(ScrollTrigger);

interface Result {
  label: string;
  value: string;
  description?: string;
}

interface CaseStudyTemplateProps {
  title: string;
  industry: string;
  tagline: string;
  clientLogo?: string;
  results: Result[];
  challenge: {
    title: string;
    description: string;
    bullets?: string[];
  };
  solution: {
    title: string;
    description: string;
    sections?: {
      title: string;
      description: string;
      icon?: ReactNode;
    }[];
    screenshotPlaceholder?: string;
  };
  highlights?: {
    title: string;
    description: string;
    image?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export default function CaseStudyTemplate({
  title,
  industry,
  tagline,
  clientLogo,
  results,
  challenge,
  solution,
  highlights,
  testimonial,
}: CaseStudyTemplateProps) {
  const titleRef = useRef(null);
  const result0Ref = useRef(null);
  const result1Ref = useRef(null);
  const result2Ref = useRef(null);
  const result3Ref = useRef(null);
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const highlight0Ref = useRef(null);
  const highlight1Ref = useRef(null);
  const highlight2Ref = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Results cards animation with scroll trigger
      const resultRefs = [result0Ref, result1Ref, result2Ref, result3Ref];
      resultRefs.forEach((ref, idx) => {
        if (ref.current) {
          gsap.from(ref.current, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: 0.08 * idx,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // Challenge section
      if (challengeRef.current) {
        gsap.from(challengeRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: challengeRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Solution section
      if (solutionRef.current) {
        gsap.from(solutionRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: solutionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Highlights sections
      const highlightRefs = [highlight0Ref, highlight1Ref, highlight2Ref];
      highlightRefs.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // Testimonial section
      if (testimonialRef.current) {
        gsap.from(testimonialRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-light via-light to-light-100 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-40 -right-32 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                {industry}
              </span>
              {clientLogo && (
                <div className="mb-6">
                  <img src={clientLogo} alt={title} className="h-12 w-auto" />
                </div>
              )}
              <h1
                ref={titleRef}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-6"
              >
                {title}
              </h1>
              <p className="text-xl sm:text-2xl text-dark-200 leading-relaxed">
                {tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Key Results Section */}
        <section className="relative bg-light-100 px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-16">The Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                ref={result0Ref}
                className="bg-light border border-dark/10 rounded-3xl p-8 hover:border-accent/30 hover:shadow-glow transition-all duration-500"
              >
                <p className="text-dark/60 text-sm uppercase tracking-widest font-semibold mb-3">
                  {results[0]?.label}
                </p>
                <p className="text-4xl font-bold font-lora text-accent mb-4">
                  {results[0]?.value}
                </p>
                {results[0]?.description && (
                  <p className="text-dark/70 font-inter text-sm">
                    {results[0].description}
                  </p>
                )}
              </div>

              <div
                ref={result1Ref}
                className="bg-light border border-dark/10 rounded-3xl p-8 hover:border-accent/30 hover:shadow-glow transition-all duration-500"
              >
                <p className="text-dark/60 text-sm uppercase tracking-widest font-semibold mb-3">
                  {results[1]?.label}
                </p>
                <p className="text-4xl font-bold font-lora text-accent mb-4">
                  {results[1]?.value}
                </p>
                {results[1]?.description && (
                  <p className="text-dark/70 font-inter text-sm">
                    {results[1].description}
                  </p>
                )}
              </div>

              <div
                ref={result2Ref}
                className="bg-light border border-dark/10 rounded-3xl p-8 hover:border-accent/30 hover:shadow-glow transition-all duration-500"
              >
                <p className="text-dark/60 text-sm uppercase tracking-widest font-semibold mb-3">
                  {results[2]?.label}
                </p>
                <p className="text-4xl font-bold font-lora text-accent mb-4">
                  {results[2]?.value}
                </p>
                {results[2]?.description && (
                  <p className="text-dark/70 font-inter text-sm">
                    {results[2].description}
                  </p>
                )}
              </div>

              <div
                ref={result3Ref}
                className="bg-light border border-dark/10 rounded-3xl p-8 hover:border-accent/30 hover:shadow-glow transition-all duration-500"
              >
                <p className="text-dark/60 text-sm uppercase tracking-widest font-semibold mb-3">
                  {results[3]?.label}
                </p>
                <p className="text-4xl font-bold font-lora text-accent mb-4">
                  {results[3]?.value}
                </p>
                {results[3]?.description && (
                  <p className="text-dark/70 font-inter text-sm">
                    {results[3].description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section ref={challengeRef} className="relative px-6 lg:px-8 py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent -z-10" />
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-8">
              {challenge.title}
            </h2>
            <p className="text-lg sm:text-xl text-dark-200 leading-relaxed mb-8">
              {challenge.description}
            </p>
            {challenge.bullets && (
              <ul className="space-y-4">
                {challenge.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="text-accent font-bold text-xl flex-shrink-0 mt-1">•</span>
                    <span className="text-dark-200 text-lg leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Solution Section */}
        <section ref={solutionRef} className="relative bg-light-100 px-6 lg:px-8 py-24 sm:py-32">
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-sage/5 rounded-full filter blur-3xl -z-10" />
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-8">
              {solution.title}
            </h2>
            <p className="text-lg sm:text-xl text-dark-200 leading-relaxed mb-12">
              {solution.description}
            </p>

            {/* Solution subsections */}
            {solution.sections && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {solution.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="bg-light border border-dark/10 rounded-3xl p-8 hover:border-accent/30 hover:-translate-y-2 transition-all duration-500"
                  >
                    {section.icon && (
                      <div className="mb-4 text-4xl">{section.icon}</div>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-dark mb-4">
                      {section.title}
                    </h3>
                    <p className="text-dark-200 text-base leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Screenshot placeholder */}
            {solution.screenshotPlaceholder && (
              <div className="relative w-full aspect-video bg-gradient-to-br from-dark/5 to-dark/10 rounded-3xl overflow-hidden flex items-center justify-center border border-dark/10">
                <div className="absolute inset-0 bg-gradient-to-br from-dark/0 via-transparent to-dark/20" />
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto text-accent/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                  </svg>
                  <p className="text-dark-200 text-lg font-semibold">
                    {solution.screenshotPlaceholder}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Highlights Section */}
        {highlights && highlights.length > 0 && (
          <section className="relative px-6 lg:px-8 py-24 sm:py-32">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-16">
                Project Highlights
              </h2>
              <div className="space-y-16">
                {highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    ref={idx === 0 ? highlight0Ref : idx === 1 ? highlight1Ref : highlight2Ref}
                    className="flex flex-col gap-12"
                  >
                    {/* Content */}
                    <div className="w-full">
                      <h3 className="text-2xl sm:text-3xl font-bold font-heading text-dark mb-4">
                        {highlight.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-dark-200 leading-relaxed max-w-3xl">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Image/Screenshot placeholder */}
                    <div className="w-full">
                      <div className="relative w-full aspect-video bg-gradient-to-br from-dark/5 to-dark/10 rounded-3xl overflow-hidden flex items-center justify-center border border-dark/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-dark/0 via-transparent to-dark/20" />
                        <div className="relative z-10 text-center">
                          <svg className="w-16 h-16 mx-auto text-accent/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                          </svg>
                          <p className="text-dark/50 font-inter text-sm">Screenshot or image</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial Section */}
        {testimonial && (
          <section ref={testimonialRef} className="relative bg-light-100 px-6 lg:px-8 py-24 sm:py-32">
            <div className="absolute top-10 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl -z-10" />
            <div className="max-w-4xl mx-auto">
              <div className="bg-light border-l-4 border-accent rounded-3xl p-8 sm:p-12">
                <p className="text-xl sm:text-2xl lg:text-3xl font-heading text-dark italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold font-inter text-dark">
                    {testimonial.author}
                  </p>
                  <p className="text-dark/60 font-inter">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
