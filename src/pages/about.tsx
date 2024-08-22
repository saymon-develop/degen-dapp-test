import type { NextPage } from "next"
import Head from "next/head"

import { BaseLayout } from "@/shared/layout/Base.layout"

const About: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>About</title>
        <meta content="About page" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <h1>About</h1>
    </BaseLayout>
  )
}

export default About
