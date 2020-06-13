import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <link rel="stylesheet" href="assets/css/main.css" />
          <link rel="stylesheet" href="assets/css/custom.css" />
          <link rel="stylesheet" href="assets/css/style-timeline.css" />
          <noscript>
            <link rel="stylesheet" href="assets/css/noscript.css" />
          </noscript>
          <link rel="icon" type="image/png" href="assets/images/favicon.ico"/>
          {/* <!-- Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119404237-1"></script>
        </Head>
        <body className="is-preload landing">
          <div className="page-wrapper">
            <Main />
            <NextScript />

          </div>
            {/* <!-- Scripts --> */}
          <script src="https://www.amcharts.com/lib/4/core.js"></script>
          <script src="https://www.amcharts.com/lib/4/charts.js"></script>
          <script src="https://www.amcharts.com/lib/4/plugins/forceDirected.js"></script>
          <script src="https://www.amcharts.com/lib/4/themes/dark.js"></script>
            {/* <!-- Index --> */}
          <script src="assets/js/jquery.min.js"></script>
          <script src="assets/js/jquery.scrolly.min.js"></script>
          <script src="assets/js/jquery.dropotron.min.js"></script>
          <script src="assets/js/jquery.scrollex.min.js"></script>
          <script src="assets/js/browser.min.js"></script>
          <script src="assets/js/breakpoints.min.js"></script>
          <script src="assets/js/util.js"></script>
          <script src="assets/js/main.js"></script>
          <script src="assets/src/profile.js"></script>
            {/* <!-- Resume --> */}
          <script src="assets/js/amcharts.js"></script>
          <script src="assets/js/jquery-timeline.js"></script>
          <script src="assets/src/timeline.js"></script>
        </body>
      </Html>
    )
  }
}
