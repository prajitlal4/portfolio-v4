import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Websites for Australian Tradies | Built to Get You Jobs',
  description:
    'Web design for Australian tradies. We build websites for plumbers, electricians, landscapers, bathroom renovators and more. Built to get you more calls and more jobs.',
};

export default function WebsitesForTradiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
