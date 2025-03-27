import { TextParallaxContent } from '../TextParallax/TextParallax';
import LyricsContent from './LyricsContent';

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
      <LyricsContent content={content} />
    </TextParallaxContent>
  ) : null;
};

export default Lyrics;
