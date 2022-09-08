import { useEffect, useRef } from "react";
import {SOCIAL_LINKS, EMAIL, TYPED_STRINGS, NAVLINKS} from "../../constants";
import Typed from 'typed.js';

import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styled from "styled-components";
import tw from "twin.macro";

import SquareButton from "../buttons/SquareButton"
import HeroIllustration from "./HeroIllustration"

const HeroSection = () => {

  gsap.registerPlugin(ScrollTrigger);

  const typedElRef = useRef<HTMLDivElement>(null);
  const targetSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElRef.current as Element, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true
    });

    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSectionRef.current, { opacity: 1, duration: 2, delay: 0.5 })
      .from(targetSectionRef.current!.querySelectorAll('.seq'), { opacity: 0, duration: 0.5, stagger: 0.5 }, '<');

    return () => typed.destroy();
  }, [typedElRef, targetSectionRef]);

  return (
    <Section id={NAVLINKS[0].ref} ref={targetSectionRef}>
      <Container>

        <div className="hero-desc">
          <p className="seq">Hello 👋🏻</p>
          <h1 className="seq">Je suis Tony Dugué</h1>
        </div>

        <p className="hero-typed">
          <span ref={typedElRef} className="seq"></span>
        </p>

        <SocialContainer className="seq">
          {SOCIAL_LINKS.map(link => (
            <SocialLink href={link.url} className="link" key={link.name} rel='noreferrer' target='_blank'>
              <img src={`/svgs/social/${link.name}.svg`} alt={link.name} width={40} height={40} />
            </SocialLink>
          ))}
        </SocialContainer>

        <Cta className="seq">
          <SquareButton type='outline' name='Resume' newTab={true} href='/tony-dugue-cv.pdf'></SquareButton>
          <SquareButton type='primary' newTab={false} name='Contact' href={'mailto:'+EMAIL}></SquareButton>
        </Cta>

      </Container>

      <ImageCtr className="hero-bg">
        <HeroIllustration />
      </ImageCtr>

    </Section>
  )
}

export default HeroSection;

const Section = styled.div`
  opacity: 0;
  ${tw`w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24`};

  @media screen and (max-width: 768px) {
    ${tw`flex-col justify-center`};
  }
`

const Container = styled.div`
  ${tw`font-medium flex flex-col gap-5 pt-20 select-none`};

  @media screen and (max-width: 768px) {
    ${tw`justify-center items-center gap-2`};
  }
  
  .hero-desc {
    ${tw`mb-5`};
  }
  
  .hero-typed {
    ${tw`mb-5`};
  }

  h1 {
    ${tw`text-3xl`};

    @media screen and (max-width: 992px) {
      ${tw`text-2xl`};
    }
  }
  
  p, span {
    ${tw`text-xl sm:text-2xl md:text-4xl`};

    @media screen and (max-width: 768px) {
      ${tw`text-center`};
    }
  }

  .typed-cursor {
    font-size: 2rem;
  }
`

const SocialContainer = styled.div`
  ${tw`flex mb-5`}
`

const SocialLink = styled.a`
  ${tw`hover:opacity-80 duration-300 md:px-2 px-1`}
`

const Cta = styled.div`
  ${tw`flex gap-5`}

  a {
    ${tw`mx-3`}
  }
`

const ImageCtr = styled.div`
  ${tw`absolute right-0 bottom-0 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 transform-gpu`};

  @media screen and (max-width: 768px) {
    display: none;
  }
}
`