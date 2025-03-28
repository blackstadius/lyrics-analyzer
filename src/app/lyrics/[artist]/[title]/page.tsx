'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import analyzeLyrics from '@/app/langchain/analyzeLyrics';
import Loading from '@/app/components/Loading/Loading';
import Lyrics from '@/app/components/Lyrics/Lyrics';
import getLyrics from '@/app/actions/getLyrics';
import styles from './Lyrics.module.css';
import { Oooh_Baby } from 'next/font/google';

const vinyl = '/vinyl-4808792_1280.jpg';
const music = '/music-5705808_1280.jpg';

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

        const analyzedLyrics = await analyzeLyrics(lyrics);
        setAnalyzedLyrics(analyzedLyrics as string);
      }
      setIsLoading(false);
    };

    getAnalyzedLyrics();
  }, []);

  return isLoading ? (
    <Loading />
  ) : lyrics ? (
    <>
      <Lyrics heading="Lyrics" content={lyrics} imageSrc={vinyl} />
      <Lyrics
        heading="Analyzed Lyrics"
        content={analyzedLyrics}
        imageSrc={music}
      />
    </>
  ) : (
    <div className={styles.noResultContainer}>
      <h1 className={`${ooohBaby.className} ${styles.heading}`}>
        No search result
      </h1>
    </div>
  );
};

export default LyricsPage;
