import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import { NAVLINKS, SKILLS } from '../../constants';

import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styled from "styled-components";
import tw from "twin.macro";

import Heading from "../headings/Heading";

const SkillSection = () => {

  const sectionRef = useRef<HTMLDivElement>(null);

  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: any
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(sectionRef);

    return revealAnimationRef.kill;
  }, [sectionRef]);

  return (
    <Section>

      <div className='pattern-right'>
        <Image src='/svgs/pattern-right.svg' className='pattern-right' loading='lazy' height={700} width={320} alt="pattern" />
      </div>

      <div className='pattern-left'>
        <Image src='/svgs/pattern-left.svg' className='pattern-left' loading='lazy' height={335} width={140} alt="pattern" />
      </div>

      <Container id={NAVLINKS[2].ref} ref={sectionRef} className="section-container">

        <SkillWrapper className="skills-wrapper">

          <Heading
            title="Compétences"
            subtitle="Mes compétences"
            description="J'aime concevoir et créer des expériences utilisateur optimisées en utilisant une architecture front moderne."
            textColor="white"
          />

          <SkillTop>
            <h3 className='seq'>Développement Frontend</h3>
            <div className='skill-icons seq'>
              {SKILLS.frontend.map(skill => (
                <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={76} height={76} className="skill-icon" />
              ))}
            </div>
          </SkillTop>

          <SkillMiddle>
            <h3 className='seq'>Développement Backend</h3>
            <div className='skill-icons seq'>
              {SKILLS.backend.map(skill => (
                <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={76} height={76} className="skill-icon" />
              ))}
            </div>
          </SkillMiddle>

          <SkillBottom>
            <div className="top">
              <h3 className='seq'>UI, Design UX & 3D</h3>
              <div className='skill-icons seq'>
                {SKILLS.userInterface.map(skill => (
                  <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={76} height={76} className="skill-icon" />
                ))}
              </div>
            </div>

            <div>
              <h3 className='seq'>Autres compétences</h3>
              <div className={`skill-icons seq ${willChange ? "will-change-opacity" : ""}`}>
                {SKILLS.other.map(skill => (
                  <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={76} height={76} className="skill-icon" />
                ))}
              </div>
            </div>
          </SkillBottom>

        </SkillWrapper>

      </Container>
    </Section>
  )
}

export default SkillSection;

const Section = styled.section`
  ${tw`relative`}
  background: ${props => props.theme.colorSecondary};
  min-height: 100vh;

  .pattern-left {
    ${tw`absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden`}
  }
  .pattern-right {
    ${tw`absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end`}
    z-index: 100;
  }
`

const Container = styled.div`
  ${tw`w-full relative select-none mb-24 py-12 flex flex-col justify-center 2xl:container xl:px-20 md:px-12 px-4`}

  .skill-icons {
    ${tw`flex flex-wrap`}
  }

  .skill-icon {
    padding-right: 1.25rem !important;
    padding-bottom: 1.25rem !important;
  }
`

const SkillWrapper = styled.div`
  ${tw`flex flex-col`}
`

const SkillTop = styled.div`
  ${tw`flex flex-col mb-2 mt-10`}
  
  h3 {
    ${tw`uppercase tracking-widest text-gray-200 text-sm mb-4`}
  }
`

const SkillMiddle = styled.div`
  ${tw`flex flex-col mb-2`}
  
  h3 {
    ${tw`uppercase tracking-widest text-gray-200 text-sm mb-4`}
  }
`

const SkillBottom = styled.div`
  ${tw`flex flex-wrap mt-0`}
  
  .top {
    ${tw`mr-6 mb-6`}
  }
  
  h3 {
    ${tw`uppercase tracking-widest text-gray-200 text-sm mb-4`}
  }
`
