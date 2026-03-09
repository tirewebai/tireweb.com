import { useEffect } from 'react';
import Script from 'next/script';

export default function Navbar() {
  return (
    <>
      <div id="navbar" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="header w-nav">
      <div className="header-wraper">
        <div className="container w-container">
          <div className="header-row">
            <div className="logo">
              <a href="/" aria-current="page" className="w-nav-brand w--current"><img src="/images/tireweb25th-text.svg" loading="lazy" alt="" className="image" /></a>
            </div>
            <div className="menu-box">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <a href="/" aria-current="page" className="page-menu w-nav-link w--current">Home</a>
                <div data-hover="true" data-delay="100" className="header-dropdown w-dropdown">
                  <div className="header-dropdown-toggel w-dropdown-toggle">
                    <div className="header-dropdown-icon w-icon-dropdown-toggle"></div>
                    <div className="header-dropdown-heading">Products</div>
                  </div>
                  <nav className="header-drpdowns-box w-dropdown-list">
                    <div className="header-dropdown-warper dp-box">
                      <div className="product-pages">
                        <a href="/product/tireweb-wholesale" className="product-pages-menu w-inline-block"><img src="/images/Group-489.png" loading="lazy" alt="" className="product-pages-icon" /></a>
                        <a href="/product/tireweb-mobile" className="product-pages-menu w-inline-block"><img src="/images/Group-490.png" loading="lazy" alt="" className="product-pages-icon" /></a>
                        <a href="/product/tireweb-retail" className="product-pages-menu w-inline-block"><img src="/images/Group-185.png" loading="lazy" alt="" className="product-pages-icon" /></a>
                        <a href="/product/tireweb-tiresearch" className="product-pages-menu w-inline-block"><img src="/images/Group-1000003572-2.png" loading="lazy" alt="" className="product-pages-icon" /></a>
                        <a href="/product/tireweb-wheels" className="product-pages-menu w-inline-block"><img src="/images/Group-190.png" loading="lazy" alt="" className="product-pages-icon" /></a>
                        <a href="/product/tireweb-manufacturer" className="product-pages-menu w-inline-block"><img src="/images/Group-187.png" loading="lazy" alt="" className="product-pages-icon" /></a>
                        <a href="/product/tireweb-connections" className="product-pages-menu w-inline-block"><img src="/images/Group-193.png" loading="lazy" alt="" className="product-pages-icon" /></a>
                        <a href="/product/tireweb-library" className="product-pages-menu w-inline-block"><img src="/images/Group-188.png" loading="lazy" alt="" className="product-pages-icon" /></a>
                        <a href="/product/tireweb-analytics" className="product-pages-menu w-inline-block"><img src="/images/Group-191.png" loading="lazy" alt="" className="product-pages-icon" /></a>
                      </div>
                    </div>
                  </nav>
                </div>
                <div data-hover="true" data-delay="100" className="header-dropdown w-dropdown">
                  <div className="header-dropdown-toggel w-dropdown-toggle">
                    <div className="header-dropdown-icon w-icon-dropdown-toggle"></div>
                    <div className="header-dropdown-heading">Services</div>
                  </div>
                  <nav className="header-drpdowns-box partners w-dropdown-list">
                    <div className="header-dropdown-warper partners-box">
                      <a href="/custom-development" className="page-menu sub-menu">Custom Development</a>
                      <a href="/marketing-services" className="page-menu sub-menu">Marketing Services</a>
                    </div>
                  </nav>
                </div>
                <div data-hover="true" data-delay="100" className="header-dropdown w-dropdown">
                  <div className="header-dropdown-toggel w-dropdown-toggle">
                    <div className="header-dropdown-icon w-icon-dropdown-toggle"></div>
                    <div className="header-dropdown-heading">Support</div>
                  </div>
                  <nav className="header-drpdowns-box partners w-dropdown-list">
                    <div className="header-dropdown-warper partners-box">
                      <a href="https://servicedesk.esprofessionals.com/" target="_blank" className="page-menu sub-menu">Wholesale Support</a>
                      <a href="https://tireweb.zendesk.com/auth/v2/login/" target="_blank" className="page-menu sub-menu">Retail Support</a>
                      <a href="https://developer.tirewire.com" target="_blank" className="page-menu sub-menu">API Documentation</a>
                    </div>
                  </nav>
                </div>
                <div data-hover="true" data-delay="100" className="header-dropdown w-dropdown">
                  <div className="header-dropdown-toggel w-dropdown-toggle">
                    <div className="header-dropdown-icon w-icon-dropdown-toggle"></div>
                    <div className="header-dropdown-heading">Partners</div>
                  </div>
                  <nav className="header-drpdowns-box partners w-dropdown-list">
                    <div className="header-dropdown-warper partners-box">
                      <a href="/integration-partners-hub" className="page-menu sub-menu">Integration partners hub</a>
                      <a href="/agency-partners-hub" className="page-menu sub-menu">Agency partners hub</a>
                      <a href="/developers" className="page-menu sub-menu">Developers hub</a>
                      <a href="/become-a-partner" className="page-menu sub-menu">Become a partner</a>
                    </div>
                  </nav>
                </div>
                <a href="/about-tireweb" className="page-menu w-nav-link">About</a>
                <div data-hover="true" data-delay="100" className="header-dropdown w-dropdown">
                  <div className="header-dropdown-toggel w-dropdown-toggle">
                    <div className="header-dropdown-icon w-icon-dropdown-toggle"></div>
                    <div className="header-dropdown-heading">Contact Us</div>
                  </div>
                  <nav className="header-drpdowns-box partners w-dropdown-list">
                    <div className="header-dropdown-warper partners-box">
                      <a href="/contact-us" className="page-menu sub-menu">Contact</a>
                      <a href="/schedule-a-demo" className="page-menu sub-menu">Schedule a Demo</a>
                      <a href="/careers-at-tireweb" className="page-menu sub-menu">Careers</a>
                    </div>
                  </nav>
                </div>
                <div className="header-button mobile-button">
                  <a href="#" className="primary-button w-inline-block">
                    <div className="primary-button-text">Schedule a Demo</div><img src="/images/Vector.svg" loading="lazy" alt="" className="primary-button-icon" />
                  </a>
                </div>
              </nav>
              <div className="header-button">
                <a href="/schedule-a-demo" className="primary-button hide-on-mobile relative-postions w-inline-block">
                  <div className="primary-button-text">Schedule a Demo</div><img src="/images/Vector.svg" loading="lazy" alt="" className="primary-button-icon" />
                </a>
              </div>
              <div className="menu-button w-nav-button">
                <div className="icon-4 w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
