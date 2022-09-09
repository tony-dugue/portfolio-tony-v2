import {useEffect, useState} from 'react';
import { NO_MOTION_PREFERENCE_QUERY } from "../../../pages/index";
import styled from "styled-components";
import tw from "twin.macro";

const ProgressIndicator = () => {

  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    setProgress(scrolled);
  };

  useEffect(() => {
    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

    matches && window.addEventListener("scroll", calculateProgress);
    return () => window.removeEventListener("scroll", calculateProgress);
  }, [progress]);

  return (
    <Progress className='progress'>
      <ProgressBar className='progress-bar' style={{ transform: `scaleX(${progress})` }} />
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
  will-change: transform;
  transform: scaleX(0);
  background-color: ${props => props.theme.colorPrimary};
`
