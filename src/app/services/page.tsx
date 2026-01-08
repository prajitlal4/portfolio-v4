import type { Metadata } from 'next';
import ServicesPageContent from './ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services | Web Development & Digital Marketing | PL Solutions',
  description: 'Professional web development, SEO, and digital marketing services for Australian businesses. Custom websites, Google Business Profile management, and more.',
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}


