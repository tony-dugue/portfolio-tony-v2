import type { NextPage } from 'next'
import { METADATA } from "../constants";
import Head from 'next/head'
import tw from "tailwind-styled-components"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
        <meta name="description" content={METADATA.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <First>First</First>
        <Second>Second</Second>
      </Wrapper>

    </>
  )
}

export default Home

const Wrapper = tw.div`flex flex-col h-screen bg-red-300`
const First = tw.div`bg-red-500 flex-1`
const Second = tw.div`flex-1`
