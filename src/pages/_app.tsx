import "@/styles/globals.css";

import { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React NextJS - Boilderplate</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project started to work with TypeScript, React and NextJS"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
