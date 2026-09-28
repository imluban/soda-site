import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Diet Soda',
  description: 'Our story, team, and sustainability mission.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
