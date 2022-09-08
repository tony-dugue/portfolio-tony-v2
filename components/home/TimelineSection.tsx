import React, {useEffect, useRef, useState} from 'react';
import { NAVLINKS, Branch, BranchNode, CheckpointNode, ItemSize, NodeTypes, TIMELINE, TimelineNode } from '../../constants';
import Image from 'next/image';
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styled from "styled-components";
import tw from "twin.macro";

const svgColor = '#9CA3AF';
const animColor = '#FA5457';
const separation = 450;
const strokeWidth = 2;
const leftBranchX = 13;
const curveLength = 150;
const dotSize = 26;

type LinkedTimelineNode = LinkedCheckpointNode | LinkedBranchNode;
type LinkedCheckpointNode = LinkNode & CheckpointNode;
type LinkedBranchNode = LinkNode & BranchNode;

interface LinkNode {
  next?: LinkedTimelineNode;
  prev?: LinkedTimelineNode;
}

interface Props {
  isDesktop: boolean,
  isSmallScreen: () => {}
}

const TimelineSection: React.FunctionComponent<Props> = (props:Props) => {

  const { isDesktop, isSmallScreen } = props

  const [svgWidth, setSvgWidth] = useState(400);
  const [rightBranchX, setRightBranchX] = useState(109);

  const svgLength = TIMELINE.filter((item) => item.type === NodeTypes.CHECKPOINT && item.shouldDrawLine)?.length * separation;

  const timelineSvg = useRef<null | SVGSVGElement>(null);
  const svgContainer = useRef<null | HTMLDivElement>(null);
  const screenContainer = useRef<null | HTMLDivElement>(null);

  const addNodeRefsToItems = (timeline: TimelineNode[]): LinkedTimelineNode[] => {
    return timeline.map((node, idx) => ({
      ...node,
      next: timeline[idx + 1],
      prev: timeline[idx - 1],
    }));
  };

  const generateTimelineSvg = (timeline: Array<TimelineNode>): string => {
    let index = 1;
    let y = dotSize / 2;
    const timelineStyle = `<style>.str, .dot{stroke-width: ${strokeWidth}px}.anim-branch{stroke-dasharray: 186}</style>`;
    let isDiverged = false;

    const timelineSvg = addNodeRefsToItems(timeline).reduce(
      (svg: string, node: LinkedTimelineNode) => {
        const { type, next, prev } = node;
        let lineY = y;
        let dotY = y + separation / 2;

        switch (type) {
          case NodeTypes.CHECKPOINT:
          {
            const { shouldDrawLine } = node;

            // special handling for last checkpoint
            if (!next) {
              lineY = y - separation / 2;
            }

            // special handling for dot without line
            if (!shouldDrawLine) {
              dotY = y;
            }

            if (shouldDrawLine) {
              // TO DO fix syntax
              svg = shouldDrawLine ? drawLine(node, lineY, index, isDiverged) + svg : svg;
              y = y + separation;
              index++;
            }

            svg = svg.concat(drawDot(node, dotY, isDiverged));
          }
            break;
          case NodeTypes.DIVERGE:
          {
            isDiverged = true;

            svg = drawBranch(node, y, index) + svg;
          }
            break;
          case NodeTypes.CONVERGE:
          {
            isDiverged = false;

            // To Do fix syntax
            // Drawing CONVERGE branch with previous line and index
            svg = drawBranch(node, y - separation, index - 1) + svg;
          }
            break;
        }

        return svg;
      },
      timelineStyle
    );

    return timelineSvg;
  };

  const getDotString = (x: number, y: number) => {
    return `<rect class='dot' width=${dotSize} height=${dotSize} fill='#fafafa' x=${x - dotSize / 2} y=${y - dotSize / 2} ></rect><circle cx=${x} cy=${y} r='7' stroke=${animColor} class='dot' ></circle>`;
  };

  const drawDot = (
    timelineNode: LinkedCheckpointNode,
    y: number,
    isDiverged: boolean
  ) => {
    const { next, alignment } = timelineNode as LinkedCheckpointNode;

    // Diverging
    if (next && next.type === NodeTypes.DIVERGE) {
      y = y - curveLength + 6 * dotSize;
    }

    // Converging
    if (next && next.type === NodeTypes.CONVERGE) {
      y = y + curveLength - 6 * dotSize;
    }

    const dotString = getDotString(
      alignment === Branch.LEFT ? leftBranchX : rightBranchX,
      y
    );

    const textString = addText(timelineNode, y, isDiverged);

    return `${textString}${dotString}`;
  };

  const addText = (
    timelineNode: LinkedCheckpointNode,
    y: number,
    isDiverged: boolean
  ) => {
    const { title, subtitle, size, image } = timelineNode;

    const offset = isDiverged ? rightBranchX : 10;
    const foreignObjectX = dotSize / 2 + 10 + offset;
    const foreignObjectY = y - dotSize / 2;
    const foreignObjectWidth = svgWidth - (dotSize / 2 + 10 + offset);

    const titleSizeClass = size === ItemSize.LARGE ? "text-6xl" : "text-2xl";
    const logoString = image
      ? `<img src='${image}' class='timeline-logo' loading='lazy' width='100' height='32' alt='${image}' />`
      : "";
    const subtitleString = subtitle
      ? `<p class='text-xl mt-2 text-gray-200 font-medium tracking-wide'>${subtitle}</p>`
      : "";

    return `<foreignObject x=${foreignObjectX} y=${foreignObjectY} width=${foreignObjectWidth} 
        height=${separation}>${logoString}<p class='${titleSizeClass}'>${title}</p>${subtitleString}</foreignObject>`;
  };

  const drawLine = (
    timelineNode: LinkedCheckpointNode,
    y: number,
    i: number,
    isDiverged: boolean
  ) => {
    const { alignment, prev, next } = timelineNode as LinkedCheckpointNode;

    const isPrevDiverge = prev && prev.type === NodeTypes.DIVERGE;
    const isNextConverge = next && next.type === NodeTypes.CONVERGE;

    const lineY = Math.abs(y + separation);

    // Smaller line for Diverging
    if (isPrevDiverge) {
      return `<line class='str' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${animColor} />`;
    }

    // Smaller line for Converging
    if (isNextConverge) {
      return `<line class='str' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${animColor} />`;
    }

    const lineX = alignment === Branch.LEFT ? leftBranchX : rightBranchX;
    const divergedLineX =
      alignment === Branch.LEFT ? rightBranchX : leftBranchX;
    let str = `<line class='str' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${animColor} />`;
    if (isDiverged) {
      str = str.concat(
        `<line class='str' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${animColor} />`
      );
    }
    return str;
  };

  const drawBranch = (timelineNode: LinkedBranchNode, y: number, i: number) => {
    const { type } = timelineNode;

    switch (type) {
      case NodeTypes.DIVERGE:
        return `<path class='str' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
          y + curveLength / 2
        } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
          y + curveLength
        }' stroke=${svgColor} /><line class='str' x1=${rightBranchX} y1=${
          y + curveLength
        } x2=${rightBranchX} y2=${
          y + separation
        } stroke=${svgColor} /><path class='str anim-branch branch-${i}' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
          y + curveLength / 2
        } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
          y + curveLength
        }' stroke=${animColor} /><line class='str branch-line-${i}' x1=${rightBranchX} y1=${
          y + curveLength
        } x2=${rightBranchX} y2=${y + separation} stroke=${animColor} />`;
      case NodeTypes.CONVERGE:
        return `<path class='str' d='M ${rightBranchX} ${
          y + separation - curveLength
        } C ${rightBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation
        }' stroke=${svgColor} /><line class='str' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
          y + separation - curveLength
        )} stroke=${svgColor} /><path class='str anim-branch branch-${i}' d='M ${rightBranchX} ${
          y + separation - curveLength
        } C ${rightBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation
        }' stroke=${animColor} /><line class='str branch-line-${i}' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
          y + separation - curveLength
        )} stroke=${animColor} />`;
      default:
        return "";
    }
  };

  useEffect(() => {
    const containerWidth = svgContainer.current!.clientWidth;
    setSvgWidth(containerWidth);

    const resultSvgString = generateTimelineSvg(TIMELINE);
    timelineSvg.current!.innerHTML = resultSvgString;

    if (isSmallScreen()) {
      setRightBranchX(70);
    }

    const timeline = gsap
      .timeline({ defaults: { ease: Linear.easeNone, duration: 0.44 } })
      .addLabel("start");
    let duration;

    if (isDesktop && !isSmallScreen()) {
      timeline
        .to(screenContainer.current!.querySelector(".slide-1"), {opacity: 0, delay: 2.35})

        .fromTo(screenContainer.current!.querySelector(".slide-2"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-2"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-3"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-3"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-4"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-4"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-5"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-5"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-6"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-6"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-7"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-7"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-8"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-8"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-9"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-9"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-10"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-10"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-11"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-11"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-12"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-12"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-13"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-13"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-14"), { opacity: 0 }, { opacity: 1 })
        .to(screenContainer.current!.querySelector(".slide-14"), {opacity: 0, delay: 2.35 })

        .fromTo(screenContainer.current!.querySelector(".slide-15"), { opacity: 0 }, { opacity: 1 });

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
      duration = timeline.totalDuration() / 15;
    } else {
      screenContainer.current!.innerHTML = "";
      ScrollTrigger.create({
        trigger: svgContainer.current,
        start: "top center",
        end: `+=${svgLength}`,
        scrub: 0,
        animation: timeline,
      });
      duration = 3;
    }

    timeline
      .from(svgContainer.current!.querySelector(".line-1"), { scaleY: 0, duration: duration }, "start")

      .from(svgContainer.current!.querySelector(".line-2"), { scaleY: 0, duration: duration }, `start+=${duration}`)
      .from(svgContainer.current!.querySelector(".branch-2"), { strokeDashoffset: 186, duration: duration - 2 }, `start+=${duration}`)
      .from(svgContainer.current!.querySelector(".branch-line-2"), { scaleY: 0, duration: duration - 1 }, `start+=${2 * duration - 2}`)

      .from(svgContainer.current!.querySelector(".line-3"), { scaleY: 0, duration: duration }, `start+=${2 * duration}`)
      .from(svgContainer.current!.querySelector(".branch-line-3"), { scaleY: 0, duration: duration - 1 }, `start+=${2 * duration}`)
      .from(svgContainer.current!.querySelector(".branch-3"), { strokeDashoffset: 186, duration: duration - 2 }, `start+=${3 * duration - 1}`)

      .from(svgContainer.current!.querySelector(".line-4"), { scaleY: 0, duration: duration }, `start+=${3 * duration}`)

      .from(svgContainer.current!.querySelector(".line-5"), { scaleY: 0, duration: duration }, `start+=${4 * duration}`)

      .from(svgContainer.current!.querySelector(".line-6"), { scaleY: 0, duration: duration }, `start+=${5 * duration}`)

      .from(svgContainer.current!.querySelector(".line-7"), { scaleY: 0, duration: duration }, `start+=${6 * duration}`)
      .from(svgContainer.current!.querySelector(".branch-7"), { strokeDashoffset: 186, duration: duration - 2 }, `start+=${6 * duration}`)
      .from(svgContainer.current!.querySelector(".branch-line-7"), { scaleY: 0, duration: duration - 1 }, `start+=${7 * duration - 2}`)

      .from(svgContainer.current!.querySelectorAll(".line-8"), { scaleY: 0, duration: duration }, `start+=${7 * duration}`)

      .from(svgContainer.current!.querySelectorAll(".line-9"), { scaleY: 0, duration: duration }, `start+=${8 * duration}`)

      .from(svgContainer.current!.querySelectorAll(".line-10"), { scaleY: 0, duration: duration }, `start+=${9 * duration}`)

      .from(svgContainer.current!.querySelectorAll(".line-11"), { scaleY: 0, duration: duration }, `start+=${10 * duration}`)

      .from(svgContainer.current!.querySelectorAll(".line-12"), { scaleY: 0, duration: duration }, `start+=${11 * duration}`)

      .from(svgContainer.current!.querySelector(".line-13"), { scaleY: 0, duration: duration }, `start+=${12 * duration}`)
      .from(svgContainer.current!.querySelector(".branch-line-13"), { scaleY: 0, duration: duration - 1 }, `start+=${12 * duration}`)
      .from(svgContainer.current!.querySelector(".branch-13"), { strokeDashoffset: 186, duration: duration - 2 }, `start+=${13 * duration - 1}`)

      .from(svgContainer.current!.querySelectorAll(".line-14"), { scaleY: 0, duration: duration }, `start+=${13 * duration}`)

      .from(svgContainer.current!.querySelectorAll(".line-15"), { scaleY: 0, duration: duration }, `start+=${14 * duration - 1}`);

  }, [
    timelineSvg,
    svgContainer,
    svgWidth,
    rightBranchX,
    screenContainer,
    isDesktop,
    svgLength,
  ]);

  return (
    <Section id={NAVLINKS[3].ref} className="section-container">

      <TimelineIntro>
        <p className='seq'>Parcours</p>
        <h1 className='text-gradient seq'>Mon parcours</h1>
        <h2 className='seq'>Un aperçu des étapes de mon parcours professionnel</h2>
      </TimelineIntro>

      <TimelineContentCol>

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

      </TimelineContentCol>
    </Section>
  )
}

export default TimelineSection;

const Section = styled.section`
  ${tw`w-full relative select-none min-h-screen py-8 flex flex-col justify-center`}
`

const TimelineIntro = styled.div`
  ${tw`flex flex-col`}

  p {
    color: ${props => props.theme.colorPrimary};
    ${tw`uppercase tracking-widest text-sm`}
  }

  h1 {
    ${tw`md:text-5xl text-4xl font-bold w-fit mt-2`};

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  h2 {
    ${tw`text-2xl md:max-w-2xl w-full mt-2`};

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 1.3em;
    }
  }
`

const TimelineContentCol = styled.div`
  ${tw`grid grid-cols-12 gap-4 mt-20`}
  
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
