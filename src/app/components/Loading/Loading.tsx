import styles from './Loading.module.css';
import Analyzing from '../../../../public/Analyzing.svg';

const AnimatedNote = () => {
  return (
    <div className={styles.container}>
      <Analyzing className={styles.drawAnimation} />
    </div>
  );
};
export default AnimatedNote;
