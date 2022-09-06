import React, {useEffect, useRef, useState} from 'react';
import { NAVLINKS, TIMELINE, TimelineNode } from '../../constants';
import styled from "styled-components";
import tw from "twin.macro";
import Image from 'next/image';
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const svgColor = '#D0D6DF';
const separation = 450;
const strokeWidth = 2;
const branch1X = 13;
const curveLength = 150;
const dotSize = 26;

interface Props {
  isDesktop: boolean
}

const Timeline: React.FunctionComponent<Props> = (props:Props) => {

  const { isDesktop } = props

  const [svgWidth, setSvgWidth] = useState(400);
  const [branch2X, setBranch2X] = useState(109);

  const svgLength = TIMELINE.filter(el => el.type !== 'year')?.length * separation;

  const timelineSvg = useRef<HTMLDivElement>(null);
  const svgContainer = useRef<HTMLDivElement>(null);
  const screenContainer = useRef<HTMLDivElement>(null);

  const drawDot = (timelineNode: TimelineNode, y: number) => {
    let x = branch1X;
    if (timelineNode.branch === 2) {
      x = branch2X;
    }
    if (timelineNode.diverge) {
      y = y - curveLength + 6 * dotSize;
    }
    if (timelineNode.converge) {
      y = y + curveLength - 6 * dotSize;
    }
    const str = addText(timelineNode, y) + `<rect class='dot' width=${dotSize} height=${dotSize} fill='#111827' x=${x - dotSize / 2} y=${y - dotSize / 2} ></rect><circle cx=${x} cy=${y} r='7' stroke=${svgColor} class='str dot' ></circle>`;

    return str;
  };

  const drawLine = (timelineNode: TimelineNode, y: number) => {
    if (timelineNode.converge || timelineNode.diverge) {
      if (timelineNode.diverge) {
        return `<line class='str' x1=${branch1X} y1=${y} x2=${branch1X} y2=${y + separation} stroke=${svgColor} />`
      } else {
        return `<line class='str' x1=${branch1X} y1=${y} x2=${branch1X} y2=${y + separation} stroke=${svgColor} />`
      }

    } else {
      let str = `<line class='str' x1=${timelineNode.branch === 1 ? branch1X : branch2X} y1=${y} x2=${timelineNode.branch === 1 ? branch1X : branch2X} y2=${Math.abs(y + separation)} stroke=${svgColor} />`
      if (timelineNode.parallel) {
        str = str.concat(`<line class='str' x1=${timelineNode.parallel === 1 ? branch1X : branch2X} y1=${y} x2=${timelineNode.parallel === 1 ? branch1X : branch2X} y2=${Math.abs(y + separation)} stroke=${svgColor} />`)
      }
      return str;
    }
  };

  const drawBranch = (timelineNode: TimelineNode, y: number) => {
    if (timelineNode.converge) {
      return `<path class='str' d='M ${branch2X} ${y + separation - curveLength} C ${branch2X} ${y + separation - curveLength + curveLength / 2} ${branch1X} ${y + separation - curveLength + curveLength / 2} ${branch1X} ${y + separation}' stroke=${svgColor} /><line class='str' x1=${branch2X} y1=${y} x2=${branch2X} y2=${Math.abs(y + separation - curveLength)} stroke=${svgColor} />`;
    } else {
      return `<path class='str' d='M ${branch1X} ${y} C ${branch1X} ${y + curveLength / 2} ${branch2X} ${y + curveLength / 2} ${branch2X} ${y + curveLength}' stroke=${svgColor} /><line class='str' x1=${branch2X} y1=${y + curveLength} x2=${branch2X} y2=${y + separation} stroke=${svgColor} />`;
    }

  };

  const addText = (timelineNode: TimelineNode, y: number) => {
    const offset = (timelineNode.branch === 2 || timelineNode.parallel || timelineNode.diverge) ? branch2X : 10;
    if (timelineNode.type === 'year') {
      return `<foreignObject x=${dotSize / 2 + 10 + offset} y=${y - dotSize / 2} width=${svgWidth - (dotSize / 2 + 10 + offset)} height='100'><p class='text-6xl'>${timelineNode.content}</p></foreignObject>`
    } else {
      const { description, title, logo } = timelineNode.content as TimelineContent;
      let logoStr = '';
      if (logo) {
        logoStr = `<img src='/images/logos/${logo}' class="timeline-logo" loading='lazy' height='32' />`
      }
      return `<foreignObject x=${dotSize / 2 + 10 + offset} y=${y - dotSize / 2} width=${svgWidth - (dotSize / 2 + 10 + offset)} height=${separation}>${logoStr}<p class='timeline-title'>${title}</p><p class='timeline-description'>${description}</p></foreignObject>`
    }
  }

  const createSvg = (timeline: TimelineNode[]) => {
    let idx = 0;
    let y = dotSize / 2;
    let result = `<style>.str{stroke-width: ${strokeWidth}px}</style>`;

    for (let node of timeline) {
      if (idx === 0) {
        result = result.concat(drawDot(node, y));
        idx++;
        continue;
      }

      if (idx === timeline.length - 1) {
        result = drawLine(node, y - separation / 2) + result;
        result = result.concat(drawDot(node, y + separation / 2));
        idx++;
        continue;
      }

      if (node.type === 'year') {
        result = result.concat(drawDot(node, y));
      } else {
        if (node.diverge || node.converge) {
          result = drawLine(node, y) + result;
          result = drawBranch(node, y) + result;
          result = result.concat(drawDot(node, y + separation / 2));
        } else {
          result = drawLine(node, y) + result;
          result = result.concat(drawDot(node, y + separation / 2));
        }
        y = y + separation;
      }

      idx++;
    }

    return result
  }

  useEffect(() => {
    const width = svgContainer.current!.clientWidth;
    setSvgWidth(width);

    const resultString = createSvg(TIMELINE);
    timelineSvg.current!.innerHTML = resultString;

    if (document.body.clientWidth < 767) {
      setBranch2X(70);
    }

    if(isDesktop && document.body.clientWidth > 767) {

      const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone, duration: 0.3 } });
      timeline
        .to(screenContainer.current!.querySelector('.slide-1'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-2'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-2'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-3'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-3'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-4'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-4'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-5'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-5'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-6'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-6'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-7'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-7'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-8'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-8'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-9'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-9'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-10'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-10'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-11'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-11'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-12'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-12'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-13'), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector('.slide-13'), { opacity: 0, delay: 2 })

        .fromTo(screenContainer.current!.querySelector('.slide-14'), { opacity: 0 }, { opacity: 1 })

      const platformHeight = screenContainer.current!.getBoundingClientRect().height;

      ScrollTrigger.create({
        trigger: screenContainer.current,
        start: `top ${(window.innerHeight - platformHeight) / 2}`,
        end: `+=${svgLength - platformHeight}`,
        pin: true,
        pinSpacing: true,
        scrub: 0,
        animation: timeline,
      });
    } else {
      screenContainer.current!.innerHTML = '';
    }

  }, [timelineSvg, svgContainer, svgWidth, branch2X, screenContainer])

  return (
    <Section id={NAVLINKS[3].ref}>

      <TimelineIntro>
        <p className='seq'>Parcours</p>
        <h1 className='text-gradient seq'>Mon parcours</h1>
        <h2 className='seq'>Un aperçu des étapes de mon parcours professionnel</h2>
      </TimelineIntro>

      <TimelineContent>

        <TimelineContentColLeft className="line-svg" style={{ display: 'flex' }} ref={svgContainer}>
          <svg width={svgWidth} height={svgLength} viewBox={`0 0 ${svgWidth} ${svgLength}`} fill='none' ref={timelineSvg}></svg>
        </TimelineContentColLeft>

        <TimelineContentColRight>
          <TimelineScreenContainer ref={screenContainer}>

            <Image className='timeline-screen-image' src='/images/timeline/title-bar.svg' alt='Title bar' width={644} height={34} />

            <div className="timeline-slide-container">
              <div className="timeline-slide">
                <Image className='timeline-slide-image slide-1' src='/images/timeline/timeline-1.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-2' src='/images/timeline/timeline-2.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-3' src='/images/timeline/timeline-3.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-4' src='/images/timeline/timeline-4.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-5' src='/images/timeline/timeline-5.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-6' src='/images/timeline/timeline-6.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-7' src='/images/timeline/timeline-7.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-8' src='/images/timeline/timeline-8.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-9' src='/images/timeline/timeline-9.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-10' src='/images/timeline/timeline-10.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-11' src='/images/timeline/timeline-11.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-12' src='/images/timeline/timeline-12.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-13' src='/images/timeline/timeline-13.jpg' alt='Timeline' layout='fill' />
                <Image className='timeline-slide-image slide-14' src='/images/timeline/timeline-14.jpg' alt='Timeline' layout='fill' />
              </div>
            </div>
          </TimelineScreenContainer>
        </TimelineContentColRight>

      </TimelineContent>
    </Section>
  )
}

