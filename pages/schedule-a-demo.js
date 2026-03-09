import Layout from '../components/Layout';


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
      title="Schedule a Demo - Experience Tireweb in Action"
      description="Ready to elevate your tire business? Book a Tireweb demo today and discover the potential of our integrated ecommerce solutions for your operations."
      canonical="https://www.tireweb.com/schedule-a-demo"
    >
      <div className="main-wraper">
      <div className="baner">
        <div className="container">
          <div data-w-id="dec21e37-d885-e6bd-bf32-30274dc72df8" className="baner-wraper">
            <div className="baner-wraper-content">
              <h1 className="heading-one _60px-fonts"><strong>See Tireweb in Action</strong></h1>
              <div className="_15px-gap"></div>
              <p className="pargraph-medium">Discover how Tireweb’s digital solutions can help you sell more tires and wheels. Book a personalized demo with our team and see how our ecommerce and data tools can transform your business.</p>
            </div>
            <div className="baner-wraper-image"><img src="/images/1643-1_1.png" loading="lazy" sizes="(max-width: 708px) 100vw, 708px" srcset="/images/1643-1_1-p-500.png 500w, /images/1643-1_1.png 708w" alt="" className="baner-wraper-icon" /></div>
          </div>
        </div>
      </div>
      <section className="section-contact request-demo padding-bottom-0">
        <div className="container">
          <div className="conatct-wraper request-demo-wraper">
            <div className="contact-form">
              <div className="section-heading">
                <h2 className="heading-two">Request Demo</h2>
                <div className="_10px-gap"></div>
                <div className="border-line">
                  <div className="border-line-icons"></div>
                </div>
                <div className="_10px-gap"></div>
                <p className="pargraph-medium">Discover how Tireweb’s suite of digital tools can help your business grow. From ecommerce platforms and data integrations to mobile ordering and online tire shopping, our team will show you exactly how our solutions work for your needs.<br /><br />Schedule a personalized demo with one of our experts and see firsthand how Tireweb makes it easier to connect, sell, and succeed.</p>
              </div>
              <div className="_30px-gap"></div>
              <div className="w-form">
                <form id="wf-form-Request-Demo---Contact-Form" onSubmit={handleSubmit} name="wf-form-Request-Demo---Contact-Form" data-name="Request Demo - Contact Form" >
                  <div className="form-row sheaduel-demo-form">
                    <div className="form-wraper"><input className="input w-input" maxlength="256" name="name" data-name="Name" placeholder="Name*" type="text" id="name" required /><input className="input w-input" maxlength="256" name="Company" data-name="Company" placeholder="Company*" type="text" id="Company" required /></div>
                    <div className="form-wraper"><input className="input w-input" maxlength="256" name="Phone-Number" data-name="Phone Number" placeholder="Phone Number*" type="tel" id="Phone-Number" /><input className="input w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email*" type="email" id="Email" required /></div>
                    <div className="form-wraper"><textarea id="Message" name="Message" maxlength="5000" data-name="Message" placeholder="Message*" required className="textarea w-input"></textarea></div>
                    <div className="checkboxs"><label className="w-checkbox checkbox-wrapers"><input id="Wholesale" type="checkbox" name="Wholesale" data-name="Wholesale" className="w-checkbox-input checkbox-icon" /><span className="checkbox-content w-form-label" htmlFor="Wholesale">Wholesale</span></label><label className="w-checkbox checkbox-wrapers"><input id="Mobile" type="checkbox" name="Mobile" data-name="Mobile" className="w-checkbox-input checkbox-icon" /><span className="checkbox-content w-form-label" htmlFor="Mobile">Mobile</span></label><label className="w-checkbox checkbox-wrapers"><input id="Retail" type="checkbox" name="Retail" data-name="Retail" className="w-checkbox-input checkbox-icon" /><span className="checkbox-content w-form-label" htmlFor="Retail">Retail</span></label><label className="w-checkbox checkbox-wrapers"><input id="TireSearch" type="checkbox" name="TireSearch" data-name="TireSearch" className="w-checkbox-input checkbox-icon" /><span className="checkbox-content w-form-label" htmlFor="TireSearch">TireSearch</span></label><label className="w-checkbox checkbox-wrapers"><input id="Wheels" type="checkbox" name="Wheels" data-name="Wheels" className="w-checkbox-input checkbox-icon" /><span className="checkbox-content w-form-label" htmlFor="Wheels">Wheels</span></label><label className="w-checkbox checkbox-wrapers"><input id="Manufacturer" type="checkbox" name="Manufacturer" data-name="Manufacturer" className="w-checkbox-input checkbox-icon" /><span className="checkbox-content w-form-label" htmlFor="Manufacturer">Manufacturer</span></label><label className="w-checkbox checkbox-wrapers"><input id="Connections" type="checkbox" name="Connections" data-name="Connections" className="w-checkbox-input checkbox-icon" /><span className="checkbox-content w-form-label" htmlFor="Connections">Connections</span></label><label className="w-checkbox checkbox-wrapers"><input id="Library" type="checkbox" name="Library" data-name="Library" className="w-checkbox-input checkbox-icon" /><span className="checkbox-content w-form-label" htmlFor="Library">Library</span></label><label className="w-checkbox checkbox-wrapers"><input id="Analytics" type="checkbox" name="Analytics" data-name="Analytics" className="w-checkbox-input checkbox-icon" /><span className="checkbox-content w-form-label" htmlFor="Analytics">Analytics</span></label></div><input type="submit" data-wait="Please wait..." className="primary-button submit-button request-demo w-button" value="Request Demo" />
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div className="client-conatct-image"><img src="/images/wheel-visualizer-1.png" loading="lazy" sizes="(max-width: 670px) 100vw, 670px" srcset="/images/wheel-visualizer-1-p-500.png 500w, /images/wheel-visualizer-1.png 670w" alt="" /></div>
          </div>
        </div>
      </section>
    </div>
      
    </Layout>
  );
}
