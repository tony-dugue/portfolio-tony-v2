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

          <SkillIntro>
            <p className="seq">Compétences</p>
            <h1 className="text-gradient seq">Mes compétences</h1>
            <h2 className="seq">J&lsquo;aime concevoir et créer des expériences utilisateur optimisées en utilisant une architecture front moderne. </h2>
          </SkillIntro>

          <SkillTop>
            <h3 className='seq'>Développement Frontend</h3>
            <div className='skill-icons seq'>
              {SKILLS.frontend.map(skill => (
                <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={76} height={76} className="skill-icon" />
              ))}
            </div>
          </SkillTop>

          <SkillBottom>
            <div className="top">
              <h3 className='seq'>UI, Design UX</h3>
              <div className='skill-icons seq'>
                {SKILLS.userInterface.map(skill => (
                  <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={76} height={76} className="skill-icon" />
                ))}
              </div>
            </div>

            <div>
              <h3 className='seq'>Autres compétences</h3>
              <div className='skill-icons seq'>
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

export default Skills;

const Section = styled.section`
  ${tw`w-full relative select-none mt-24`}
`

const Container = styled.div`
  ${tw`2xl:container mx-auto py-12 xl:px-20 md:px-12 px-4 flex flex-col justify-center`}
  
  .pattern-left {
    ${tw`absolute left-0 -bottom-1/3 w-1/12 max-w-xs md:block hidden`}
  }
  .pattern-right {
    ${tw`absolute right-0 -bottom-2/3 w-1/5 max-w-xs md:block hidden`}
  }

  .skill-icons {
    ${tw`flex flex-wrap transform-gpu`}
  }

  .skill-icon {
    padding-right: 1.25rem !important;
    padding-bottom: 1.25rem !important;
  }
`

const SkillIntro = styled.div`
  ${tw`flex flex-col`}

  .intro-container {
    ${tw`flex flex-col gap-2`}
  }
  
  p {
    color: ${props => props.theme.colorPrimary};
    ${tw`uppercase tracking-widest text-sm `}
  } 
  
  h1 {
    ${tw`md:text-5xl text-4xl font-bold w-fit mt-2`}
  }
  
  h2 {
    ${tw`text-2xl md:max-w-2xl w-full mt-2`}
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

const SkillBottom = styled.div`
  ${tw`flex flex-wrap mt-5`}
  
  .top {
    ${tw`mr-6 mb-6`}
  }
  
  h3 {
    ${tw`uppercase tracking-widest text-gray-200 text-sm mb-4`}
  }
`
