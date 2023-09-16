"use client";

import styles from "./page.module.scss";

import { useRef, useState } from "react";

import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from './animation';
import useMousePosition from "../../utils/useMousePosition";
import Rounded from '../../common/RoundedButton';
export default function Index() {
  // const [isHovered, setIsHovered] = useState(false);

  // const { x, y } = useMousePosition();

  // const size = isHovered ? 400 : 40;

  // const safeX = x !== null ? x : 0;
  // const safeY = y !== null ? y : 0;

  const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description)
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
    <div ref={description} className={styles.description}>
    <div className={styles.body}>
        <p>
        {
            phrase.split(" ").map( (word, index) => {
                return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
            })
        }
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
        <div data-scroll data-scroll-speed={0.1}>
            <Rounded className={styles.button}>
                <p>About me</p>
            </Rounded>
        </div>
    </div>
</div>
  );
}
