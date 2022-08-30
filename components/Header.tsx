import Image from 'next/image';

import styled from "styled-components";
import tw from "twin.macro";

const Header = () => {
  return (
    <Wrapper>
      <Container>

        <a href="#home" className="flex gap-3 items-center">
          <Image src="/images/usb-blue.png" alt="Logo - Tony Dugué" width={40} height={40} />
          <span className="font-bold uppercase tracking-wide">TONY DUGUE</span>
        </a>

        <div className="outer-menu">
          <input className="checkbox-toggle link" type="checkbox" />
          <div className="hamburger">
            <div></div>
          </div>
        </div>

      </Container>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`${tw`w-full py-8 fixed top-0 2xl:container mx-auto xl:px-20 md:px-12 px-4`}`

const Container = styled.div`${tw`flex justify-between relative`}`
