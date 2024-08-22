import type { NextPage } from "next"
import Head from "next/head"

import { Layout } from "@/layout"

const About: NextPage = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>About</title>
          <meta content="About page" name="description" />
          <link href="/favicon.ico" rel="icon" />
        </Head>

        <main>
          <h1>About</h1>
        </main>
      </div>
    </Layout>
  )
}

export default About
