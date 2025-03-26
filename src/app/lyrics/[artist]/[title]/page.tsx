'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import analyzeLyrics from '@/app/langchain/analyzeLyrics';
import Loading from '@/app/components/Loading/Loading';
import Lyrics from '@/app/components/Lyrics/Lyrics';
import styles from './Lyrics.module.css';
import { Oooh_Baby } from 'next/font/google';
import LyricsProvider from '@/app/contexts/LyricsContext/LyricsProvider';
import LyricsErrorProvider from '@/app/contexts/LyricsError/LyricsErrorProvider';
import getLyrics from '@/app/actions/getLyrics';
import vinyl from '@/../public/vinyl-4808792_1280.jpg';
import music from '@/../public/music-5705808_1280.jpg';

const ooohBaby = Oooh_Baby({
  weight: ['400'],
  subsets: ['latin'],
});

const LyricsPage = () => {
  const [analyzedLyrics, setAnalyzedLyrics] = useState<string>('');
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { artist, title } = useParams<{ artist: string; title: string }>();
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const getAnalyzedLyrics = async () => {
      setIsLoading(true);
      const lyrics = await getLyrics(artist, title);

      if (lyrics && typeof lyrics === 'string') {
        setLyrics(lyrics.replace(/(\r\n|\r|\n)+/g, '\n'));

        const result = await analyzeLyrics(lyrics);
        setAnalyzedLyrics(result as string);
      }
      setIsLoading(false);
    };

    getAnalyzedLyrics();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <LyricsProvider>
      <LyricsErrorProvider>
        <main className={styles.main}>
          <Lyrics
            content={lyrics}
            imageTitle="vinyl"
            image={vinyl}
            heading="Lyrics"
          />
          <Lyrics
            content={analyzedLyrics}
            imageTitle="music"
            image={music}
            heading="Analyzed Lyrics"
            isAnalyzedLyrics
            imageRight
          />
        </main>
      </LyricsErrorProvider>
    </LyricsProvider>
  );
};

export default LyricsPage;
