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
import testData from './testdata';
import { NoLyricsFoundError } from '@/app/errors/NoLyricsFoundError';

const vinyl = '/vinyl-4808792_1280.jpg';
const music = '/music-5705808_1280.jpg';

const LyricsPage = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { artist, title } = useParams<{ artist: string; title: string }>();
  const [lyricsData, setLyricsData] = useState({
    lyrics: '',
    analyzedLyrics: '',
    error: '',
  });
  const searchLinkContent = '< New Search';

  useEffect(() => {
    const getLyricsData = async () => {
      try {
        setIsLoading(true);
        const lyrics = await getLyrics(artist, title);

        const analyzedLyrics = await analyzeLyrics(lyrics);
        const strippedLyrics = lyrics.replace(/(\r\n|\r|\n)+/g, '\n');

        setLyricsData({
          ...lyricsData,
          lyrics: strippedLyrics,
          analyzedLyrics,
        });
      } catch (error: any) {
        if (error.errorType === 'NoLyricsFoundError') {
          setLyricsData({ ...lyricsData, error: 'No lyrics found' });
        } else {
          setLyricsData({ ...lyricsData, error: 'Something went wrong' });
        }
      } finally {
        setIsLoading(false);
      }
    };

    getLyricsData();
  }, []);

  // useEffect(() => {
  //   setLyrics(testData.lyrics);
  //   setAnalyzedLyrics(testData.analyzedLyrics);
  // }, []);

  if (isLoading) {
    return <Loading />;
  }

  return lyricsData.error ? (
    <div className={styles.imageContainer}>
      <div className={styles.noResultContainer}>
        <Link
          className={styles.link}
          style={{ alignSelf: 'flex-start' }}
          href={'/'}
        >
          {searchLinkContent}
        </Link>
        <StyledHeading heading={lyricsData.error} />
      </div>
    </div>
  ) : (
    <>
      <Link className={styles.link} style={{ position: 'absolute' }} href={'/'}>
        {searchLinkContent}
      </Link>
      <Lyrics heading="Lyrics" content={lyricsData.lyrics} imageSrc={vinyl} />
      <Lyrics
        heading="Analyzed Lyrics"
        content={lyricsData.analyzedLyrics}
        imageSrc={music}
      />
    </>
  );
};

export default LyricsPage;
