import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  type: string,
  //onClick: void,
  name: string,
  href: string,
  newTab: boolean
}

const SquareButton: React.FunctionComponent<Props> = (props:Props) => {

  const { type, name, href, newTab } = props
  return (
    <ButtonLink
      //onClick={onClick}
      href={href}
      target={newTab ? '_blank' : ''}
      rel={newTab ? 'noreferrer' : ''}
      className={(type === 'primary' ? 'primary' : 'outline')}
    >
      {name}
    </ButtonLink>
  )
}

export default SquareButton;

const ButtonLink = styled.a`
  ${tw`py-2 px-7 font-medium rounded text-xl tracking-wide duration-300 flex items-center`}
  
  &.primary {
    color: white;
    background: ${props => props.theme.colorPrimary};
    transition: background 1s;


    &:hover {
      color: ${props => props.theme.colorPrimary};
      border: 2px solid ${props => props.theme.colorPrimary};
      background: white;
    }
  }

  &.outline {
    color: ${props => props.theme.colorPrimary};
    border: 2px solid ${props => props.theme.colorPrimary};
    transition: background 1s;

    &:hover {
      color: white;
      background: ${props => props.theme.colorPrimary};
      border: 2px solid ${props => props.theme.colorPrimary};
    }
  }
`