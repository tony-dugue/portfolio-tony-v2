
import styled from "styled-components";
import tw from "twin.macro";
import React from "react";

interface Props {
  title: string,
  subtitle: string,
  description: string,
  textColor: string
}

const Heading: React.FunctionComponent<Props> = (props:Props) => {

  const { title, subtitle, description, textColor = 'inherit' } = props

  return (
    <HeadingContainer>
      <h2 className="text-gradient seq">{title}</h2>
      <h3 className="text-gradient w-fit seq">{subtitle}</h3>
      <h4 className="seq" style={{color: textColor}}>{description}</h4>
    </HeadingContainer>
  );
};

export default Heading;

const HeadingContainer = styled.div`
  ${tw`flex flex-col`}

  .intro-container {
    ${tw`flex flex-col gap-2`}
  }

  h2 {
    color: ${props => props.theme.colorPrimary};
    ${tw`md:text-4xl text-3xl font-bold w-fit`}
    line-height: 2 !important;
  }

  h3 {
    ${tw`uppercase tracking-widest text-gray-200 text-sm`};

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  h4 {
    ${tw`text-2xl md:max-w-2xl w-full mt-2`};
    width: 50vw;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      width: 80vw;
      line-height: 1.3em;
    }
  }
`
