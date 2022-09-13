import React, {useEffect, useState} from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import { METADATA } from "../constants";

import styled from "styled-components";
import tw from "twin.macro";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

import Layout from "../components/common/layout/Layout"
import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import ProjectSection from "../components/sections/ProjectSection"
import QuoteSection from "../components/sections/QuoteSection"
import Skill from "../components/sections/SkillSection"
import TimelineSection from "../components/sections/TimelineSection"
import CollaborationSection from "../components/sections/CollaborationSection"
import Footer from "../components/common/footer/Footer"
import Scripts from "../components/common/scripts"
import AboutPortraitSection from "../components/sections/AboutPortraitSection";

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
          <AboutPortraitSection />
          <AboutSection />
          <Skill />
          <ProjectSection isDesktop={isDesktop} />
          <QuoteSection />
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
