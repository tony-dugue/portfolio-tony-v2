import { gsap, Linear } from "gsap";
import React, {useEffect, useRef} from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styled from "styled-components";
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
    //.set(".about-bottom", {backgroundColor: '#0f3b56'})

    ScrollTrigger.refresh();

  }, [sectionRef]);

  return (
    <Section ref={sectionRef} className="section-container">
      <Container>

        <div className="dot"></div>

        <ImageBox className="about-image">
          <Image>
            <img src="/images/tony.jpeg" alt="portrait de tony dugué" />
          </Image>
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
    width: 142vmax;
    height: 142vmax;
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
