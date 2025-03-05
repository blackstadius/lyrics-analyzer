'use client';

import { ReactNode, useState } from 'react';
import { LyricsContext } from './LyricsContext';

const LyricsProvider = ({ children }: { children: ReactNode }) => {
  const [lyrics, setLyrics] = useState('');

  return (
    <LyricsContext.Provider value={{ lyrics, setLyrics }}>
      {children}
    </LyricsContext.Provider>
  );
};

export default LyricsProvider;
