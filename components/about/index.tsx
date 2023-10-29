"use client";

import styles from "./page.module.scss";

import { useRef, useState } from "react";

import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./animation";
import useMousePosition from "../../utils/useMousePosition";
import Rounded from "../../common/RoundedButton";
import Link from "next/link";
export default function Index() {
  // const [isHovered, setIsHovered] = useState(false);

  // const { x, y } = useMousePosition();

  // const size = isHovered ? 400 : 40;

  // const safeX = x !== null ? x : 0;
  // const safeY = y !== null ? y : 0;

  const phrase =
  `I'm Henry Dutton, a UI designer and Webflow developer with a passion
  for creating visually striking and user-friendly websites.`
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    // <main className="h-screen">
    //   <motion.div
    //     className={`w-full h-full flex items-center justify-center bg-black  text-[64px] leading-[66px] cursor-default ${styles.mask}`}
    //     animate={{
    //       WebkitMaskPosition: `${safeX - size / 2}px ${safeY - size / 2}px`,

    //       WebkitMaskSize: `${size}px`,
    //     }}
    //     transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    //   >
    //     <p
    //       onMouseEnter={() => {
    //         setIsHovered(true);
    //       }}
    //       onMouseLeave={() => {
    //         setIsHovered(false);
    //       }}
    //       className=" w-[1000px] p-10 text-black text-[clamp(1.25rem,0.11rem+4.862vw,4rem)] leading-[clamp(1.563rem,0.527rem+4.42vw,4.063rem)]"
    //     >
    //       I'm Sutima Phetsatien, currently a senior student at
    //       department of computer science, Thammasat University.
    //       Concentrating in front-end developer.
    //     </p>
    //   </motion.div>

    //   <div className="w-full h-full flex items-center justify-center bg-black  text-[clamp(1.25rem,0.11rem+4.862vw,4rem)] leading-[clamp(1.563rem,0.527rem+4.42vw,4.063rem)] cursor-default">
    //     <p className=" w-[1000px] p-10 text-[#afa18f]">
    //       I'm Sutima Phetsatien, currently a senior student at
    //       <span className="text-[#ec4e39]"> department of computer science, Thammasat University </span>
    //       concentrating on front-end developer.
    //     </p>
    //   </div>
    // </main>
    <main className=" container">
      <div
        ref={description}
        className="grid auto-cols-[1fr]  grid-cols-[1fr] md:grid-cols-[1fr_1fr] grid-rows-[auto] gap-x-12 gap-y-8"
      >
        <div className="col-span-1 row-span-1 text-[clamp(1.6rem,1.434rem+0.707vw,2rem)]">
          I'm Sutima Phetsatien, a UI designer and Webflow developer with a passion
          for creating visually striking and user-friendly websites.
        </div>
        <div className="flex flex-col items-start">
          <div className="mt-[clamp(0rem,-2.901rem+12.376vw,7rem)]">
            As a UI designer, I have an eye for detail and a deep understanding
            of user-centered design. I carefully craft intuitive and engaging
            interfaces that enhance user interactions and drive conversions.
          </div>
          <Link href="/about">
              <div className="group relative mt-5">
                <div className="relative flex h-[65px] w-[233px] items-center gap-x-4 overflow-hidden rounded-[100px] bg-black px-[1.9rem] py-[0.9rem] text-[1.1rem] normal-case leading-[1.2] tracking-[0] text-white hover:bg-[#242424]">
                  <div className="relative z-10 m-0 text-[16px] font-light">
                    More about me
                  </div>
                  <div className="relative z-20 flex h-[2.3rem] w-[2.3rem] flex-none rotate-0 scale-100 transform items-center justify-center rounded-[100%] bg-white transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-105 group-hover:bg-white group-hover:text-white">
            
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>            
            </Link>
        </div>
        {/* <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <div className="flex flex-col">
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </motion.p>
          <div data-scroll data-scroll-speed={0.1}>
            <Link href="/about">
              <div className="group relative">
                <div className="relative flex h-[65px] w-[233px] items-center gap-x-4 overflow-hidden rounded-[100px] bg-black px-[1.9rem] py-[0.9rem] text-[1.1rem] normal-case leading-[1.2] tracking-[0] text-white hover:bg-[#242424]">
                  <div className="relative z-10 m-0 text-[16px] font-light">
                    More about me
                  </div>
                  <div className="relative z-20 flex h-[2.3rem] w-[2.3rem] flex-none rotate-0 scale-100 transform items-center justify-center rounded-[100%] bg-white transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-105 group-hover:bg-white group-hover:text-white">
            
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>            
            </Link>
          </div>
        </div>
      </div>  */}
      </div>
    </main>
  );
}
