import {useEffect, useRef} from "react";
import styled, {keyframes} from "styled-components";
import {motion} from "framer-motion";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const containerVariants = {
  hidden : { opacity: 0 },
  show : { opacity: 1, transition : { delayChildren: 1, staggerChildren: 0.2 } }
}

const letterVariants = {
  hidden : { opacity: 0 },
  show : { opacity: 1 }
}

const Hero = () => {

  const sectionRef = useRef<HTMLDivElement>(null)
  const roundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        scrub: true,
        pin: false
      }
    }).to(roundRef.current, { opacity: 0 })

  }, [])

  return (
    <div id="section-hero">
      <Section  ref={sectionRef}>

        <Container>

          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <Title>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.15" data-scroll-speed="6">T</motion.h1>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.13" data-scroll-speed="6">o</motion.h1>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.09" data-scroll-speed="6">n</motion.h1>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.09" data-scroll-speed="6">y</motion.h1>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.06" data-scroll-speed="6">&nbsp;</motion.h1>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.06" data-scroll-speed="6">D</motion.h1>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.04" data-scroll-speed="6">u</motion.h1>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.04" data-scroll-speed="6">g</motion.h1>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.04" data-scroll-speed="6">u</motion.h1>
              <motion.h1 variants={letterVariants} data-scroll data-scroll-delay="0.04" data-scroll-speed="6">é</motion.h1>
            </Title>

            <Description variants={letterVariants} data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
              <mark>Développeur Web et Mobile - FullStack JS</mark>
              <br />Rennes, France 🇫🇷
              <span>Spécialisé en React, VueJS et NestJS.</span>
            </Description>
          </motion.div>

          <Round className="round" ref={roundRef}>
            <Circle>&#x2193;</Circle>
            <img src='/images/rounded-text-black.png' alt="animation pour aller à la prochaine section" />
          </Round>

        </Container>

      </Section>
    </div>
  )
}

export default Hero

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  margin-top: ${props => props.theme.navHeight};
  width: 100%;
  position: relative;
`

const Container = styled.div`
  width: 75%;
  min-height: 90vh;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Title = styled.div`
  font-size: 3.2em;
  font-family: ${props => props.theme.fontDin};
  font-weight: 900;
  text-transform: uppercase;
  color: ${props => props.theme.colorTitle};
  line-height: 0.7;
  margin-top: 0;
  
  display: flex;
`

const Description = styled(motion.p)`
  margin-top: 3rem;
  margin-bottom: 2rem;
  
  color: ${props => props.theme.colorText};
  font-size: ${props => props.theme.fontlg};
  line-height: 1.5;
  
  mark {
    position: relative;
    padding: 4px 5px;
    border-radius: 6px;
    margin-right: 5px;
    
    background-color: ${props => props.theme.colorMark};
  }
  
  span {
    display: block;
    margin-top: 10px;
    color: ${props => props.theme.colorBlack};
  }
`

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`

const Round = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 90%;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  opacity: 1;
  
  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 25s linear infinite;
  }
`

const Circle = styled.span`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  background-color: ${props => props.theme.colorSecondary};
  color: ${props => props.theme.colorBackground};
  font-size: 1.5rem;
`
