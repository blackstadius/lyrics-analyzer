'use client';

import { ReactNode, useState } from 'react';
import { LyricsErrorContext } from './LyricsErrorContext';

const LyricsErrorProvider = ({ children }: { children: ReactNode }) => {
  const [lyricsError, setLyricsError] = useState(null);

  return (
    <LyricsErrorContext value={{ lyricsError, setLyricsError }}>
      {children}
    </LyricsErrorContext>
  );
};

export default LyricsErrorProvider;
