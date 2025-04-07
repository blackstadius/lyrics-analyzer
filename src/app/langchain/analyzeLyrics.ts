'use server';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

const analyzeLyrics = async (lyrics: string) => {
  const model = new ChatOpenAI({
    model: 'gpt-4',
    apiKey: process.env.OPENAI_API_KEY,
  });

  const messages = [
    new SystemMessage(
      'You are a helpful assistant specializing in analyzing song lyrics. Your task is to interpret the meaning of the lyrics, explaining themes, emotions, and any symbolism present. Focus on providing a thoughtful, insightful, and coherent analysis in maximum 250 words.'
    ),
    new HumanMessage(`${lyrics}`),
  ];

  const response = await model.invoke(messages);

  return response.content as string;
};

export default analyzeLyrics;
