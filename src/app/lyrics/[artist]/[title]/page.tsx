'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import analyzeLyrics from '@/app/langchain/analyzeLyrics';
import Loading from '@/app/components/Loading/Loading';
import Lyrics from '@/app/components/Lyrics/Lyrics';
import getLyrics from '@/app/actions/getLyrics';
import styles from './Lyrics.module.css';
import StyledHeading from '@/app/components/StyledHeading/StyledHeading';
import Link from 'next/link';

const vinyl = '/vinyl-4808792_1280.jpg';
const music = '/music-5705808_1280.jpg';

const LyricsPage = () => {
  const [analyzedLyrics, setAnalyzedLyrics] = useState<string>('');
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { artist, title } = useParams<{ artist: string; title: string }>();
  const [lyrics, setLyrics] = useState('');
  const searchLinkContent = '< New Search';

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

  if (isLoading) {
    return <Loading />;
  }

  return lyrics ? (
    <>
      <Link className={styles.link} href={'/'}>
        {searchLinkContent}
      </Link>
      <Lyrics heading="Lyrics" content={lyrics} imageSrc={vinyl} />
      <Lyrics
        heading="Analyzed Lyrics"
        content={analyzedLyrics}
        imageSrc={music}
      />
    </>
  ) : (
    <div className={styles.imageContainer}>
      <div className={styles.noResultContainer}>
        <Link className={styles.link} href={'/'}>
          {searchLinkContent}
        </Link>
        <StyledHeading heading="No search result" />
      </div>
    </div>
  );
};

export default LyricsPage;
