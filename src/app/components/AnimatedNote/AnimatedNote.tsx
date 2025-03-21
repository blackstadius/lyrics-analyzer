import { motion } from 'motion/react';
import styles from './AnimatedNote.module.css';

const pathData =
  'M28.795 1.455l-17.593 6.224v15.417c-0.831-0.987-2.075-1.615-3.465-1.615-2.502 0-4.532 2.029-4.532 4.533s2.029 4.532 4.532 4.532c2.476 0 4.486-1.988 4.527-4.454h0.004v-17.659l15.461-5.47v14.269c-0.831-0.987-2.075-1.614-3.466-1.614-2.503 0-4.531 2.028-4.531 4.532s2.028 4.532 4.531 4.532 4.532-2.029 4.532-4.532c0-0.086-0.008-0.17-0.013-0.254h0.013v-18.44zM7.737 29.479c-1.911 0-3.465-1.555-3.465-3.465s1.555-3.466 3.465-3.466 3.465 1.555 3.465 3.466c0 1.911-1.555 3.465-3.465 3.465zM24.263 23.614c-1.911 0-3.465-1.555-3.465-3.465s1.554-3.465 3.465-3.465c1.911 0 3.466 1.555 3.466 3.465s-1.555 3.465-3.466 3.465z';

const AnimatedNote = () => {
  return (
    <div className={styles.splashScreen}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          id="animatedNote"
          transform="translate(34, 34)"
          d={pathData}
          fill="transparent"
          stroke="pink"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0.5,
          }}
          strokeDasharray="0 1"
        />
      </svg>
    </div>
  );
};
export default AnimatedNote;
