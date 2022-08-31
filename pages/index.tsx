import type { NextPage } from 'next'
import Head from 'next/head'
import { METADATA } from "../constants";

import Layout from '../components/layout/Layout'
import Header from "../components/header/Header";
import NavigationMenu from "../components/header/NavigationMenu";
import ProgressIndicator from "../components/elements/utils/ProgressIndicator"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>

        <ProgressIndicator></ProgressIndicator>

        <Header>
          <NavigationMenu />
        </Header>

        <div style={{ height: '2000px' }}></div>
      </Layout>
    </>
  )
}

export default Home
