/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/google-font-display */

import Document, { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";
import { store } from "../store";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <script
          // src={`https://maps.googleapis.com/maps/api/js?libraries=places&key=${process.env.NEXT_PUBLIC_BASE_LOCATION}`}
          ></script> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins"
            rel="stylesheet"
          />
          {/* <style>

            @import url('https://fonts.googleapis.com/css2?family=Poppins);
          
          </style> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
