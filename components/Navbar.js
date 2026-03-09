import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="header-dropdown w-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className="header-dropdown-toggel w-dropdown-toggle"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <div className="header-dropdown-icon w-icon-dropdown-toggle"></div>
        <div className="header-dropdown-heading">{label}</div>
      </div>
      {open && children}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const router = useRouter();

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setMobileOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      role="banner"
      className={`header w-nav${sticky ? ' Sticky_Header' : ''}`}
    >
      <div className="header-wraper">
        <div className="container w-container">
          <div className="header-row">
            <div className="logo">
              <Link href="/" className="w-nav-brand">
                <img src="/images/tireweb25th-text.svg" loading="lazy" alt="Tireweb" className="image" />
              </Link>
            </div>
            <div className="menu-box">
              {/* Desktop nav */}
              <nav role="navigation" className={`nav-menu w-nav-menu${mobileOpen ? ' w--nav-menu-open' : ''}`}>
                <Link href="/" className="page-menu w-nav-link">Home</Link>

                <Dropdown label="Products">
                  <nav className="header-drpdowns-box w-dropdown-list w--open">
                    <div className="header-dropdown-warper dp-box">
                      <div className="product-pages">
                        <Link href="/product/tireweb-wholesale" className="product-pages-menu w-inline-block"><img src="/images/Group-489.png" loading="lazy" alt="Wholesale" className="product-pages-icon" /></Link>
                        <Link href="/product/tireweb-mobile" className="product-pages-menu w-inline-block"><img src="/images/Group-490.png" loading="lazy" alt="Mobile" className="product-pages-icon" /></Link>
                        <Link href="/product/tireweb-retail" className="product-pages-menu w-inline-block"><img src="/images/Group-185.png" loading="lazy" alt="Retail" className="product-pages-icon" /></Link>
                        <Link href="/product/tireweb-tiresearch" className="product-pages-menu w-inline-block"><img src="/images/Group-1000003572-2.png" loading="lazy" alt="TireSearch" className="product-pages-icon" /></Link>
                        <Link href="/product/tireweb-wheels" className="product-pages-menu w-inline-block"><img src="/images/Group-190.png" loading="lazy" alt="Wheels" className="product-pages-icon" /></Link>
                        <Link href="/product/tireweb-manufacturer" className="product-pages-menu w-inline-block"><img src="/images/Group-187.png" loading="lazy" alt="Manufacturer" className="product-pages-icon" /></Link>
                        <Link href="/product/tireweb-connections" className="product-pages-menu w-inline-block"><img src="/images/Group-193.png" loading="lazy" alt="Connections" className="product-pages-icon" /></Link>
                        <Link href="/product/tireweb-library" className="product-pages-menu w-inline-block"><img src="/images/Group-188.png" loading="lazy" alt="Library" className="product-pages-icon" /></Link>
                        <Link href="/product/tireweb-analytics" className="product-pages-menu w-inline-block"><img src="/images/Group-191.png" loading="lazy" alt="Analytics" className="product-pages-icon" /></Link>
                      </div>
                    </div>
                  </nav>
                </Dropdown>

                <Dropdown label="Services">
                  <nav className="header-drpdowns-box partners w-dropdown-list w--open">
                    <div className="header-dropdown-warper partners-box">
                      <Link href="/custom-development" className="page-menu sub-menu">Custom Development</Link>
                      <Link href="/marketing-services" className="page-menu sub-menu">Marketing Services</Link>
                    </div>
                  </nav>
                </Dropdown>

                <Dropdown label="Support">
                  <nav className="header-drpdowns-box partners w-dropdown-list w--open">
                    <div className="header-dropdown-warper partners-box">
                      <a href="https://servicedesk.esprofessionals.com/" target="_blank" rel="noreferrer" className="page-menu sub-menu">Wholesale Support</a>
                      <a href="https://tireweb.zendesk.com/auth/v2/login/" target="_blank" rel="noreferrer" className="page-menu sub-menu">Retail Support</a>
                      <a href="https://developer.tirewire.com" target="_blank" rel="noreferrer" className="page-menu sub-menu">API Documentation</a>
                    </div>
                  </nav>
                </Dropdown>

                <Dropdown label="Partners">
                  <nav className="header-drpdowns-box partners w-dropdown-list w--open">
                    <div className="header-dropdown-warper partners-box">
                      <Link href="/integration-partners-hub" className="page-menu sub-menu">Integration partners hub</Link>
                      <Link href="/agency-partners-hub" className="page-menu sub-menu">Agency partners hub</Link>
                      <Link href="/developers" className="page-menu sub-menu">Developers hub</Link>
                      <Link href="/become-a-partner" className="page-menu sub-menu">Become a partner</Link>
                    </div>
                  </nav>
                </Dropdown>

                <Link href="/about-tireweb" className="page-menu w-nav-link">About</Link>

                <Dropdown label="Contact Us">
                  <nav className="header-drpdowns-box partners w-dropdown-list w--open">
                    <div className="header-dropdown-warper partners-box">
                      <Link href="/contact-us" className="page-menu sub-menu">Contact</Link>
                      <Link href="/schedule-a-demo" className="page-menu sub-menu">Schedule a Demo</Link>
                      <Link href="/careers-at-tireweb" className="page-menu sub-menu">Careers</Link>
                    </div>
                  </nav>
                </Dropdown>

                <div className="header-button mobile-button">
                  <Link href="/schedule-a-demo" className="primary-button w-inline-block">
                    <div className="primary-button-text">Schedule a Demo</div>
                    <img src="/images/Vector.svg" loading="lazy" alt="" className="primary-button-icon" />
                  </Link>
                </div>
              </nav>

              {/* Desktop CTA button */}
              <div className="header-button">
                <Link href="/schedule-a-demo" className="primary-button hide-on-mobile relative-postions w-inline-block">
                  <div className="primary-button-text">Schedule a Demo</div>
                  <img src="/images/Vector.svg" loading="lazy" alt="" className="primary-button-icon" />
                </Link>
              </div>

              {/* Mobile hamburger */}
              <div
                className={`menu-button w-nav-button${mobileOpen ? ' w--open' : ''}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{ cursor: 'pointer' }}
              >
                <div className="icon-4 w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
