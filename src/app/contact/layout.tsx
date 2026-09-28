import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Diet Soda',
  description: 'Get in touch with the Diet Soda team.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
