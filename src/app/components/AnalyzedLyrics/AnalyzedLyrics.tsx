'use client';

import { useContext, useEffect, useState } from 'react';
import { LyricsContext } from '@/app/contexts/LyricsContext/LyricsContext';
import styles from './AnalyzedLyrics.module.css';
import analyzeLyrics from '@/app/langchain/analyzeLyrics';
import Loading from '../Loading/Loading';

export default function Lyrics() {
  const { lyrics } = useContext(LyricsContext);
  const [analyzedLyrics, setAnalyzedLyrics] = useState<string>('');
  const [isLoading, setIsLoading] = useState<Boolean>(false);

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
    <div
      style={{
        display: 'flex',
        whiteSpace: 'pre-wrap',
        textTransform: 'uppercase',
        textAlign: 'center',
        margin: '36px',
      }}
    >
      {isLoading ? <Loading /> : analyzedLyrics}
    </div>
  );
}
