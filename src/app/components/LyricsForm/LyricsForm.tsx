'use client';
import { useActionState, useContext, useEffect } from 'react';
import styles from './LyricsForm.module.css';
import { LyricsContext } from '@/app/contexts/LyricsContext/LyricsContext';
import getLyrics from '@/app/actions/getLyrics';
import { LyricsErrorContext } from '@/app/contexts/LyricsError/LyricsErrorContext';

const initialState = '';

export default function LyricsForm() {
  const { setLyrics } = useContext(LyricsContext);
  const { setLyricsError } = useContext(LyricsErrorContext);

  const [state, formAction, isPending] = useActionState(
    getLyrics,
    initialState
  );

  useEffect(() => {
    if (typeof state === 'string') {
      setLyrics(state);
    } else if (state && 'error' in state) {
      setLyricsError(state.error);
    }
  }, [state, setLyrics, setLyricsError]);

  return (
    <form action={formAction} className={styles.form}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
        }}
      >
        <input required name="artist" placeholder="Artist" />
        <input required name="title" placeholder="Title" />
      </div>
      <button type="submit">{isPending ? 'Submitting' : 'Submit'}</button>
    </form>
  );
}
