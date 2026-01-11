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

const landscaperContent = {
  tradeName: 'Landscapers',
  headline: 'Professional Websites for Landscapers',
  subheadline: 'Showcase your work. Attract premium clients. Book more projects.',
  problemStatement:
    'Your landscape work is visual. A project showcase website with stunning before/after galleries shows potential clients exactly what you can do. That\'s how you attract customers willing to pay top dollar—because they\'ve already seen your quality.',
  solutionPoints: [
    'Large, beautiful image galleries of your best work',
    'Before/after project showcases',
    'Seasonal service highlights (maintenance, installations, seasonal specials)',
    'Project timeline and planning information',
    'Service area maps covering Perth suburbs',
    'Instant quote request and consultation booking',
  ],
  customerNeeds: [
    {
      icon: SparklesIcon,
      title: 'Can you do my project type?',
      description: 'Project type showcases with examples',
    },
    {
      icon: CheckCircleIcon,
      title: 'What\'s your quality level?',
      description: 'High-quality before/after galleries',
    },
    {
      icon: StarIcon,
      title: 'Do you handle maintenance?',
      description: 'Seasonal service highlighting',
    },
    {
      icon: PhoneIcon,
      title: 'How long does it take?',
      description: 'Project timelines and planning guides',
    },
    {
      icon: MapPinIcon,
      title: 'Do you service my area?',
      description: 'Coverage maps and suburb listing',
    },
    {
      icon: UserGroupIcon,
      title: 'What do others think?',
      description: 'Reviews and testimonials section',
    },
  ],
  features: [
    'Large, fast-loading image galleries',
    'Before/after comparison sliders',
    'Project type filtering and categories',
    'Seasonal service showcase pages',
    'Project timeline and planning information',
    'Service area maps with suburb coverage',
    'Maintenance plan pages',
    'Consultation booking system',
    'Testimonial showcases',
    'Mobile-optimized portfolio view',
  ],
  caseStudies: [
    {
      title: 'Perth Liquid Limestone',
      slug: 'perth-liquid-limestone',
      metric: '+320% increase in qualified leads',
    },
  ],
  faqs: [
    {
      question: 'How do you handle large image galleries?',
      answer:
        'Professional optimization ensures your galleries load fast without sacrificing quality. Large images are optimized for web, and galleries use lazy loading so pages stay fast even with hundreds of photos.',
    },
    {
      question: 'Can you help me sell maintenance plans?',
      answer:
        'Yes. We create dedicated pages for maintenance offerings, showing customers the value and making it easy to request a maintenance consultation or plan.',
    },
    {
      question: 'Do you help with seasonal promotions?',
      answer:
        'Absolutely. We set up seasonal pages highlighting spring plantings, summer maintenance, autumn cleanup, and winter services—keeping your offerings front and center.',
    },
    {
      question: 'Can I add new projects regularly?',
      answer:
        'Yes. We\'ll set you up with easy-to-use project gallery pages. You can add new before/after galleries as you complete projects—keeping your portfolio fresh and ranking power high.',
    },
    {
      question: 'How do before/after galleries help SEO?',
      answer:
        'Visual content ranks well on Google. High-quality before/after galleries with proper optimization boost rankings, keep visitors engaged longer, and improve conversion rates significantly.',
    },
    {
      question: 'Do you cover one-off projects or retainers only?',
      answer:
        'Both. Whether you\'re a general landscaper doing residential and commercial work, or you specialize in specific project types, we build portfolios that match your business model.',
    },
  ],
};

export default function LandscapersPage() {
  return (
    <main className="bg-light min-h-screen">
      <Navbar />
      <TradeServiceTemplate {...landscaperContent} />
      <Footer />
    </main>
  );
}
