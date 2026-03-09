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
      title="Tireweb Integration Partner Hub - POS and Supplier Integrations"
      description="Integrate and get featured across multiple Tireweb platforms. From our acclaimed Tireweb Connections to specialized tools, your services and data become readily accessible to a broader audience, ensuring maximum visibility."
      canonical="https://www.tireweb.com/integration-partners-hub"
    >
      <div className="main-wraper">
      <section data-w-id="7acfddc6-6a10-5b18-b749-9fd72fc61779" className="sub-baner">
        <div className="container">
          <div className="section-heading canter-heading">
            <h2 className="heading-one _60px-fonts margain-top-0">Integration Partners Hub</h2>
            <div className="_10px-gap"></div>
            <div className="_10px-gap"></div>
            <p className="pargraph-medium">Expand Your Reach and Potential with Tireweb Integration.</p>
          </div>
        </div>
      </section>
      <section data-w-id="2f38a59f-6e55-652b-21c8-adb4d9c4fa39" className="section-page-content white-page-content">
        <div className="container">
          <div className="section-page-content-warper">
            <p className="pargraph-extra-large">The digital age thrives on seamless connectivity. Integrating with Tireweb not only strengthens this interconnected ecosystem but also amplifies the reach and effectiveness of your offerings. As partners in progress, let&#x27;s delve into the myriad opportunities and advantages that come with joining the Tireweb network.</p>
          </div>
        </div>
      </section>
      <section data-w-id="ef04457d-19b9-842e-1353-aafbe98d6d4e" className="section-key navy-blue-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="heading-two">Why Integrate with Tireweb?</h2>
            <div className="_10px-gap"></div>
            <div className="border-line">
              <div className="border-line-icons"></div>
            </div>
          </div>
          <div className="_30px-gap"></div>
          <div className="_15px-gap"></div>
          <div data-w-id="ef04457d-19b9-842e-1353-aafbe98d6d58" className="key-wraper navy-blue-section-wraper">
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003586-1.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Unparalleled Dealer Access</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">By integrating with Tireweb, gain direct access to a vast network of dealers who trust and employ our Tireweb Connections and other products. This automatically widens your potential client base and boosts your industry footprint.</p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003587.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Seamless Data Exchange</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Tireweb’s sophisticated infrastructure ensures that data exchange between systems is not only seamless but also swift and secure, resulting in efficient operations and satisfied end-users.</p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003588.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Enhanced Visibility</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Integrate and get featured across multiple Tireweb platforms. From our acclaimed Tireweb Connections to specialized tools, your services and data become readily accessible to a broader audience, ensuring maximum visibility.</p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003589.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Boosted Credibility</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Joining forces with a well-established name like Tireweb augments your brand&#x27;s credibility. When dealers notice integration with a trusted name, their confidence in your services inherently escalates.</p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003590.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Collaborative Growth</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">At Tireweb, we believe in mutual growth. As integration partners, we continuously work on collaborative marketing efforts, feature updates, and joint campaigns that drive both our trajectories upwards.</p>
            </div>
            <div className="key-box connection-box partners-hub-boxes">
              <div className="_30px-gap"></div><img src="/images/Group-1000003591-1.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">End-to-End Support</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Our global team, spanning across Australia, USA, Canada, and the Philippines, ensures 24/7 support for integration processes, troubleshooting, and any other assistance you might require.</p>
            </div>
          </div>
          <a href="/become-a-partner" className="primary-button fixed-width-button auto-width width2 w-inline-block">
            <div className="primary-button-text">Become an Integration Partner Today!</div><img src="/images/Vector.svg" loading="lazy" alt="" className="primary-button-icon" />
          </a>
        </div>
      </section>
    </div>
      
    </Layout>
  );
}
