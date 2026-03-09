import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Reinitialize Webflow interactions on every route change (if needed)
  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.Webflow) {
          try {
            window.Webflow.destroy();
            window.Webflow.ready();
            window.Webflow.require('ix2').init();
          } catch (e) {
            // Silently ignore if ix2 isn't available
          }
        }
      }, 100);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />

      {/* Webflow interactions */}
      <Script
        src="/js/webflow.js"
        strategy="afterInteractive"
      />
    </>
  );
}
