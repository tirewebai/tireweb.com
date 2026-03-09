import Script from 'next/script';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
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
      {/* Webflow interactions */}
      <Script src="/js/webflow.js" strategy="afterInteractive" />
      {/* Slick carousel */}
      <Script
        src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        strategy="afterInteractive"
      />
      {/* Client logo slider init */}
      <Script id="slick-init" strategy="afterInteractive">
        {`
          if (typeof jQuery !== 'undefined') {
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
        `}
      </Script>
    </>
  );
}
