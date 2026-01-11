'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TradeServiceTemplate from '@/components/TradeServiceTemplate';
import {
  PhoneIcon,
  CheckCircleIcon,
  SparklesIcon,
  StarIcon,
  MapPinIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const electricianContent = {
  tradeName: 'Electricians',
  headline: 'Professional Websites for Electricians',
  subheadline: 'Get found online. Rank on Google. Convert visitors into urgent jobs.',
  problemStatement:
    'When someone in Perth has an electrical emergency at 2am, they\'re not browsing HiPages—they\'re Googling "emergency electrician near me." If you\'re not there, they call someone else. A professional website optimized for local search means you capture those high-value jobs.',
  solutionPoints: [
    '24/7 emergency response visibility that ranks on Google',
    'Service area maps showing exactly where you work',
    'License & certification display to build trust instantly',
    'Before/after galleries of your best work',
    'One-click call button on every page',
  ],
  customerNeeds: [
    {
      icon: PhoneIcon,
      title: 'Can I call right now?',
      description: '24/7 emergency availability with prominent call buttons',
    },
    {
      icon: CheckCircleIcon,
      title: 'Are you licensed?',
      description: 'Display qualifications and safety certifications',
    },
    {
      icon: SparklesIcon,
      title: 'What type of work?',
      description: 'Clear service categories: residential, commercial, emergency',
    },
    {
      icon: StarIcon,
      title: 'How experienced?',
      description: 'Project portfolio and customer testimonials',
    },
    {
      icon: MapPinIcon,
      title: 'Do you cover my area?',
      description: 'Service area maps and suburb coverage',
    },
    {
      icon: UserGroupIcon,
      title: 'Are you reliable?',
      description: 'Ratings, reviews, and guarantees',
    },
  ],
  features: [
    '24/7 emergency availability badge',
    'License & safety certifications display',
    'Service category pages (residential, commercial, maintenance)',
    'Project portfolio with before/after images',
    'Service area maps covering Perth suburbs',
    'Google reviews integration',
    'Instant quote request forms',
    'Emergency call button above the fold',
    'Mobile-optimized for on-site browsing',
    'Local SEO optimization for Perth',
  ],
  caseStudies: [
    {
      title: 'Jestin Auto Electrics',
      slug: 'jestin-auto-electrics',
      metric: '+240% increase in service calls',
    },
  ],
  faqs: [
    {
      question: 'Can you help if I already have a website?',
      answer:
        'Yes. Many electricians come to me with websites that don\'t rank on Google or convert. We can revamp your existing site, optimize it for SEO, or rebuild it from scratch. Let\'s talk about your situation.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        'Typically 4-6 weeks for a professional electrician website. This includes building the site, optimizing for your service areas, and setting up Google Business Profile. The timeline depends on how quickly you provide content and feedback.',
    },
    {
      question: 'Do you help with 24/7 emergency booking?',
      answer:
        'I can set up emergency availability indicators and call buttons. For automated booking systems, we can integrate third-party tools or I can recommend the best solutions for electricians.',
    },
    {
      question: 'How do you optimize for local search in Perth?',
      answer:
        'We create service area pages for each suburb you cover, optimize for local keywords, set up and manage your Google Business Profile, and build citations in local directories. This ensures you rank for "electrician in [suburb]" searches.',
    },
    {
      question: 'What if I serve multiple suburbs?',
      answer:
        'That\'s exactly what we build for. Professional sites include suburb-specific pages that target local searches while maintaining a unified brand. Each page ranks independently for local keywords.',
    },
    {
      question: 'Can you help with licensing verification?',
      answer:
        'I can display your license information prominently and link to verification sources. Many electricians do this to instantly build trust with potential customers.',
    },
  ],
};

export default function ElectriciansPage() {
  return (
    <main className="bg-light min-h-screen">
      <Navbar />
      <TradeServiceTemplate {...electricianContent} />
      <Footer />
    </main>
  );
}
