import { useEffect, useRef } from 'react'
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styled from "styled-components";
import tw from "twin.macro";

const Collaboration = () => {

  const quoteRef = useRef<HTMLDivElement>(null);
  const targetSection = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current!.querySelector('.text-strong'), { backgroundPositionX: '100%', duration: 1 });

    const slidingTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    slidingTimeline.to(targetSection.current!.querySelector('.ui-left'), { xPercent: -150 })
      .from(targetSection.current!.querySelector('.ui-right'), { xPercent: -150 }, '<')

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
    <Section ref={targetSection}>

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

export default Collaboration;

const Section = styled.section`
  ${tw`w-full relative select-none`}
`

const Container = styled.div`

  ${tw`2xl:container py-48 mx-auto xl:px-20 md:px-12 px-4 flex flex-col gap-y-8`}
  
  .ui-left {
    ${tw`opacity-20 text-7xl font-bold whitespace-nowrap `}
  }
  
  h1 {
    ${tw`font-medium text-5xl text-center font-bold`}

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
    ${tw`opacity-20 text-7xl font-bold whitespace-nowrap `}
  }
`