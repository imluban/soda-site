'use client';

import { useState } from 'react';

export const metadata = undefined; // client component

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <span className="page-hero-tag">Get in Touch</span>
        <h1 className="page-hero-title">Let&apos;s<br />Talk</h1>
        <p className="page-hero-sub">
          Questions, wholesale enquiries, press requests, or just want to say hi —
          we read every message.
        </p>
      </div>

      <section className="section">
        <div className="contact-grid">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'white', marginBottom: '0.75rem' }}>
                  Message Sent
                </h3>
                <p style={{ color: 'var(--muted-color)' }}>
                  Thanks for reaching out. We&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text" className="form-input" placeholder="Your name"
                      value={form.name} required
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email" className="form-input" placeholder="you@example.com"
                      value={form.email} required
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text" className="form-input" placeholder="What&apos;s this about?"
                    value={form.subject} required
                    onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea" placeholder="Tell us everything..."
                    value={form.message} required
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem', alignSelf: 'flex-start' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact-info">
            {[
              { icon: '📍', label: 'Address', value: '14 Maple Industrial Park\nVermont, VT 05401, USA' },
              { icon: '✉️', label: 'Email', value: 'hello@dietsoda.co' },
              { icon: '📞', label: 'Phone', value: '+1 (802) 555-0192' },
              { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 9am–6pm EST' },
            ].map((item, i) => (
              <div key={i} className="contact-info-item">
                <div className="contact-info-icon">
                  <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                </div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div className="glass-card" style={{ padding: '1.5rem', marginTop: '1rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Wholesale & Press</div>
              <p style={{ color: 'var(--muted-color)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                For wholesale inquiries, media kits, or partnership proposals,
                email <strong style={{ color: 'white' }}>trade@dietsoda.co</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
