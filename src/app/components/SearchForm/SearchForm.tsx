'use client';
import { useFormStatus } from 'react-dom';
import styles from './SearchForm.module.css';
import { motion } from 'motion/react';
import { navigate } from '@/app/actions/navigate';

const LyricsForm = () => {
  const { pending } = useFormStatus();
  return (
    <motion.form action={navigate} className={styles.form}>
      <div className={styles.inputContainer}>
        <input required name="artist" placeholder="Artist" />
        <input required name="title" placeholder="Title" />
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={pending}
      >
        {pending ? 'Submitting' : 'Submit'}
      </motion.button>
    </motion.form>
  );
};
export default LyricsForm;
