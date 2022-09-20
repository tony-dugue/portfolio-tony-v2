import React, {RefObject, useCallback, useEffect, useRef, useState} from 'react';
import { NAVLINKS, Branch, BranchNode, CheckpointNode, ItemSize, NodeTypes, TIMELINE, TimelineNode } from '../../constants';
import Image from 'next/image';
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styled from "styled-components";
import tw from "twin.macro";
import Heading from "../headings/Heading";

const svgColor = '#9CA3AF';
const animColor = '#FCD34D';
const dotColor = '#9CA3AF';
const separation = 450;
const strokeWidth = 3;
const leftBranchX = 10;
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

  const svgCheckpointItems = TIMELINE.filter( item => item.type === NodeTypes.CHECKPOINT && item.shouldDrawLine);

  const svgLength = svgCheckpointItems?.length * separation;

  const timelineSvg = useRef<null | SVGSVGElement>(null);
  const svgContainer = useRef<null | HTMLDivElement>(null);
  const screenContainer = useRef<null | HTMLDivElement>(null);

  const addNodeRefsToItems = (timeline: Array<TimelineNode>
  ): Array<LinkedTimelineNode> => {
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
        const { type, next } = node;
        let lineY = y;
        let dotY = y + separation / 2;

        switch (type) {
          case NodeTypes.CHECKPOINT:
          {
            const { shouldDrawLine } = node;

            // special handling for last checkpoint
            if (!next) lineY = y - separation / 2;

            // special handling for dot without line
            if (!shouldDrawLine) dotY = y;

            if (shouldDrawLine) {
              // TO DO fix syntax
              svg = shouldDrawLine ? `${drawLine(node, lineY, index, isDiverged)}${svg}` : svg;
              y = y + separation;
              index++;
            }

            svg = svg.concat(drawDot(node, dotY, isDiverged));
          }
            break;
          case NodeTypes.DIVERGE:
          {
            isDiverged = true;

            svg = `${drawBranch(node, y, index)}${svg}`;
          }
            break;
          case NodeTypes.CONVERGE:
          {
            isDiverged = false;

            // Drawing CONVERGE branch with previous line and index
            svg = `${drawBranch(node, y - separation, index - 1)}${svg}`;
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
    return `<rect class='dot' width=${dotSize} height=${dotSize} fill='#fafafa' x=${x - dotSize / 2} y=${y - dotSize / 2} ></rect><circle cx=${x} cy=${y} r='7' stroke=${dotColor} class='dot' ></circle>`;
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

  const addText = ( timelineNode: LinkedCheckpointNode, y: number, isDiverged: boolean ) => {

    const { title, subtitle, period, size, image } = timelineNode;

    const offset = isDiverged ? rightBranchX : 10;
    const foreignObjectX = dotSize / 2 + 10 + offset;
    const foreignObjectY = y - dotSize / 2;
    const foreignObjectWidth = svgWidth - (dotSize / 2 + 10 + offset);

    const titleSizeClass = size === ItemSize.LARGE ? "text-big" : "";

    const logoString = image
      ? `<img src='${image}' class='timeline-logo' loading='lazy' width='100' height='32' alt='${image}' />`
      : "";

    const titleString = title
      ? `<p class='timeline-item-title ${titleSizeClass}'>${title}</p>`
      : "";

    const subtitleString = subtitle
      ? `<p class='timeline-item-subtitle'>${subtitle}</p>`
      : "";

    const periodString = period
      ? `<p class='timeline-item-period'>${period}</p>`
      : "";

    return `
       <foreignObject x=${foreignObjectX} y=${foreignObjectY} width=${foreignObjectWidth} height=${separation}>
          ${logoString}
          ${periodString}
          ${titleString}
          ${subtitleString}
       </foreignObject>
    `;
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

    let str = `<line class='str' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${animColor} />`;

    // If already diverged, draw parallel line to the existing line
    if (isDiverged) {
      const divergedLineX = alignment === Branch.LEFT ? rightBranchX : leftBranchX;

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

  const addLineSvgAnimation = (
    timeline: GSAPTimeline,
    duration: number,
    index: number
  ): GSAPTimeline => {
    const startTime = `start+=${duration * index}`;

    timeline.from(svgContainer.current!.querySelectorAll(`.line-${index + 1}`), { scaleY: 0, duration }, startTime);

    return timeline;
  };

  const addDivergingBranchLineAnimation = (
    timeline: GSAPTimeline,
    duration: number,
    index: number
  ): GSAPTimeline => {
    timeline
      .from(svgContainer.current!.querySelector(`.line-${index + 1}`), { scaleY: 0, duration }, `start+=${duration * index}`)
      .from(svgContainer.current!.querySelector(`.branch-${index + 1}`), { strokeDashoffset: 186, duration: duration - 2 }, `start+=${duration * index}`)
      .from(svgContainer.current!.querySelector(`.branch-line-${index + 1}`), { scaleY: 0, duration: duration - 1 }, `start+=${duration * (index + 1) - 2}`);

    return timeline;
  };

  const addConvergingBranchLineAnimation = (
    timeline: GSAPTimeline,
    duration: number,
    index: number
  ): GSAPTimeline => {
    timeline
      .from(
        svgContainer.current!.querySelector(`.line-${index + 1}`),
        { scaleY: 0, duration },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current!.querySelector(`.branch-line-${index + 1}`),
        { scaleY: 0, duration: duration - 1 },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current!.querySelector(`.branch-${index + 1}`),
        { strokeDashoffset: 186, duration: duration - 2 },
        `start+=${duration * (index + 1) - 1}`
      );

    return timeline;
  };

  const animateTimeline: any = useCallback((timeline: GSAPTimeline, duration: number): void => {
    let index = 0;

    addNodeRefsToItems(TIMELINE).forEach((item) => {
      const { type } = item;

      if (type === NodeTypes.CHECKPOINT && item.shouldDrawLine) {
        const { next, prev } = item;

        if (prev?.type === NodeTypes.DIVERGE) {
          addDivergingBranchLineAnimation(timeline, duration, index);
        } else if (next?.type === NodeTypes.CONVERGE) {
          addConvergingBranchLineAnimation(timeline, duration, index);
        } else {
          addLineSvgAnimation(timeline, duration, index);
        }

        index++;
      }
    });
  }, []);

  const setTimelineSvg: any = useCallback((svgContainer: RefObject<HTMLDivElement>, timelineSvg: RefObject<SVGSVGElement>) => {

    const containerWidth = svgContainer.current!.clientWidth;
    setSvgWidth(containerWidth);

    const resultSvgString = generateTimelineSvg(TIMELINE);
    timelineSvg.current!.innerHTML = resultSvgString;

    if (isSmallScreen()) {
      setRightBranchX(70);
    }
  }, []);

  const setSlidesAnimation = (timeline: GSAPTimeline): void => {
    svgCheckpointItems.forEach((_, index) => {
      // all except the first slide
      if (index !== 0) {
        timeline.fromTo(
          screenContainer.current!.querySelector(`.slide-${index + 1}`),
          { opacity: 0 },
          { opacity: 1 }
        );
      }

      // all except the last slide
      if (index !== svgCheckpointItems.length - 1) {
        timeline.to(screenContainer.current!.querySelector(`.slide-${index + 1}`), {opacity: 0, delay: 2.35 });
      }
    });
  };

  const initScrollTrigger: any = useCallback( (): {
    timeline: GSAPTimeline;
    duration: number;
  } => {

    const timeline = gsap
      .timeline({ defaults: { ease: Linear.easeNone, duration: 0.44 } })
      .addLabel("start");

    let duration: number;
    let trigger: HTMLDivElement | null;
    let start: string;
    let end: string;
    let additionalConfig = {};

    // Slide as a trigger for Desktop
    if (isDesktop && !isSmallScreen()) {

      // Animation for right side slides
      setSlidesAnimation(timeline);

      const platformHeight = screenContainer.current!.getBoundingClientRect().height;

      trigger = screenContainer.current;
      start = `top ${(window.innerHeight - platformHeight) / 2}`;
      end = `+=${svgLength - platformHeight}`;
      additionalConfig = {
        pin: true,
        pinSpacing: true,
      };
      duration = timeline.totalDuration() / 15;
    } else {
      // Clearing out the right side on mobile devices
      screenContainer.current!.innerHTML = "";
      trigger = svgContainer.current;
      start = "top center";
      end = `+=${svgLength}`;
      duration = 3;
    }

    ScrollTrigger.create({
      ...additionalConfig,
      trigger,
      start,
      end,
      scrub: 0,
      animation: timeline,
    });
    return { timeline, duration };
  }, []);

  useEffect(() => {
    // Generate and set the timeline svg
    setTimelineSvg(svgContainer, timelineSvg);

    const { timeline, duration }: { timeline: GSAPTimeline; duration: number } = initScrollTrigger();

    // Animation for Timeline SVG
    animateTimeline(timeline, duration);

  }, [
    timelineSvg,
    svgContainer,
    svgWidth,
    rightBranchX,
    screenContainer,
    isDesktop,
    svgLength,
    animateTimeline,
    setTimelineSvg,
    initScrollTrigger
  ]);

  return (
    <Section id={NAVLINKS[3].ref} className="section-container">

      <Heading
        title="Mon parcours"
        description="Un aperçu des étapes de mon parcours professionnel"
        textColor="inherit"
      />

      <TimelineContentCol>

        <TimelineContentColLeft className="line-svg" style={{ display: 'flex' }} ref={svgContainer}>
          <svg width={svgWidth} height={svgLength} viewBox={`0 0 ${svgWidth} ${svgLength}`} fill='none' ref={timelineSvg}></svg>
        </TimelineContentColLeft>

        <TimelineContentColRight>
          <TimelineScreenContainer ref={screenContainer}>

            <Image className='timeline-screen-image' src='/images/timeline/title-bar.svg' alt='Title bar' width={644} height={34} />

            <div className="timeline-slide-container">
              <div className="timeline-slide">

                {svgCheckpointItems.map((item, index) => (
                  <Image
                    className={`timeline-slide-image slide-${index + 1}`}
                    key={index}
                    src={(item as CheckpointNode).slideImage || ""}
                    alt="Timeline"
                    layout="fill"
                  />
                ))}

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
  ${tw`w-full relative select-none min-h-screen py-8 flex flex-col justify-center 2xl:container mx-auto`}
`

const TimelineContentCol = styled.div`
  ${tw`grid grid-cols-12 gap-4 mt-20`}
  
  .timeline-logo {
    width: 60px;
    height: 60px;
  }
  
  .timeline-title {
    ${tw`text-2xl`};
    
    &.text-big {
    "text-6xl"
    }
  }
  
  .timeline-description {
    ${tw`text-xl mt-2 font-medium tracking-wide`}
  }
`

const TimelineContentColLeft = styled.div`
  ${tw`col-span-12 md:col-span-6 mr-16`};

  @media screen and (max-width: 768px) {
  ${tw`mr-2`};
}

  .timeline-item-period {
    ${tw`text-xl font-medium tracking-wide`};
    color: ${props => props.theme.colorSecondary};

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  .timeline-item-title {
    ${tw`text-3xl font-bold tracking-wide`};
    color: ${props => props.theme.colorSecondary};
    margin-top: -0.4rem;

    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  
  .timeline-item-subtitle {
    ${tw`text-xl mt-2 font-medium tracking-wide`}
    color: ${props => props.theme.colorSecondary};

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`

const TimelineContentColRight = styled.div`
  ${tw`col-span-12 md:col-span-6 md:flex`}
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
