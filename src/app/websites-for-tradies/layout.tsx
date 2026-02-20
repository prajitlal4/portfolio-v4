import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Websites for Tradies Perth | Built to get you jobs',
  description:
    'Perth web design for tradies. We build websites for plumbers, electricians, landscapers, bathroom renovators and more. From $999. Built to get you more calls and more jobs.',
};

export default function WebsitesForTradiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
