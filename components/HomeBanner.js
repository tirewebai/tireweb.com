import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: '/images/OJK8ZS1-1.png',
    heading: <><strong>Powering the Tire Industry for 25 Years</strong></>,
    body: (
      <>
        At Tireweb, our mission is simple - working together to deliver creative, efficient, reliable, and secure solutions that help our partners grow.
        <br /><br />
        For 25 years, our vision has guided everything we do: powering the tire industry to success by being the most trusted technology partner for connection, growth, and innovation. From ecommerce platforms to advanced data tools, Tireweb helps you sell more tires and wheels every day.
      </>
    ),
    cta: { href: '/become-a-partner', text: 'Find out More' },
  },
  {
    image: '/images/OWINJ41-1.png',
    heading: 'Introducing Tireweb Mobile',
    body: 'Tire and Wheel Ordering in the Palm of Your Hand',
    cta: { href: '/product/tireweb-mobile', text: 'Learn more' },
  },
  {
    image: '/images/tireweb-tiresearch-home.png',
    heading: 'Introducing TireSearch',
    body: 'Redefine Digital Sales with TireSearch by Tireweb. Seamless Online Tire Shopping for Every Website.',
    cta: { href: '/product/tireweb-tiresearch', text: 'Learn more' },
  },
];

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay every 5 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <div
      className="home-baner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative' }}
    >
      <div className="container">
        {/* Slide content */}
        <div className="baner-grid">
          <div className="w-layout-layout quick-stack wf-layout-layout">
            <div className="w-layout-cell cell-2">
              <div className="baner-image">
                <img
                  key={current}
                  loading="eager"
                  height="Auto"
                  alt=""
                  src={slide.image}
                  className="baner-icon"
                  style={{ animation: 'fadeIn 0.6s ease' }}
                />
              </div>
            </div>
            <div className="w-layout-cell cell">
              <div
                className="baner-content-wraper"
                key={current + '-text'}
                style={{ animation: 'fadeIn 0.6s ease' }}
              >
                <h1 className="heading-one">{slide.heading}</h1>
                <div className="_15px-gap"></div>
                <p className="pargraph-medium">{slide.body}</p>
                <div className="_30px-gap"></div>
                <Link href={slide.cta.href} className="primary-button fixed-width-button w-inline-block">
                  <div className="primary-button-text">{slide.cta.text}</div>
                  <img loading="lazy" src="/images/Vector.svg" alt="" className="primary-button-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Prev arrow */}
        <div
          className="left-arrow-2 w-slider-arrow-left"
          onClick={prev}
          style={{ cursor: 'pointer', position: 'absolute', bottom: 50, right: 100, width: 50 }}
        >
          <img loading="lazy" src="/images/Group-177.svg" alt="Previous" className="image-8" style={{ transform: 'none', position: 'static', width: 50 }} />
        </div>

        {/* Next arrow */}
        <div
          className="right-arrow-2 w-slider-arrow-right"
          onClick={next}
          style={{ cursor: 'pointer', position: 'absolute', bottom: 50, right: 30, width: 50 }}
        >
          <img loading="lazy" src="/images/Group-177.svg" alt="Next" className="image-9" style={{ transform: 'rotateY(180deg)', position: 'static', width: 50 }} />
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, paddingTop: 16, paddingBottom: 8 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                background: i === current ? '#023D72' : '#ccc',
                padding: 0,
                transition: 'background 0.3s',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
