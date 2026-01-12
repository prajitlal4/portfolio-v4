'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TradeServiceTemplate from '@/components/TradeServiceTemplate';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';
import {
  SparklesIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const renovatorContent = {
  tradeName: 'Renovators',
  headline: 'Websites for Renovators',
  subheadline: 'Showcase your work. Get found online. Convert visitors into project quotes.',
  problemStatement:
    'When a homeowner decides to renovate their kitchen or add an extension, they search "renovator near me" or "home renovations Perth." They\'re looking at multiple builders, comparing previous projects, and trying to figure out who they can trust with a $30k-$150k project. If your website doesn\'t show quality work or looks unprofessional, they move on to the next renovator. Your website\'s only job is to showcase your work so well that they reach out for a consultation.',
  solutionPoints: [
    'Photo galleries showing your best projects (before and after)',
    'Clear breakdown of your services and renovation process',
    'Testimonials from real customers displayed prominently',
    'Mobile-friendly design since most people browse on their phone',
    'Fast loading so customers don\'t bounce before seeing your work',
  ],
  customerNeeds: [
    {
      icon: SparklesIcon,
      title: 'Can I see examples of your work?',
      description: 'High-quality photos of completed renovations answer this instantly.',
    },
    {
      icon: MapPinIcon,
      title: 'Do you work in my area?',
      description: 'Customers want to see you\'ve done projects in their suburb or nearby.',
    },
    {
      icon: PhoneIcon,
      title: 'What\'s the process like?',
      description: 'People want to know what happens from first contact to finished renovation.',
    },
    {
      icon: StarIcon,
      title: 'How much does it cost?',
      description: 'Even rough pricing guides help customers know if they\'re in the right ballpark.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'What do past customers say?',
      description: 'Reviews and testimonials build trust before the first conversation.',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Do you handle what I need?',
      description: 'Customers need to see your full range. Kitchen renos, bathroom renos, extensions, full home renovations.',
    },
  ],
  features: [
    'Mobile-first design (70%+ of your visitors are on their phone)',
    'Project gallery with before/after photos (your work sells itself)',
    'Service pages (kitchen renovations, bathroom renovations, home extensions, full home renovations)',
    'Suburb pages (targeting "renovator + suburb" local searches)',
    'Process breakdown (consultation, design, quote, renovation, completion)',
    'Google reviews displayed directly on your site',
    'Trust signals (license number, insurance, ABN prominently shown)',
    'Contact forms and click-to-call buttons throughout',
    'Fast loading (under 3 seconds to keep visitors engaged)',
    'SEO foundations (proper titles, descriptions, headings, site structure)',
  ],
  faqs: [
    {
      question: 'Do I need a website if I\'m on HiPages?',
      answer: 'HiPages is lead generation - you\'re paying for access to customers you don\'t own. When someone gets your name from a referral and searches for your business, they expect to find a proper website with your portfolio. If you\'re not there, you look less established than competitors who are.',
    },
    {
      question: 'How long does it take?',
      answer: 'Most sites are done within 2 weeks. We\'ll give you a clear timeline before we start. This includes building the site, setting up your gallery, optimizing for your service areas, and making sure everything works perfectly.',
    },
    {
      question: 'What do I need to provide?',
      answer: 'Your business details, logo if you have one, photos of your best projects (phone photos work, but higher quality is better), your services, and the areas you cover. We handle the content writing.',
    },
    {
      question: 'Can you help with Google Business Profile?',
      answer: 'Yes. We can set up or optimize your Google Business Profile as part of the project or separately.',
    },
    {
      question: 'What are the ongoing costs?',
      answer: 'Ongoing costs are typically $50-$150 per month depending on your needs. This covers hosting, security updates, backups, and support. No surprise fees.',
    },
  ],
};

export default function RenovatorsPage() {
  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Websites for Renovators', url: '/services/websites-for-renovators' },
    ]);

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: renovatorContent.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.innerHTML = breadcrumbSchema;
    document.head.appendChild(breadcrumbScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(faqScript);
    };
  }, []);

  return (
    <main className="bg-light min-h-screen">
      <Navbar />
      <Header
        secondaryText="For Renovators"
        headerText={renovatorContent.headline}
        description={renovatorContent.subheadline}
        showButton={false}
        useImage={true}
        imageUrl={null}
      />
      <TradeServiceTemplate {...renovatorContent} showHero={false} showCTA={false} />

      {/* Google Business Profile Section */}
      <section className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
                Your Website + Google Business Profile = More Leads
              </h2>
              <p className="text-lg sm:text-xl text-dark-200 leading-relaxed mb-8">
                Here's something most renovators don't know: your website and your Google Business Profile work together. When someone searches "renovator near me" or "renovator in [suburb]," Google looks at both to decide if you show up in the map results.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-3">What is Google Business Profile?</h3>
                  <p className="text-lg text-dark-200 leading-relaxed">
                    It's the box that shows up on the right side of Google when someone searches your business name. It displays your hours, phone number, location, photos, and reviews. For local searches, it's what puts you on the map (literally).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-3">Why it matters for renovators</h3>
                  <p className="text-lg text-dark-200 leading-relaxed">
                    Most of your customers find you through local searches. "Renovator Perth," "kitchen renovation Fremantle," "home extension Joondalup." If your Google Business Profile isn't set up properly or if you don't have a website linked to it, you're invisible for these searches.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-3">How they work together</h3>
                  <p className="text-lg text-dark-200 leading-relaxed">
                    Google wants consistency. Your business name, address, and phone need to match everywhere. A fast site with great photos that people actually spend time on tells Google you're worth ranking. That's how you get into the map pack.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-3">What we do</h3>
                  <p className="text-lg text-dark-200 leading-relaxed">
                    We set everything up to work together. Matching business info across both, service areas clearly marked, and a site that loads fast. This is how you outrank your competition.
                  </p>
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
                <p className="text-dark-200 text-sm">[Google Business Profile visualization]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </main>
  );
}
