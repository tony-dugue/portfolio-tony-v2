import { useEffect } from 'react';
import styled from "styled-components";
import tw from "twin.macro";

const ProgressIndicator = () => {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progress = document.getElementById('progress')
      progress!.style.width = scrolled + '%';
    })
  });

  return (
    <Progress className='progress scroll-indicator'>
      <ProgressBar className='progress-bar' id='progress'></ProgressBar>
    </Progress>
  )
}

export default ProgressIndicator;

const Progress = styled.div`${tw`w-full fixed top-0 z-50`}`

const ProgressBar = styled.div`
  height: 0.2rem;
  background-color: ${props => props.theme.colorPrimary};
  ${tw`w-0`}
`
