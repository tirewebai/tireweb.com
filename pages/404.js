import Link from 'next/link';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout title="Page Not Found | Tireweb">
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f7f9fc',
        padding: '80px 20px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: 560 }}>
          {/* Logo */}
          <div style={{ marginBottom: 32 }}>
            <img
              src="/images/tireweb25th-text.svg"
              alt="Tireweb"
              style={{ height: 48 }}
            />
          </div>

          {/* 404 number */}
          <div style={{
            fontSize: 96,
            fontWeight: 800,
            color: '#023D72',
            lineHeight: 1,
            marginBottom: 16,
          }}>
            404
          </div>

          <h1 className="heading-two" style={{ marginBottom: 16, color: '#023D72' }}>
            Page not found
          </h1>

          <p className="pargraph-medium" style={{ marginBottom: 40, color: '#555' }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="primary-button w-inline-block">
              <div className="primary-button-text">Back to Home</div>
              <img src="/images/Vector.svg" alt="" className="primary-button-icon" />
            </Link>
            <Link href="/contact-us" className="primary-button w-inline-block" style={{ background: 'transparent', border: '2px solid #023D72' }}>
              <div className="primary-button-text" style={{ color: '#023D72' }}>Contact Us</div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