export default Timeline;

const Section = styled.section`
  ${tw`w-full relative select-none min-h-screen 2xl:container mx-auto py-8 xl:px-20 md:px-12 px-4 flex flex-col justify-center gap-y-20`}
`

const TimelineIntro = styled.div`
  ${tw`flex flex-col gap-2`}

  p {
    color: ${props => props.theme.colorPrimary};
    ${tw`uppercase tracking-widest text-sm`}
  }

  h1 {
    ${tw`text-5xl font-bold w-fit`};

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  h2 {
    ${tw`text-2xl md:max-w-2xl w-full`};

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 1.3em;
    }
  }
`

const TimelineContent = styled.div`
  ${tw`grid grid-cols-12 gap-4`}
  
  .timeline-logo {
    width: 60px;
    height: 60px;
  }
  
  .timeline-title {
    ${tw`text-2xl`}
  }
  
  .timeline-description {
    ${tw`text-xl mt-2 font-medium tracking-wide`}
  }
`

const TimelineContentColLeft = styled.div`
  ${tw`col-span-12 md:col-span-6`}
`

const TimelineContentColRight = styled.div`
  ${tw`col-span-12 md:col-span-6 md:flex hidden`}
`

const TimelineScreenContainer = styled.div`
  ${tw`max-w-full h-96 shadow-xl bg-gray-800 rounded-2xl overflow-hidden`}
  
  .timeline-screen-image {
    ${tw`w-full h-8`}
  }
  
  .timeline-slide-container {
    ${tw`relative h-full w-full -mt-2`}
    
    .timeline-slide {
      ${tw`absolute top-0 left-0 h-full w-full`}
      
      &-image {
        ${tw`w-full absolute top-0 object-cover`}
      }
    }
  }
`
