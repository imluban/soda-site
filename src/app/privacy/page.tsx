export const metadata = { title: 'Privacy Policy | Diet Soda' };

export default function PrivacyPage() {
  const sections = [
    { title: 'Information We Collect', body: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes name, email address, shipping address, and payment information.' },
    { title: 'How We Use Your Information', body: 'We use the information we collect to process transactions, send order confirmations, respond to comments and questions, send marketing communications (with your consent), and improve our services.' },
    { title: 'Information Sharing', body: 'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.' },
    { title: 'Data Security', body: 'We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. All transactions are processed through a secure gateway provider.' },
    { title: 'Cookies', body: 'We use cookies to help us remember and process items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and interaction.' },
    { title: 'Contact Us', body: 'If you have any questions regarding this privacy policy, you may contact us at privacy@dietsoda.co.' },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-hero" style={{ textAlign: 'left', padding: '5rem 8% 3rem' }}>
        <span className="page-hero-tag">Legal</span>
        <h1 className="page-hero-title">Privacy<br />Policy</h1>
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
