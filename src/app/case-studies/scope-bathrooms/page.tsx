'use client';

import CaseStudyTemplate from '@/components/CaseStudyTemplate';

export default function ScopeBathroomsCase() {
  return (
    <CaseStudyTemplate
      title="Scope Bathrooms"
      industry="Bathroom Renovations"
      tagline="A modern website that showcases premium bathroom work and generates quality renovation leads"
      // clientLogo="/logos/scope-bathrooms.png" // Add your logo here
      results={[
        {
          label: 'Qualified Leads',
          value: 'TBD',
          description: 'Monthly qualified renovation inquiries',
        },
        {
          label: 'Website Conversion Rate',
          value: 'TBD',
          description: 'From visitor to inquiry submission',
        },
        {
          label: 'Time to Value',
          value: 'TBD',
          description: 'Months to see measurable results',
        },
        {
          label: 'Online Visibility',
          value: 'TBD',
          description: 'Improvement in local search rankings',
        },
      ]}
      challenge={{
        title: 'The Challenge',
        description:
          'Scope Bathrooms is a premium bathroom renovation company with a strong reputation in Perth, but lacked a professional online presence to match their quality of work. Without a proper website, they were missing out on potential customers searching for bathroom renovation services online.',
        bullets: [
          'Limited online visibility for bathroom renovation searches',
          'Potential customers unable to view portfolio of completed work',
          'No clear way for customers to request quotes or start a conversation',
          'Competing against established renovation companies with better web presence',
          'Mobile-first audience had nowhere to easily access service information',
        ],
      }}
      solution={{
        title: 'Our Solution',
        description:
          'We built a conversion-focused website that showcases Scope Bathrooms\' premium work, tells the story of their process, and makes it easy for potential customers to request quotes. The site features a portfolio of completed bathroom renovations, detailed service information, and a streamlined inquiry process.',
        sections: [
          {
            title: 'Project Portfolio',
            description:
              'High-quality gallery of completed bathroom renovations with before/after photos, project details, and customer outcomes.',
            icon: '🏠',
          },
          {
            title: 'Service Pages',
            description:
              'Detailed pages for each service (full renovations, partial updates, tile work, etc.) optimized for local search.',
            icon: '🔧',
          },
          {
            title: 'Lead Generation',
            description:
              'Multiple conversion paths with easy quote request forms, phone integration, and instant inquiry notifications.',
            icon: '📋',
          },
          {
            title: 'Local SEO',
            description:
              'Optimized for Perth bathroom renovation searches with proper schema markup, local business information, and review integration.',
            icon: '📍',
          },
          {
            title: 'Mobile Optimized',
            description:
              'Fully responsive design ensures potential customers can browse and request quotes on any device.',
            icon: '📱',
          },
          {
            title: 'Fast & Reliable',
            description:
              'Built on modern web technology ensuring fast loading times and 99.9% uptime for zero missed leads.',
            icon: '⚡',
          },
        ],
        screenshotPlaceholder: 'Website homepage and service page mockup',
      }}
      highlights={[
        {
          title: 'Portfolio Showcase',
          description:
            'A beautiful gallery of Scope Bathrooms\' completed projects. High-quality before/after images with project details help potential customers envision their own renovations. Each project includes materials used, timeline, and customer testimonials.',
          // image: '/images/case-studies/scope-bathrooms-portfolio.png',
        },
        {
          title: 'Lead Capture System',
          description:
            'Strategic placement of quote request forms throughout the website ensures multiple conversion opportunities. Forms are optimized for mobile and include smart validation to ensure quality leads.',
          // image: '/images/case-studies/scope-bathrooms-form.png',
        },
        {
          title: 'Customer Testimonials',
          description:
            'Real customer testimonials and reviews build trust with potential clients. Integrated 5-star ratings and detailed feedback showcase the quality of Scope Bathrooms\' work and customer service.',
          // image: '/images/case-studies/scope-bathrooms-testimonials.png',
        },
      ]}
      testimonial={{
        quote:
          'Our website has completely transformed how customers find us. We\'re getting quality leads from people who have already seen our work online and are ready to move forward.',
        author: 'John Smith',
        role: 'Owner',
        company: 'Scope Bathrooms',
      }}
    />
  );
}
