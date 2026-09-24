export const metadata = { title: 'Terms of Service | Diet Soda' };

export default function TermsPage() {
  const sections = [
    { title: 'Acceptance of Terms', body: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.' },
    { title: 'Use License', body: 'Permission is granted to temporarily download one copy of the materials on Diet Soda\'s website for personal, non-commercial transitory viewing only.' },
    { title: 'Orders & Payments', body: 'All orders are subject to availability. We reserve the right to refuse or cancel any order. Payment is processed securely at the time of purchase.' },
    { title: 'Shipping & Returns', body: 'We ship nationwide. Orders typically arrive within 3–5 business days. Unopened cases may be returned within 30 days for a full refund.' },
    { title: 'Disclaimer', body: 'The materials on Diet Soda\'s website are provided on an \'as is\' basis. Diet Soda makes no warranties, expressed or implied.' },
    { title: 'Governing Law', body: 'These terms and conditions are governed by and construed in accordance with the laws of Vermont, USA.' },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-hero" style={{ textAlign: 'left', padding: '5rem 8% 3rem' }}>
        <span className="page-hero-tag">Legal</span>
        <h1 className="page-hero-title">Terms of<br />Service</h1>
        <p style={{ color: 'var(--muted-color)', marginTop: '1rem', fontSize: '0.875rem' }}>Last updated: September 2025</p>
      </div>
      <section className="section" style={{ paddingTop: 0, maxWidth: 760 }}>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem', color: 'white' }}>{s.title}</h2>
            <p style={{ color: 'var(--muted-color)', lineHeight: 1.75, fontSize: '0.95rem' }}>{s.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
