import styled from "styled-components";
import React, {useEffect, useRef} from "react";
import tw from "twin.macro";
import { NAVLINKS, PROJECTS } from '../../constants';
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ProjectCard from './ProjectCard'

interface Props {
  isDesktop: boolean,
  clientHeight: number
}

const Project: React.FunctionComponent<Props> = (props:Props) => {

  const { isDesktop, clientHeight } = props


  const targetSection = useRef<HTMLDivElement>(null);
  const sectionTitle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (isDesktop && targetSection.current && document.body.clientWidth > 767) {

      const timeline = gsap.timeline({ defaults: { ease: Power0.easeNone } });
      const sidePadding = document.body.clientWidth - targetSection.current.querySelector('.inner-container')!.clientWidth;
      const elementWidth = sidePadding + targetSection.current.querySelector('.project-wrapper')!.clientWidth;
      targetSection.current.style.width = `${elementWidth}px`;
      const width = window.innerWidth - elementWidth;
      const duration = `${(elementWidth / window.innerHeight * 100)}%`;
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

    } else {
      targetSection.current!.querySelector('.project-wrapper')!.classList.add('overflow-y-scroll')
    }

  }, [targetSection, PROJECTS, sectionTitle])

  return (
    <Section ref={targetSection} id={NAVLINKS[1].ref}>

      <SectionWrapper className={(clientHeight > 650 ? 'big' : 'small')}>
        <Container ref={sectionTitle} className="inner-container">
          <p>PROJETS</p>
          <h1 className="text-gradient">Mes réalisations</h1>
          <h2>Passionné depuis toujours par les nouvelles technologies mais aussi par le design, je conçois et réalise des applications web intuitive et fonctionnelle mais toujours avec une dose de créativité.</h2>
        </Container>

        <ProjectItems className="project-wrapper">
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
  ${tw`w-full min-h-screen relative select-none 2xl:container mx-auto`}
`

const SectionWrapper = styled.div`
  ${tw`flex-col flex py-8 xl:px-20 md:px-12 px-4 justify-center h-full`}
  
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
    ${tw`text-2xl md:max-w-3xl w-full`};

    @media screen and (max-width: 768px) {
      width: 80%;
  }
  }
`

const ProjectItems = styled.div`
  width: fit-content;
  ${tw`flex gap-x-16`}

  &::-webkit-scrollbar {
    display: none;
  }
`
