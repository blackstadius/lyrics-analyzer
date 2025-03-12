import * as motion from 'motion/react-client';
import styles from './page.module.css';
import AnalyzedLyrics from './components/AnalyzedLyrics/AnalyzedLyrics';
import LyricsForm from './components/LyricsForm/LyricsForm';
import LyricsProvider from './contexts/LyricsContext/LyricsProvider';
import Lyrics from './components/Lyrics/Lyrics';
import LyricsErrorProvider from './contexts/LyricsError/LyricsErrorProvider';
import AnimatedNote from './components/AnimatedNote/AnimatedNote';
import MainContent from './components/MainContent/MainContent';

export default function Home() {
  return (
    <LyricsProvider>
      <LyricsErrorProvider>
        <MainContent />
      </LyricsErrorProvider>
    </LyricsProvider>
  );
}
