import React from 'react';
import { Emotion } from '@/types/chat';
import { getEmotionColor } from '@/utils/emotions';

interface EmotionTagsProps {
  emotions: Emotion[];
  align?: 'left' | 'right';
  className?: string;
}

const EmotionTags: React.FC<EmotionTagsProps> = ({ 
  emotions, 
  align = 'left', 
  className = '' 
}) => {
  const alignmentClass = align === 'right' ? 'justify-end mr-1' : 'ml-1';

  return (
    <div className={`flex flex-wrap gap-2 mt-2 ${alignmentClass} ${className}`}>
      {emotions.map((emotion, index) => (
        <div key={index} className="flex items-center gap-1 text-xs">
          <span className="text-gray-600 min-w-0 truncate">{emotion.label}</span>
          <div className="flex items-center gap-1 flex-shrink-0">
            <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{ 
                  width: `${emotion.confidence}%`,
                  backgroundColor: getEmotionColor(emotion.label)
                }}
              />
            </div>
            <span className="text-gray-500 text-xs w-8 text-right">{emotion.confidence}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmotionTags;
