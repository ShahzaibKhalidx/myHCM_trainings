import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} - Training Services`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Leading the Way in Learning Services" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
      <script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
      <script src="https://formspree.io/js/formbutton-v1.0.min.js" defer></script>
      <script src="https://formspree.io/js/formbutton-v1.0.4.min.js" defer></script>
    </Head>
  </>
);

export default SEO;
