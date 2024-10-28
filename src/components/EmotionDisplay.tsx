import React from 'react';
import { Smile, Frown, Angry, Meh, AlertTriangle } from 'lucide-react';

const emotionIcons = {
  happy: Smile,
  sad: Frown,
  angry: Angry,
  fearful: AlertTriangle,
  neutral: Meh,
};

interface EmotionDisplayProps {
  emotion: string;
  isDarkMode: boolean;
  theme: string;
}

function EmotionDisplay({ emotion, isDarkMode, theme }: EmotionDisplayProps) {
  const Icon = emotionIcons[emotion as keyof typeof emotionIcons] || Meh;

  const getThemeColors = () => {
    switch (theme) {
      case 'spotify':
        return {
          icon: 'text-[#1ED760]',
          bg: isDarkMode ? 'bg-[#282828]' : 'bg-[#1ED760]/20',
        };
      case 'youtube-music':
        return {
          icon: 'text-[#FF0000]',
          bg: isDarkMode ? 'bg-[#212121]' : 'bg-[#FF0000]/20',
        };
      case 'apple-music':
        return {
          icon: 'text-[#FA2C55]',
          bg: isDarkMode ? 'bg-[#2A2A2A]' : 'bg-[#FA2C55]/20',
        };
      default:
        return {
          icon: 'text-purple-400',
          bg: isDarkMode ? 'bg-gray-800' : 'bg-purple-100',
        };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="text-center my-8">
      <div className={`inline-block p-4 rounded-full ${colors.bg} mb-4`}>
        <Icon className={`w-12 h-12 ${colors.icon}`} />
      </div>
      <h2 className={`text-2xl font-semibold capitalize ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {emotion} Mood
      </h2>
      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
        Here are some songs that match your current mood
      </p>
    </div>
  );
}

export default EmotionDisplay;