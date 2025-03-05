'use server';
const getLyrics = async (
  prevState: any,
  formData: any
): Promise<string | { error: string }> => {
  const artist = formData.get('artist');
  const title = formData.get('title');
  const baseUrl = process.env.LYRICS_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}${artist}/${title}`);

    if (!response.ok) {
      throw new Error('Could not get the lyrics, please try again');
    }
    const result = await response.json();

    if (!result.lyrics) {
      return 'No lyrics found';
    }

    return result.lyrics;
  } catch (error: any) {
    return { error: error.message || 'An unknown error occurred' };
  }
};

export default getLyrics;
