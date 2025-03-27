'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import analyzeLyrics from '@/app/langchain/analyzeLyrics';
import Loading from '@/app/components/Loading/Loading';
import Lyrics from '@/app/components/Lyrics/Lyrics';
import styles from './Lyrics.module.css';
import getLyrics from '@/app/actions/getLyrics';

const vinyl = '/vinyl-4808792_1280.jpg';
const music = '/music-5705808_1280.jpg';

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
  ) : (
    <>
      <Lyrics
        heading="Lyrics"
        content={lyrics || 'Could not find any lyrics'}
        imageSrc={vinyl}
      />
      <Lyrics
        heading="Analyzed Lyrics"
        content={analyzedLyrics}
        imageSrc={music}
      />
    </>
  );
};

export default LyricsPage;
