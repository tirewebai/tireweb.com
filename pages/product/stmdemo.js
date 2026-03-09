import Layout from '../../components/Layout';
import Script from 'next/script';


export default function Page() {

  return (
    <Layout
      title="STMdemo"
      description="Add a tire shopping portal to any website via a simple widget, ensuring your customers can browse, select, and purchase effortlessly."
      canonical="https://www.tireweb.com/product/stmdemo"
    >
      <div className="main-wraper">
      <div className="baner">
        <div className="container">
          <div data-w-id="dec21e37-d885-e6bd-bf32-30274dc72df8" style={{opacity: 0}} className="baner-wraper">
            <div className="baner-wraper-image"><img src="/../images/tireweb-tiresearch-home.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 1279px) 46vw, (max-width: 1919px) 43vw, 696px" srcset="../images/tireweb-tiresearch-home-p-500.png 500w, ../images/tireweb-tiresearch-home.png 702w" alt="" className="baner-wraper-icon" /></div>
            <div className="baner-wraper-content">
              <h1 className="heading-one _60px-fonts">Tireweb TireSearch</h1>
              <div className="_15px-gap"></div>
              <p className="pargraph-medium">Redefine Digital Sales with TireSearch by Tireweb. Seamless Online Tire Shopping for Every Website.</p>
              <div className="_30px-gap"></div>
              <a href="/schedule-a-demo" className="primary-button fixed-width-button auto-mobile w-inline-block">
                <div className="primary-button-text">Schedule a Demo</div><img src="/../images/Vector.svg" loading="lazy" alt="" className="primary-button-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="section-amplify transparent-section">
        <div className="container">
          <div className="seamless-wraper">
            <div className="section-heading canter-heading">
              <h2 className="heading-two">Experience the TireSearch Demo</h2>
              <div className="_10px-gap"></div>
              <div className="border-line">
                <div className="border-line-icons auto-line"></div>
              </div>
              <div className="w-embed w-script">
                
                <div id="tire-flow-responsive-container"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section">
        <div className="integrated blue-background">
          <div className="section-heading canter-heading">
            <h2 className="heading-two white-color-text">Transform Your Online Presence with TireSearch</h2>
            <div className="_10px-gap"></div>
            <div className="border-line">
              <div className="border-line-icons auto-line white-border"></div>
            </div>
            <div className="_15px-gap"></div>
            <div className="div-block-3">
              <p className="pargraph-medium white-color-text">Empower your website with TireSearch, the ultimate tool for a seamless online tire shopping experience. Elevate your brand, offer streamlined purchasing, and delight your customers. Don&#x27;t miss out on the digital revolution—reach out now and discover the future of tire retailing.</p>
            </div>
          </div>
          <div className="_30px-gap"></div>
          <div className="button-group">
            <a href="/schedule-a-demo" className="primary-button extra-width-button white-boreder samll-width-button w-inline-block">
              <div className="primary-button-text">Schedule a Demo</div><img src="/../images/Vector.svg" loading="lazy" alt="" className="primary-button-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
            <Script src="<https://tireflow.ezytire.com/237/2/Script/Client.js>" strategy="afterInteractive" />
    </Layout>
  );
}
