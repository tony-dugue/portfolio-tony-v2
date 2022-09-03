import styled from "styled-components";
import React, {useEffect, useRef, useState} from "react";
import tw from "twin.macro";
import { NAVLINKS, PROJECTS } from '../../constants';
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ProjectCard from './ProjectCard'

interface Props {
  isDesktop: boolean
}

const Project: React.FunctionComponent<Props> = (props:Props) => {

  const { isDesktop } = props


  const targetSection = useRef<HTMLDivElement>(null);
  const sectionTitle = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  const screens = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    setHeight(window.innerHeight);

    if (isDesktop && targetSection.current) {

      const timeline = gsap.timeline({ defaults: { ease: Power0.easeNone } });
      const cardWidth = 38;
      const gapX = 4;
      const sidePadding = window.innerWidth > screens.md ? 10 : 6;
      const elementWidth = PROJECTS.length * cardWidth + sidePadding + PROJECTS.length * gapX;
      targetSection.current.style.width = `${elementWidth}rem`;
      const width = window.innerWidth - targetSection.current.offsetWidth;
      const duration = `${(targetSection.current.offsetWidth / window.innerHeight * 100)}%`;
      timeline
        .to(targetSection.current, { x: width })
        .to(sectionTitle.current, { x: -width }, '<');

      ScrollTrigger.create({
        trigger: targetSection.current,
        start: 'top top',
        end: duration,
        scrub: 0,
        pin: true,
        animation: timeline,
        pinSpacing: 'margin'
      });

    }
  }, [targetSection, PROJECTS, sectionTitle, height])

  return (
    <Section ref={targetSection} id={NAVLINKS[1].ref}>

      <SectionWrapper className={(height > 650 ? 'big' : 'small')}>
        <Container ref={sectionTitle}>
          <p>PROJETS</p>
          <h1 className="text-gradient">Mes réalisations</h1>
          <h2>Passionné depuis toujours par les nouvelles technologies mais aussi par le design, je conçois et réalise des applications web intuitive et fonctionnelle mais toujours avec une dose de créativité.</h2>
        </Container>

        <ProjectItems>
          {PROJECTS.map(project => (
            <ProjectCard
              key={project.name}
              {...project}
            />
          ))}
        </ProjectItems>
      </SectionWrapper>

    </Section>
  )
}

export default Project;

const Section = styled.section`
  ${tw`w-full min-h-screen relative select-none`}
`

const SectionWrapper = styled.div`
  ${tw`flex-col flex 2xl:container py-8 mx-auto xl:px-20 md:px-12 px-4`}
  
  &.big {
    ${tw`gap-y-20`}
  }
  &.small {
    ${tw`gap-y-10`}
  }
`

const Container = styled.div`
  ${tw`flex flex-col gap-2`}
  
  p {
    color: ${props => props.theme.colorPrimary};
    ${tw`uppercase tracking-widest text-sm`}
  }
  
  h1 {
    ${tw`text-5xl font-bold mb-2`}
  }

  h2 {
    width: 1000px;
    ${tw`text-2xl`};

    @media screen and (max-width: 768px) {
      width: 80%;
  }
  }
`

const ProjectItems = styled.div`
  ${tw`flex gap-x-16`}
`
