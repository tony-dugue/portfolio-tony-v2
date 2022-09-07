import React from "react";
import PropTypes from 'prop-types';

import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  type: string,
  name: string,
  href: string | undefined,
  newTab: boolean | undefined
}

const SquareButton: React.FunctionComponent<Props> = (props:Props) => {

  const { type, name, href, newTab } = props

  return (
    <ButtonLink
      href={href}
      target={newTab ? '_blank' : ''}
      rel={newTab ? 'noreferrer' : ''}
      className={(type === 'primary' ? 'primary' : type === 'white' ? 'white' : 'outline')}
    >
      {name}
    </ButtonLink>
  )
}

SquareButton.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  newTab: PropTypes.bool
}

export default SquareButton;

const ButtonLink = styled.a`
  ${tw`py-2 px-7 font-medium rounded text-base md:text-xl tracking-wide duration-300 flex items-center`}
  
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
  
  &.white {
    ${tw`bg-white text-gray-900`}

    &:hover {
      ${tw`opacity-90`}
    }
  }
`
