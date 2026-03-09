import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title, description, canonical }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title || 'Tireweb: eCommerce Websites for Tire & Wheel Businesses'}</title>
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('set', 'developer_id.dZGVlNj', true);gtag('js', new Date());gtag('config', 'G-7YC4LPRHS1');`
          }}
        />
      </Head>
      <aside id="luxy" className="page-wrapper">
        <Navbar />
        {children}
        <Footer />
      </aside>
    </>
  );
}
