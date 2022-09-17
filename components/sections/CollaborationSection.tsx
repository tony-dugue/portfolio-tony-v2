import React, {useEffect, useRef, useState} from 'react'
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { NO_MOTION_PREFERENCE_QUERY } from "../../pages/index";

import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  isSmallScreen: () => {}
}

const CollaborationSection: React.FunctionComponent<Props> = (props:Props) => {

  const { isSmallScreen } = props

  const quoteRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [willChange, setWillChange] = useState(false);

  const initTextGradientAnimation = (targetSection: any): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current!.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive)
    });
  };

  const initSlidingTextAnimation = (targetSection: any) => {

    const slidingTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    slidingTl
      .to(targetSection.current.querySelector(".ui-left"), {
        xPercent: isSmallScreen() ? -500 : -150,
      })
      .from(
        targetSection.current.querySelector(".ui-right"),
        { xPercent: isSmallScreen() ? -500 : -150 },
        "<"
      );

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
      animation: slidingTl,
    });
  };

  useEffect(() => {
    const textBgAnimation = initTextGradientAnimation(sectionRef);

    let slidingAnimation: ScrollTrigger | undefined;

    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

    if (matches) {
      slidingAnimation = initSlidingTextAnimation(sectionRef);
    }

    return () => {
      textBgAnimation.kill();
      slidingAnimation?.kill();
    };
  }, [quoteRef, sectionRef]);

  return (
    <Section ref={sectionRef} className="section-container">

      <Container>
        <p className='ui-left'>
          {Array(5).fill(" React Next JavaScript Nest Sass ").reduce((str, el) => str.concat(el), '')}
        </p>

        <h1 ref={quoteRef} className={`${willChange ? "will-change-opacity" : ""}`}>Envie de faire<span className='text-strong'>&nbsp;connaissance</span> ? ☕</h1>

        <p className='ui-right'>
          {Array(5).fill(' Développement frontend backend fullStack Design UI ').reduce((str, el) => str.concat(el), '')}
        </p>
      </Container>

    </Section>
  )
}

export default CollaborationSection;

const Section = styled.section`
  ${tw`w-full relative select-none tall:py-16 py-24 flex flex-col`}
`

const Container = styled.div`
  ${tw`tall:py-36 py-48 flex flex-col`}
  
  .ui-left {
    ${tw`opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap`}
  }
  
  h1 {
    ${tw`mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center font-bold`}

    .text-strong {
      background: linear-gradient(
              90deg,
              ${props => props.theme.colorBlack} 0%,
              ${props => props.theme.colorBlack} 50%,
              ${props => props.theme.colorPrimary} 51%,
              ${props => props.theme.colorPrimary} 100%
      );
      background-size: 200% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  
  .ui-right {
    ${tw`mt-6 md:mt-8 opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap transform-gpu`}
  }
`
