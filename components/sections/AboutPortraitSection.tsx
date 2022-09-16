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
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3">
              <Image>
                <img src="/images/tony.jpeg" alt="portrait de tony dugué" />
              </Image>
            </div>
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

export const Image = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
  img {
    box-shadow: ${props => props.theme.boxShadowImg};
  }
`

const animationCircle1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const animationCircle2 = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const CircleAnimation = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 380px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
  
  .circle1{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px dotted ${props => props.theme.colorSecondary};
    border-spacing: 20px;
    box-sizing: border-box;
    font-weight: 500;
    animation: ${animationCircle1} 60s linear infinite;
  }
  .circle2{
    position: absolute;
    top: 25px;
    left: 25px;
    width: calc(100% - 50px);
    height: calc(100% - 50px);
    border-radius: 50%;
    border: 4px dotted ${props => props.theme.colorSecondary};
    box-sizing: border-box;
    animation: ${animationCircle2} 80s linear infinite;
  }
  .circle3{
    position: absolute;
    top: 40px;
    left: 40px;
    width: calc(90% - 50px);
    height: calc(90% - 50px);
    border-radius: 50%;
    border: none;
    box-sizing: border-box;
  }
`
