import type { NextPage } from 'next'
import {useEffect} from "react";
import Head from 'next/head'
import { METADATA } from "../constants";

import Layout from '../components/common/layout/Layout'
import Header from "../components/common/header/Header";
import NavigationMenu from "../components/common/header/NavigationMenu";
import ProgressIndicator from "../components/common/elements/ProgressIndicator"
import Cursor from "../components/common/elements/Cursor"
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

        <ProgressIndicator></ProgressIndicator>

        <Header>
          <NavigationMenu />
        </Header>

        <Cursor isDesktop />
        <Hero></Hero>
      </Layout>
    </>
  )
}

export default Home
