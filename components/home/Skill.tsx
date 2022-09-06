import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { NAVLINKS, SKILLS } from '../../constants';
import styled from "styled-components";
import tw from "twin.macro";

import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Skills = () => {

  const targetSection = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .from(targetSection.current!.querySelectorAll('.seq'), { opacity: 0, duration: 0.5, stagger: 0.5 }, '<');

    ScrollTrigger.create({
      trigger: targetSection.current!.querySelector('.skills-wrapper'),
      start: '100px bottom',
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });

  }, [targetSection])

  return (
    <Section id={NAVLINKS[2].ref} ref={targetSection}>
      <Container>

        <img src='/svgs/pattern-right.svg' className='pattern-right' loading='lazy' height={700} width={320} />
        <img src='/svgs/pattern-left.svg' className='pattern-left' loading='lazy' height={335} width={140} />

        <SkillWrapper className="skills-wrapper">

          <SkillIntro className='flex flex-col gap-2'>
            <p className="seq">Compétences</p>
            <h1 className="text-gradient seq">Mes compétences</h1>
            <h2 className="seq">J'aime concevoir et créer des expériences utilisateur optimisées en utilisant une architecture front moderne. </h2>
          </SkillIntro>

          <SkillTop>
            <h3 className='seq'>Développement Frontend</h3>
            <div className='seq'>
              {SKILLS.frontend.map(skill => (
                <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={60} height={60} />
              ))}
            </div>
          </SkillTop>

          <SkillBottom>
            <div>
              <h3 className='seq'>UI, Design UX</h3>
              <div className='skill-icons seq'>
                {SKILLS.userInterface.map(skill => (
                  <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={60} height={60} />
                ))}
              </div>
            </div>

            <div>
              <h3 className='seq'>Autres compétences</h3>
              <div className='skill-icons seq'>
                {SKILLS.other.map(skill => (
                  <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={60} height={60} />
                ))}
              </div>
            </div>
          </SkillBottom>

        </SkillWrapper>

      </Container>
    </Section>
  )
}

export default Skills;

const Section = styled.section`
  ${tw`w-full relative select-none min-h-screen`}
`

const Container = styled.div`
  ${tw`2xl:container mx-auto py-8 xl:px-20 md:px-12 px-4 flex flex-col justify-center`}
  
  .pattern-left {
    ${tw`absolute left-0 -bottom-16 w-1/12 max-w-xs md:block hidden`}
  }
  .pattern-right {
    ${tw`absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:block hidden`}
  }
`

const SkillIntro = styled.div`
  ${tw`flex flex-col gap-2`}

  .intro-container {
    ${tw`flex flex-col gap-2`}
  }
  
  p {
    color: ${props => props.theme.colorPrimary};
    ${tw`uppercase tracking-widest text-sm `}
  } 
  
  h1 {
    ${tw`text-5xl font-bold w-fit`}
  }
  
  h2 {
    ${tw`text-2xl md:max-w-2xl w-full`}
  }
`

const SkillWrapper = styled.div`
  ${tw`gap-y-10 flex flex-col`}
`

const SkillTop = styled.div`
  ${tw`flex flex-col mb-2`}
  
  h3 {
    ${tw`uppercase tracking-widest text-gray-200 text-sm mb-6`}
  }
  
  div {
    ${tw`flex gap-5 flex-wrap`}
  }
`

const SkillBottom = styled.div`
  ${tw`flex gap-10 flex-wrap`}
  
  h3 {
    ${tw`uppercase tracking-widest text-gray-200 text-sm mb-6`}
  }
  
  .skill-icons {
    ${tw`flex gap-5 flex-wrap`}
  }
`
