import type { NextPage } from 'next'
import { METADATA } from "../constants";
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
        <meta name="description" content={METADATA.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Title</h1>
        <p>Description</p>
      </main>

    </>
  )
}

export default Home
