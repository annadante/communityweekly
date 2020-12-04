import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Community Finder - Discover online communities</title>
          <meta property="og:title" content="Community Weekly - Discover online communities" key="title" />
          <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta name="description" content="Discover, review and join online communities. Learn how to manage, monetize and grow a community with Community Finder."></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:title" content="Community Finder - Discover online communities"></meta>
          <meta property="og:description" content="Discover, review and join online communities. Learn how to manage, monetize and grow a community with Community Finder."></meta>
          <meta property="og:url" content="https://community-finder.co/"></meta>
          <meta property="og:site_name" content="Community Finder"></meta>
          <meta property="og:locale" content="en"></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
