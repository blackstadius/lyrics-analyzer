import { ReactNode } from 'react';
import styles from './Lyrics.module.css';
import { TextParallaxContent } from '../TextParallax/TextParallax';

const Content = ({
  content,
}: {
  content: string;
}): ReactNode | Promise<ReactNode> => {
  return (
    <div className={styles.lyricsContainer}>
      <div className={styles.lyrics}>{content}</div>
    </div>
  );
};

const Lyrics = ({
  heading,
  content,
  imageSrc,
}: {
  content: string;
  heading: string;
  imageSrc: string;
}) => {
  return content ? (
    <TextParallaxContent imgUrl={imageSrc} heading={heading}>
      <Content content={content} />
    </TextParallaxContent>
  ) : null;
};

export default Lyrics;
