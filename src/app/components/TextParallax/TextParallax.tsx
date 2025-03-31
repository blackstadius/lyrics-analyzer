import React, { ReactElement, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StyledHeading from '../StyledHeading/StyledHeading';
import styles from './TextParallaxContent.module.css';

export const TextParallaxContent = ({
  imgUrl,
  heading,
  children,
}: {
  imgUrl: string;
  heading: string;
  children?: ReactElement;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        scale,
      }}
      ref={targetRef}
      className={styles.imageContainer}
    >
      <motion.div
        className={styles.imageOverlay}
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ heading }: { heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className={styles.overlayCopyContainer}
    >
      <StyledHeading heading={heading} />
    </motion.div>
  );
};
