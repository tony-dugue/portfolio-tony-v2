import React, { useEffect, useRef } from 'react'
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styled from "styled-components";
import tw from "twin.macro";

const CollaborationSection = () => {

  const quoteRef = useRef<HTMLDivElement>(null);
  const targetSection = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const smallScreen = document.body.clientWidth < 767;

    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current!.querySelector('.text-strong'), { backgroundPositionX: '100%', duration: 1 });

    const slidingTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    slidingTimeline.to(targetSection.current!.querySelector('.ui-left'), { xPercent: smallScreen ? -500 : -150 })
      .from(targetSection.current!.querySelector('.ui-right'), { xPercent: smallScreen ? -500 : -150 }, '<')

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: 'center bottom',
      end: 'center center',
      scrub: 0,
      animation: timeline,
    });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0,
      animation: slidingTimeline,
    });
  }, [quoteRef, targetSection])

  return (
    <Section ref={targetSection} className="section-container">

      <Container>
        <p className='ui-left'>
          {Array(5).fill(" React Next JavaScript Nest Sass ").reduce((str, el) => str.concat(el), '')}
        </p>

        <h1 ref={quoteRef}>Intéressé par une<span className='text-strong'>&nbsp;collaboration</span> ?</h1>

        <p className='ui-right'>
          {Array(5).fill(' Développement frontend backend fullStack Design UI ').reduce((str, el) => str.concat(el), '')}
        </p>
      </Container>

    </Section>
  )
}

export default CollaborationSection;

const Section = styled.section`
  ${tw`w-full relative select-none`}
`

const Container = styled.div`
  ${tw`tall:py-36 py-48 flex flex-col`}
  
  .ui-left {
    ${tw`opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap transform-gpu`}
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
