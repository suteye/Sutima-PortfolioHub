"use client";

import styles from "./page.module.scss";

import { useState } from "react";

import { motion } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";

export default function Index() {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  const safeX = x !== null ? x : 0;
  const safeY = y !== null ? y : 0;


  return (
    <main className="h-screen">
      <motion.div
        className={`w-full h-full flex items-center justify-center bg-black  text-[64px] leading-[66px] cursor-default ${styles.mask}`}
        animate={{
          WebkitMaskPosition: `${safeX - size / 2}px ${safeY - size / 2}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className=" w-[1000px] p-10 text-black"
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center bg-black  text-[64px] leading-[66px] cursor-default">
        <p className=" w-[1000px] p-10 text-[#afa18f]">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong
          focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  );
}
