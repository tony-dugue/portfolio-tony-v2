import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';

import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  classes: string,
  isDesktop: boolean,
  name: string,
  image: string,
  blurImage: string,
  description: string,
  gradient: string[],
  url: string,
  tech: string[]
}

const ProjectCard: React.FunctionComponent<Props> = (props:Props) => {

  const { classes, isDesktop, name, image, blurImage, description, gradient: [stop1, stop2], url, tech } = props

  const projectCard = useRef<HTMLDivElement>(null);

  useEffect(() => {
    VanillaTilt.init(projectCard.current!, {
      max: 5,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      gyroscope: false
    });
  }, [projectCard]);


  return (
    <ProjectCardLink href={url} target='_blank' rel='noreferrer' className={`link ${classes}`} style={{ maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)" }}>
      <ProjectCardWrapper ref={projectCard} style={{ background: `linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)` }}>

        <Image src='/svgs/project-bg.svg' layout="fill" alt='Project' className="project-img-first" />
        <Image placeholder='blur' blurDataURL={blurImage} src={image} alt={name} layout='fill' className="project-img-second" />

        <div className="tech-ctr-first" style={{ background: `linear-gradient(180deg, ${stop1} 0%, rgba(0,0,0,0) 100%)` }}></div>
        <div className="tech-ctr-second" style={{ background: `linear-gradient(0deg, ${stop1} 10%, rgba(0,0,0,0) 100%)` }}></div>

        <h1 className='tech-name'>{name}</h1>

        <div className="tech-icons">
          <div className="tech-icons-item">
            {tech.map((el, i) => (
              <img className={i % 2 === 0 ? 'tech-icons-item-img' : ''} src={`/svgs/tech/${el}.svg`} alt={el} height={45} width={45} key={el} />
            ))}
          </div>
        </div>

        <h2 className='tech-desc'>{description}</h2>

      </ProjectCardWrapper>
    </ProjectCardLink>
  )
}

export default ProjectCard;

const ProjectCardLink = styled.a`
  flex: 1 0 auto;
  //WebkitMaskImage: -webkit-radial-gradient(white, black),
  ${tw`overflow-hidden rounded-3xl`}
  
  &.with-margin-right {
    ${tw`md:mr-10 mr-6`}
  }
`

const ProjectCardWrapper = styled.div`
  height: 22rem;
  width: 38rem;
  background: black;
  transform-style: preserve-3d;
  transform: perspective(1000px);

  ${tw`rounded-3xl relative p-6 flex-col flex justify-between`};

  @media screen and (max-width: 768px) {
    height: 26rem;
  }

  img {
    object-fit: cover;
  }

  .project-img-first {
    ${tw`absolute w-full h-full top-0 left-0 opacity-20`}
  }
  
  .project-img-second {
    width: 16.8rem !important;
    transform: rotate(-22.5deg);
    height: unset !important;
    min-width: unset !important;
    max-height: unset !important;
    object-fit: contain !important;
    left: unset !important;
    right: 2rem !important;
    bottom: unset !important;
    ${tw`absolute top-0 rounded-xl shadow-xl z-0`}
  }

  .tech-icons {
    transform: rotate(-22.5deg) translateZ(2rem);
    ${tw`w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden`}
    
    &-item {
      ${tw`flex flex-col pb-8`}
      
      &-img {
        ${tw`ml-16 mb-4`}
      }
    }
  }
  
  .tech-ctr-first {
    ${tw`absolute top-0 left-0 w-full h-20`}
  }

  .tech-ctr-second {
    ${tw`absolute bottom-0 left-0 w-full h-32`}
  }
  
  .tech-name {
    transform: translateZ(3rem);
    ${tw`text-2xl sm:text-3xl z-10 pl-2 transform-gpu`}
  }
  
  .tech-desc {
    color: ${props => props.theme.colorWhite};
    transform: translateZ(0.8rem);
    ${tw`text-lg z-10 tracking-wide font-medium transform-gpu`}
  }
`
