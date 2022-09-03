import type { NextPage } from 'next'
import {useEffect} from "react";
import Head from 'next/head'
import { METADATA } from "../constants";

import Layout from '../components/common/layout/Layout'
import Hero from "../components/home/Hero"

const Home: NextPage = () => {

  let isDesktop;

  useEffect(() => {
    isDesktop = (typeof window.orientation === 'undefined') && (navigator.userAgent.indexOf('IEMobile') === -1);
  }, [isDesktop]);

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>

        {/*<HeroWithSvg />*/}
        <Hero />

        <div style={{ height: '400vh' }}></div>

      </Layout>
    </>
  )
}

export default Home
