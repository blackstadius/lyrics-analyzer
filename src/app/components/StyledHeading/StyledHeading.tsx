import { Oooh_Baby } from 'next/font/google';
import styles from './StyledHeading.module.css';

const ooohBaby = Oooh_Baby({
  weight: ['400'],
  subsets: ['latin'],
});

const StyledHeading = ({ heading }: { heading: string }) => {
  return (
    <h1 className={` ${styles.heading} ${ooohBaby.className}`}>{heading}</h1>
  );
};

export default StyledHeading;
