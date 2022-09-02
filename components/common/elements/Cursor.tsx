import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion'

interface Props {
  isDesktop: React.ReactNode
}

const Cursor: React.FunctionComponent<Props> = (props:Props) => {

  const { isDesktop } = props

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect( () => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: '#0f3b56',
    },
    text: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      height: 100,
      width: 100,
      backgroundColor: "rgba(250,84,87, 0.1)",
    },
  }

  document.querySelectorAll('.link').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      setCursorVariant("text")
    });
    el.addEventListener('mouseleave', () => {
      setCursorVariant("default")
    });
  });

  return (
    <>
      <CursorMain className='cursor' variants={variants} animate={cursorVariant} />
    </>
  )
}

export default Cursor;

const CursorMain = styled(motion.div)`
  z-index: 10000;
  background-color: #111;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
`
