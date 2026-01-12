'use client';

import { useEffect } from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';

export default function HighsidePlumbingCase() {
  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Our Work', url: '/case-studies' },
      { name: 'Highside Plumbing', url: '/case-studies/highside-plumbing' },
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
      title="Highside Plumbing"
      industry="Plumbing Services"
      tagline="A website where customers can book plumbing services anytime, even for emergencies"
      // clientLogo="/logos/highside-plumbing.png" // Add your logo here
      results={[
        {
          label: 'Service Calls',
          value: 'TBD',
          description: 'Monthly increase in booked services',
        },
        {
          label: 'Conversion Rate',
          value: 'TBD',
          description: 'Website visitors to service bookings',
        },
        {
          label: 'Emergency Availability',
          value: '24/7',
          description: 'Online booking available anytime',
        },
        {
          label: 'Customer Satisfaction',
          value: 'TBD',
          description: 'Post-service review rating',
        },
      ]}
      challenge={{
        title: 'The Challenge',
        description:
          'Highside Plumbing is a professional plumbing service provider in Perth serving both residential and commercial clients. However, they were losing potential customers who couldn\'t easily book emergency services or find information about their offerings online. Without an effective digital presence, they were relying heavily on phone calls and word-of-mouth referrals.',
        bullets: [
          'Customers unable to book services or even get information outside business hours',
          'Emergency plumbing calls going to competitors with online booking',
          'No clear service menu or pricing information available online',
          'Missing opportunity to capture leads through search engines',
          'Phone lines overloaded during peak hours, missing potential customers',
          'Difficulty reaching younger customers who expect online interactions',
        ],
      }}
      solution={{
        title: 'Our Solution',
        description:
          'We built a website where customers can book plumbing services anytime, day or night. The site shows all their services, highlights emergency help, and makes it easy to find them on Google in Perth.',
        sections: [
          {
            title: 'Service Catalog',
            description:
              'Complete list of plumbing services from routine maintenance to emergency repairs, with descriptions and general pricing guides.',
            icon: '💧',
          },
          {
            title: 'Anytime Booking',
            description:
              'Customers can book regular appointments or emergency calls anytime. They get confirmations and reminders automatically.',
            icon: '📅',
          },
          {
            title: 'Emergency Services',
            description:
              'Customers can clearly see the emergency number and know what to expect for urgent plumbing problems.',
            icon: '🚨',
          },
          {
            title: 'Found on Google',
            description:
              'People searching for a plumber in Perth suburbs find Highside. Each area has its own page with service details and reviews.',
            icon: '📍',
          },
          {
            title: 'Service Area Map',
            description:
              'Customers can see where Highside works and how fast they can respond. No guessing if their area is covered.',
            icon: '🗺️',
          },
          {
            title: 'Mobile Friendly',
            description:
              'Works great on phones. One tap to call, easy booking, quick quote. No fussing around.',
            icon: '📱',
          },
        ],
        screenshotPlaceholder: 'Website homepage, service pages, and booking system interface',
      }}
      highlights={[
        {
          title: 'Emergency Service System',
          description:
            'The emergency phone number is obvious. Customers know what to expect for response time and that help is available when they need it.',
          // image: '/images/case-studies/highside-plumbing-emergency.png',
        },
        {
          title: 'Service Area Pages',
          description:
            'Each suburb has its own page so locals can find them on Google. Customers know what to expect for response times.',
          // image: '/images/case-studies/highside-plumbing-areas.png',
        },
        {
          title: 'Online Booking',
          description:
            'Customers book appointments anytime. Both the business and customer get automatic updates on the scheduling.',
          // image: '/images/case-studies/highside-plumbing-booking.png',
        },
      ]}
      testimonial={{
        quote:
          'The website has been a game changer for us. We\'re getting service calls from people who found us online and booked before we even opened. The emergency service section brings in our most profitable jobs.',
        author: 'Mike Thompson',
        role: 'Owner',
        company: 'Highside Plumbing',
      }}
    />
  );
}
