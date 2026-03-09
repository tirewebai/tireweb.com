export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-logo"><img src="/images/Group-390.png" loading="lazy" sizes="(max-width: 479px) 100vw, 239.875px, 100vw" srcset="/images/Group-390-p-500.png 500w, /images/Group-390-p-800.png 800w, /images/Group-390-p-1080.png 1080w, /images/Group-390.png 1440w" alt="" /></div>
        <div className="_30px-gap"></div>
        <div className="footer-wraper">
          <div className="footer-box">
            <div className="footer-box-heading">
              <h3 className="heading-three">Tireweb</h3>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <div className="_15px-gap"></div>
            </div>
            <a href="mailto:sales@tireweb.com" className="conatct-information w-inline-block"><img src="/images/fluent_mail-32-regular.svg" loading="lazy" alt="" className="information-icon" />
              <div className="information-text">sales@tireweb.com</div>
            </a>
            <div className="_15px-gap"></div>
          </div>
          <div className="footer-box">
            <div className="footer-box-heading">
              <h3 className="heading-three">Products</h3>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <div className="_15px-gap"></div>
            </div>
            <div className="footer-menu">
              <a href="/product/tireweb-wholesale" className="footer-menu-box w-inline-block"><img src="/images/Group-401.svg" loading="lazy" alt="" className="footer-menu-box-icon" />
                <div className="footer-menu-link">Wholesale</div>
              </a>
              <a href="/product/tireweb-mobile" className="footer-menu-box w-inline-block"><img src="/images/Group-401.svg" loading="lazy" alt="" className="footer-menu-box-icon" />
                <div className="footer-menu-link">Mobile</div>
              </a>
              <a href="/product/tireweb-retail" className="footer-menu-box w-inline-block"><img src="/images/Group-401.svg" loading="lazy" alt="" className="footer-menu-box-icon" />
                <div className="footer-menu-link">Retail </div>
              </a>
              <a href="/product/tireweb-tiresearch" className="footer-menu-box w-inline-block"><img src="/images/Group-401.svg" loading="lazy" alt="" className="footer-menu-box-icon" />
                <div className="footer-menu-link">TireSearch</div>
              </a>
              <a href="/product/tireweb-wheels" className="footer-menu-box w-inline-block"><img src="/images/Group-401.svg" loading="lazy" alt="" className="footer-menu-box-icon" />
                <div className="footer-menu-link">Wheels</div>
              </a>
              <a href="/product/tireweb-manufacturer" className="footer-menu-box w-inline-block"><img src="/images/Group-401.svg" loading="lazy" alt="" className="footer-menu-box-icon" />
                <div className="footer-menu-link">Manufacturer</div>
              </a>
              <a href="/product/tireweb-connections" className="footer-menu-box w-inline-block"><img src="/images/Group-401.svg" loading="lazy" alt="" className="footer-menu-box-icon" />
                <div className="footer-menu-link">Connections</div>
              </a>
              <a href="/product/tireweb-library" className="footer-menu-box w-inline-block"><img src="/images/Group-401.svg" loading="lazy" alt="" className="footer-menu-box-icon" />
                <div className="footer-menu-link">Library</div>
              </a>
              <a href="/product/tireweb-analytics" className="footer-menu-box w-inline-block"><img src="/images/Group-401.svg" loading="lazy" alt="" className="footer-menu-box-icon" />
                <div className="footer-menu-link">Analytics</div>
              </a>
            </div>
          </div>
          <div className="footer-box">
            <div className="footer-box-heading">
              <h3 className="heading-three">Follow Us on</h3>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <div className="_15px-gap"></div>
              <div className="social-media">
                <a href="https://facebook.com/tireweb" target="_blank" className="social-media-box w-inline-block"><img src="/images/ri_facebook-fill.svg" loading="lazy" alt="" className="social-media-box-icon" /></a>
                <a href="https://linkedin.com/company/tireweb" target="_blank" className="social-media-box w-inline-block"><img src="/images/ri_linkedin-fill.svg" loading="lazy" alt="" className="social-media-box-icon" /></a>
                <a href="https://twitter.com/tireweb" target="_blank" className="social-media-box w-inline-block"><img src="/images/Mask-group_1.png" loading="lazy" alt="" className="social-media-box-icon" /></a>
              </div>
            </div>
          </div>
          <div className="footer-box">
            <div className="footer-box-heading">
              <h3 className="heading-three">Stay Updated</h3>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <div className="_15px-gap"></div>
            </div>
            <div className="subscribe">
              <div className="w-form">
                <form id="email-form-2" name="email-form-2" data-name="Email Form 2" action="https://tractionnews.us7.list-manage.com/subscribe/post?u=b9115134a02d1d5075e299e34&amp;amp;id=e9f07ffff4&amp;amp;f_id=00a8c7e1f0" method="post"><input className="input full-width-100 w-input" maxlength="256" name="EMAIL" data-name="EMAIL" placeholder="Email*" type="email" id="EMAIL-4" required /><input type="submit" data-wait="Please wait..." className="submit-button-2 primary-button submit-button subscribe w-button" value="Subscribe" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copy-right-wraper">
            <div className="copyright-text">Copyright © 2026. E-Solution Professionals Pty Ltd dba Tireweb</div>
            <div className="copy-right-menu">
              <a href="/privacy-policy" className="copy-right-menu">Privacy Policy</a>
              <div className="icon-copy text-block-2">I</div>
              <a href="/terms-of-use" className="copy-right-menu">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
