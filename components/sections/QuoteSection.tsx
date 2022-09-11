import React, {useEffect, useRef, useState} from 'react'
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styled from "styled-components";
import tw from "twin.macro";

const QuoteSection = () => {

  const quoteRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [willChange, setwillChange] = useState(false);

  const initQuoteAnimation = (
    quoteRef: any,
    sectionRef: any
  ): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive)
    });
  };

  useEffect(() => {
    const quoteAnimationRef = initQuoteAnimation(quoteRef, sectionRef);
    return quoteAnimationRef.kill;
  }, [quoteRef, sectionRef])

  return (
    <Section ref={sectionRef}>
      <Container className="section-container">
        <h1 ref={quoteRef}  className={`${willChange ? "will-change-opacity" : ""}`}>
          Autodidacte, j&lsquo;aime aussi découvrir de nouveaux langages, frameworks, librairies, ... et travailler sur des<span className='text-strong'>&nbsp;projets variés</span> dans des domaines différents.</h1>
      </Container>
    </Section>
  )
}

export default QuoteSection;

const Section = styled.section`
  ${tw`w-full relative select-none`}
`

const Container = styled.div`
  ${tw`tall:py-60 py-72`}
  
  h1 {
    ${tw`font-medium text-4xl md:text-5xl text-center`}

    .text-strong {
      ${tw`font-bold`}
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
`
