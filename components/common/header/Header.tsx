import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import RoundButton from "../../buttons/RoundButton"

interface Props {
  children: React.ReactNode
}

const Header: React.FunctionComponent<Props> = (props:Props) => {
  return (
    <Wrapper>
      <Container>

        <ImageWrapper>
          <a href="#home" className='link'>
            <img src="/images/usb-blue.png" alt="Logo - Tony Dugué" />
          </a>
        </ImageWrapper>

        <RightContent>

          <ButtonWrapper>
            <RoundButton text="Contact" link="/#contact" />
          </ButtonWrapper>

          <OuterMenu>
            <HamburgerInput aria-labelledby='menu' className='checkbox-toggle link' type='checkbox' />
            <HamburgerCtr className='hamburger'>
              <HamburgerItem></HamburgerItem>
            </HamburgerCtr>
            {props.children}
          </OuterMenu>
        </RightContent>

      </Container>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.nav`
  ${tw`w-full fixed top-0 left-0 right-0 2xl:container mx-auto xl:px-20 md:px-12 px-4 select-none z-50 bg-gradient-to-b from-gray-200 to-transparent`}
`

const Container = styled.div`
  height: ${props => props.theme.navHeight};
  ${tw`relative flex justify-between items-center`};

  @media screen and (max-width: 992px) {
    height: 40px;
  }
`

const ImageWrapper = styled.div`
  width: auto;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 20px;

  @media screen and (max-width: 992px) {
    margin-top: 40px;
  }
  
  &:hover {
    transform: scale(1.1);
  }
  
  img {
    width: 120px;
    transform: rotate(180deg);

    @media screen and (max-width: 992px) {
      width: 80px;
    }
  }
`

const RightContent = styled.div`
  width: 240px;
  ${tw`relative`};
`

const ButtonWrapper = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`

const HamburgerInput = styled.input`${tw`absolute top-0 right-0 w-6 h-6 opacity-0`}`

const HamburgerCtr = styled.div`${tw`absolute top-0 right-0 w-6 h-6 flex items-center justify-center`}`

const HamburgerItem = styled.div`
  background-color: ${props => props.theme.colorPrimary};
  ${tw`relative flex-none w-full duration-300 flex items-center justify-center`}
`

const OuterMenu = styled.div`
  z-index: 1;

  .checkbox-toggle {
    z-index: 9999;
    cursor: pointer;

    &:checked {
      + {
        .hamburger {
          > div {
            transform: rotate(135deg);
            &:before {
              top: 0;
              transform: rotate(90deg);
            }
            &:after {
              top: 0;
              transform: rotate(90deg);
              opacity: 0;
            }
          }
        }
      }
      ~ {
        .menu {
          pointer-events: auto;
          visibility: visible !important;
          backdrop-filter: blur(0.625rem);
          -webkit-backdrop-filter: blur(0.625rem);
          
          > div {
            transform: scale(1);
            transition-duration: 0.75s;
            > div {
              opacity: 1;
              transition: opacity 0.4s ease 0.4s;
            }
          }
        }
      }
      &:hover {
        + {
          .hamburger {
            > div {
              transform: rotate(225deg);
            }
          }
        }
      }
    }
  }
  .hamburger {
    z-index: 9998;
    backface-visibility: hidden;

    > div {
      height: 0.125rem;
      transition: all 0.4s ease;
      -webkit-box-pack: center;
      &:before,
      &:after {
        content: "";
        z-index: 9999;
        position: absolute;
        left: 0;
        width: 100%;
        top: -0.5rem;
        height: 0.125rem;
        background: inherit;
        transition: all 0.4s ease;
      }
      &:after {
        top: 0.5rem;
      }
    }
  }
  .menu {
    backface-visibility: hidden;
    outline: 0.0625rem solid transparent;
    
    > div {
      width: 250vw;
      height: 250vw;
      transform: scale(0);
      will-change: transform;
      border-radius: 50%;
      transition: all 0.4s ease;
      backface-visibility: hidden;
      background: rgba(0, 0, 0, 0.5);
      @supports not (backdrop-filter: blur(0.625rem)) {
        background: rgba(0, 0, 0, 0.8);
      }

      > div {
        max-width: 90vw;
        transition: opacity 0.4s ease;
      }
    }
  }
`
