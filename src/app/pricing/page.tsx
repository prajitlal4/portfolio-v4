'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import GetStartedButton from '@/components/GetStartedButton';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

interface PricingTier {
  name: string;
  price: number;
  upfrontPrice?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

interface SupportPackage {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 49,
    upfrontPrice: '$990',
    description: 'Perfect for getting started online',
    features: [
      'Single-page or simple multi-page site',
      'Mobile-optimized design',
      'Contact form',
      'Basic SEO setup',
      'Google Business Profile optimization',
      'Hosting & SSL included',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: 99,
    upfrontPrice: '$1,500',
    description: 'Most popular. Full professional presence.',
    features: [
      'Multi-page professional site',
      'Service pages for your trade',
      'Before/after galleries',
      'Advanced SEO optimization',
      'Local keyword targeting',
      'Google Business Profile management',
      'Monthly updates & reports',
      'Priority support',
      'Hosting & SSL included',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 199,
    upfrontPrice: '$2,500',
    description: 'Maximum visibility and leads',
    features: [
      'Full professional website',
      'Multiple service pages',
      'Suburb-specific landing pages',
      'Advanced SEO strategy',
      'Blog/content management',
      'Ongoing Google Business Profile management',
      'Monthly SEO reporting',
      'Content strategy support',
      'Direct access for updates',
      'Hosting & SSL included',
    ],
    cta: 'Get Started',
  },
];

const supportPackages: SupportPackage[] = [
  {
    name: 'Basic',
    price: 30,
    description: 'Essential website care',
    features: [
      'Hosting & security',
      'SSL certificate',
      'Automatic backups',
      'Updates & maintenance',
      'Email support',
    ],
  },
  {
    name: 'Standard',
    price: 100,
    description: 'Most popular. Ongoing growth.',
    features: [
      'Everything in Basic',
      'Monthly website updates',
      'SEO optimization',
      'Monthly performance reports',
      'Content updates',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 200,
    description: 'Full ongoing support',
    features: [
      'Everything in Standard',
      'Quarterly strategy reviews',
      'Advanced SEO optimization',
      'Content creation support',
      'Lead tracking & reporting',
      'Direct phone access',
    ],
  },
];

const faqs: FAQItem[] = [
  {
    question: 'Do I need a website if I\'m already on HiPages or Hipages?',
    answer:
      'Yes. While directories help, they take 20-30% commission and you have no control over how you\'re presented. A website is YOUR space—owned by you, optimized for your customers, and optimized for Google. Many of my clients rank better on Google than on directories.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'A typical Starter site takes 3-4 weeks. A Professional site takes 4-6 weeks. A Premium site with suburb pages can take 6-8 weeks. Timeline depends on how quickly you provide content and feedback. I keep you updated throughout.',
  },
  {
    question: 'What do I need to provide?',
    answer:
      'High-quality photos of your work, your services/pricing information, customer testimonials, and details about your service areas. If you don\'t have these ready, I can guide you on what to prepare. For some clients, I help source or refine content.',
  },
  {
    question: 'Can you help with my Google Business Profile?',
    answer:
      'Yes. All packages include GBP optimization and setup. Premium includes ongoing GBP management. A strong GBP + professional website is the one-two punch that dominates local search.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'With the monthly support packages, I handle updates, security, SEO optimization, and performance monitoring. You focus on your business. Without a monthly package, you get 30 days of free support post-launch, then support is available hourly if needed.',
  },
  {
    question: 'Can you help if I already have a website?',
    answer:
      'Absolutely. Many clients come to me with poorly-designed or out-of-date sites. I can revamp your existing site, optimize it for SEO, or rebuild it from scratch. Let\'s talk about your specific situation.',
  },
];

const addOns = [
  { name: 'Logo Design', price: 500 },
  { name: 'Professional Copywriting', price: 400 },
  { name: 'Additional Suburb Pages', price: 150 },
  { name: 'Blog Setup & Training', price: 200 },
  { name: 'Video Integration', price: 300 },
];

export default function PricingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const addOnsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
      });

