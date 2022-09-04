import type { NextPage } from 'next'
import {useEffect} from "react";
import Head from 'next/head'
import { METADATA } from "../constants";

import Layout from '../components/common/layout/Layout'
//import Hero from "../components/home/Hero"
import HeroWithSvg from "../components/home/HeroWithSvg"
import Project from "../components/home/Project"
import Quote from "../components/home/Quote"
import Skill from "../components/home/Skill"
import styled from "styled-components";
import tw from "twin.macro";

const Home: NextPage = () => {

  let isDesktop;

  useEffect(() => {
    isDesktop = (typeof window.orientation === 'undefined') && (navigator.userAgent.indexOf('IEMobile') === -1);
    window.scrollTo({top: 0});
    setTimeout(() => window.scrollTo({ top: 0 }), 0);
  }, [isDesktop]);

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout>

        <Main>
          <Wrapper />
          <HeroWithSvg />
          {/*<Hero />*/}
          <Project isDesktop />
          <Quote />
          <Skill />
        </Main>

      </Layout>
    </>
  )
}

export default Home

const Main = styled.main`
  ${tw`flex-col flex gap-y-28`}
`

const Wrapper = styled.div`
  background: ${props => props.theme.colorBackground};
  ${tw`fixed top-0 left-0 h-screen w-screen -z-1`}
`
