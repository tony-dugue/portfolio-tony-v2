import {useEffect, useState} from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import { METADATA } from "../constants";

import styled from "styled-components";
import tw from "twin.macro";

import Layout from '../components/common/layout/Layout'
//import Hero from "../components/home/Hero"
import HeroWithSvg from "../components/home/HeroWithSvg"
import Project from "../components/home/Project"
import Quote from "../components/home/Quote"
import Skill from "../components/home/Skill"
import Collaboration from "../components/home/Collaboration";
import Footer from '../components/common/footer/Footer'

const Home: NextPage = () => {

  const [isDesktop, setisDesktop] = useState(true);

  useEffect(() => {
    const result = (typeof window.orientation === 'undefined') && (navigator.userAgent.indexOf('IEMobile') === -1);
    window.history.scrollRestoration = 'manual';
    setisDesktop(result);
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
          <Collaboration />
          <Footer />
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
