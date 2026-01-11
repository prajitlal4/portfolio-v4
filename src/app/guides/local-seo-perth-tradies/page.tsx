'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import GetStartedButton from '@/components/GetStartedButton';

gsap.registerPlugin(ScrollTrigger);

export default function LocalSEOPage() {
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
            Local SEO for Perth Tradies: How to Rank #1
          </h1>
          <div className="flex gap-4 text-dark-200">
            <span>January 2026</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
        </div>

        <div ref={contentRef} className="prose prose-lg max-w-none space-y-8">
          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            What is Local SEO?
          </h2>

          <p className="text-lg text-dark-200">
            Local SEO is getting your business to rank in Google Maps and local search results for your service area. When someone in Northbridge searches "plumber near me" or "electrician Osborne," you want to appear at the top.
          </p>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            The 5 Pillars of Local SEO for Tradies
          </h2>

          <div className="space-y-12">
            <div className="bg-light-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-dark mb-4">1. Google Business Profile (GBP)</h3>
              <p className="text-dark-200 mb-4">
                This is #1. Get your GBP set up with:
              </p>
              <ul className="space-y-2 text-dark-200">
                <li>✓ Accurate business name, address, phone</li>
                <li>✓ High-quality photos of your work</li>
                <li>✓ Service areas listed (all suburbs you cover)</li>
                <li>✓ Hours of operation</li>
                <li>✓ Regular posts/updates</li>
              </ul>
              <p className="text-dark-200 mt-4">
                Get reviews consistently. Google favors businesses with recent, authentic reviews.
              </p>
            </div>

            <div className="bg-light-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-dark mb-4">2. Suburb-Specific Landing Pages</h3>
              <p className="text-dark-200 mb-4">
                Create pages targeting specific suburbs: "Plumber Northbridge," "Electrician Osborne," etc.
              </p>
              <p className="text-dark-200">
                Each page targets that suburb, shows you understand the local area, and ranks for that specific local search. This is how you dominate multiple suburbs with one website.
              </p>
            </div>

            <div className="bg-light-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-dark mb-4">3. On-Page Optimization</h3>
              <p className="text-dark-200 mb-4">
                Include location keywords naturally throughout your website:
              </p>
              <ul className="space-y-2 text-dark-200">
                <li>✓ H1 tags with location + service</li>
                <li>✓ Meta descriptions with location</li>
                <li>✓ Local keywords in content (not forced)</li>
                <li>✓ NAP consistent (Name, Address, Phone)</li>
              </ul>
            </div>

            <div className="bg-light-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-dark mb-4">4. Local Citations & Directories</h3>
              <p className="text-dark-200 mb-4">
                Get listed in local directories to build authority:
              </p>
              <ul className="space-y-2 text-dark-200">
                <li>✓ Google Business Profile</li>
                <li>✓ Apple Maps</li>
                <li>✓ Local WA business directories</li>
                <li>✓ Trade-specific directories</li>
              </ul>
              <p className="text-dark-200 mt-4">
                Make sure your NAP (Name, Address, Phone) is consistent across all listings.
              </p>
            </div>

            <div className="bg-light-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-dark mb-4">5. Reviews & Ratings</h3>
              <p className="text-dark-200 mb-4">
                Reviews are a ranking factor AND a conversion factor. Customers trust reviews.
              </p>
              <ul className="space-y-2 text-dark-200">
                <li>✓ Ask clients for reviews (especially after successful jobs)</li>
                <li>✓ Respond to all reviews (positive and negative)</li>
                <li>✓ Aim for 4.5+ star average</li>
                <li>✓ Encourage video reviews</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            Quick Wins: Start Today
          </h2>

          <ol className="space-y-4 text-lg text-dark-200 list-decimal pl-6">
            <li>
              <strong>Claim your GBP</strong> if you haven't already. Verify your business. Add 10+ photos immediately.
            </li>
            <li>
              <strong>Ask your last 5 clients for reviews.</strong> Make it easy with links.
            </li>
            <li>
              <strong>List your service suburbs explicitly</strong> on your website. Create one page per suburb if possible.
            </li>
            <li>
              <strong>Get reviewed</strong> on Google, Apple Maps, and local directories.
            </li>
            <li>
              <strong>Update GBP regularly.</strong> Post once per week. Add new photos.
            </li>
          </ol>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            The Timeline: When Will I Rank?
          </h2>

          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            Local SEO takes 2-4 months to show real results if you're starting from zero. Get GBP set up and start getting reviews immediately. Most tradies see meaningful ranking improvements within 90 days.
          </p>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            Professional Local SEO vs. DIY
          </h2>

          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            DIY: You handle it yourself. Time-consuming. Steep learning curve. Takes 6+ months to see results.
          </p>

          <p className="text-lg text-dark-200 leading-relaxed mb-6">
            Professional: We handle GBP optimization, suburb page creation, local keyword strategy, and review management. You get faster results and can focus on your actual business.
          </p>

          <div className="bg-light-100 border-l-4 border-accent rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold font-heading text-dark mb-4">Ready to Dominate Local Search?</h3>
            <p className="text-lg text-dark-200 mb-6">
              Local SEO is the fastest way to get more jobs. Let's get your business ranking for your service areas.
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
