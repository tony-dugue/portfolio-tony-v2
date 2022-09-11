import { gsap, Linear } from "gsap";
import React, {useEffect, useRef, useState} from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import tw from "twin.macro";

const AboutSection = () => {

  const quoteRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [willChange, setwillChange] = useState(false);

  const initAboutAnimation = (quoteRef: any, targetSection: any): ScrollTrigger => {
  const timeline = gsap.timeline({
    defaults: { ease: Linear.easeNone, duration: 0.1 },
  });

  timeline
    .fromTo(quoteRef.current!.querySelector(".about-1"), { opacity: 0.2 }, { opacity: 1 })
    .to(quoteRef.current!.querySelector(".about-1"), {opacity: 0.2, delay: 0.5,})

    .fromTo(quoteRef.current!.querySelector(".about-2"), { opacity: 0.2 }, { opacity: 1 }, "<")
    .to(quoteRef.current!.querySelector(".about-2"), {opacity: 0.2, delay: 1 })

    const scrollTriggerInstance = ScrollTrigger.create({
    trigger: targetSection.current,
    start: "center 80%",
    end: "center top",
    scrub: 0,
    animation: timeline,
    onToggle: (self) => setwillChange(self.isActive),
  });
    return scrollTriggerInstance;
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, sectionRef);

    return aboutScrollTriggerInstance.kill;
  }, [quoteRef, sectionRef]);

  return (
    <Section ref={sectionRef} className="section-container">
      <Container>

        <h1 ref={quoteRef}>
          <span className={`about-1 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
            Après de longues années dans la surveillance du trafic maritime, j&lsquo;ai effectué une reconversion  afin de faire de ma première passion, un métier.{" "}
          </span>

          <br/><br/>

          <span className={`about-2 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
            Passionné depuis toujours par les nouvelles technologies mais aussi par le design, je conçois et réalise des applications web intuitive et fonctionnelle mais toujours avec une dose de créativité.{" "}
          </span>
        </h1>

      </Container>
    </Section>
  );
};

export default AboutSection;

const Section = styled.section`
  ${tw`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none`}
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
    ${tw`font-medium text-lg text-2xl sm:text-3xl md:text-5xl`}
  }
  
  .leading-tight {
    ${tw`leading-tight`}
  }
`
