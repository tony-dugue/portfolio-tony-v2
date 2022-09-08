import styled from "styled-components";
import React, {useEffect, useRef} from "react";
import tw from "twin.macro";
import { NAVLINKS, PROJECTS } from '../../constants';
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ProjectCard from './ProjectCard'

const ProjectSection = ({ isDesktop }: { isDesktop: boolean }) => {

  const targetSection = useRef<HTMLDivElement>(null);
  const sectionTitle = useRef<HTMLDivElement>(null);

  useEffect(() => {

    let projectsScrollTrigger: any;
    let projectsTimeline: any;

    if (isDesktop) {
      [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
    } else {
      const projectWrapper = targetSection.current!.querySelector(
        ".project-wrapper"
      ) as HTMLDivElement;
      projectWrapper.style.width = "calc(100vw - 1rem)";
      projectWrapper.style.overflowX = "scroll";
    }

    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [targetSection, sectionTitle, isDesktop]);

  const getRevealSt = (): [GSAPTimeline, ScrollTrigger] => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current!.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const getProjectsSt = (): [GSAPTimeline, ScrollTrigger] => {
      const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
      const sidePadding = document.body.clientWidth - targetSection.current!.querySelector('.inner-container')!.clientWidth;
      const elementWidth = sidePadding + targetSection.current!.querySelector('.project-wrapper')!.clientWidth;
      targetSection.current!.style.width = `${elementWidth}px`;
      const width = window.innerWidth - elementWidth;
      const duration = `${(elementWidth / window.innerHeight * 100)}%`;

      timeline
        .to(targetSection.current, { x: width })
        .to(sectionTitle.current, { x: -width }, '<');

    const scrollTrigger = ScrollTrigger.create({
        trigger: targetSection.current,
        start: 'top top',
        end: duration,
        scrub: 0,
        pin: true,
        animation: timeline,
        pinSpacing: 'margin'
      });

    return [timeline, scrollTrigger];
  };

  return (
    <Section ref={targetSection} id={NAVLINKS[1].ref} className={isDesktop ? 'is-desktop' : ''}>

      <SectionWrapper>
        <Container ref={sectionTitle} className="inner-container">
          <p>PROJETS</p>
          <h1 className="text-gradient w-fit">Mes réalisations</h1>
          <h2>Passionné depuis toujours par les nouvelles technologies mais aussi par le design, je conçois et réalise des applications web intuitive et fonctionnelle mais toujours avec une dose de créativité.</h2>
        </Container>

        <ProjectItems className="project-wrapper seq">
          {PROJECTS.map( (project, idx) => (
            <ProjectCard
              isDesktop={isDesktop}
              classes={idx !== PROJECTS.length - 1 ? "with-margin-right" : ''}
              key={project.name}
              {...project}
            />
          ))}
        </ProjectItems>
      </SectionWrapper>

    </Section>
  )
}

export default ProjectSection;

const Section = styled.section`
  ${tw`w-full relative select-none transform-gpu`}
  
  &.isDesktop {
    ${tw`min-h-screen`}
  }
`

const SectionWrapper = styled.div`
  ${tw`flex-col flex py-8 xl:px-20 md:px-12 px-4 justify-center h-full`}
`

const Container = styled.div`
  ${tw`flex flex-col  transform-gpu`}
  
  p {
    color: ${props => props.theme.colorPrimary};
    ${tw`uppercase tracking-widest text-sm`}
  }
  
  h1 {
    ${tw`md:text-5xl text-4xl font-bold mt-2`};

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  h2 {
    ${tw`text-2xl md:max-w-3xl w-full max-w-sm mt-2`};
    width: 50vw;
    
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      width: 80vw;
      line-height: 1.3em;
    }
  }
`

const ProjectItems = styled.div`
  width: fit-content;
  ${tw`tall:mt-12 mt-6 flex w-fit`}
  
  a {
    ${tw`mr-10`}
    
    &:last-child {
      ${tw`mr-0`}
    }
  }
  
  &.big {
    ${tw`mt-12`}
  }
  &.small {
    ${tw`mt-6`}
  }
  
  &::-webkit-scrollbar {
    display: none;
  }
`
