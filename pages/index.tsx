import type { NextPage } from 'next'
import {useEffect} from "react";
import Head from 'next/head'
import { METADATA } from "../constants";

import Layout from '../components/common/layout/Layout'
//import Hero from "../components/home/Hero"
import HeroWithSvg from "../components/home/HeroWithSvg"
import Project from "../components/home/Project"
import styled from "styled-components";
import tw from "twin.macro";

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

        <Main>
          <HeroWithSvg />
          {/*<Hero />*/}
          <Project isDesktop />

          <div style={{ height: '400vh' }}></div>
        </Main>

      </Layout>
    </>
  )
}

export default Home

const Main = styled.main`
  ${tw`flex-col flex gap-y-28`}
`
