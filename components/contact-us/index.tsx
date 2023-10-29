import styles from './style.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Eye from '../../public/images/eye-pic.jpg'
import Magnetic from '@/common/Magnetic';
import Link from 'next/link';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
      <motion.div style={{ y }} ref={container} className={styles.contact}>
        <div className={styles.body}>
          <div className={styles.title}>
            <span>
              <div className={styles.imageContainer}>
                <Image fill={true} alt={"image"} src={Eye} />
              </div>
              <h2 className=' font-bold'>LET'S GET</h2>
            </span>
            <h2 className=' font-bold'>IN TOUCH</h2>
            {/* <motion.div style={{x}} className={styles.buttonContainer}>
                        <div backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </div>
                    </motion.div> */}
            <motion.svg
              style={{ rotate, scale: 2 }}
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </motion.svg>
          </div>
          <div className={styles.nav}>
            <div className={styles.button}>
              <p>sutima.phe@gmail.com</p>
            </div>
            <div className={styles.button}>
              <p>0634659559</p>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <span>
                <h3>Version</h3>
                <p>2023 © Edition</p>
              </span>
            </div>
            <div>
              <span>
                <h3>socials</h3>
                <Magnetic>
                  <Link
                    href="https://github.com/suteye"
                    passHref
                    target="_blank"
                  >
                    <p>Github</p>
                  </Link>
                </Magnetic>
              </span>
              <Magnetic>
                  <a    href="https://www.linkedin.com/in/sutima-phetsatien-1412a2263" target="_blank" rel="noopener noreferrer">
                    <p>Linkedin</p>
                  </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </motion.div>
    );
}