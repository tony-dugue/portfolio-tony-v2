import { useEffect, useRef } from 'react';
import { NAVLINKS, TIMELINE, TimelineNode } from '../../constants';
import styled from "styled-components";
import tw from "twin.macro";

const svgColor = '#D0D6DF';
const separation = 560;
const strokeWidth = 2;
const branch2X = 109;
const branch1X = 13;
const curveLength = 150;
const dotSize = 26;

const Timeline = () => {

  const lineLength = TIMELINE.filter(el => el.type !== 'year')?.length * separation;

  const timelineSvg = useRef<HTMLDivElement>(null);

  let resultString = '';


  const drawDot = (timelineNode: TimelineNode, y: number) => {
    let x = branch1X;
    if (timelineNode.branch === 2) {
      x = branch2X;
    }
    if(timelineNode.diverge) {
      y = y - curveLength + dotSize;
    }
    if(timelineNode.converge) {
      y = y - dotSize;
    }
    return `<rect class='dot' width=${dotSize} height=${dotSize} fill='#111827' x=${x - dotSize/2} y=${y - dotSize/2} ></rect><circle cx=${x} cy=${y} r='7' stroke=${svgColor} class='str dot' ></circle>`;
  };

  const drawLine = (timelineNode: TimelineNode, y: number) => {
    if(timelineNode.converge || timelineNode.diverge) {
      if(timelineNode.diverge) {
        return `<line class='str' x1=${branch1X} y1=${y} x2=${branch1X} y2=${Math.abs(y + separation - curveLength)} stroke=${svgColor} />`
      } else {
        return `<line class='str' x1=${branch1X} y1=${y} x2=${branch1X} y2=${y + separation - curveLength} stroke=${svgColor} />`
      }

    } else {

    }
  };

  const drawBranch = (timelineNode: TimelineNode, y: number) => {
    if (timelineNode.converge) {
      return `<path class='str' d='M ${branch2X} ${y + separation - 2*curveLength} C ${branch2X} ${y + separation - 2*curveLength + curveLength/2} ${branch1X} ${y + separation - 2*curveLength + curveLength/2} ${branch1X} ${y + separation - curveLength}' stroke=${svgColor} /><line class='str' x1=${branch2X} y1=${y} x2=${branch2X} y2=${Math.abs(y + separation - 2*curveLength)} stroke=${svgColor} />`;
    } else {
      return `<path class='str' d='M ${branch1X} ${y} C ${branch1X} ${y + curveLength/2} ${branch2X} ${y + curveLength/2} ${branch2X} ${y + curveLength}' stroke=${svgColor} /><line class='str' x1=${branch2X} y1=${y + curveLength} x2=${branch2X} y2=${Math.abs(y + separation - curveLength)} stroke=${svgColor} />`;
    }

  };

  useEffect(() => {
    resultString = createSvg(TIMELINE);
    timelineSvg.current!.innerHTML = resultString;
  }, [timelineSvg])

  const createSvg = (timeline: TimelineNode[]) => {
    let idx = 0;
    let y = 13;
    let result = `<style>.str{stroke-width: ${strokeWidth}px}</style>`;

    for (let node of timeline) {
      if (idx === 0) {
        result = result.concat(drawDot(node, y));
        idx++;
        continue;
      }
      if (node.type === 'year') {

      } else {
        if (node.branch === 2 && (idx === 1 || idx === 2)) {
          if (node.diverge || node.converge) {
            result = drawLine(node, y) + result;
            result = drawBranch(node, y) + result;
            result = result.concat(drawDot(node, y + separation/2));
            y = Math.abs(y + separation - curveLength);
            console.log(y,idx)
          } else {

          }
        }
      }

      idx++;
    }

    return result
  }

  return (
    <Section id={NAVLINKS[3].ref}>

      <TimelineIntro>
        <p className='seq'>MILESTONES</p>
        <h1 className='text-gradient seq'>Timeline</h1>
        <h2 className='seq'>A quick recap of proud moments</h2>
      </TimelineIntro>

      <TimelineContent>

        <TimelineContentCol style={{ display: 'flex' }}>
          <div className='line-svg'>
            <svg width='120' height={lineLength} viewBox={`0 0 120 ${lineLength}`} fill='none' ref={timelineSvg} />
          </div>
        </TimelineContentCol>

        <TimelineContentCol>

        </TimelineContentCol>

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
  ${tw`grid grid-cols-12`}
`

const TimelineContentCol = styled.div`
  ${tw`col-span-6`}
`
