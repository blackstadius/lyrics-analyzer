import LyricsProvider from './contexts/LyricsContext/LyricsProvider';
import LyricsErrorProvider from './contexts/LyricsError/LyricsErrorProvider';
import HomePageContent from './components/HomePageContent/HomePageContent';

export default function Home() {
  return (
    <LyricsProvider>
      <LyricsErrorProvider>
        <HomePageContent />
      </LyricsErrorProvider>
    </LyricsProvider>
  );
}
