
import styled from "styled-components";
import tw from "twin.macro";
import React from "react";

interface Props {
  title: string,
  subtitle: string,
  description: string
}

const Heading: React.FunctionComponent<Props> = (props:Props) => {

  const { title, subtitle, description } = props

  return (
    <HeadingContainer>
      <p className="text-gradient seq">{title}</p>
      <h1 className="text-gradient w-fit seq">{subtitle}</h1>
      <h2 className="seq">{description}</h2>
    </HeadingContainer>
  );
};

export default Heading;

const HeadingContainer = styled.div`
  ${tw`flex flex-col`}

  .intro-container {
    ${tw`flex flex-col gap-2`}
  }

  p {
    color: ${props => props.theme.colorPrimary};
    ${tw`md:text-5xl text-4xl font-bold w-fit`}
  }

  h1 {
    ${tw`uppercase tracking-widest text-gray-200 text-sm`};

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  h2 {
    ${tw`text-2xl md:max-w-2xl w-full mt-2`};
    width: 50vw;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      width: 80vw;
      line-height: 1.3em;
    }
  }
`
