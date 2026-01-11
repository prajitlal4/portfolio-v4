'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TradeServiceTemplate from '@/components/TradeServiceTemplate';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const plumberContent = {
  tradeName: 'Plumbers',
  headline: 'Professional Websites for Plumbers',
  subheadline: 'Turn local Google searches into phone calls. Fast, mobile-first websites built for plumbing businesses.',
  problemStatement:
    'When a pipe bursts at 10pm, the homeowner grabs their phone and searches "emergency plumber near me." They\'re stressed, they\'re in a hurry, and they\'re going to call the first plumber who looks legitimate. If your website is slow, outdated, or doesn\'t exist — they scroll past and call someone else. Your website\'s only job is to make that person pick up the phone and call you.',
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
      description: 'Blocked drains, hot water, gas fitting — your services need to be clear.',
    },
  ],
  features: [
    'Mobile-first design (70%+ of your visitors are on their phone)',
    'Click-to-call everywhere (one tap and the phone rings)',
    'Service pages (blocked drains, hot water, gas fitting, leak detection)',
    'Suburb pages (targeting "plumber + suburb" local searches)',
    'Google reviews displayed directly on your site',
    'Trust signals (license number, insurance, ABN prominently shown)',
    'Fast loading (under 3 seconds to avoid losing visitors)',
    'SEO foundations (proper titles, descriptions, headings, site structure)',
  ],
  faqs: [
    {
      question: 'Do I need a website if I\'m on HiPages?',
      answer: 'HiPages is lead generation — you\'re paying for access to customers you don\'t own. When someone hears your name through a referral and searches for you, they expect to find a proper website. If you\'re not there, you look less established than competitors who are.',
    },
    {
      question: 'How long does it take?',
      answer: 'Most sites are done in 4-6 weeks. We\'ll give you a clear timeline before we start. This includes building the site, optimizing for your service areas, and setting up everything you need.',
    },
    {
      question: 'What do I need to provide?',
      answer: 'Your business details, logo if you have one, photos of your work (phone photos are fine), and your services and service areas. We handle the content writing.',
    },
    {
      question: 'Can you help with Google Business Profile?',
      answer: 'Yes. We can set up or optimise your Google Business Profile as part of the project or separately.',
    },
    {
      question: 'What are the ongoing costs?',
      answer: 'Hosting is typically $49 per month for smaller sites, $99 for larger sites. This covers security updates, backups, and support. No other required costs.',
    },
  ],
};

export default function PlumbersPage() {
  return (
    <main className="bg-light min-h-screen">
      <Navbar />
      <Header
        secondaryText="For Plumbers"
        headerText={plumberContent.headline}
        description={plumberContent.subheadline}
        showButton={false}
        useImage={true}
        imageUrl={null}
      />
      <TradeServiceTemplate {...plumberContent} showHero={false} />
      <Footer />
    </main>
  );
}
