import styled from "styled-components";
import React, {useEffect, useRef, useState} from "react";
import tw from "twin.macro";
import { NAVLINKS, PROJECTS } from '../../constants';
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { NO_MOTION_PREFERENCE_QUERY } from "../../pages/index";

import ProjectCard from './ProjectCard'
import Heading from "../headings/Heading";

const ProjectSection = ({ isDesktop }: { isDesktop: boolean }) => {

  const sectionRef = useRef<null | HTMLDivElement>(null);
  const sectionTitleElementRef = useRef<null | HTMLDivElement>(null);

  const [willChange, setwillChange] = useState(false);
  const [horizontalAnimationEnabled, sethorizontalAnimationEnabled] = useState(false);

  const initRevealAnimation = (
    targetSectionRef: any
  ): [GSAPTimeline, ScrollTrigger] => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSectionRef.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const initProjectsAnimation = (
    targetSectionRef: any,
    sectionTitleElementRef: any,
  ): [GSAPTimeline, ScrollTrigger] => {

    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const sidePadding = document.body.clientWidth - targetSectionRef.current.querySelector(".inner-container")!.clientWidth;
    const elementWidth = sidePadding + targetSectionRef.current.querySelector(".project-wrapper")!.clientWidth;

    targetSectionRef.current!.style.width = `${elementWidth}px`;

    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;
    timeline
      .to(targetSectionRef.current, { x: width })
      .to(sectionTitleElementRef.current, { x: -width }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
      onToggle: (self) => setwillChange(self.isActive),
    });

    return [timeline, scrollTrigger];
  };



  useEffect(() => {

    let projectsScrollTrigger: ScrollTrigger | undefined;
    let projectsTimeline: GSAPTimeline | undefined;

    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

    sethorizontalAnimationEnabled(isDesktop && matches);

    if (isDesktop && matches) {
      [projectsTimeline, projectsScrollTrigger] = initProjectsAnimation(
        sectionRef,
        sectionTitleElementRef
      );
    } else {
      const projectWrapper = sectionRef.current!.querySelector(".project-wrapper") as HTMLDivElement;

      const parentPadding = window
        .getComputedStyle(sectionRef.current!)
        .getPropertyValue("padding-left");

      sectionRef.current!.style.setProperty("width", "100%");
      projectWrapper.classList.add("full-width");
      projectWrapper.style.setProperty("width", `calc(100vw)`);
      projectWrapper.style.setProperty("padding", `0 ${parentPadding}`);
      projectWrapper.style.setProperty("transform", `translateX(-${parentPadding})`);
    }

    const [revealTimeline, revealScrollTrigger] =
      initRevealAnimation(sectionRef);

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [sectionRef, sectionTitleElementRef, isDesktop]);

  const { ref: projectsSectionRef } = NAVLINKS[1];

  return (
    <Section ref={sectionRef} id={projectsSectionRef} className={`section-container snap-x ${isDesktop ? 'is-desktop' : ''}`}>

      <SectionWrapper>

        <ProjectTitle ref={sectionTitleElementRef} className={`inner-container  ${willChange ? "will-change-transform" : ""}`}>
          <Heading
            title="Mes projets"
            description="Passionné depuis toujours par les nouvelles technologies mais aussi par le design, je conçois et réalise des applications web intuitive et fonctionnelle mais toujours avec une dose de créativité."
            textColor="inherit"
          />
        </ProjectTitle>

        <ProjectItems className="project-wrapper snap-x seq scroll-pl-6 snap-mandatory">
          {PROJECTS.map( (project) => (
            <ProjectCard
              animationEnabled={horizontalAnimationEnabled}
              project={project}
              key={project.name}
            />
          ))}
        </ProjectItems>
      </SectionWrapper>

    </Section>
  )
}

export default ProjectSection;

const Section = styled.section`
  ${tw`w-full relative select-none flex-col flex py-8 justify-center`};
  background: ${props => props.theme.colorBackground};

  &.isDesktop {
    ${tw`min-h-screen`}
  }
`

const SectionWrapper = styled.div`
  ${tw`flex-col flex py-8 xl:px-10 md:px-0 px-4 justify-center h-full`}
`

const ProjectTitle = styled.div`
  ${tw`flex flex-col`}
  margin-top: 40px;
`

const ProjectItems = styled.div`
  width: fit-content;
  ${tw`tall:mt-12 mt-6 flex grid grid-flow-col auto-cols-max md:gap-10 gap-6 w-fit`}
  
  &.full-width {
    ${tw`w-full overflow-x-auto`}
  }
  
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
