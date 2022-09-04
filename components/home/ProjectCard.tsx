import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  name: string,
  image: string,
  description: string,
  gradient: string[],
  url: string,
  tech: string[]
}

const ProjectCard: React.FunctionComponent<Props> = (props:Props) => {

  const { name, image, description, gradient, url, tech} = props

  const projectCard = useRef<HTMLDivElement>(null);

  useEffect(() => {
    VanillaTilt.init(projectCard.current!, {
      max: 5,
      speed: 400,
      glare: true,
      'max-glare': 0.2
    });
  }, [projectCard]);


  return (
    <a href={url} target='_blank' rel='noreferrer' className='link' style={{ maxWidth: '100%' }}>
      <ProjectCardWrapper ref={projectCard} style={{ background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)` }}>

        <img src='/svgs/project-bg.svg' alt='Project' className="project-img-first" />
        <img src={image} alt={name} className="project-img-second" />

        <div className="tech-ctr-first" style={{ background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)` }}></div>
        <div className="tech-ctr-second" style={{ background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)` }}></div>

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
    </a>
  )
}

export default ProjectCard;

const ProjectCardWrapper = styled.div`
  height: 22rem;
  width: 38rem;
  background: black;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  ${tw`rounded-3xl relative overflow-hidden p-6 flex-col flex justify-between`};

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
    transform: rotate(-22.5deg) translateZ(1.875rem);
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
    transform: rotate(-22.5deg) translateZ(1.875rem);
    ${tw`w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden`}
    
    &-item {
      ${tw`flex flex-col gap-4 pb-8`}
      
      &-img {
        ${tw`ml-16`}
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
    ${tw`text-3xl sm:text-4xl z-10`}
  }
  
  .tech-desc {
    color: ${props => props.theme.colorWhite};
    ${tw`text-xl z-10 tracking-wide font-medium`}
  }
`
