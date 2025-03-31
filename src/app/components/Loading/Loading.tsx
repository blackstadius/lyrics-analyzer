import styles from './Loading.module.css';
import Analyzing from '../../../../public/Analyzing.svg';

const Loading = () => {
  return (
    <div className={styles.container}>
      <Analyzing className={styles.loading} />
    </div>
  );
};
export default Loading;
