import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { emotionQuotes } from '../data/quotes';

interface EmotionQuoteProps {
  emotion: string;
  isDarkMode: boolean;
  theme: string;
}

function EmotionQuote({ emotion, isDarkMode, theme }: EmotionQuoteProps) {
  const quotes = emotionQuotes[emotion as keyof typeof emotionQuotes];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const getThemeStyles = () => {
    switch (theme) {
      case 'spotify':
        return {
          bg: isDarkMode ? 'bg-[#282828]' : 'bg-[#1ED760]/5',
          accent: 'text-[#1ED760]'
        };
      case 'youtube-music':
        return {
          bg: isDarkMode ? 'bg-[#212121]' : 'bg-[#FF0000]/5',
          accent: 'text-[#FF0000]'
        };
      case 'apple-music':
        return {
          bg: isDarkMode ? 'bg-[#2A2A2A]' : 'bg-[#FA2C55]/5',
          accent: 'text-[#FA2C55]'
        };
      default:
        return {
          bg: isDarkMode ? 'bg-gray-800' : 'bg-purple-50',
          accent: 'text-purple-500'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${styles.bg} p-6 rounded-lg mb-8 relative overflow-hidden`}
    >
      <Quote className={`${styles.accent} w-8 h-8 mb-4`} />
      <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        {randomQuote}
      </p>
    </motion.div>
  );
}

export default EmotionQuote;