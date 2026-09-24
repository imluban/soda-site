import { INGREDIENTS } from '@/lib/constants';

export const metadata = {
  title: 'Ingredients | Diet Soda',
  description: 'Five natural ingredients. Nothing artificial. Everything refreshing.',
};

export default function IngredientsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <span className="page-hero-tag">What&apos;s Inside</span>
        <h1 className="page-hero-title">Clean by<br />Design</h1>
        <p className="page-hero-sub">
          Every ingredient earns its place. We use only what&apos;s needed —
          nothing synthetic, nothing hidden, nothing unnecessary.
        </p>
      </div>

      <section className="section">
        <div className="ingredients-grid">
          {INGREDIENTS.map((ing, i) => (
            <div
              key={ing.id}
              className="ingredient-card fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="ingredient-icon">{ing.icon}</span>
              <div className="ingredient-name">{ing.name}</div>
              <p className="ingredient-desc">{ing.description}</p>
              <span className="ingredient-benefit">✓ {ing.benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="glass-card" style={{ padding: '3rem', borderRadius: 28, textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Promise</h2>
          <p style={{ color: 'var(--muted-color)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            No artificial sweeteners. No synthetic colours. No preservatives.
            Diet Soda is certified non-GMO and produced in a facility powered by 100% renewable energy.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            {['Non-GMO Certified', '100% Natural Flavors', 'Zero Artificial Colors', 'Vegan Friendly'].map(badge => (
              <span key={badge} className="ingredient-benefit">{badge}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
