'use client';

import { useContext } from 'react';
import { LyricsContext } from '@/app/contexts/LyricsContext/LyricsContext';
import { LyricsErrorContext } from '@/app/contexts/LyricsError/LyricsErrorContext';

const Lyrics = () => {
  const { lyrics } = useContext(LyricsContext);
  const { lyricsError } = useContext(LyricsErrorContext);

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
      {lyricsError || lyrics}
    </div>
  );
};

export default Lyrics;
