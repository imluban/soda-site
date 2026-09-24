'use client';

import { useState } from 'react';
import { STATS, TEAM_MEMBERS, FAQ_ITEMS } from '@/lib/constants';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <div className="page-hero">
        <span className="page-hero-tag">Our Story</span>
        <h1 className="page-hero-title">Built on a<br />Simple Belief</h1>
        <p className="page-hero-sub">
          Zero sugar should never mean zero flavor. We started Diet Soda
          to prove it — one perfectly balanced can at a time.
        </p>
      </div>

      {/* Stats */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="stats-row">
          {STATS.map((s, i) => (
            <div key={i} className="stat-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 680 }}>
          <h2 className="section-title">Why We Started</h2>
          <div style={{ color: 'var(--muted-color)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.975rem' }}>
            <p>
              The zero-sugar beverage category was broken. Every option tasted like a compromise —
              a chemical sweetness that lingered long after the last sip, or a thin, watery finish
              that made you question why you bothered.
            </p>
            <p>
              Diet Soda was founded in 2023 by a team of food scientists and designers who believed
              the problem wasn&apos;t sugar itself — it was the replacement. By switching to stevia
              leaf extract and rebuilding the flavor profile from scratch with real botanical
              extracts, we found the answer.
            </p>
            <p>
              Today, every can of Diet Soda contains exactly five ingredients. That&apos;s not a
              limitation — it&apos;s a philosophy.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="section-title">The Team</h2>
        <p className="section-sub">Small on headcount. Big on craft.</p>
        <div className="team-grid">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="team-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="team-avatar">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eco */}
      <section id="eco" className="section" style={{ paddingTop: 0 }}>
        <h2 className="section-title">Sustainability</h2>
        <p className="section-sub">We make something people consume. That comes with responsibility.</p>
        <div className="eco-grid">
          {[
            { icon: '♻️', title: 'Infinite Recyclability', text: 'Our aluminum cans can be recycled endlessly without degrading. We print with water-based inks and use no plastic packaging.' },
            { icon: '⚡', title: 'Renewable Energy', text: 'Our production facility runs on 100% certified renewable energy — solar and wind. Zero fossil fuels in the manufacturing process.' },
            { icon: '🌳', title: 'Carbon Offset', text: 'Every shipped order is carbon-offset through verified reforestation projects. We\'re targeting full carbon neutrality by 2027.' },
            { icon: '🚰', title: 'Water Stewardship', text: 'We recirculate 94% of process water at our Vermont facility. Our water intensity per unit is 40% below industry average.' },
          ].map((item, i) => (
            <div key={i} className="eco-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="eco-icon">{item.icon}</div>
              <div className="eco-title">{item.title}</div>
              <p className="eco-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="section-title">FAQ</h2>
        <p className="section-sub" style={{ marginBottom: '2rem' }}>Everything you wanted to know.</p>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openFaq === i ? ' open' : ''}`}
            >
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
      </section>
    </div>
  );
}
