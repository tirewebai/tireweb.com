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
      className={`header-dropdown w-dropdown${open ? ' w--open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`header-dropdown-toggel w-dropdown-toggle${open ? ' w--open' : ''}`}
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <div className="header-dropdown-icon w-icon-dropdown-toggle"></div>
        <div className="header-dropdown-heading">{label}</div>
      </div>
      <nav
        className={`header-drpdowns-box w-dropdown-list${open ? ' w--open' : ''}`}
        style={{ display: open ? 'block' : 'none' }}
      >
        {children}
      </nav>
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

  // Mobile menu open: use data-nav-menu-open attribute (Webflow CSS selector)
  const mobileNavAttrs = mobileOpen ? { 'data-nav-menu-open': '' } : {};

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
              {/* Nav menu - data-nav-menu-open attribute triggers Webflow CSS for mobile open state */}
              <nav
                role="navigation"
                className="nav-menu w-nav-menu"
                {...mobileNavAttrs}
              >
                <Link href="/" className="page-menu w-nav-link">Home</Link>

                <Dropdown label="Products">
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
                </Dropdown>

                <Dropdown label="Services">
                  <div className="header-dropdown-warper partners-box">
                    <Link href="/custom-development" className="page-menu sub-menu">Custom Development</Link>
                    <Link href="/marketing-services" className="page-menu sub-menu">Marketing Services</Link>
                  </div>
                </Dropdown>

                <Dropdown label="Support">
                  <div className="header-dropdown-warper partners-box">
                    <a href="https://servicedesk.esprofessionals.com/" target="_blank" rel="noreferrer" className="page-menu sub-menu">Wholesale Support</a>
                    <a href="https://tireweb.zendesk.com/auth/v2/login/" target="_blank" rel="noreferrer" className="page-menu sub-menu">Retail Support</a>
                    <a href="https://developer.tirewire.com" target="_blank" rel="noreferrer" className="page-menu sub-menu">API Documentation</a>
                  </div>
                </Dropdown>

                <Dropdown label="Partners">
                  <div className="header-dropdown-warper partners-box">
                    <Link href="/integration-partners-hub" className="page-menu sub-menu">Integration partners hub</Link>
                    <Link href="/agency-partners-hub" className="page-menu sub-menu">Agency partners hub</Link>
                    <Link href="/developers" className="page-menu sub-menu">Developers hub</Link>
                    <Link href="/become-a-partner" className="page-menu sub-menu">Become a partner</Link>
                  </div>
                </Dropdown>

                <Link href="/about-tireweb" className="page-menu w-nav-link">About</Link>

                <Dropdown label="Contact Us">
                  <div className="header-dropdown-warper partners-box">
                    <Link href="/contact-us" className="page-menu sub-menu">Contact</Link>
                    <Link href="/schedule-a-demo" className="page-menu sub-menu">Schedule a Demo</Link>
                    <Link href="/careers-at-tireweb" className="page-menu sub-menu">Careers</Link>
                  </div>
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

      {/* Mobile overlay - full-width menu panel */}
      {mobileOpen && (
        <div className="w-nav-overlay" style={{ display: 'block' }}>
          <nav
            role="navigation"
            className="nav-menu w-nav-menu"
            data-nav-menu-open=""
            style={{
              display: 'block',
              position: 'relative',
              background: '#023D72',
              padding: '10px 0',
              textAlign: 'left',
            }}
          >
            <Link href="/" className="page-menu w-nav-link" style={{ display: 'block', color: '#fff', padding: '10px 20px' }}>Home</Link>

            <MobileDropdown label="Products">
              <div style={{ padding: '0 20px 10px', background: '#01305a' }}>
                <div className="product-pages" style={{ flexWrap: 'wrap' }}>
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
            </MobileDropdown>

            <MobileDropdown label="Services">
              <div style={{ padding: '5px 30px 10px', background: '#01305a' }}>
                <Link href="/custom-development" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Custom Development</Link>
                <Link href="/marketing-services" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Marketing Services</Link>
              </div>
            </MobileDropdown>

            <MobileDropdown label="Support">
              <div style={{ padding: '5px 30px 10px', background: '#01305a' }}>
                <a href="https://servicedesk.esprofessionals.com/" target="_blank" rel="noreferrer" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Wholesale Support</a>
                <a href="https://tireweb.zendesk.com/auth/v2/login/" target="_blank" rel="noreferrer" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Retail Support</a>
                <a href="https://developer.tirewire.com" target="_blank" rel="noreferrer" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>API Documentation</a>
              </div>
            </MobileDropdown>

            <MobileDropdown label="Partners">
              <div style={{ padding: '5px 30px 10px', background: '#01305a' }}>
                <Link href="/integration-partners-hub" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Integration partners hub</Link>
                <Link href="/agency-partners-hub" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Agency partners hub</Link>
                <Link href="/developers" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Developers hub</Link>
                <Link href="/become-a-partner" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Become a partner</Link>
              </div>
            </MobileDropdown>

            <Link href="/about-tireweb" className="page-menu w-nav-link" style={{ display: 'block', color: '#fff', padding: '10px 20px' }}>About</Link>

            <MobileDropdown label="Contact Us">
              <div style={{ padding: '5px 30px 10px', background: '#01305a' }}>
                <Link href="/contact-us" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Contact</Link>
                <Link href="/schedule-a-demo" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Schedule a Demo</Link>
                <Link href="/careers-at-tireweb" className="page-menu sub-menu" style={{ display: 'block', color: '#fff', padding: '7px 0' }}>Careers</Link>
              </div>
            </MobileDropdown>

            <div style={{ padding: '10px 20px' }}>
              <Link href="/schedule-a-demo" className="primary-button w-inline-block">
                <div className="primary-button-text">Schedule a Demo</div>
                <img src="/images/Vector.svg" loading="lazy" alt="" className="primary-button-icon" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

// Simple accordion for mobile nav sections
function MobileDropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          cursor: 'pointer',
          color: '#fff',
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        <span>{label}</span>
        <span style={{ fontSize: 18, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>&#8964;</span>
      </div>
      {open && children}
    </div>
  );
}