      // Pricing tiers animation
      const tierCards = tiersRef.current?.querySelectorAll('.pricing-tier');
      if (tierCards) {
        tierCards.forEach((card, index) => {
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

      // Support packages animation
      const supportCards = supportRef.current?.querySelectorAll('.support-card');
      if (supportCards) {
        supportCards.forEach((card, index) => {
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

      // Add-ons animation
      gsap.from(addOnsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: addOnsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // FAQ animation
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

      // CTA animation
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
              Pricing
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-6">
              No Games. <span className="text-accent">Transparent Pricing</span>
            </h1>
            <p className="text-xl sm:text-2xl text-dark-200 leading-relaxed max-w-2xl">
              Clear, honest pricing. All costs upfront. No surprises, no hidden fees. Choose the package that fits your business.
            </p>
            <div className="mt-8">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section ref={tiersRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              Website Packages
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              All packages include hosting, SSL, and initial setup. Ongoing support is optional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`pricing-tier relative rounded-lg overflow-hidden transition-all duration-300 ${
                  tier.highlighted
                    ? 'ring-2 ring-accent md:scale-105 shadow-lg'
                    : 'border border-dark/10 bg-light'
                } ${!tier.highlighted ? 'bg-light' : 'bg-light'}`}
              >
                {/* Highlighted Badge */}
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 sm:p-10 ${tier.highlighted ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl font-bold font-heading text-dark mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-dark-200 text-sm mb-6">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold font-heading text-dark">
                        ${tier.upfrontPrice}
                      </span>
                    </div>
                    <p className="text-sm text-dark-200 mb-4">
                      Upfront investment
                    </p>
                    <div className="border-t border-dark/10 pt-4">
                      <p className="text-sm text-dark-200 mb-1">
                        Then from
                      </p>
                      <p className="text-2xl font-bold text-accent">
                        ${tier.price}/month
                      </p>
                      <p className="text-xs text-dark-200">
                        Monthly support (optional)
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3">
                        <CheckIcon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-dark-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                      tier.highlighted
                        ? 'bg-accent text-white hover:bg-accent-dark'
                        : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Support Packages */}
      <section ref={supportRef} className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              Monthly Support
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              After your site launches, choose the right support level for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`support-card relative rounded-lg p-8 sm:p-10 transition-all duration-300 ${
                  pkg.popular
                    ? 'ring-2 ring-accent bg-light shadow-lg'
                    : 'border border-dark/10 bg-light-100'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-xs font-bold uppercase tracking-wider rounded-t-lg">
                    Recommended
                  </div>
                )}

                <div className={pkg.popular ? 'pt-4' : ''}>
                  <h3 className="text-2xl font-bold font-heading text-dark mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-dark-200 text-sm mb-6">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold font-heading text-dark">
                        ${pkg.price}
                      </span>
                      <span className="text-dark-200">/month</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3">
                        <CheckIcon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-dark-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section ref={addOnsRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              Optional Add-ons
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              Need extra work? Add any of these to your package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {addOns.map((addOn) => (
              <div
                key={addOn.name}
                className="flex items-center justify-between bg-light border border-dark/10 rounded-lg p-6 hover:border-accent transition-colors duration-300"
              >
                <span className="font-semibold text-dark">{addOn.name}</span>
                <span className="text-xl font-bold text-accent">
                  ${addOn.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-24 sm:py-32 bg-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
              Questions About Pricing?
            </h2>
            <p className="text-xl text-dark-200">
              Here's what most clients want to know.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-dark/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-light-100 transition-colors duration-200 text-left"
                >
                  <h3 className="font-semibold text-dark text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-accent transition-transform duration-300 ${
                      expandedFAQ === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFAQ === idx && (
                  <div className="bg-light-100 px-6 py-4 border-t border-dark/10">
                    <p className="text-dark-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-light-100 border border-dark/10 rounded-lg">
            <h3 className="text-lg font-bold text-dark mb-3">
              Still have questions?
            </h3>
            <p className="text-dark-200 mb-6">
              Get in touch. I'm happy to discuss your specific situation and find the right package for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors duration-200"
            >
              Get in Touch
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
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-dark-200 max-w-2xl mx-auto">
                Pick a package above or let's talk about what's right for your business.
              </p>
            </div>

            <div className="flex justify-center">
              <QuickQuoteForm id="contact-form" title="Get a Quote" subtitle="Tell us about your project" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
