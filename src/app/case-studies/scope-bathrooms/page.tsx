'use client';

import { useEffect } from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';

export default function ScopeBathroomsCase() {
  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Our Work', url: '/case-studies' },
      { name: 'Scope Bathrooms', url: '/case-studies/scope-bathrooms' },
    ]);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = breadcrumbSchema;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <CaseStudyTemplate
      title="Scope Bathrooms"
      industry="Bathroom Renovations"
      tagline="A website that shows off their best work and brings in renovation inquiries"
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
          'We built a website that shows off Scope Bathrooms\' best work and makes it easy for customers to request quotes. The site has a portfolio of completed bathrooms, service details, and a simple way to get in touch.',
        sections: [
          {
            title: 'Project Gallery',
            description:
              'Before/after photos of completed bathrooms with details about what was done and what customers say about it.',
            icon: '🏠',
          },
          {
            title: 'Service Pages',
            description:
              'Pages for each type of bathroom work they do. Customers can find them on Google by searching for their specific needs.',
            icon: '🔧',
          },
          {
            title: 'Easy Quote Requests',
            description:
              'Simple ways for customers to ask for quotes. Forms are easy on mobile, and we get instant notifications when someone reaches out.',
            icon: '📋',
          },
          {
            title: 'Found on Google',
            description:
              'People searching for bathroom renovations in Perth find Scope. Reviews and local info show they\'re the real deal.',
            icon: '📍',
          },
          {
            title: 'Mobile Friendly',
            description:
              'Works great on phones. Customers can browse and request quotes from any device.',
            icon: '📱',
          },
          {
            title: 'Fast & Reliable',
            description:
              'The site loads fast so customers don\'t bounce. No downtime means no missed leads.',
            icon: '⚡',
          },
        ],
        screenshotPlaceholder: 'Website homepage and service page mockup',
      }}
      highlights={[
        {
          title: 'Portfolio Showcase',
          description:
            'Great before/after photos of completed bathrooms. Customers can see what was done, how long it took, and what other customers think about the work.',
          // image: '/images/case-studies/scope-bathrooms-portfolio.png',
        },
        {
          title: 'Easy to Request Quotes',
          description:
            'Forms are placed throughout the site so customers can easily ask for quotes. They work great on mobile and catch bad submissions before they happen.',
          // image: '/images/case-studies/scope-bathrooms-form.png',
        },
        {
          title: 'Customer Testimonials',
          description:
            'Real reviews from actual customers. Ratings and feedback show the quality of their work and how they treat people.',
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
