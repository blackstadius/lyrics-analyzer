'use server';
import { NoLyricsFoundError } from '../errors/NoLyricsFoundError';

const getLyrics = async (artist: string, title: string): Promise<string> => {
  const baseUrl = process.env.LYRICS_BASE_URL;

  const response = await fetch(`${baseUrl}${artist}/${title}`);

  if (!response.ok) {
    throw Error('Could not get the lyrics, please try again');
  }
  const result = await response.json();

  if (!result.lyrics) {
    throw new NoLyricsFoundError();
  }

  return result.lyrics;
};

export default getLyrics;
