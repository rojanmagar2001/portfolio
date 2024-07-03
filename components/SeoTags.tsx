import Head from "next/head";

const tags = {
  title: "Rojan Rana Magar - Software Engineer | Full Stack Developer",
  description:
    "Software engineer | Full Stack Developer | Passionate Learner | Typescript | React | Rust | NestJs | Node. Working as a professional Full Stack Developer",
  url: "https://rojanranamagar.com.np",
};

const SeoTags = () => {
  return (
    <Head>
      <title>{tags.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/*General*/}
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={tags.description} />
      <meta name="author" content="Rojan Rana Magar" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="Rojan Rana Magar" key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={tags.url} key="ogurl" />
      <meta property="og:image" content="/og-img.JPG" key="ogimage" />
      <meta property="og:site_name" content={tags.title} key="ogsitename" />
      <meta property="og:title" content={tags.title} key="ogtitle" />
      <meta property="og:description" content={tags.description} key="ogdesc" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-M7VXHV58');`,
        }}
      ></script>
    </Head>
  );
};

export default SeoTags;
