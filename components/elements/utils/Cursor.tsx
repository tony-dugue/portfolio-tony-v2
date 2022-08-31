import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  isDesktop: React.ReactNode
}

const Cursor: React.FunctionComponent<Props> = (props:Props) => {

  const { isDesktop } = props

  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isDesktop) {

      let posX = 0;
      let posY = 0;

      let mouseX = 0;
      let mouseY = 0;

      gsap.to({}, {
        repeat: -1,
        duration: 0.005,
        onRepeat: function () {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          gsap.set(followerRef.current, {
            css: {
              left: posX - 12,
              top: posY - 12
            }
          });

          gsap.set(cursorRef.current, {
            css: {
              left: mouseX,
              top: mouseY
            }
          });
        }
      });

      document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      })


      document.querySelectorAll('.link').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorRef.current!.classList.add('cursorActive');
          followerRef.current!.classList.add('followerActive');
        });
        el.addEventListener('mouseleave', () => {
          cursorRef.current!.classList.remove('cursorActive');
          followerRef.current!.classList.remove('followerActive');
        });
      });

    } else {
      followerRef.current!.classList.add('hidden');
      cursorRef.current!.classList.add('hidden');
    }

  }, [cursorRef, followerRef])

  return (
    <>
      <CursorMain ref={cursorRef} className='cursor'></CursorMain>
      <CursorFollower ref={followerRef} className='cursorFollower'></CursorFollower>
    </>
  )
}

export default Cursor;

const CursorMain = styled.div`
  ${tw`fixed bg-white w-4 h-4 select-none pointer-events-none z-50`}
  border-radius: 100%;
  transition: 0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
  0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
  mix-blend-mode: difference;
  transform: scale(1);
  will-change: left, top;
  
  &.cursorActive {
    transform: scale(0.5);
  }
`

const CursorFollower = styled.div`
  ${tw`fixed h-8 w-8 select-none pointer-events-none z-50`}
  border: 0.0625rem solid black;
  border-radius: 100%;
  transition: 0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
  0.1s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
  mix-blend-mode: difference;
  transform: translate(0.25rem, 0.25rem);
  will-change: left, top;
  
  &.followerActive {
    opacity: 1;
    transform: scale(3);
    border: 0.0625rem solid white;
  }
`
