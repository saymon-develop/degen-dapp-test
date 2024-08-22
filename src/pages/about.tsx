import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Layout} from "@/layout";

const About: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>About</title>
          <meta
            content="About page"
            name="description"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
           About
          </h1>

        </main>

        <footer className={styles.footer}>
          <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
            Made with ❤️ by your frens at 🌈
          </a>
        </footer>
      </div>
    </Layout>
  );
};

export default About;
