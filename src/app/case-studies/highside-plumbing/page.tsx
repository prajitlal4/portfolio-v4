'use client';

import CaseStudyTemplate from '@/components/CaseStudyTemplate';

export default function HighsidePlumbingCase() {
  return (
    <CaseStudyTemplate
      title="Highside Plumbing"
      industry="Plumbing Services"
      tagline="24/7 online booking and emergency service website that increases service calls and customer convenience"
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
          'We developed a comprehensive plumbing services website with integrated 24/7 online booking, emergency service highlighting, detailed service information, and local SEO optimization. The site makes it easy for customers to find services, book appointments, and get emergency help anytime.',
        sections: [
          {
            title: 'Service Catalog',
            description:
              'Complete list of plumbing services from routine maintenance to emergency repairs, with descriptions and general pricing guides.',
            icon: '💧',
          },
          {
            title: '24/7 Online Booking',
            description:
              'Customers can request service appointments or emergency calls anytime, day or night, with automated confirmation and reminder system.',
            icon: '📅',
          },
          {
            title: 'Emergency Service Highlight',
            description:
              'Prominent emergency contact information and rapid response messaging ensures customers know Highside handles urgent situations.',
            icon: '🚨',
          },
          {
            title: 'Local SEO Optimization',
            description:
              'Optimized for plumbing searches in Perth suburbs with proper location pages, schema markup, and review integration.',
            icon: '📍',
          },
          {
            title: 'Service Area Mapping',
            description:
              'Clear visualization of service areas and response times helps customers know if they\'re covered and what to expect.',
            icon: '🗺️',
          },
          {
            title: 'Mobile-First Design',
            description:
              'Perfect for customers calling or booking from mobile devices with one-tap calling and streamlined booking process.',
            icon: '📱',
          },
        ],
        screenshotPlaceholder: 'Website homepage, service pages, and booking system interface',
      }}
      highlights={[
        {
          title: 'Emergency Service System',
          description:
            'Dedicated emergency services section with prominent phone numbers, response time guarantees, and availability status. Customers can quickly understand available emergency help and initiate urgent service requests.',
          // image: '/images/case-studies/highside-plumbing-emergency.png',
        },
        {
          title: 'Service Area Pages',
          description:
            'Dedicated pages for each suburb and service area Highside covers. Localized content helps with search visibility and assures customers that their location is served with proper response time expectations.',
          // image: '/images/case-studies/highside-plumbing-areas.png',
        },
        {
          title: 'Automated Booking System',
          description:
            'Integrated appointment booking system allows customers to reserve time slots, while automatic notifications keep both the business and customers updated on service scheduling.',
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
