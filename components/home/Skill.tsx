import Image from 'next/image';
import { NAVLINKS, SKILLS } from '../../constants';
import styled from "styled-components";
import tw from "twin.macro";

const Skills = () => {
  return (
    <Section id={NAVLINKS[2].ref}>
      <Container>

        <SkillIntro>
          <p>Compétences</p>
          <h1 className="text-gradient">Mes compétences</h1>
          <h2>J'aime concevoir et créer des expériences utilisateur optimisées en utilisant une architecture front moderne. </h2>
        </SkillIntro>

        <SkillItems>
          <h3>Développement Frontend</h3>
          <div>
            {SKILLS.frontend.map(skill => (
              <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={60} height={60} />
            ))}
          </div>
        </SkillItems>

        <SkillItems>
          <h3>Interface utilisateur, Design d'expérience utilisateur</h3>
          <div>
            {SKILLS.userInterface.map(skill => (
              <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={60} height={60} />
            ))}
          </div>
        </SkillItems>

        <SkillItems>
          <h3>Autres compétences</h3>
          <div>
            {SKILLS.other.map(skill => (
              <Image key={skill} src={`/svgs/skills/${skill}.svg`} alt={skill} width={60} height={60} />
            ))}
          </div>
        </SkillItems>

      </Container>
    </Section>
  )
}

export default Skills;

const Section = styled.section`
  ${tw`w-full relative select-none min-h-screen 2xl:container mx-auto py-8  xl:px-20 md:px-12 px-4`}
`

const Container = styled.div`
  ${tw`flex flex-col justify-center gap-y-8`}
`

const SkillIntro = styled.div`
  ${tw`flex flex-col gap-2`}
  
  p {
    color: ${props => props.theme.colorPrimary};
    ${tw`uppercase tracking-widest text-sm`}
  } 
  
  h1 {
    ${tw`text-5xl font-bold`}
  }
  
  h2 {
    ${tw`text-2xl md:max-w-2xl w-full`}
  }
`

const SkillItems = styled.div`
  ${tw`flex flex-col gap-2`}
  
  h3 {
    ${tw`uppercase tracking-widest text-gray-200 text-sm mb-2`}
  }
  
  div {
    ${tw`flex gap-5 flex-wrap`}
  }
`
