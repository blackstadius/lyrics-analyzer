'use client';

import { useContext } from 'react';
import { LyricsErrorContext } from '@/app/contexts/LyricsError/LyricsErrorContext';
import style from './Lyrics.module.css';

const Lyrics = ({ lyrics }: { lyrics: string }) => {
  const { lyricsError } = useContext(LyricsErrorContext);

  return lyrics ? (
    <div className={style.lyricsContainer}>{lyricsError || lyrics}</div>
  ) : null;
};

export default Lyrics;
