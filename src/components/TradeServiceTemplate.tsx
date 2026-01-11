'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import CTA from './CTA';

gsap.registerPlugin(ScrollTrigger);

interface CustomerNeed {
  title: string;
  description: string;
  icon: React.ComponentType<{ className: string }>;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface TradeServiceTemplateProps {
  tradeName: string;
  headline: string;
  subheadline: string;
  problemStatement: string;
  solutionPoints: string[];
  customerNeeds: CustomerNeed[];
  features: string[];
  caseStudies?: Array<{
    title: string;
    slug: string;
    metric: string;
  }>;
  faqs: FAQItem[];
  showHero?: boolean;
}

export default function TradeServiceTemplate(props: TradeServiceTemplateProps) {
  const {
    tradeName,
    headline,
    subheadline,
    problemStatement,
    solutionPoints,
    customerNeeds,
    features,
    caseStudies = [],
    faqs,
    showHero = true,
  } = props;

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const needsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
      });

      // Problem section
      gsap.from(problemRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: problemRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Needs cards
      const needCards = needsRef.current?.querySelectorAll('.need-card');
      if (needCards) {
        needCards.forEach((card, idx) => {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            delay: idx * 0.08,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        });
      }

      // Features
      const featureCards = featuresRef.current?.querySelectorAll('.feature-item');
      if (featureCards) {
        featureCards.forEach((card, idx) => {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            delay: idx * 0.05,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        });
      }

      // Case studies
      gsap.from(casesRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: casesRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // FAQ
      gsap.from(faqRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      {showHero && (
        <section
          ref={heroRef}
          className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-light overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                For {tradeName}s
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-6">
                {headline}
              </h1>
              <p className="text-xl sm:text-2xl text-dark-200 leading-relaxed max-w-2xl">
                {subheadline}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Problem & Solution Section */}
      <section ref={problemRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
                Your Website's One Job
              </h2>
              <p className="text-lg sm:text-xl text-dark-200 leading-relaxed mb-8">
                {problemStatement}
              </p>

              <div className="space-y-4">
                {solutionPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-dark-200">{point}</p>
                  </div>
                ))}
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
                    d="M9.75 17L9 20m0 0l-.75 3M9 20H5m4 0h10m0 0l.75 3M19 20l-.75-3M15 17h6m-6 0h-6m6 0a2 2 0 00-2-2h-4a2 2 0 00-2 2m12-2v4m-4-4v4"
                  />
                </svg>
                <p className="text-dark-200 text-sm">[Visual representation]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Needs Section */}
      <section ref={needsRef} className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              What Your Customers Actually Care About
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              We build these concerns directly into your website design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerNeeds.map((need) => {
              const Icon = need.icon;
              return (
                <div
                  key={need.title}
                  className="need-card bg-light-100 border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-3 text-center">
                    {need.title}
                  </h3>
                  <p className="text-sm sm:text-base text-dark-200 leading-relaxed text-center">
                    {need.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              What We Build For You
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              Professional features specifically designed for {tradeName}s.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item flex gap-4 items-start bg-light border border-dark/10 rounded-lg p-6 hover:border-accent transition-colors duration-300">
                <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-lg text-dark-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {caseStudies.length > 0 && (
        <section ref={casesRef} className="py-24 sm:py-32 bg-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
                Real Results for {tradeName}s
              </h2>
              <p className="text-xl text-dark-200 max-w-2xl mx-auto">
                See how we've helped businesses just like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group bg-light-100 border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold font-heading text-dark mb-3 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-lg font-semibold text-accent mb-3">
                    {study.metric}
                  </p>
                  <p className="text-sm text-dark-200">Read the full case study →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTA />

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 sm:py-32 bg-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-dark-200">
              Everything you need to know about your new website.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-dark/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-light-100 transition-colors duration-200 text-left"
                >
                  <h3 className="font-semibold text-dark text-lg">{faq.question}</h3>
                  <svg
                    className={`h-5 w-5 text-accent transition-transform duration-300 ${
                      expandedFAQ === idx ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {expandedFAQ === idx && (
                  <div className="bg-light-100 px-6 py-4 border-t border-dark/10">
                    <p className="text-dark-200 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
