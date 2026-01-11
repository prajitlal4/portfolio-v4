'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TradeServiceTemplate from '@/components/TradeServiceTemplate';
import {
  SparklesIcon,
  CheckCircleIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const renovatorContent = {
  tradeName: 'Renovators',
  headline: 'Professional Websites for Renovators',
  subheadline: 'Show your transformations. Win premium renovations projects.',
  problemStatement:
    'Before/after photos are everything in renovation. A website that showcases your best transformations side-by-side is your most powerful marketing tool. It\'s how you command premium pricing and attract clients who choose based on quality, not price.',
  solutionPoints: [
    'Stunning before/after project galleries',
    'Full case studies showing your process and results',
    'Customer testimonials highlighting quality and reliability',
    'Project timelines and planning expectations',
    'Service area coverage across Perth',
    'Consultation and quote request system',
  ],
  customerNeeds: [
    {
      icon: SparklesIcon,
      title: 'Have you done similar work?',
      description: 'Detailed project showcases and case studies',
    },
    {
      icon: CheckCircleIcon,
      title: 'Can I see before/after photos?',
      description: 'Comprehensive galleries with multiple angles',
    },
    {
      icon: StarIcon,
      title: 'How long will my project take?',
      description: 'Timeline projections and planning info',
    },
    {
      icon: UserGroupIcon,
      title: 'What do other clients say?',
      description: 'Testimonials and project reviews',
    },
    {
      icon: PhoneIcon,
      title: 'Can you handle my budget?',
      description: 'Clear pricing and investment info',
    },
    {
      icon: MapPinIcon,
      title: 'Do you service my area?',
      description: 'Service areas and location coverage',
    },
  ],
  features: [
    'High-quality before/after galleries',
    'Full project case studies with details',
    'Multiple gallery angles for each project',
    'Room-by-room renovation showcases',
    'Project timeline and process pages',
    'Design capability demonstrations',
    'Testimonial and review sections',
    'Service area maps covering Perth suburbs',
    'Project investment/pricing guides',
    'Consultation booking system',
  ],
  caseStudies: [
    {
      title: 'Scope Bathroom Renovations',
      slug: 'scope-bathrooms',
      metric: '+280% inquiry increase',
    },
  ],
  faqs: [
    {
      question: 'How many projects should I showcase?',
      answer:
        'Start with your best 10-15 projects showing a variety of room types, budgets, and styles. This gives potential clients confidence you can handle their specific project. We can add more as you complete new renovations.',
    },
    {
      question: 'Should I show before/after or full timelines?',
      answer:
        'Both. Before/after hooks attention. Full timelines (3-4 photos per project showing progress) prove quality and build trust. We\'ll set up galleries showing both approaches.',
    },
    {
      question: 'How do I handle budget-sensitive clients?',
      answer:
        'Showcase projects across multiple price points. Demonstrate that you work with different budgets, not just premium clients. This expands your market while maintaining brand positioning.',
    },
    {
      question: 'Can I feature client testimonials?',
      answer:
        'Absolutely. Video testimonials are especially powerful for renovations. Static testimonials work too—we\'ll create a dedicated testimonial section showcasing real client feedback.',
    },
    {
      question: 'How often should I add new projects?',
      answer:
        'Add new projects every 4-6 weeks to keep your portfolio fresh and maintain SEO rankings. Fresh, regular content signals activity and keeps Google ranking your site higher.',
    },
    {
      question: 'Should I showcase only finished projects?',
      answer:
        'Focus on finished projects for before/afters. In-progress photos can work for timelines and process pages, but potential clients primarily want to see completed work.',
    },
  ],
};

export default function RenovatorsPage() {
  return (
    <main className="bg-light min-h-screen">
      <Navbar />
      <TradeServiceTemplate {...renovatorContent} />
      <Footer />
    </main>
  );
}
