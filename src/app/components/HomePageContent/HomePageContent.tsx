'use client';
import { motion, useAnimate } from 'motion/react';
import SearchForm from '../SearchForm/SearchForm';
import styles from './HomePageContent.module.css';
import { useEffect } from 'react';
import Hi from '../../../../public/Hi.svg';
import Image from 'next/image';
import backgroundImage from '@/../public/record-player-1851576_1280.jpg';

const sequence: any[] = [['#hiHeading', { scale: [0, 1], opacity: [0, 1] }]];

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
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className={styles.subheading}>
            Search for the lyrics you want to understand
          </h1>
        </motion.div>
        <SearchForm />
      </div>
    </div>
  );
};

export default MainContent;
