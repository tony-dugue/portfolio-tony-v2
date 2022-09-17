import { EMAIL, NAVLINKS, SOCIAL_LINKS } from '../../../constants';
import SquareButton from '../../buttons/SquareButton';
import styled from "styled-components";
import tw from "twin.macro";

const FooterTest = () => {
  return (
    <FooterSection id={NAVLINKS[4].ref}>
        <Container>

          <FooterContent>

            <FooterContentLeft>
              <h2>Let's talk <br/> Right now !</h2>
              <p>Hello! Je suis Tony Dugué, un <mark>développeur web et mobile</mark> situé à Rennes, France.</p>
              <p>Développeur Web et mobile Fullstack JS spécialisé en React, NextJS et NestJS</p>
            </FooterContentLeft>

            <FooterContentRight>

              <h3>Social</h3>

              <SocialContainer className="seq">
                {SOCIAL_LINKS.map(link => (
                  <SocialLink href={link.url} className="link" key={link.name} rel='noreferrer' target='_blank'>
                    <img src={`/svgs/social/${link.name}.svg`} alt={link.name} width={40} height={40} />
                  </SocialLink>
                ))}
              </SocialContainer>

              <h3>Contact</h3>
              <p>{EMAIL}</p>

              <Cta>
                <SquareButton type='outline' name='mon CV' newTab={true} href='/tony-dugue-cv.pdf'></SquareButton>
              </Cta>

            </FooterContentRight>

          </FooterContent>

          <p>Design & Développement avec ❤️ par Tony Dugué</p>

        </Container>
    </FooterSection>
  )
}

export default FooterTest;

const FooterSection = styled.footer`
  ${tw`w-full relative select-none tall:py-16 py-24 flex flex-col`}
  background: ${props => props.theme.colorSecondary};
  color: ${props => props.theme.colorWhite};
`

const Container = styled.div`
  ${tw`w-full flex flex-col justify-center items-center 2xl:container mx-auto xl:px-20 md:px-12 px-4`}
`

const FooterContent = styled.div`
  ${tw`w-full flex justify-between items-center`}
`

const FooterContentLeft = styled.div`
  ${tw``}
  
  h2 {
    ${tw`uppercase text-lg text-3xl sm:text-3xl md:text-5xl mb-8`}
  }
  
  p {
    ${tw`text-xl md:max-w-xl mb-8`}
  }
`

const FooterContentRight = styled.div`
  ${tw`flex flex-col items-end`}

  h3 {
    ${tw`uppercase tracking-widest text-xl mb-3`}
    color: ${props => props.theme.colorPrimary};
  }
`

const SocialContainer = styled.div`
  ${tw`flex justify-center mt-2`}
`

const SocialLink = styled.a`
  ${tw`hover:opacity-80 duration-300 pl-4`};

  @media screen and (max-width: 768px) {
  width: 4rem;
}
`

const Cta = styled.div`
  ${tw`mt-2`}
`
