import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', textAlign: 'center', gap: '2rem', padding: '2rem' }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(6rem,15vw,14rem)', lineHeight: 1, color: 'white', opacity: 0.15 }}>404</div>
      <div style={{ marginTop: '-4rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,5vw,4rem)', color: 'white', marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--muted-color)', marginBottom: '2rem' }}>
          Looks like this page evaporated. Back to the good stuff.
        </p>
        <Link href="/" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2.5rem', fontSize: '1rem' }}>
          Back Home
        </Link>
      </div>
    </div>
  );
}
