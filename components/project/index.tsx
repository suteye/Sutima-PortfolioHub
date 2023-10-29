"use client";
import { useState, useEffect, useRef } from "react";
import Project from "./ProjectDetail";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import styles from "./style.module.scss";
import Link from "next/link";
import nosieMap from "../../public/images/noisemapping.png"
import salePage from "../../public/images/salePages.png"

const projects = [
  {
    title: "Noise Mapping",
    src: "noisemapping.png",
    path: "noise-mapping",
    color: "#000000",
  },
  {
    title: "POS System",
    src: "salePages.png",
    path: "pos-system",
    color: "#8C8C8C",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Index() {
  const [modal, setModal] = useState({ active: false, index: 0 });
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

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number,
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <Rounded>
        <p>
          <Link href="work" className="more-work">
            More work
          </Link>
        </p>
      </Rounded>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
             <div
                  className={styles.modal}
                  style={{ backgroundColor:  "#000000" }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={nosieMap}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
               
          </div>
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
             <div
                  className={styles.modal}
                  style={{ backgroundColor: "#8C8C8C" }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={salePage}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
          </div>
         
        </motion.div>
        {/* <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div> */}
        {/* <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          <Link href={"work"}>
            View
          </Link>
        </motion.div> */}
      </>
    </main>
  );
}
