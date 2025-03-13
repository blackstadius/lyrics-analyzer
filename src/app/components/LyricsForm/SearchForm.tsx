'use client';
import { useActionState, useContext, useEffect } from 'react';
import styles from './SearchForm.module.css';
import { LyricsContext } from '@/app/contexts/LyricsContext/LyricsContext';
import getLyrics from '@/app/actions/getLyrics';
import { LyricsErrorContext } from '@/app/contexts/LyricsError/LyricsErrorContext';
import { motion } from 'motion/react';

const initialState = '';

const LyricsForm = () => {
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
    <motion.form action={formAction} className={styles.form}>
      <div className={styles.inputContainer}>
        <input required name="artist" placeholder="Artist" />
        <input required name="title" placeholder="Title" />
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
      >
        {isPending ? 'Submitting' : 'Submit'}
      </motion.button>
    </motion.form>
  );
};
export default LyricsForm;
