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
      title="Become a Partner with Tireweb"
      description="Join the Tireweb partnership program and unlock new avenues for growth. Collaborate with an industry leader, and together, drive success in the tire industry."
      canonical="https://www.tireweb.com/become-a-partner"
    >
      <div className="main-wraper">
      <section data-w-id="7acfddc6-6a10-5b18-b749-9fd72fc61779" style={{opacity: 0}} className="sub-baner">
        <div className="container">
          <div className="section-heading canter-heading">
            <h2 className="heading-one _60px-fonts margain-top-0">Become a Partner</h2>
            <div className="_10px-gap"></div>
            <div className="_10px-gap"></div>
            <p className="pargraph-medium">Forge Ahead with Tireweb: Partnership That Propels Success.</p>
          </div>
        </div>
      </section>
      <section data-w-id="2f38a59f-6e55-652b-21c8-adb4d9c4fa39" style={{opacity: 0}} className="section-page-content">
        <div className="container">
          <div className="section-page-content-warper">
            <p className="pargraph-extra-large">In an age where collaboration drives innovation, partnering with Tireweb offers a unique blend of technology and industry expertise. Our vast network, spanning from tire suppliers to web developers, ensures that our partners experience exponential growth, enhanced offerings, and sustained success. At Tireweb, it&#x27;s not just about collaboration; it&#x27;s about building success stories together.</p>
          </div>
        </div>
      </section>
      <section data-w-id="ef04457d-19b9-842e-1353-aafbe98d6d4e" style={{opacity: 0}} className="section-key">
        <div className="container">
          <div className="section-heading">
            <h2 className="heading-two">Why Partner with Tireweb?</h2>
            <div className="_10px-gap"></div>
            <div className="border-line">
              <div className="border-line-icons"></div>
            </div>
          </div>
          <div className="_30px-gap"></div>
          <div className="_15px-gap"></div>
          <div data-w-id="ef04457d-19b9-842e-1353-aafbe98d6d58" style={{opacity: 0}} className="key-wraper navy-blue-section-wraper">
            <div className="key-box connection-box">
              <div className="_30px-gap"></div><img src="/images/Group-1000003593.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Broad Network</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Access to a vast ecosystem of tire dealers, suppliers, and digital solution experts.</p>
            </div>
            <div className="key-box connection-box">
              <div className="_30px-gap"></div><img src="/images/Group-1000003594.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Cutting-edge Technology</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Benefit from the latest in e-commerce solutions, API integrations, and digital marketing tools.</p>
            </div>
            <div className="key-box connection-box">
              <div className="_30px-gap"></div><img src="/images/Group-1000003595.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Expertise in the Tire Industry</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Lean on our long-standing experience and deep understanding of the tire market, ensuring relevant and effective solutions.</p>
            </div>
            <div className="key-box connection-box">
              <div className="_30px-gap"></div><img src="/images/Group-1000003597.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Continuous Support</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">A dedicated team to guide, assist, and collaborate, ensuring mutual growth and success.</p>
            </div>
            <div className="key-box connection-box">
              <div className="_30px-gap"></div><img src="/images/Group-1000003596.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Drive New Opportunities</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Tap into new markets, expand offerings, and increase your revenue streams.</p>
            </div>
            <div className="key-box connection-box">
              <div className="_30px-gap"></div><img src="/images/Group-1000003584-1.png" loading="lazy" alt="" className="connection-icon" />
              <h3 className="heading-three">Unparalleled Marketing Support</h3>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons"></div>
              </div>
              <p className="pargraph-medium">Join forces with Tireweb and benefit from our marketing strategies, tailored to amplify your brand and drive tire sales.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-contact become-partner-form">
        <div className="container">
          <div className="conatct-wraper">
            <div className="contact-form">
              <div className="section-heading">
                <h2 className="heading-two">Interested in becoming a partner?</h2>
                <div className="_10px-gap"></div>
                <div className="border-line">
                  <div className="border-line-icons"></div>
                </div>
                <div className="_10px-gap"></div>
                <p className="pargraph-medium">Fill in the details below or reach out to us at <a href="/mailto:sales@tireweb.com" className="link">sales@tireweb.com</a>.<br /><br /><em>This enquiry form is to express interest in our Tireweb web software partner program. If you are looking to purchase tires, please contact your your tire distributor directly.</em></p>
              </div>
              <div className="_30px-gap"></div>
              <div className="w-form">
                <form id="wf-form-Become-Partner-Contact-form" onSubmit={handleSubmit} name="wf-form-Become-Partner-Contact-form" data-name="Become Partner-Contact form" method="post" className="extra-padding-bottom">
                  <div className="form-row">
                    <div className="form-wraper"><input className="input w-input" maxlength="256" name="name" data-name="Name" placeholder="Name*" type="text" id="name" required /><input className="input w-input" maxlength="256" name="Company" data-name="Company" placeholder="Company*" type="text" id="Company" required /></div>
                    <div className="form-wraper"><input className="input w-input" maxlength="256" name="Phone-Number" data-name="Phone Number" placeholder="Phone Number*" type="tel" id="Phone-Number" /><input className="input w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email*" type="email" id="Email" required /></div>
                    <div className="form-wraper"><textarea id="Message" name="Message" maxlength="5000" data-name="Message" placeholder="Message*" required className="textarea w-input"></textarea></div>
                  </div><input type="submit" data-wait="Please wait..." className="primary-button submit-button submit-application w-button" value="Submit " />
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div className="client-conatct-image"><img src="/images/pngegg-3.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 47vw, (max-width: 1279px) 46vw, (max-width: 1919px) 43vw, 696px" srcset="images/pngegg-3-p-500.png 500w, images/pngegg-3.png 770w" alt="" /></div>
          </div>
        </div>
      </section>
    </div>
      
    </Layout>
  );
}
