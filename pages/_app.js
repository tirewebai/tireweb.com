import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import '../styles/globals.css';

function revealHiddenElements() {
  // Webflow sets opacity:0 via inline styles for scroll animations.
  // Since we're not running the full Webflow animation engine, reveal them all.
  document.querySelectorAll('[data-w-id]').forEach((el) => {
    if (el.style.opacity === '0') {
      el.style.opacity = '1';
      el.style.transition = 'opacity 0.5s ease';
    }
  });
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Reveal hidden elements on first load
  useEffect(() => {
    revealHiddenElements();
  }, []);

  // Reinitialize Webflow + reveal elements on every route change
  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => {
        revealHiddenElements();
        // Reinitialize Webflow interactions if available
        if (typeof window !== 'undefined' && window.Webflow) {
          try {
            window.Webflow.destroy();
            window.Webflow.ready();
            window.Webflow.require('ix2').init();
          } catch (e) {
            // Silently ignore if ix2 isn't available
          }
        }
        // Reinitialize slick carousel if present
        if (typeof window !== 'undefined' && typeof window.jQuery !== 'undefined') {
          const $ = window.jQuery;
          if ($('.clients-logo').length && !$('.clients-logo').hasClass('slick-initialized')) {
            $('.clients-logo').slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 0,
              speed: 8000,
              pauseOnHover: true,
              cssEase: 'linear',
              responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
              ],
            });
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

      {/* jQuery (required by webflow.js) */}
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6524e05cb55e60e0154bca23"
        strategy="beforeInteractive"
        crossOrigin="anonymous"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      />

      {/* Slick carousel CSS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        strategy="afterInteractive"
      />

      {/* Webflow interactions */}
      <Script
        src="/js/webflow.js"
        strategy="afterInteractive"
        onLoad={() => {
          revealHiddenElements();
        }}
      />

      {/* Slick carousel init */}
      <Script id="slick-init" strategy="afterInteractive">
        {`
          function initSlick() {
            if (typeof jQuery !== 'undefined' && jQuery('.clients-logo').length) {
              if (!jQuery('.clients-logo').hasClass('slick-initialized')) {
                jQuery('.clients-logo').slick({
                  slidesToShow: 5, slidesToScroll: 1, autoplay: true,
                  autoplaySpeed: 0, speed: 8000, pauseOnHover: true, cssEase: 'linear',
                  responsive: [
                    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                    { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }
                  ]
                });
              }
            }
          }
          // Try immediately and after a short delay to ensure jQuery is ready
          initSlick();
          setTimeout(initSlick, 500);
          setTimeout(initSlick, 1500);
        `}
      </Script>
    </>
  );
}
