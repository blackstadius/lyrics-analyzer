'use server';

const getLyrics = async (artist: string, title: string): Promise<any> => {
  const baseUrl = process.env.LYRICS_BASE_URL;

  const response = await fetch(`${baseUrl}${artist}/${title}`);

  if (!response.ok) {
    return {
      error: true,
      errorType: 'NO_LYRICS_FOUND',
      message: 'No lyrics found',
    };
  }
  const result = await response.json();

  if (!result.lyrics) {
    // Return custom error for no lyrics found
    return {
      error: true,
      errorType: 'NO_LYRICS_FOUND',
      message: 'No lyrics found',
    };
  }

  return result.lyrics;
};

export default getLyrics;
