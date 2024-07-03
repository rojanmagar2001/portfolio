import { Html, Head, Main, NextScript } from "next/document";
// import { GoogleTagManager } from "@next/third-parties/google";

// https://nextjs.org/docs/advanced-features/custom-document
export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      {/* <GoogleTagManager gtmId="GTM-M7VXHV58" /> */}
      <body className="md:overflow-hidden">
        <Main />
        <NextScript />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7VXHV58"
            height="0"
            width="0"
            // style="display:none;visibility:hidden"
            className="hidden"
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
