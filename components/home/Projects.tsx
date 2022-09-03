import styled from "styled-components";
import tw from "twin.macro";

const Projects = () => {
  return (
    <Section>
      <Container>
        <p>PROJETS</p>
        <h1 className="text-gradient">Mes contributions</h1>
        <h2>I have contributed in over 20+ projects ranging from Frontend Development, UI/UX, Open Source, and Motion Graphics</h2>
      </Container>

    </Section>
  )
}

export default Projects;

const Section = styled.section`
  ${tw`w-full flex py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative select-none`}
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
    ${tw`text-2xl md:w-3/5 w-full`}
  }
`
