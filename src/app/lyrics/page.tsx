'use client';
import { useEffect, useState, useContext } from 'react';
import { LyricsContext } from '../contexts/LyricsContext/LyricsContext';
import analyzeLyrics from '../langchain/analyzeLyrics';
import AnimatedNote from '../components/AnimatedNote/AnimatedNote';
import Lyrics from '../components/Lyrics/Lyrics';
import AnalyzedLyrics from '../components/AnalyzedLyrics/AnalyzedLyrics';
import styles from './lyrics.module.css';

const LyricsPage = () => {
  const [analyzedLyrics, setAnalyzedLyrics] = useState<string>('');
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { lyrics } = useContext(LyricsContext);

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

  return isLoading ? (
    <AnimatedNote />
  ) : (
    <main className={styles.main}>
      <div className={styles.lyricsContainer}>
        <div className={styles.lyrics}>
          <Lyrics lyrics={lyrics} />
        </div>
        <div className={styles.lyrics}>
          <AnalyzedLyrics analyzedLyrics={analyzedLyrics} />
        </div>
      </div>
    </main>
  );
};

export default LyricsPage;
