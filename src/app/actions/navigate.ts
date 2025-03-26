'use server';

import { redirect } from 'next/navigation';

export async function navigate(data: FormData) {
  const artist = data.get('artist');
  const title = data.get('title');
  redirect(`/lyrics/${artist}/${title}`);
}
