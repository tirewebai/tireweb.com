import Layout from '../components/Layout';

import { useEffect } from 'react';

export default function Page() {

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        // Show success state
        form.closest('.w-form').querySelector('.w-form-done').style.display = 'block';
        form.style.display = 'none';
      } else {
        form.closest('.w-form').querySelector('.w-form-fail').style.display = 'block';
      }
    } catch {
      form.closest('.w-form').querySelector('.w-form-fail').style.display = 'block';
    }
  }

  return (
    <Layout
      title="Tireweb Agency Partner Hub - Elevate Your Client Services"
      description="Join Tireweb&#x27;s Agency Partner Hub to amplify your offerings. Access exclusive tools, resources, and collaborative opportunities tailored for digital agencies."
      canonical="https://www.tireweb.com/agency-partners-hub"
    >
      <div className="main-wraper">
      <section data-w-id="7acfddc6-6a10-5b18-b749-9fd72fc61779" style={{opacity: 0}} className="sub-baner">
        <div className="container">
          <div className="section-heading canter-heading">
            <h2 className="heading-one _60px-fonts margain-top-0">Agency Partners Hub</h2>
            <div className="_10px-gap"></div>
            <div className="_10px-gap"></div>
            <p className="pargraph-medium">Empowering Agencies with Tireweb&#x27;s Comprehensive Suite.</p>
          </div>
        </div>
      </section>
      <section data-w-id="2f38a59f-6e55-652b-21c8-adb4d9c4fa39" style={{opacity: 0}} className="section-page-content">
        <div className="container">
          <div className="section-page-content-warper">
            <p className="pargraph-extra-large">In an era where digital transformation reigns supreme, agencies play a crucial role in shaping the online experiences of brands and businesses. At Tireweb, we offer agencies an arsenal of tools and platforms that not only simplify digital solutions but also amplify their creative endeavors.</p>
          </div>
        </div>
      </section>
      <section data-w-id="ef04457d-19b9-842e-1353-aafbe98d6d4e" style={{opacity: 0}} className="section-key">
        <div className="container">
          <div className="section-heading">
            <h2 className="heading-two">Why Collaborate with Tireweb?</h2>
            <div className="_10px-gap"></div>
            <div className="border-line">
              <div className="border-line-icons"></div>
            </div>
          </div>
          <div className="_30px-gap"></div>
          <div className="_15px-gap"></div>
          <div data-w-id="ef04457d-19b9-842e-1353-aafbe98d6d58" style={{opacity: 0}} className="key-wraper navy-blue-section-wraper">
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003580.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Versatile Platforms for Creative Expression</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">With our <a href="/product/tireweb-retail" className="tireweb-link">Tireweb Retail </a>platform, agencies have a canvas to express, design, and develop unique online experiences for clients in the tire industry, ensuring their brands stand out.</p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003581.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Integrated Shopping Solutions</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">
                <a href="/product/tireweb-tiresearch" className="tireweb-link">TireSearch</a> allows agencies to enhance e-commerce platforms with a robust tire shopping experience. Tailor-make online shops that are rich in features and seamless in execution.
              </p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003582.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Seamless Connectivity</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Our <a href="/product/tireweb-connections" className="tireweb-link">Tireweb Connections</a> offers an API suite that ensures data flow, inventory synchronization, and real-time updates are streamlined. This equips agencies to build comprehensive digital solutions without any hitches.</p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003583-1.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Enhanced Marketing Capabilities</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Expand your agency&#x27;s offerings by tapping into <a href="/marketing-services" className="tireweb-link">Tireweb&#x27;s Marketing</a> Services. From PPC campaigns to remarketing strategies, position your agency as a full-service powerhouse.</p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003584-1.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Stay Updated with Real-time Data</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Provide clients with up-to-date information, images, and insights sourced from <a href="/product/tireweb-library" className="tireweb-link">Tireweb Library</a>, enhancing user engagement and boosting site credibility.</p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003585.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Collaborative Support</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Working with Tireweb means having a reliable partner every step of the way. From initial brainstorming to final execution, our team provides guidance, technical support, and insights, ensuring each project&#x27;s success.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-current-partners">
        <div className="container">
          <div className="section-heading canter-heading">
            <h2 className="heading-two">Current Agency Partners</h2>
            <div className="_10px-gap"></div>
            <div className="border-line">
              <div className="border-line-icons auto-line"></div>
            </div>
          </div>
          <div className="_30px-gap"></div>
          <div className="current-partners-wraper">
            <div className="current-partners-wraper-image"><img src="/images/asc-logo-w-tag5.png" loading="lazy" alt="" className="current-partners-wraper-icon" /></div>
            <div className="current-partners-wraper-image"></div><img src="/images/Tread-Logos-TMS-NoURL-NoBackground-300dpi.png" loading="lazy" alt="" className="current-partners-wraper-icon" />
            <div className="current-partners-wraper-image"></div>
            <div className="current-partners-wraper-image"><img src="/images/Group-1000003543.png" loading="lazy" alt="" className="current-partners-wraper-icon" /></div>
          </div>
        </div>
      </section>
      <section className="section overlap-section">
        <div data-w-id="85df190c-bc15-edfc-4e23-93866c84ed33" style={{opacity: 0}} className="integrated blue-background">
          <div className="section-heading canter-heading">
            <h2 className="heading-two white-color-text">Forge a Winning Partnership</h2>
            <div className="_10px-gap"></div>
            <div className="border-line">
              <div className="border-line-icons auto-line white-border"></div>
            </div>
            <div className="_15px-gap"></div>
            <div className="div-block-3">
              <p className="pargraph-medium white-color-text">In the digital landscape, two heads are indeed better than one. By joining forces with Tireweb, agencies can offer more holistic, advanced, and tailored solutions to their clientele, driving success stories and fostering long-term relationships.</p>
            </div>
          </div>
          <div className="_30px-gap"></div>
          <div className="button-group">
            <a href="/become-a-partner" className="primary-button extra-width-button white-boreder sucess-button w-inline-block">
              <div className="primary-button-text">Let&#x27;s Collaborate for Success!</div><img src="/images/Vector.svg" loading="lazy" alt="" className="primary-button-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
      
    </Layout>
  );
}
