import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';
import { IProject } from '../../constants';

import styled from "styled-components";
import tw from "twin.macro";

const ProjectCard = ({ project, animationEnabled }: { project: IProject; animationEnabled: boolean; }) => {

  const { name, techs, image, blurImage, description, gradient: [color1, color2], url } = project

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
    <ProjectCardLink href={url} target='_blank' rel='noreferrer' className="link snap-start" style={{ maxWidth: animationEnabled ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)" }}>
      <ProjectCardWrapper ref={projectCard} style={{ background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)` }}>

        <Image src='/svgs/project-bg.svg' layout="fill" alt='Project' className="project-img-first" />
        <Image placeholder='blur' blurDataURL={blurImage} src={image} alt={name} layout='fill' className="project-img-second" />

        <div className="tech-ctr-first" style={{ background: `linear-gradient(180deg, ${color1} 0%, rgba(0,0,0,0) 100%)` }}></div>
        <div className="tech-ctr-second" style={{ background: `linear-gradient(0deg, ${color1} 10%, rgba(0,0,0,0) 100%)` }}></div>

        <h1 className='tech-name'>{name}</h1>

        <div className="tech-icons">
          <div className="tech-icons-item">
            {techs.map((tech, i) => (
              <div className={i % 2 === 0 ? 'tech-icons-item-img' : ''} key={tech}>
                <Image src={`/svgs/skills/${tech}.svg`} alt={tech} height={45} width={45} objectFit="contain" />
              </div>
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
  ${tw`overflow-hidden rounded-3xl`}
  
  &.with-margin-right {
    ${tw`md:mr-10 mr-6`}
  }
`

const ProjectCardWrapper = styled.div`
  height: 22rem;
  width: 38rem;
  background: ${props => props.theme.colorBlack};
  transform-style: preserve-3d;
  transform: perspective(1000px);

  ${tw`rounded-3xl relative p-6 flex-col flex justify-between`};

  @media screen and (max-width: 1024px) {
    height: 30rem;
    width: 42rem;
  }
  
  @media screen and (max-width: 768px) {
    height: 40vh;
    width: 100%;
  }

  img {
    ${tw`object-cover`}
  }

  .project-img-first {
    ${tw`absolute w-full h-full top-0 left-0 opacity-20`}
  }
  
  .project-img-second {
    ${tw`absolute top-0 rounded-xl shadow-xl z-0`}
    width: 16.8rem !important;
    transform: rotate(-22.5deg);
    height: unset !important;
    min-width: unset !important;
    max-height: unset !important;
    object-fit: contain !important;
    left: unset !important;
    right: 2rem !important;
    bottom: unset !important;

    @media screen and (max-width: 768px) {
      width: 10rem !important;
    }
  }

  .tech-icons {
    ${tw`w-1/2 h-full absolute left-24 top-0 sm:flex items-center`}
    transform: rotate(-22.5deg) translateZ(2rem);

    @media screen and (max-width: 768px) {
      ${tw`left-7 top-16 justify-start`}
      transform: rotate(0deg) translateZ(0rem);
    }
    
    &-item {
      ${tw`flex flex-col pb-8`};

      @media screen and (max-width: 768px) {
        ${tw`flex-row`}
      }
      
      &-img {
        ${tw`ml-16 mb-4`};

        @media screen and (max-width: 768px) {
          ${tw`ml-0 mb-0 mx-3`}
        }
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
    ${tw`text-2xl sm:text-3xl z-10 pl-2`}
    color: ${props => props.theme.colorWhite};
    transform: translateZ(3rem);
  }
  
  .tech-desc {
    ${tw`text-base z-10 tracking-wide font-medium text-left ml-auto`}
    color: ${props => props.theme.colorWhite};
    transform: translateZ(0.8rem);
    width: 60%;
    padding: 5px 15px;
    border-radius: 20px;
    background: rgba(0,0,0, 0.2);

    @media screen and (max-width: 1024px) {
      ${tw`text-lg`}
    }

    @media screen and (max-width: 768px) {
      ${tw`text-base`}
      width: 100%;
    }
  }
`
