import type { NextPage } from 'next'
import { METADATA } from "../constants";
import Head from 'next/head'

import styled from "styled-components";
import tw from "twin.macro";

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

const Wrapper = styled.div`${tw`flex flex-col h-screen bg-red-300`}`
const First = styled.div`${tw`bg-red-500 flex-1`}`

const Second = styled.div`
  color: yellow;
  ${tw`flex-1`}
`

