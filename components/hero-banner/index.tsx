'use client';
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Pic from "../../public/pic.jpg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
  "Hello there",
  "I’m Sutima",
  // "by the readable content of a page",
  // "when looking at its layout."
]

export default function Index() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col w-full mt-11 md:w-1/2">
          <div className="font-semibold">
            <MaskText />
            <h3 className="text-[25px]"> 
                <Typewriter
                    options={{
                        strings: ['a Freelance', 'a Frontend Developer', 'a Computer Science Student'],
                        autoStart: true,
                        loop: true,
                    }}
                /> 
            </h3>
            
            {/* <p className="mt-5">
            (Description about me)
            </p> */}
          </div>
        </div>

        <div className="hidden w-1/2 md:flex">
          <Image src={Pic} alt="Your Photo" className="mx-auto h-full w-full" />
        </div>
      </div>
    </main>
  );
}

export function MaskText() {

  const animation = {
    initial: { opacity: 0, y: 20 },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  return(
    <div ref={ref} className="text-[50px]">
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className="">
            <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className="m-0 font-semibold">{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}
