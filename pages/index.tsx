import type { NextPage } from 'next'
import Head from 'next/head'
import { METADATA } from "../constants";

import Layout from '../components/layout/Layout'
import Header from "../components/header/Header";
import NavigationMenu from "../components/header/NavigationMenu";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>
        <Header>
          <NavigationMenu />
        </Header>
      </Layout>
    </>
  )
}

export default Home
