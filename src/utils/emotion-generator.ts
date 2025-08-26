import { Emotion } from '@/types/chat';

export const generateMockEmotions = (): Emotion[] => [
  { label: "Curiosity", confidence: Math.floor(Math.random() * 30) + 70 },
  { label: "Engagement", confidence: Math.floor(Math.random() * 25) + 65 }
];

export const generateRandomEmotion = (baseEmotion: string, variance: number = 20): Emotion => ({
  label: baseEmotion,
  confidence: Math.floor(Math.random() * variance) + (100 - variance)
});
