import type { Metadata } from 'next';
import ServicesPageContent from './ServicesPageContent';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';

export const metadata: Metadata = {
  title: 'Services | Web Development & Digital Marketing | PL Solutions',
  description: 'Professional web development, SEO, and digital marketing services for Australian businesses. Custom websites, Google Business Profile management, and more.',
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <ServicesPageContent />
    </>
  );
}


