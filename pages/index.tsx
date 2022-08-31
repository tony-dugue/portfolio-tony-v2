import type { NextPage } from 'next'
import Head from 'next/head'
import { METADATA } from "../constants";
import Layout from '../components/Layout'
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>
        <Header>
          <NavBar />
        </Header>
      </Layout>
    </>
  )
}

export default Home
