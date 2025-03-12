import styles from './AnalyzedLyrics.module.css';

export default function AnalyzedLyrics({
  analyzedLyrics,
}: {
  analyzedLyrics: string;
}) {
  return analyzedLyrics ? (
    <div className={styles.analyzedLyricsContainer}>{analyzedLyrics}</div>
  ) : null;
}
