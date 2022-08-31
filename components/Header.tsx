import React from "react";
import Image from 'next/image';

import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  children: React.ReactNode
}

const Header: React.FunctionComponent<Props> = (props:Props) => {
  return (
    <Wrapper>
      <Container>

        <a href="#home" className="flex gap-3 items-center">
          <Image src="/images/usb-blue.png" alt="Logo - Tony Dugué" width={40} height={40} />
          <span className="font-bold uppercase tracking-wide">TONY DUGUE</span>
        </a>

        <div className="outer-menu">
          <HamburgerInput className='checkbox-toggle link' type='checkbox' />
          <HamburgerCtr className='hamburger'>
            <HamburgerItem></HamburgerItem>
          </HamburgerCtr>
          {props.children}
        </div>

      </Container>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`${tw`w-full py-8 fixed top-0 2xl:container mx-auto xl:px-20 md:px-12 px-4`}`

const Container = styled.div`${tw`relative flex justify-between`}`

const HamburgerInput = styled.input`${tw`absolute top-0 right-0 w-6 h-6 opacity-0`}`

const HamburgerCtr = styled.div`${tw`absolute top-0 right-0 w-6 h-6 flex items-center justify-center`}`

const HamburgerItem = styled.div`
  background-color: ${props => props.theme.colorPrimary};
  ${tw`relative flex-none w-full duration-300 flex items-center justify-center`}
`
