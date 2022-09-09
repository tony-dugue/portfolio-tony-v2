import React, {useEffect, useState} from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import { METADATA } from "../constants";

import styled from "styled-components";
import tw from "twin.macro";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

import Layout from "../components/common/layout/Layout"
//import Hero from "../components/home/Hero"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import ProjectSection from "../components/home/ProjectSection"
import QuoteSection from "../components/home/QuoteSection"
import Skill from "../components/home/SkillSection"
import TimelineSection from "../components/home/TimelineSection"
import CollaborationSection from "../components/home/CollaborationSection"
import Footer from "../components/common/footer/Footer"
import Scripts from "../components/common/scripts"

const DEBOUNCE_TIME = 100;

export const NO_MOTION_PREFERENCE_QUERY = "(prefers-reduced-motion: no-preference)";

const Home: NextPage = () => {

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setIsDesktop] = useState(true);

  const isSmallScreen = (): boolean => document.body.clientWidth < 767;

  let timer: NodeJS.Timeout | null = null;

  const debouncedDimensionCalculator = () => {
    clearTimeout(Number(timer));
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setIsDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    debouncedDimensionCalculator();
    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  const renderBackdrop = (): React.ReactNode => (
    <Wrapper className="fixed top-0 left-0 h-screen w-screen bg-gray-900 -z-1" />
  );

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>

      <Layout isDesktop={isDesktop}>

        <Main>
          {renderBackdrop()}
          <HeroSection />
          {/*<Hero />*/}
          <AboutSection />
          <ProjectSection isDesktop={isDesktop} />
          <QuoteSection />
          <Skill />
          <TimelineSection isDesktop={isDesktop} isSmallScreen={isSmallScreen} />
          <CollaborationSection isSmallScreen={isSmallScreen} />
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
