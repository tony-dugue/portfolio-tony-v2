import { useEffect, useRef } from 'react';
import styled from "styled-components";
import tw from "twin.macro";

const ProgressIndicator = () => {

  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height);
      progressRef.current ? progressRef.current!.style.transform = `scaleX(${scrolled})` : '';
    })
  }, [progressRef]);

  return (
    <Progress className='progress'>
      <ProgressBar className='progress-bar' ref={progressRef} />
    </Progress>
  )
}

export default ProgressIndicator;

const Progress = styled.div`
  ${tw`w-full fixed top-0 z-50`}
`

const ProgressBar = styled.div`
  ${tw`w-full`}
  height: 0.2rem;
  transform-origin: left;
  background-color: ${props => props.theme.colorPrimary};
`
