import React, { useState } from 'react';
import { Play, Pause, ExternalLink, Music2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { songs } from '../data/songs';
import YouTubePlayer from './YouTubePlayer';

interface SongListProps {
  emotion: string;
  language: string;
  theme: string;
  isDarkMode: boolean;
  onSongSelect: () => void;
}

function SongList({ emotion, language, theme, isDarkMode, onSongSelect }: SongListProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [likedSongs, setLikedSongs] = useState<number[]>([]);
  const songList = songs[emotion]?.[language] || [];

  const getThemeStyles = () => {
    switch (theme) {
      case 'spotify':
        return {
          container: isDarkMode ? 'bg-[#121212]' : 'bg-[#1ED760]/5',
          item: isDarkMode ? 'bg-[#282828] hover:bg-[#3E3E3E]' : 'bg-white/50 hover:bg-white/70',
          text: isDarkMode ? 'text-white' : 'text-gray-900',
          subtext: isDarkMode ? 'text-gray-400' : 'text-gray-600',
          accent: 'text-[#1ED760]',
          player: 'h-[380px]',
          liked: 'text-[#1ED760]',
          unliked: isDarkMode ? 'text-gray-400' : 'text-gray-600'
        };
      case 'youtube-music':
        return {
          container: isDarkMode ? 'bg-[#030303]' : 'bg-[#FF0000]/5',
          item: isDarkMode ? 'bg-[#212121] hover:bg-[#3D3D3D]' : 'bg-white/50 hover:bg-white/70',
          text: isDarkMode ? 'text-white' : 'text-gray-900',
          subtext: isDarkMode ? 'text-gray-400' : 'text-gray-600',
          accent: 'text-[#FF0000]',
          player: 'h-[380px]',
          liked: 'text-[#FF0000]',
          unliked: isDarkMode ? 'text-gray-400' : 'text-gray-600'
        };
      case 'apple-music':
        return {
          container: isDarkMode ? 'bg-[#1A1A1A]' : 'bg-[#FA2C55]/5',
          item: isDarkMode ? 'bg-[#2A2A2A] hover:bg-[#3A3A3A]' : 'bg-white/50 hover:bg-white/70',
          text: isDarkMode ? 'text-white' : 'text-gray-900',
          subtext: isDarkMode ? 'text-gray-400' : 'text-gray-600',
          accent: 'text-[#FA2C55]',
          player: 'h-[380px]',
          liked: 'text-[#FA2C55]',
          unliked: isDarkMode ? 'text-gray-400' : 'text-gray-600'
        };
      default:
        return {
          container: isDarkMode ? 'bg-gray-900' : 'bg-white/90',
          item: isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100',
          text: isDarkMode ? 'text-white' : 'text-gray-900',
          subtext: isDarkMode ? 'text-gray-400' : 'text-gray-600',
          accent: 'text-purple-600',
          player: 'h-[380px]',
          liked: 'text-purple-600',
          unliked: isDarkMode ? 'text-gray-400' : 'text-gray-600'
        };
    }
  };

  const styles = getThemeStyles();

  const toggleLike = (index: number) => {
    setLikedSongs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handlePlay = (index: number) => {
    setPlayingIndex(playingIndex === index ? null : index);
    if (playingIndex !== index) {
      onSongSelect();
    }
  };

  const getVideoId = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId || '';
  };

  if (songList.length === 0) {
    return (
      <div className="text-center py-12">
        <Music2 className={`w-16 h-16 mx-auto ${styles.subtext} mb-4`} />
        <p className={styles.subtext}>
          No songs found for this mood and language combination
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 rounded-lg p-6 ${styles.container}`}>
      <div className="flex items-center justify-between">
        <h3 className={`text-2xl font-bold ${styles.text}`}>
          Recommended Songs
        </h3>
        <span className={styles.subtext}>
          {songList.length} songs
        </span>
      </div>

      <div className="space-y-4">
        {songList.map((song, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center gap-4 p-4 rounded-lg transition-all group relative ${styles.item}`}
          >
            <button
              onClick={() => handlePlay(index)}
              className={`p-2 hover:bg-opacity-20 rounded-full transition-colors ${styles.accent}`}
            >
              {playingIndex === index ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <h4 className={`font-medium truncate pr-8 ${styles.text}`}>{song.title}</h4>
              <p className={`text-sm ${styles.subtext} truncate`}>
                {emotion} • {language}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleLike(index)}
                className={`p-2 hover:bg-opacity-20 rounded-full transition-colors ${
                  likedSongs.includes(index) ? styles.liked : styles.unliked
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${likedSongs.includes(index) ? 'fill-current' : ''}`}
                />
              </button>

              <a
                href={song.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 hover:bg-opacity-20 rounded-full transition-colors ${styles.accent}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <AnimatePresence>
              {playingIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 380 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="absolute left-0 right-0 overflow-hidden bg-black rounded-lg shadow-xl z-10"
                  style={{ top: '100%', marginTop: '1rem' }}
                >
                  <YouTubePlayer
                    videoId={getVideoId(song.link)}
                    onClose={() => setPlayingIndex(null)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SongList;