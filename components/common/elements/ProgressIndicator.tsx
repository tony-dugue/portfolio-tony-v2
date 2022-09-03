import { useEffect, useRef } from 'react';
import styled from "styled-components";
import tw from "twin.macro";

const ProgressIndicator = () => {

  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      progressRef.current ? progressRef.current!.style.width = scrolled + '%' : '';
    })
  }, [progressRef]);

  return (
    <Progress className='progress'>
      <ProgressBar className='progress-bar' ref={progressRef} />
    </Progress>
  )
}

export default ProgressIndicator;

const Progress = styled.div`${tw`w-full fixed top-0 z-50`}`

const ProgressBar = styled.div`
  height: 0.2rem;
  background-color: ${props => props.theme.colorPrimary};
`
