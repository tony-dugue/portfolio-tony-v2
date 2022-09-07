import {useEffect, useState} from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import { METADATA } from "../constants";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

import styled from "styled-components";
import tw from "twin.macro";

import Layout from "../components/common/layout/Layout"
//import Hero from "../components/home/Hero"
import HeroWithSvg from "../components/home/HeroWithSvg"
import Project from "../components/home/Project"
import Quote from "../components/home/Quote"
import Skill from "../components/home/Skill"
import Timeline from "../components/home/Timeline"
import Collaboration from "../components/home/Collaboration"
import Footer from "../components/common/footer/Footer"
import Scripts from "../components/common/scripts"

const Home: NextPage = () => {

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    let timer: any = null;
    const callback = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const result = typeof window.orientation === "undefined" && navigator.userAgent.indexOf("IEMobile") === -1;
        window.history.scrollRestoration = "manual";
        setIsDesktop(result);
        setClientHeight(window.innerHeight);
      }, 100);
    };
    callback();

    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout isDesktop={isDesktop}>

        <Main>
          <Wrapper />
          <HeroWithSvg />
          {/*<Hero />*/}
          <Project clientHeight={clientHeight} />
          <Quote clientHeight={clientHeight} />
          <Skill />
          <Timeline isDesktop={isDesktop} />
          <Collaboration clientHeight={clientHeight} />
          <Footer />
        </Main>

        <Scripts />

      </Layout>
    </>
  )
}

export default Home

const Main = styled.main`
  ${tw`flex-col flex`}
`

const Wrapper = styled.div`
  background: ${props => props.theme.colorBackground};
  ${tw`fixed top-0 left-0 h-screen w-screen -z-1`}
`
