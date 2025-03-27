import { useRef } from 'react';
import styles from './Lyrics.module.css';
import { useScroll, useTransform, motion } from 'motion/react';

const LyricsContent = ({ content }: { content: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start 50vh'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={targetRef}
      className={styles.lyricsContainer}
      style={{ opacity, scale }}
    >
      <div className={styles.lyrics}>{content}</div>
    </motion.div>
  );
};

export default LyricsContent;
