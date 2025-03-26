'use client';
import { motion, useAnimate } from 'motion/react';
import SearchForm from '../SearchForm/SearchForm';
import styles from './HomePageContent.module.css';
import { useEffect } from 'react';
import Hi from '../../../../public/Hi!.svg';
import Image from 'next/image';
import backgroundImage from '@/../public/record-player-1851576_1280.jpg';

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
    <div ref={scope} className={styles.background}>
      <div className={styles.imageContainer}>
        <Image src={backgroundImage} fill alt="background" />
      </div>
      <Hi className={styles.headingOne} id="hiHeading" />
      <div className={styles.content}>
        <motion.div id="searchHeading">
          <h2 className={styles.headingThree}>
            Search for the lyrics you want to understand
          </h2>
        </motion.div>
        <SearchForm />
      </div>
    </div>
  );
};

export default MainContent;
