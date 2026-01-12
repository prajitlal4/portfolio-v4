'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TradeServiceTemplate from '@/components/TradeServiceTemplate';
import CTA from '@/components/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const electricianContent = {
  tradeName: 'Electricians',
  headline: 'Websites for Electricians',
  subheadline: 'Turn local Google searches into phone calls. Fast, mobile-first websites built for electrical businesses.',
  problemStatement:
    'When the power goes out at 9pm, the homeowner grabs their phone and searches "emergency electrician near me." They\'re worried, they need help fast, and they\'re going to call the first electrician who looks trustworthy. If your website is slow, outdated, or doesn\'t exist, they scroll past and call someone else. Your website\'s only job is to make that person pick up the phone and call you.',
  solutionPoints: [
    'Click-to-call buttons visible on every page and device',
    'Service area maps showing exactly where you work',
    'License & certifications displayed prominently to build trust',
    'Fast loading times that keep customers from bouncing',
    'Mobile-first design since 70% of searches happen on phones',
  ],
  customerNeeds: [
    {
      icon: PhoneIcon,
      title: 'Can I call right now?',
      description: 'Your number should be visible and tappable the moment the page loads.',
    },
    {
      icon: MapPinIcon,
      title: 'Do you service my area?',
      description: 'Customers want confirmation you cover their suburb before they call.',
    },
    {
      icon: ClockIcon,
      title: 'Are you available for emergencies?',
      description: 'If you offer after-hours or 24/7 service, make it obvious.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Are you licensed?',
      description: 'Displaying your license number builds instant trust.',
    },
    {
      icon: StarIcon,
      title: 'What do other customers say?',
      description: 'Reviews answer this question without you having to say anything.',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Do you handle my problem?',
      description: 'Customers need to know what problems you solve. Safety switches, switchboard upgrades, rewiring, lighting—list all your services.',
    },
  ],
  features: [
    'Mobile-first design (70%+ of your visitors are on their phone)',
    'Click-to-call everywhere (one tap and the phone rings)',
    'Service pages (safety switches, switchboard upgrades, lighting, power points)',
    'Suburb pages (targeting "electrician + suburb" local searches)',
    'Google reviews displayed directly on your site',
    'Trust signals (license number, insurance, ABN prominently shown)',
    'Fast loading (under 3 seconds to avoid losing visitors)',
    'SEO foundations (proper titles, descriptions, headings, site structure)',
  ],
  faqs: [
    {
      question: 'Do I need a website if I\'m on ServiceSeeking?',
      answer: 'ServiceSeeking is lead generation - you\'re paying for access to customers you don\'t own. When someone hears your name through a referral and searches for you, they expect to find a proper website. If you\'re not there, you look less established than competitors who are.',
    },
    {
      question: 'How long does it take?',
      answer: 'Most sites are done within 2 weeks. We\'ll give you a clear timeline before we start. This includes building the site, optimizing for your service areas, and setting up everything you need.',
    },
    {
      question: 'What do I need to provide?',
      answer: 'Your business details, logo if you have one, photos of your work (phone photos are fine), and your services and service areas. We handle the content writing.',
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

export default function ElectriciansPage() {
  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Websites for Electricians', url: '/services/websites-for-electricians' },
    ]);

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: electricianContent.faqs.map((faq) => ({
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
        secondaryText="For Electricians"
        headerText={electricianContent.headline}
        description={electricianContent.subheadline}
        showButton={false}
        useImage={true}
        imageUrl={null}
      />
      <TradeServiceTemplate {...electricianContent} showHero={false} showCTA={false} />

      {/* Google Business Profile Section */}
      <section className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
                Your Website + Google Business Profile = More Calls
              </h2>
              <p className="text-lg sm:text-xl text-dark-200 leading-relaxed mb-8">
                Here's something most electricians don't know: your website and your Google Business Profile work together. When someone searches "electrician near me" or "electrician in [suburb]," Google looks at both to decide if you show up in the map results.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-3">What is Google Business Profile?</h3>
                  <p className="text-lg text-dark-200 leading-relaxed">
                    It's the box that shows up on the right side of Google when someone searches your business name. It displays your hours, phone number, location, photos, and reviews. For local searches, it's what puts you on the map (literally).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-3">Why it matters for electricians</h3>
                  <p className="text-lg text-dark-200 leading-relaxed">
                    Most of your customers find you through local searches. "Emergency electrician Perth," "switchboard upgrade Fremantle," "safety switch installation Joondalup." If your Google Business Profile isn't set up properly or if you don't have a website linked to it, you're invisible for these searches.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-3">How they work together</h3>
                  <p className="text-lg text-dark-200 leading-relaxed">
                    Google wants consistency. Your business name, address, and phone need to match everywhere. A fast website with good content keeps people on it longer, which tells Google you're worth ranking. That's how you get into the map pack.
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
