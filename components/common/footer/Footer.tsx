import { useEffect, useState } from 'react';
import Image from 'next/image';
import { EMAIL, NAVLINKS, SOCIAL_LINKS } from '../../../constants';
import SquareButton from '../../buttons/SquareButton';
import styled from "styled-components";
import tw from "twin.macro";

const Footer = () => {

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerWidth * 0.4);
  }, [height])

  return (
    <FooterSection id={NAVLINKS[4].ref} style={{ height, backgroundImage: `url(/svgs/footer.svg)` }}>

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

    </FooterSection>
  )
}

export default Footer;

const FooterSection = styled.footer`
  ${tw`w-full relative select-none bg-cover bg-bottom`}
`

const Container = styled.div`
  ${tw`2xl:container mx-auto xl:px-20 md:px-12 px-4 flex-col flex h-full justify-end gap-y-8 z-10 items-center py-12`}
  
  h1 {
    ${tw`font-medium tracking-wide text-4xl text-center`}
  }
  
  p {
    ${tw`text-center`}
  }
`

const SocialContainer = styled.div`
  ${tw`flex gap-4`}
`

const SocialLink = styled.a`
  ${tw`hover:opacity-80 duration-300`}
`

const Cta = styled.div`
  ${tw`flex gap-5`}
`
