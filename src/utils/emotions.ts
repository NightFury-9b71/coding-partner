export const emotionColors: Record<string, string> = {
  'Frustration': '#FF6B6B',
  'Curiosity': '#4ECDC4', 
  'Determination': '#45B7D1',
  'Helpfulness': '#96CEB4',
  'Enthusiasm': '#FECA57',
  'Patience': '#A8E6CF',
  'Confusion': '#FF8B94',
  'Thoughtfulness': '#DDA0DD',
  'Eagerness': '#FFD93D',
  'Confidence': '#6C5CE7',
  'Clarity': '#00B894',
  'Supportiveness': '#FDCB6E',
  'Understanding': '#74B9FF',
  'Excitement': '#E17055',
  'Expertise': '#A29BFE',
  'Satisfaction': '#00CEC9'
};

export const getEmotionColor = (emotion: string): string => {
  return emotionColors[emotion] || '#95A5A6';
};
