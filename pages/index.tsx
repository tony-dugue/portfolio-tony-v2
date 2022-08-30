import type { NextPage } from 'next'
import Head from 'next/head'
import { METADATA } from "../constants";
import Layout from '../components/Layout'

//import styled from "styled-components";
//import tw from "twin.macro";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>
        <h1>Test</h1>
      </Layout>
    </>
  )
}

export default Home

//const Wrapper = styled.div`${tw`flex justify-center items-center h-screen`}`
