'use client';
import { useState, useEffect, useRef } from 'react';
import Project from './ProjectDetail';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';

const projects = [
    {
      title: "Undefined",
      src: "c2montreal.png",
      color: "#000000"
    },
    {
      title: "Undefined",
      src: "officestudio.png",
      color: "#8C8C8C"
    },
    {
      title: "Undefined",
      src: "locomotive.png",
      color: "#EFE8D3"
    },
    {
      title: "Undefined",
      src: "silencio.png",
      color: "#706D63"
    }
  ]

  const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Index() {
  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef<any>(null);
  let yMoveContainer = useRef<any>(null);
  let xMoveCursor = useRef<any>(null);
  let yMoveCursor = useRef<any>(null);
  let xMoveCursorLabel = useRef<any>(null);
  let yMoveCursorLabel = useRef<any>(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }

  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    moveItems(x, y);
    setModal({ active, index });
  };


    return(
      <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className="flex items-center pl-[200px] pr-[200px] flex-col mt-[300px]">
      <div className="max-w-[1400px] w-full flex-col items-center justify-center mb-[100px] ">
        {
          projects.map( (project, index) => {
            return <Project index={index} title={project.title} manageModal={manageModal} key={index}/>
          })
        }
      </div>
      <Rounded>
        <p>More work</p>
      </Rounded>
      <>
          <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className="h-[350px] w-[400px] fixed top-[50%] left-[50%] bg-white pointer-events-none overflow-hidden z-30">
              <div style={{top: index * -100 + "%"}} className="h-full w-full relative transition-top duration-500 ease-in-out">
              {
                  projects.map( (project, index) => {
                  const { src, color } = project
                  return <div className="h-full w-full flex items-center justify-center" style={{backgroundColor: color}} key={`modal_${index}`}>
                      <Image 
                      src={`/images/${src}`}
                      width={300}
                      height={0}
                      alt="image"
                      className='h-auto'
                      />
                  </div>
                  })
              }
              </div>
          </motion.div>
          <motion.div ref={cursor} className="w-[80px] h-[80px] rounded-[50%] bg-[#455CE9] text-white fixed z-30 items-center justify-center text-[14px] font-light pointer-events-none" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
          <motion.div ref={cursorLabel} className="w-[80px] h-[80px] rounded-[50%] bg-[#455CE9] text-white fixed z-30 items-center justify-center text-[14px] font-light pointer-events-none bg-transparent" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
      </>
    </main>
    )
}