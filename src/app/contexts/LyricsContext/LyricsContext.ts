'use client';

import { createContext } from 'react';

export const LyricsContext = createContext<any>({
  lyrics: '',
  setLyrics: null,
});
