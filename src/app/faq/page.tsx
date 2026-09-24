'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import Link from 'next/link';

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <span className="page-hero-tag">Help</span>
        <h1 className="page-hero-title">Frequently<br />Asked</h1>
        <p className="page-hero-sub">Everything you need to know about Diet Soda.</p>
      </div>

      <section className="section">
        <div className="faq-list" style={{ maxWidth: 760, margin: '0 auto' }}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                {item.question}
                <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ color: 'var(--muted-color)', marginBottom: '1.5rem' }}>Still have questions?</p>
          <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2.5rem', fontSize: '1rem' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
