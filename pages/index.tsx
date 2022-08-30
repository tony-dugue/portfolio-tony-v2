import type { NextPage } from 'next'
import Head from 'next/head'
import { METADATA } from "../constants";
import Layout from '../components/Layout'
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>
        <Header />
      </Layout>
    </>
  )
}

export default Home
