import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mon portfolio</title>
        <meta name="description" content="Mon portfolio" />
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
