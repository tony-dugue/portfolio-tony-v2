
import styled from "styled-components";
import tw from "twin.macro";
import React from "react";

interface Props {
  title: string,
  description: string,
  textColor: string
}

const Heading: React.FunctionComponent<Props> = (props:Props) => {

  const { title, description, textColor = 'inherit' } = props

  return (
    <HeadingContainer>
      <h2 className="text-gradient seq">{title}</h2>
      <h3 className="seq" style={{color: textColor}}>{description}</h3>
    </HeadingContainer>
  );
};

export default Heading;

const HeadingContainer = styled.div`
  ${tw`flex flex-col mb-10`}

  .intro-container {
    ${tw`flex flex-col gap-2`}
  }

  h2 {
    color: ${props => props.theme.colorPrimary};
    ${tw`md:text-4xl text-3xl font-bold w-fit uppercase`}
    line-height: 2 !important;
  }
  
  h3 {
    ${tw`text-2xl md:max-w-2xl w-full`};
    width: 50vw;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      width: 80vw;
      line-height: 1.3em;
    }
  }
`
