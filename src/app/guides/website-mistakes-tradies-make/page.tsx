'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import GetStartedButton from '@/components/GetStartedButton';
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

export default function MistakesGuidePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, { opacity: 0, y: 30, duration: 0.5 });
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        delay: 0.1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const mistakes = [
    {
      mistake: 'No Mobile Optimization',
      problem: '75%+ of your customers search on mobile. If your site doesn\'t work on phones, you lose jobs.',
      fix: 'Build mobile-first. Test on actual phones. Make sure buttons are clickable and forms work.',
    },
    {
      mistake: 'Slow Loading Speeds',
      problem: 'Slow sites rank lower on Google and visitors leave. Losing jobs to competitors.',
      fix: 'Optimize images. Use fast hosting. Test with Google PageSpeed Insights.',
    },
    {
      mistake: '"Contact Us" Instead of a Visible Phone Number',
      problem: 'Customers want to call NOW. Making them fill out a form loses urgent jobs.',
      fix: 'Phone number above the fold. Click-to-call on mobile. Make calling the easiest option.',
    },
    {
      mistake: 'No Service Area Information',
      problem: 'Customers want to know if you service their suburb. If it\'s unclear, they call someone else.',
      fix: 'Service area maps. List suburbs explicitly. Create suburb-specific pages if possible.',
    },
    {
      mistake: 'Poor Quality Photos',
      problem: 'Blurry, badly-lit, or unprofessional photos kill credibility. Customers think you\'re not serious.',
      fix: 'Use high-quality photos of your actual work. Investment in good photos pays back immediately.',
    },
    {
      mistake: 'Ignoring Google Business Profile',
      problem: 'Without GBP, you miss map searches and don\'t build reviews. Competitors rank higher.',
      fix: 'Set up GBP immediately. Get reviews. Update regularly. Link to your website.',
    },
    {
      mistake: 'No Trust Signals',
      problem: 'No testimonials, license info, or social proof. Customers don\'t know if you\'re legitimate.',
      fix: 'Add customer testimonials. Display licenses/certifications. Show years in business.',
    },
    {
      mistake: 'Outdated Information',
      problem: 'Broken links, old phone numbers, closed service areas. Looks abandoned and unprofessional.',
      fix: 'Update content quarterly. Keep info current. Monitor links.',
    },
  ];

  return (
    <main className="bg-light min-h-screen">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div ref={heroRef} className="mb-16">
          <Link
            href="/guides"
            className="text-sm font-semibold text-accent hover:underline block mb-4"
          >
            ← Back to Guides
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold font-heading text-dark leading-tight mb-6">
            8 Website Mistakes Costing Tradies Leads
          </h1>
          <div className="flex gap-4 text-dark-200">
            <span>January 2026</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </div>

        <div ref={contentRef} className="prose prose-lg max-w-none">
          <p className="text-lg text-dark-200 leading-relaxed">
            Most trade business websites aren't bad because they lack features. They're bad because they make these common mistakes. Here's how to fix them:
          </p>

          <div className="space-y-12 my-12">
            {mistakes.map((item, idx) => (
              <div key={idx} className="border-l-4 border-dark/10 pl-8">
                <div className="flex items-start gap-3 mb-4">
                  <XCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-bold text-dark">
                    {idx + 1}. {item.mistake}
                  </h3>
                </div>

                <div className="mb-4">
                  <p className="text-dark-200 mb-3">
                    <strong>The Problem:</strong>
                  </p>
                  <p className="text-dark-200">{item.problem}</p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-dark-200">
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-dark-200">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold font-heading text-dark mt-16 mb-6">
            The Bottom Line
          </h2>

          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            These mistakes are common because many tradie websites are built by people who don't understand your business. They focus on looks instead of conversions. They forget that urgency matters in trades.
          </p>

          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            A website that avoids these mistakes—that's mobile-friendly, fast, easy to call, and builds trust—will consistently bring in more jobs. That's what a professional website should do.
          </p>

          <div className="bg-light-100 border-l-4 border-accent rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold font-heading text-dark mb-4">
              Is Your Website Making Any of These Mistakes?
            </h3>
            <p className="text-dark-200 mb-6">
              If your current site isn't converting or ranking well, we can revamp it. Let's discuss what's not working and fix it.
            </p>
            <GetStartedButton variant="primary" />
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </main>
  );
}
