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

export default function CostGuidePage() {
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
            Tradie Website Cost Guide 2026
          </h1>
          <div className="flex gap-4 text-dark-200">
            <span>January 2026</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </div>

        <div ref={contentRef} className="prose prose-lg max-w-none space-y-6">
          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            What's a Professional Website Actually Cost?
          </h2>

          <p className="text-lg text-dark-200">
            Here's the truth: you can get a professional website that ranks on Google and converts customers for $1,500-2,500 upfront, plus optional ongoing support from $99/month.
          </p>

          <div className="bg-light-100 border border-dark/10 rounded-lg p-8 my-10">
            <h3 className="text-2xl font-bold text-dark mb-6">Cost Breakdown</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-dark/10">
                <span className="text-dark-200">Basic Website (Starter)</span>
                <span className="font-bold text-dark">$990</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-dark/10">
                <span className="text-dark-200">Professional Website</span>
                <span className="font-bold text-dark">$1,500</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-dark/10">
                <span className="text-dark-200">Premium (Suburb Pages + SEO)</span>
                <span className="font-bold text-dark">$2,500+</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t-2 border-accent">
                <span className="text-dark font-bold">Monthly Hosting/Support</span>
                <span className="font-bold text-accent">$99/month</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            What Affects the Cost?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-3">1. Complexity</h3>
              <p className="text-dark-200">
                Single-page sites cost less. Multi-page with service categories and suburb pages cost more. Custom features (booking systems, galleries) add cost.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark mb-3">2. Content You Provide</h3>
              <p className="text-dark-200">
                If you have high-quality photos, testimonials, and copy ready, the build is faster and cheaper. If we source or refine content, that adds time and cost.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark mb-3">3. Custom Design vs. Template</h3>
              <p className="text-dark-200">
                We build custom designs for each client (not templates), so costs reflect your specific needs. Custom designs rank better on Google and convert more customers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark mb-3">4. SEO Optimization</h3>
              <p className="text-dark-200">
                Basic SEO is included. Advanced optimization (multiple suburb pages, aggressive keyword targeting) costs more.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            DIY vs. Professional: The Real Cost
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="border border-dark/10 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-dark mb-4">DIY Website Builder</h3>
              <p className="text-dark-200 mb-4">
                <strong>Upfront:</strong> $200-500
              </p>
              <p className="text-dark-200 mb-4">
                <strong>Monthly:</strong> $15-30 (hosting, domain, plugins)
              </p>
              <p className="text-dark-200 mb-4">
                <strong>Your time:</strong> 40-60 hours
              </p>
              <p className="text-dark-200 font-semibold text-accent">
                True Cost: ~$1,500-2,500 (your time)
              </p>
              <p className="text-sm text-dark-200 mt-4">
                Often doesn't rank on Google. Looks unprofessional. Requires ongoing management.
              </p>
            </div>

            <div className="border-2 border-accent rounded-lg p-6 bg-light-100">
              <h3 className="text-2xl font-bold text-dark mb-4">Professional Website</h3>
              <p className="text-dark-200 mb-4">
                <strong>Upfront:</strong> $1,500
              </p>
              <p className="text-dark-200 mb-4">
                <strong>Monthly:</strong> $99 (optional, includes support)
              </p>
              <p className="text-dark-200 mb-4">
                <strong>Your time:</strong> Minimal (just provide content)
              </p>
              <p className="text-dark-200 font-semibold text-accent">
                True Cost: $1,500 upfront + $99/month
              </p>
              <p className="text-sm text-dark-200 mt-4">
                Ranks on Google. Professional design. Converts customers. Ongoing support.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            ROI: How Quickly Will You Make the Money Back?
          </h2>

          <p className="text-dark-200 mb-6">
            A professional website typically generates 1-3 extra jobs per month (depending on your industry and service area). If your average job is worth $500-2,000+, you'll break even within 1-2 months.
          </p>

          <p className="text-dark-200 mb-6">
            After that? Everything's profit. A website is a long-term asset that keeps generating leads year after year.
          </p>

          <h2 className="text-3xl font-bold font-heading text-dark mt-12 mb-6">
            Red Flags: Avoid These Pricing Scams
          </h2>

          <ul className="space-y-3 text-dark-200 text-lg list-disc pl-6">
            <li>
              <strong>"$10,000+ for a website"</strong> — Unless you need complex features, this is overpriced.
            </li>
            <li>
              <strong>"Contact us for pricing"</strong> — Transparency matters. Real companies publish pricing.
            </li>
            <li>
              <strong>"We don't do SEO"</strong> — Every professional website should be optimized for Google.
            </li>
            <li>
              <strong>"Hidden monthly fees"</strong> — Should be clear upfront.
            </li>
            <li>
              <strong>"We own your site"</strong> — You should own your website. Period.
            </li>
          </ul>

          <div className="bg-light-100 border-l-4 border-accent rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold font-heading text-dark mb-4">Ready to Get a Professional Website?</h3>
            <p className="text-lg text-dark-200 mb-6">
              No surprises. No hidden fees. Just a clear quote and a website that works.
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
