import { EMAIL, NAVLINKS, SOCIAL_LINKS } from '../../../constants';
import SquareButton from '../../buttons/SquareButton';
import styled from "styled-components";
import tw from "twin.macro";

const Footer = () => {
  return (
    <FooterSection id={NAVLINKS[4].ref}>

      <FooterImg src="/svgs/footer-curve.svg" alt="Footer" className='w-full' loading='lazy' height={290} width={1440} />

      <Wrapper>
        <Container>

          <h1>Je recherche des défis ! N'hésitez pas à me contacter.</h1>

          <SocialContainer>
            {SOCIAL_LINKS.map(link => (
              <SocialLink href={link.url} className="link" key={link.name} rel='noreferrer' target='_blank'>
                <img src={`/svgs/social/${link.name}.svg`} alt={link.name} width={40} height={40} />
              </SocialLink>
            ))}
          </SocialContainer>

          <Cta>
            <SquareButton type='outline' name='mon CV' newTab={true} href='/tony-dugue-cv.pdf'></SquareButton>
            <SquareButton type='white' name={`Contact`} newTab={false} href={'mailto:' + EMAIL}></SquareButton>
          </Cta>

          <p>Design & Développement avec ❤️ par Tony Dugué</p>

        </Container>
      </Wrapper>

    </FooterSection>
  )
}

export default Footer;

const FooterSection = styled.footer`
  background: url(/svgs/footer-bg.svg),linear-gradient(153.86deg,#02494c 0%,#016877 15.69%,#0D576D 48.9%,#004865 95.52%);
  ${tw`w-full relative select-none bg-cover`}
`

const FooterImg = styled.img`
  ${tw`w-full`}
`

const Wrapper = styled.div`
  ${tw`h-full w-full`}
`

const Container = styled.div`
  ${tw`2xl:container mx-auto xl:px-20 md:px-12 px-4 flex-col flex h-full justify-end gap-y-8 z-10 items-center py-12`}
  
  h1 {
    ${tw`font-medium text-3xl md:text-4xl text-center`}
  }
  
  p {
    ${tw`text-center text-sm sm:text-base`}
  }
`

const SocialContainer = styled.div`
  ${tw`flex md:gap-4 sm:gap-3 gap-2`}
`

const SocialLink = styled.a`
  ${tw`hover:opacity-80 duration-300`}
`

const Cta = styled.div`
  ${tw`flex gap-5`}
`
