import styles from './AnalyzedLyrics.module.css';

const AnalyzedLyrics = ({ analyzedLyrics }: { analyzedLyrics: string }) => {
  return analyzedLyrics ? (
    <div className={styles.analyzedLyricsContainer}>{analyzedLyrics}</div>
  ) : null;
};
export default AnalyzedLyrics;
