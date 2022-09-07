import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  clientHeight: number
}

const About: React.FunctionComponent<Props> = (props:Props) => {

  const { clientHeight } = props

  const quoteRef = useRef<HTMLDivElement>(null);
  const targetSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .fromTo(quoteRef.current!.querySelector(".about-1"), { opacity: 0.2 }, { opacity: 1 })
      .to(quoteRef.current!.querySelector(".about-1"), {opacity: 0.2, delay: 0.5,})

      .fromTo(quoteRef.current!.querySelector(".about-2"), { opacity: 0.2 }, { opacity: 1 }, "<")
      .to(quoteRef.current!.querySelector(".about-2"), {opacity: 0.2, delay: 0.5,})

      .fromTo(quoteRef.current!.querySelector(".about-3"), { opacity: 0.2 }, { opacity: 1 }, "<")
      .to(quoteRef.current!.querySelector(".about-3"), {opacity: 0.2, delay: 1,});

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
    });
  }, [quoteRef, targetSection]);

  return (
    <Section ref={targetSection}>
      <Container className={`${ clientHeight > 650 ? "big-height" : "small-height"}`}>

        <h1 ref={quoteRef}>
          <span className="about-1 leading-tight">
            Après de longues années dans la surveillance du trafic maritime, j'ai débuté une reconversion  afin de faire de ma première passion, un métier.{" "}
          </span>

          <br/><br/>

          <span className="about-2 leading-tight">
            Passionné depuis toujours par les nouvelles technologies mais aussi par le design, je conçois et réalise des applications web intuitive et fonctionnelle mais toujours avec une dose de créativité.{" "}
          </span>

          <br/><br/>

          <span className="about-3 leading-tight">
            Autodidacte, j'aime aussi découvrir de nouveaux langages, frameworks, librairies, ... et travailler sur des projets variés dans des domaines différents.
          </span>
        </h1>

      </Container>
    </Section>
  );
};

export default About;

const Section = styled.section`
  ${tw`w-full relative select-none`}
`

const Container = styled.div`
  ${tw`2xl:container mx-auto xl:px-20 md:px-12 px-4`}
  
  &.big-height {
    ${tw`pt-20 pb-16`}
  }
  &.small-height {
    ${tw`pt-40 pb-24`}
  }

  h1 {
    ${tw`font-medium text-xl sm:text-3xl md:text-5xl`}
  }
  
  .leading-tight {
    ${tw`leading-tight`}
  }
`
