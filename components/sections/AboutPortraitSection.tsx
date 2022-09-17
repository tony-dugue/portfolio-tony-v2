import { gsap } from "gsap";
import React, {useEffect, useRef} from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styled, {keyframes} from "styled-components";
import tw from "twin.macro";

const AboutPortraitSection = () => {

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        end: () => `+=${sectionRef.current!.offsetHeight }`
      }
    })
      .to(".dot", {scale: 1})
      .to(".about-image", {scale: 0, opacity: 0, y: -100 })

    ScrollTrigger.refresh();

  }, [sectionRef]);

  return (
    <Section ref={sectionRef} className="section-container">
      <Container>

        <div className="dot"></div>

        <ImageBox className="about-image">

          <CircleAnimation>
              <ImageItem>
                <img src="/images/tony.jpeg" alt="portrait de tony dugué" />
              </ImageItem>
              <div className="pulse"></div>
          </CircleAnimation>

        </ImageBox>

      </Container>
    </Section>
  );
};

export default AboutPortraitSection;

const Section = styled.section`
  ${tw`relative w-full relative select-none`}
  height: 80vh;
`

const Container = styled.div`
  ${tw``}

  .dot {
    position: absolute;
    width: 160vmax;
    height: 160vmax;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    opacity: 1;
    background-color: ${props => props.theme.colorSecondary};
  }
`

export const ImageBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const ImageItem = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
  img {
    box-shadow: ${props => props.theme.boxShadowImg};
  }
`

const pulsate = keyframes`
  0% {transform: scale(0.8, 0.8); opacity: 0.0;}
  50% {opacity: 1.0;}
  100% {transform: scale(1, 1); opacity: 0.0;}
`

export const CircleAnimation = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }


  .pulse{
    position: absolute;
    top: 0;
    left: 0;
    width: calc(120%);
    height: calc(120%);
    border-radius: 50%;
    border: none;
    box-sizing: border-box;

    ::before {
      content:"";
      border: 15px solid ${props => `rgba(${props.theme.colorTernaryRgb}, 0.3)`};
      border-radius: 50%;
      height: 400px;
      width: 400px;
      position: absolute;
      top: -50px;
      left: -50px;
      animation: ${pulsate} 3s ease-out;
      animation-iteration-count: infinite;
      opacity: 0.0;
      z-index: 1;

      @media screen and (max-width: 768px) {
        height: 300px;
        width: 300px;
      }
    }
  }
`
