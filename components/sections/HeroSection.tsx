import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { NAVLINKS, SOCIAL_LINKS, TITLE_HERO } from "../../constants";

import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 1, staggerChildren: 0.2 } },
};

const letterVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const themeMode = window.localStorage.getItem("theme");

  const sectionRef = useRef<HTMLDivElement>(null);
  const goBackRef = useRef<HTMLDivElement>(null);

  const titleLetters = TITLE_HERO.split("");

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    revealTl
      .to(sectionRef.current, { opacity: 1, duration: 2, delay: 2 })
      .from(
        sectionRef.current!.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          scrub: true,
          pin: false,
        },
      })
      .to(goBackRef.current, { opacity: 0 });
  }, [sectionRef]);

  return (
    <div>
      <Section ref={sectionRef} id={NAVLINKS[0].ref}>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <Title>
              {titleLetters.map((letter, idx) => (
                <motion.h1 variants={letterVariants} key={idx}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.h1>
              ))}
            </Title>

            <Description className="seq">
              <mark>Développeur Web et Mobile - FullStack JS</mark>
              <p className="place seq">Rennes, France 🇫🇷</p>
              <p className="language seq">
                Spécialisé en React, NextJS et NestJS.
              </p>
            </Description>
          </motion.div>

          <SocialContainer className="seq">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink
                href={link.url}
                className="link"
                key={link.name}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={`/svgs/social/${link.name}.svg`}
                  alt={link.name}
                  width={40}
                  height={40}
                />
              </SocialLink>
            ))}
          </SocialContainer>

          <GoBack className="round" ref={goBackRef}>
            <GoBackCircle>&#x2193;</GoBackCircle>
            <a href="#competences" className="link">
              <img
                src={
                  themeMode && themeMode === "dark"
                    ? "/images/rounded-text-white.png"
                    : "/images/rounded-text-black.png"
                }
                alt="animation pour aller à la prochaine section"
              />
            </a>
          </GoBack>
        </Container>
      </Section>
    </div>
  );
};

export default HeroSection;

const Section = styled.section`
  ${tw`relative w-full`};
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  margin-top: ${(props) => props.theme.navHeight};
`;

const Container = styled.div`
  ${tw`relative flex flex-col justify-center items-center mx-auto w-full text-center 2xl:container`};
  min-height: 90vh;

  @media screen and (max-width: 768px) {
    padding: 0 2rem 5rem 2rem;
  }
`;

const Title = styled(motion.div)`
  ${tw`flex justify-center items-center mt-0 uppercase`};
  font-size: 5em;
  font-family: ${(props) => props.theme.fontDin};
  color: ${(props) => props.theme.colorHeroTitle};
  line-height: 0.7;

  @media screen and (max-width: 992px) {
    font-size: 4em;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const Description = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;

  color: ${(props) => props.theme.colorTextSecondary};
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  mark {
    position: relative;
    display: inline-block;
    padding: 4px 5px;
    border-radius: 6px;
    margin-right: 5px;

    background-color: ${(props) => props.theme.colorMark};

    @media screen and (max-width: 768px) {
      margin: 0 30px;
    }
  }

  .place {
    ${tw`mt-2`}
  }

  .language {
    margin-top: 10px;
    color: ${(props) => props.theme.colorText};
  }
`;

const SocialContainer = styled.div`
  ${tw`flex mb-5 justify-center`}
`;

const SocialLink = styled.a`
  ${tw`hover:opacity-80 duration-300 md:px-3 px-3`};

  @media screen and (max-width: 768px) {
    width: 4rem;
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const GoBack = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  opacity: 1;

  @media screen and (max-width: 768px) {
    width: 4.3rem;
    height: 4.3rem;
    bottom: 3rem;
    left: 2rem;
  }

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 25s linear infinite;
  }
`;

const GoBackCircle = styled.span`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.colorHeroTitle};
  color: ${(props) => props.theme.colorBackground};
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
