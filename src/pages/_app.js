import Head from "next/head";

import "../styles/globals.scss";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Welcome to the Jungle</title>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
