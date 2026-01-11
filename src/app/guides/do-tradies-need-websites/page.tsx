'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import GetStartedButton from '@/components/GetStartedButton';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

export default function GuidePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
      });

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

  return (
    <main className="bg-light min-h-screen">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Hero */}
        <div ref={heroRef} className="mb-16">
          <div className="mb-4">
            <Link
              href="/guides"
              className="text-sm font-semibold text-accent hover:underline"
            >
              ← Back to Guides
            </Link>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold font-heading text-dark leading-tight mb-6">
            Do Tradies Need a Website in 2026?
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-dark-200">
            <span>January 2026</span>
            <span className="hidden sm:block">•</span>
            <span>8 min read</span>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            The Short Answer: Yes, Absolutely.
          </h2>
          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            If you're a plumber, electrician, landscaper, or any trade business in Perth in 2026, a professional website isn't optional—it's essential. But not for the reasons you might think.
          </p>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            1. Google Searches Are Where Your Customers Are
          </h2>
          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            When someone needs a plumber at 2am or wants a landscaper for a spring project, they don't ask their neighbor. They Google "emergency plumber Perth" or "landscaper Northbridge."
          </p>
          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            If you don't have a website, you're invisible in those search results. Your competitors are taking those phone calls.
          </p>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            Website vs. HiPages/Hipages: The Real Comparison
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="border-2 border-accent rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-dark mb-4">
                <CheckCircleIcon className="h-6 w-6 text-accent" />
                Your Website
              </h3>
              <ul className="space-y-3 text-dark-200">
                <li>✓ You own it completely</li>
                <li>✓ 0% commission</li>
                <li>✓ You control your image</li>
                <li>✓ Ranks independently on Google</li>
                <li>✓ Long-term asset</li>
              </ul>
            </div>

            <div className="border-2 border-dark/20 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-dark mb-4">
                <XCircleIcon className="h-6 w-6 text-dark-200" />
                HiPages/Hipages
              </h3>
              <ul className="space-y-3 text-dark-200">
                <li>✗ They own your presence</li>
                <li>✗ 20-30% commission per job</li>
                <li>✗ Limited control</li>
                <li>✗ Ranks their site, not yours</li>
                <li>✗ Gone if you stop paying</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            2. You Need BOTH Google Business Profile AND Website
          </h2>
          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            Google Business Profile handles the map and quick info. Your website handles everything else: showcasing your work, building trust, capturing those serious inquiry calls.
          </p>
          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            Together, they dominate local search. Separately, you're leaving money on the table.
          </p>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            3. Websites Build Credibility Your Competitors Can't Match
          </h2>
          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            A professional website with your past work, testimonials, and clear pricing signals that you're legitimate and established. Customers trust you more. You can charge premium rates.
          </p>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            The Math: Website vs. Ongoing Directory Costs
          </h2>
          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            Let's say you get 3 jobs per month from HiPages at 25% commission (~$75/job = $225/month lost). Over a year, that's $2,700 you're giving to HiPages. A professional website costs $1,500 upfront and $99/month ongoing. After one year, you've saved money AND you own the asset.
          </p>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            The Bottom Line
          </h2>
          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            Yes, tradies need websites in 2026. Not instead of directories, but in addition to them. Your website is how you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-dark-200 mb-6">
            <li>Get found on Google for your service areas</li>
            <li>Build credibility and command premium pricing</li>
            <li>Own your online presence</li>
            <li>Reduce dependency on expensive directories</li>
            <li>Create a long-term business asset</li>
          </ul>

          <div className="bg-light-100 border-l-4 border-accent rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold font-heading text-dark mb-4">
              Ready to Get Found Online?
            </h3>
            <p className="text-lg text-dark-200 mb-6">
              A professional website costs far less than you think—and the ROI is undeniable. Let's talk about getting your business the online visibility it deserves.
            </p>
            <GetStartedButton variant="primary" />
          </div>
        </div>

        {/* More Guides CTA */}
        <div className="mt-16 pt-16 border-t border-dark/10">
          <h3 className="text-2xl font-bold font-heading text-dark mb-6">
            More Guides for Trade Businesses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/guides/tradie-website-cost-guide"
              className="block p-6 bg-light-100 border border-dark/10 rounded-lg hover:border-accent transition-colors"
            >
              <h4 className="font-semibold text-dark mb-2">
                Complete Website Cost Guide
              </h4>
              <p className="text-sm text-dark-200">
                Break down of costs, what affects pricing, DIY vs professional
              </p>
            </Link>
            <Link
              href="/guides/local-seo-perth-tradies"
              className="block p-6 bg-light-100 border border-dark/10 rounded-lg hover:border-accent transition-colors"
            >
              <h4 className="font-semibold text-dark mb-2">
                Local SEO for Perth Tradies
              </h4>
              <p className="text-sm text-dark-200">
                How to dominate Google searches in your service areas
              </p>
            </Link>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </main>
  );
}
