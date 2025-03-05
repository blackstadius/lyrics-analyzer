import styles from './page.module.css';
import AnalyzedLyrics from './components/AnalyzedLyrics/AnalyzedLyrics';
import LyricsForm from './components/LyricsForm/LyricsForm';
import LyricsProvider from './contexts/LyricsContext/LyricsProvider';
import Lyrics from './components/Lyrics/Lyrics';
import LyricsErrorProvider from './contexts/LyricsError/LyricsErrorProvider';

export default function Home() {
  return (
    <LyricsProvider>
      <LyricsErrorProvider>
        <main className={styles.main}>
          <div>
            <h1 className={styles.headingOne}>Hi! 🤝</h1>
          </div>
          <div>
            <h3 className={styles.headingThree}>
              Search for the lyrics you want to understand
            </h3>
          </div>
          <LyricsForm />
          <div className={styles.lyricsContainer}>
            <div className={styles.lyrics}>
              <Lyrics />
            </div>
            <div className={styles.lyrics}>
              <AnalyzedLyrics />
            </div>
          </div>
        </main>
      </LyricsErrorProvider>
    </LyricsProvider>
  );
}
