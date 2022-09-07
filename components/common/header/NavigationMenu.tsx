import {useEffect} from "react";
import { NAVLINKS } from '../../../constants';
import styled from "styled-components";
import tw from "twin.macro";

const NavigationMenu = () => {

  useEffect(() => {

    // close menu navigation
    const anchorNodes = document.querySelectorAll('a[href^="#"]');

    anchorNodes.forEach(el => {
      const checkbox: HTMLInputElement | null = document.querySelector('.checkbox-toggle');
      el.addEventListener('click', () => checkbox!.checked = false )
    })
  }, []);

  return (
    <Wrapper className="menu">
      <Container>
        <MenuContainer>
          <ListContainer>

            {NAVLINKS.map(link => (
              <NavItem key={link.name}>
                <NavLink className="link" href={`#${link.ref}`}>{link.name}</NavLink>
              </NavItem>
            ))}

          </ListContainer>
        </MenuContainer>
      </Container>
    </Wrapper>
  )
}

export default NavigationMenu;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colorSecondary};
  color: ${props => props.theme.colorWhite};
  z-index: 999;
  will-change: transform;
  ${tw`fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center`}`

const Container = styled.div`${tw`flex-none overflow-hidden flex items-center justify-center`}`

const MenuContainer = styled.div`${tw`text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen`}`

const ListContainer = styled.ul`${tw`list-none py-4 px-0 m-0 block max-h-screen`}`

const NavItem = styled.li`${tw`p-0 m-6 text-2xl block`}`

const NavLink = styled.a`${tw`relative inline font-bold text-2xl md:text-5xl duration-300 hover:no-underline hover:opacity-80`}`
