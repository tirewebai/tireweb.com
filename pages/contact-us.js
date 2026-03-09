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
      title="Contact Tireweb - Reach Out to Our Expert Team"
      description="Have questions or need assistance? Connect with the Tireweb team today for support, inquiries, and to learn more about our cutting-edge ecommerce solutions."
      canonical="https://www.tireweb.com/contact-us"
    >
      <div className="main-wraper">
      <div className="baner">
        <div className="container">
          <div data-w-id="dec21e37-d885-e6bd-bf32-30274dc72df8" className="baner-wraper">
            <div className="baner-wraper-content">
              <h1 className="heading-one _60px-fonts">Let&#x27;s Connect!</h1>
              <div className="_15px-gap"></div>
              <p className="pargraph-medium">Your Questions, Suggestions, and Feedback Matter.</p>
            </div>
            <div className="baner-wraper-image"><img src="/images/Mask-group.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 1279px) 46vw, (max-width: 1919px) 43vw, 696px" srcset="/images/Mask-group-p-500.jpg 500w, /images/Mask-group.jpg 675w" alt="" className="baner-wraper-icon" /></div>
          </div>
        </div>
      </div>
      <section data-w-id="27644970-7da6-a026-1cec-157d4c043226" className="section-contact contact-us">
        <div className="container">
          <div className="conatct-wraper">
            <div className="contact-form">
              <div className="section-heading">
                <h2 className="heading-two">Get in Touch</h2>
                <div className="_10px-gap"></div>
                <div className="border-line">
                  <div className="border-line-icons"></div>
                </div>
                <div className="_10px-gap"></div>
                <p className="pargraph-medium">At Tireweb, we pride ourselves on our proactive approach to communication. Whether you have a query, suggestion, or just want to chat about the tire industry, our dedicated team is here to listen and assist.<br /><br /><em>This enquiry form is to express interest in our Tireweb web software. If you are looking to purchase tires, please contact your tire distributor directly.</em></p>
              </div>
              <div className="_30px-gap"></div>
              <div className="w-form">
                <form id="wf-form-Contact-page---Contact-Form" onSubmit={handleSubmit} name="wf-form-Contact-page---Contact-Form" data-name="Contact page - Contact Form" >
                  <div className="form-row">
                    <div className="form-wraper"><input className="input w-input" maxlength="256" name="name" data-name="Name" placeholder="Name*" type="text" id="name" required /><input className="input w-input" maxlength="256" name="Company" data-name="Company" placeholder="Company*" type="text" id="Company" required /></div>
                    <div className="form-wraper"><input className="input w-input" maxlength="256" name="Phone-Number" data-name="Phone Number" placeholder="Phone Number*" type="tel" id="Phone-Number" /><input className="input w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email*" type="email" id="Email" required /></div>
                    <div className="form-wraper"><textarea id="Message" name="Message" maxlength="5000" data-name="Message" placeholder="Message*" required className="textarea w-input"></textarea></div>
                  </div><input type="submit" data-wait="Please wait..." className="primary-button submit-button w-button" value="Submit" />
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div className="client-conatct-image"><img src="/images/Rectangle-2753-2.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 47vw, (max-width: 1279px) 46vw, (max-width: 1919px) 43vw, 696px" srcset="/images/Rectangle-2753-2-p-500.jpg 500w, /images/Rectangle-2753-2.jpg 750w" alt="" /></div>
          </div>
        </div>
      </section>
      <section data-w-id="09b0a245-5a93-9223-09b5-1a92d5e88490" className="follow-us">
        <div className="container">
          <div className="section-heading canter-heading">
            <h2 className="heading-two">Follow Us On</h2>
            <div className="_10px-gap"></div>
            <div className="border-line">
              <div className="border-line-icons auto-line"></div>
            </div>
            <div className="_10px-gap"></div>
            <p className="pargraph-medium">Stay updated with our latest advancements, news, and offerings. Connect with us on our social media platforms.</p>
          </div>
          <div className="_30px-gap"></div>
          <div className="follow-wraper">
            <a href="https://facebook.com/tireweb" target="_blank" className="follow-box w-inline-block"><img src="/images/Group-1000003492.png" loading="lazy" alt="" className="follow-box-icon" /></a>
            <a href="https://twitter.com/tireweb" target="_blank" className="follow-box w-inline-block"><img src="/images/Group-1000003600.png" loading="lazy" alt="" className="follow-box-icon" /></a>
            <a href="https://linkedin.com/company/tireweb" target="_blank" className="follow-box w-inline-block"><img src="/images/Group-1000003494.png" loading="lazy" alt="" className="follow-box-icon" /></a>
          </div>
        </div>
      </section>
    </div>
      
    </Layout>
  );
}
