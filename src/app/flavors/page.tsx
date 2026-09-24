import Image from 'next/image';
import { FLAVORS } from '@/lib/constants';

export const metadata = {
  title: 'Flavors | Diet Soda',
  description: 'Shop Diet Classic and Zero Lime. Zero sugar, maximum refreshment.',
};

export default function FlavorsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <span className="page-hero-tag">Shop</span>
        <h1 className="page-hero-title">Pick Your<br />Flavor</h1>
        <p className="page-hero-sub">
          Two flavors. One philosophy — zero sugar, maximum refreshment.
          Subscribe and save 15% on every case.
        </p>
      </div>

      <section className="section">
        <div className="flavors-grid">
          {FLAVORS.map((flavor, i) => (
            <div
              key={flavor.id}
              className="flavor-card-full fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="flavor-tag">{flavor.tagline}</span>
              <div className="flavor-img-wrap">
                <Image
                  src={flavor.imageSrc}
                  alt={flavor.name}
                  width={140}
                  height={200}
                  style={flavor.id === 'blue' ? { filter: 'brightness(0.85)' } : {}}
                  unoptimized
                />
              </div>
              <div className="flavor-name">{flavor.name}</div>
              <p className="flavor-desc">{flavor.description}</p>
              <div className="flavor-actions">
                <button className="btn-primary">Add to Cart</button>
                <button className="btn-ghost">Subscribe</button>
                <span className="flavor-price">{flavor.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle offer */}
        <div
          className="glass-card fade-up"
          style={{ marginTop: '3rem', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', animationDelay: '0.3s' }}
        >
          <div>
            <span className="page-hero-tag" style={{ marginBottom: '0.75rem' }}>Best Value</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'white', marginBottom: '0.5rem' }}>
              The Variety Case
            </h3>
            <p style={{ color: 'var(--muted-color)', maxWidth: 420, lineHeight: 1.6 }}>
              12 × Diet Classic + 12 × Zero Lime. The full experience, one delivery.
              Perfect for sharing — or not.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>$32.99</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted-color)', textDecoration: 'line-through' }}>$35.88</div>
            </div>
            <button className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Shop Bundle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
