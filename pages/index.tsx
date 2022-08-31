import type { NextPage } from 'next'
import {useEffect} from "react";
import Head from 'next/head'
import { METADATA } from "../constants";

import Layout from '../components/layout/Layout'
import Header from "../components/header/Header";
import NavigationMenu from "../components/header/NavigationMenu";
import ProgressIndicator from "../components/elements/utils/ProgressIndicator"
import Cursor from "../components/elements/utils/Cursor"

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

        <Cursor isDesktop></Cursor>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>

      </Layout>
    </>
  )
}

export default Home
