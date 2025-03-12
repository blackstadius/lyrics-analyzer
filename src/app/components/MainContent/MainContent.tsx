'use client';
import { motion, useAnimate } from 'motion/react';
import AnimatedNote from '../AnimatedNote/AnimatedNote';
import LyricsForm from '../LyricsForm/LyricsForm';
import styles from './MainContent.module.css';
import { useEffect, useState, useContext } from 'react';
import AnalyzedLyrics from '../AnalyzedLyrics/AnalyzedLyrics';
import Lyrics from '../Lyrics/Lyrics';
import { LyricsContext } from '@/app/contexts/LyricsContext/LyricsContext';
import analyzeLyrics from '@/app/langchain/analyzeLyrics';
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
  const [analyzedLyrics, setAnalyzedLyrics] = useState<string>('');
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { lyrics } = useContext(LyricsContext);

  useEffect(() => {
    animate(sequence);
  }, []);

  useEffect(() => {
    if (!lyrics) {
      return;
    }

    const getAnalyzedLyrics = async () => {
      setIsLoading(true);
      const result = await analyzeLyrics(lyrics);
      setAnalyzedLyrics(result as string);
      setIsLoading(false);
    };

    getAnalyzedLyrics();
  }, [lyrics]);

  return (
    <>
      <main ref={scope} className={styles.main}>
        {/* <AnimatedNote /> */}
        <motion.div id="hiHeading">
          <h1 className={styles.headingOne}>Hi! 🤝</h1>
        </motion.div>
        <motion.div id="searchHeading">
          <h3 className={styles.headingThree}>
            Search for the lyrics you want to understand
          </h3>
        </motion.div>
        <LyricsForm />
        {isLoading ? (
          <AnimatedNote />
        ) : (
          <div className={styles.lyricsContainer}>
            <div className={styles.lyrics}>
              <Lyrics lyrics={lyrics} />
            </div>
            <div className={styles.lyrics}>
              <AnalyzedLyrics analyzedLyrics={analyzedLyrics} />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default MainContent;
