import Terminal from "../components/Terminal";

import styles from "../styles/Home.module.css";

import Head from 'next/head';
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Achintya</title>
        <link rel="My Icon" href="/favicon.png" />
      </Head>

      <Script 
        src="https://cloud.umami.is/script.js" 
        data-website-id="d490ee0c-d4bf-4a98-866d-a7d0dae1d0cc" 
        strategy="afterInteractive"
      />

      <h1>
        Achintya:$ <span className={styles.help}>type help to start</span>
      </h1>
      <p>
        Visit{" "}
        <a href="https://achintya-x7.vercel.app/" target="_blank" rel="noreferrer">
          Normal website
        </a>
      </p>

      <Terminal />
    </div>
  );
}
