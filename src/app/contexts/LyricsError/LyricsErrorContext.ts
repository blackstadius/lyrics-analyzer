'use client';
import { createContext } from 'react';

export const LyricsErrorContext = createContext<any>({
  lyricsError: null,
  setLyricsError: null,
});
