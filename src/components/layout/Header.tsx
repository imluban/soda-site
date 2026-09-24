'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import clsx from 'clsx';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="logo">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>Soda</span>
      </Link>

      <nav className="nav glass">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx('nav-item', pathname === item.href && 'active')}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className="contact-btn">
        Contact Us
      </Link>
    </header>
  );
}
