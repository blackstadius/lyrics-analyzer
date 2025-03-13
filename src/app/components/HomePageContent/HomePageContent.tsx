'use client';
import { motion, useAnimate } from 'motion/react';
import SearchForm from '../LyricsForm/SearchForm';
import styles from './HomePageContent.module.css';
import { useEffect } from 'react';
import Lyrics from '../Lyrics/Lyrics';

Lyrics;

const sequence: any[] = [
  ['#hiHeading', { scale: [0.4, 1] }, { ease: 'circInOut', duration: 1 }],
  [
    '#searchHeading',
    { scale: [0, 1] },
    { scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 } },
    { opacity: [0, 1] },
  ],
  [
    'form',
    { scale: [0, 1] },
    { scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 } },
    { opacity: [0, 1] },
  ],
];

const MainContent = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(sequence);
  }, []);

  return (
    <div className={styles.blurredBackground}>
      <div ref={scope} className={styles.background}>
        <motion.div id="hiHeading">
          <h1 className={styles.headingOne}>Hi!</h1>
        </motion.div>
        <div className={styles.content}>
          <motion.div id="searchHeading">
            <h1 className={styles.headingThree}>
              Search for the lyrics you want to understand
            </h1>
          </motion.div>
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
