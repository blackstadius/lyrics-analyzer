'use client';

import styles from './SearchForm.module.css';
import { motion } from 'motion/react';
import { navigate } from '@/app/actions/navigate';

const LyricsForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      action={navigate}
      className={styles.form}
    >
      <div className={styles.inputContainer}>
        <input
          autoFocus
          autoCapitalize="words"
          className={styles.input}
          required
          name="artist"
          placeholder="Artist"
        />
        <input
          autoCapitalize="words"
          className={styles.input}
          required
          name="title"
          placeholder="Title"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#fff' }}
        whileTap={{ scale: 0.95 }}
        type="submit"
      >
        Submit
      </motion.button>
    </motion.form>
  );
};
export default LyricsForm;
