import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Diet Soda',
  description: 'Frequently asked questions about Diet Soda.',
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
