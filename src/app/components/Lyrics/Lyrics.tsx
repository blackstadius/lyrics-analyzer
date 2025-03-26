'use client';

import { useContext } from 'react';
import { Oooh_Baby } from 'next/font/google';
import { LyricsErrorContext } from '@/app/contexts/LyricsError/LyricsErrorContext';
import style from './Lyrics.module.css';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

const ooohBaby = Oooh_Baby({
  weight: ['400'],
  subsets: ['latin'],
});

const Lyrics = ({
  heading,
  content,
  isAnalyzedLyrics,
  image,
  imageTitle,
  imageRight,
}: {
  content: string;
  isAnalyzedLyrics?: Boolean;
  heading: string;
  image: StaticImageData;
  imageTitle: string;
  imageRight?: Boolean;
}) => {
  const { lyricsError } = useContext(LyricsErrorContext);

  return content ? (
    <section className={style.section}>
      <div
        className={
          imageRight ? style.imageContainerRight : style.imageContainer
        }
      >
        <Image src={image} fill alt={imageTitle} className={style.image} />
      </div>

      <div className={style.lyricsContainer}>
        <h1 className={`${ooohBaby.className} ${style.heading}`}>{heading}</h1>
        <div className={isAnalyzedLyrics ? style.analyzedLyrics : style.lyrics}>
          {lyricsError || content}
        </div>
      </div>
    </section>
  ) : null;
};

export default Lyrics;
