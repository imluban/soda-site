import { REVIEWS } from '@/lib/constants';
import StarRating from '@/components/ui/StarRating';

export const metadata = {
  title: 'Reviews | Diet Soda',
  description: 'What people are saying about Diet Soda.',
};

export default function ReviewsPage() {
  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <span className="page-hero-tag">Reviews</span>
        <h1 className="page-hero-title">People<br />Love It</h1>
        <p className="page-hero-sub">
          Don&apos;t take our word for it. Here&apos;s what our community has to say.
        </p>
        {/* Summary bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '4rem', color: 'white', lineHeight: 1 }}>{avg}</span>
          <div>
            <StarRating rating={5} />
            <div style={{ color: 'var(--muted-color)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
              {REVIEWS.length} verified reviews
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <div
              key={review.id}
              className="review-card fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-meta">
                  <span className="review-name">{review.name}</span>
                  <span className="review-handle">{review.handle}</span>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="review-text">&ldquo;{review.text}&rdquo;</p>
              <div className="review-footer">
                <span className={`review-flavor-tag ${review.flavor}`}>
                  {review.flavor === 'classic' ? 'Diet Classic' : 'Zero Lime'}
                </span>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ color: 'var(--muted-color)', marginBottom: '1.5rem' }}>
            Tried Diet Soda? We&apos;d love to hear from you.
          </p>
          <button className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Write a Review
          </button>
        </div>
      </section>
    </div>
  );
}
