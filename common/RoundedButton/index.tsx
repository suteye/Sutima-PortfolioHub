import React, { useEffect, useRef, HTMLProps } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic';
import styles from './style.module.scss';

interface RoundedButtonProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Index({ children, backgroundColor = '#455CE9', ...attributes }: RoundedButtonProps) {
  const circle = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' }, 'enter')
      .to(circle.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit');
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo('enter', 'exit');
    }
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 100);
  };

  return (
    <Magnetic>
      <div className={styles.roundedButton} style={{overflow: "hidden"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}} {...attributes}>
          {
            children
          }
        <div ref={circle} style={{backgroundColor}} className={styles.circle}></div>
      </div>
    </Magnetic>
  );
}
