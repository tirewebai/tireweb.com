import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Webflow CSS */}
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="/css/tireweb-dev.webflow.css" rel="stylesheet" type="text/css" />
        {/* Slick Carousel CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7YC4LPRHS1"
        />
      </Head>
      <body className="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
