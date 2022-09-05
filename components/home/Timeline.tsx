import {useEffect, useRef, useState} from 'react';
import { NAVLINKS, TIMELINE, TimelineNode } from '../../constants';
import styled from "styled-components";
import tw from "twin.macro";

const svgColor = '#D0D6DF';
const separation = 450;
const strokeWidth = 2;
const branch2X = 109;
const branch1X = 13;
const curveLength = 150;
const dotSize = 26;

const Timeline = () => {

  const [svgWidth, setSvgWidth] = useState(400);

  const svgLength = TIMELINE.filter(el => el.type !== 'year')?.length * separation;

  const timelineSvg = useRef<HTMLDivElement>(null);
  const svgContainer = useRef<HTMLDivElement>(null);

  let resultString = '';

  const drawDot = (timelineNode: TimelineNode, y: number) => {
    let x = branch1X;
    if (timelineNode.branch === 2) {
      x = branch2X;
    }
    if (timelineNode.diverge) {
      y = y - curveLength + 4 * dotSize;
    }
    if (timelineNode.converge) {
      y = y + curveLength - 4 * dotSize;
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
    const offset = (timelineNode.branch === 2 || timelineNode.parallel || timelineNode.diverge) ? 100 : 0;
    if (timelineNode.type === 'year') {
      return `<foreignObject x=${dotSize / 2 + 20 + offset} y=${y - dotSize / 2} width=${svgWidth - (dotSize / 2 + 20 + offset)} height='100'><p class='text-6xl'>${timelineNode.content}</p></foreignObject>`
    } else {
      const { description, title, logo } = timelineNode.content as TimelineContent;
      return `<foreignObject x=${dotSize / 2 + 20 + offset} y=${y - dotSize / 2} width=${svgWidth - (dotSize / 2 + 20 + offset)} height=${separation / 2}><p class='text-2xl'>${title}</p><p class='text-xl mt-2 text-gray-200 font-medium tracking-wide'>${description}</p></foreignObject>`
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

    resultString = createSvg(TIMELINE);
    timelineSvg.current!.innerHTML = resultString;

  }, [timelineSvg, svgContainer, svgWidth])

  return (
    <Section id={NAVLINKS[3].ref}>

      <TimelineIntro>
        <p className='seq'>Parcours</p>
        <h1 className='text-gradient seq'>Mon parcours</h1>
        <h2 className='seq'>Un aperçu des étapes de mon parcours professionnel</h2>
      </TimelineIntro>

      <TimelineContent>

        <TimelineContentCol style={{ display: 'flex' }} ref={svgContainer}>
          <svg width={svgWidth} height={svgLength} viewBox={`0 0 ${svgWidth} ${svgLength}`} fill='none' ref={timelineSvg}></svg>
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
