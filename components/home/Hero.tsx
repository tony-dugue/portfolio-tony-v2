import { useEffect, useRef } from "react";
import {SOCIAL_LINKS, EMAIL, TYPED_STRINGS, NAVLINKS} from "../../constants";
import Typed from 'typed.js';

import styled from "styled-components";
import tw from "twin.macro";

import SquareButton from "../buttons/SquareButton"

const Hero = () => {

  const typedElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElRef.current as Element, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true
    });

    return () => typed.destroy();
  }, [typedElRef]);

  return (
    <Section>
      <Container>

        <div>
          <p>Hello 👋🏻</p>
          <h1>Je suis Tony Dugué</h1>
        </div>

        <p>
          <span ref={typedElRef}></span>
        </p>

        <SocialContainer>
          {SOCIAL_LINKS.map(link => (
            <SocialLink href={link.url} className="link" key={link.name} rel='noreferrer' target='_blank'>
              <img src={`/svgs/social/${link.name}.svg`} alt={link.name} width={40} height={40} />
            </SocialLink>
          ))}
        </SocialContainer>

        <Cta>
          <SquareButton type='outline' name='Resume' newTab={true} href='/tony-dugue-cv.pdf'></SquareButton>
          <SquareButton type='primary' newTab={false} name='Contact' href={'mailto:'+EMAIL}></SquareButton>
        </Cta>

      </Container>

      <ImageCtr>
        <img src='/svgs/illustration-bg.svg' alt='Illustration' width={1021} height={650} />
      </ImageCtr>

    </Section>
  )
}

export default Hero;

const Section = styled.div`
  ${tw`w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative`}
`

const Container = styled.div`
  ${tw`font-medium flex flex-col gap-5 pt-40 md:pt-0 select-none`};

  @media screen and (max-width: 768px) {
  ${tw`justify-center items-center`};
}

  h1 {
    ${tw`text-3xl`};

    @media screen and (max-width: 992px) {
      ${tw`text-2xl`};
    }
  }
  
  p, span {
    ${tw`text-4xl`};

    @media screen and (max-width: 768px) {
      ${tw`text-2xl text-center`};
    }
  }

  .typed-cursor {
    font-size: 2rem;
  }
`

const SocialContainer = styled.div`
  ${tw`flex gap-4`}
`

const SocialLink = styled.a`
  ${tw`hover:opacity-80 duration-300`}
  
    path {
      fill: red;
    }
  
`

const Cta = styled.div`
  ${tw`flex gap-5`}
`

const ImageCtr = styled.div`
  ${tw`absolute right-0 bottom-0 -z-1 md:w-3/4 w-full`};

  @media screen and (max-width: 768px) {
    ${tw`hidden`};
  }
}
`
