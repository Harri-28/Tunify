import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music2, Palette } from 'lucide-react';

interface ThemeSelectorProps {
  selectedTheme: string;
  onThemeChange: (theme: string) => void;
  isDarkMode: boolean;
}

const themes = [
  { 
    id: 'default',
    name: 'Default',
    icon: '🎵',
    colors: { light: 'bg-purple-100', dark: 'bg-purple-900' }
  },
  { 
    id: 'spotify',
    name: 'Spotify',
    icon: '🎧',
    colors: { light: 'bg-[#1ED760]', dark: 'bg-[#282828]' }
  },
  { 
    id: 'youtube-music',
    name: 'YouTube Music',
    icon: '📺',
    colors: { light: 'bg-[#FF0000]', dark: 'bg-[#212121]' }
  },
  { 
    id: 'apple-music',
    name: 'Apple Music',
    icon: '🍎',
    colors: { light: 'bg-[#FA2C55]', dark: 'bg-[#2A2A2A]' }
  }
];

function ThemeSelector({ selectedTheme, onThemeChange, isDarkMode }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full transition-colors flex items-center gap-2 ${
          isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
        }`}
      >
        <Palette className={isDarkMode ? 'text-white' : 'text-gray-900'} size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`absolute right-0 top-12 w-48 p-2 rounded-lg shadow-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            {themes.map((theme) => (
              <motion.button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  selectedTheme === theme.id
                    ? isDarkMode
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-900'
                    : isDarkMode
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-lg">{theme.icon}</span>
                <span className="flex-1 text-left">{theme.name}</span>
                {selectedTheme === theme.id && (
                  <div className={`w-2 h-2 rounded-full ${
                    isDarkMode ? theme.colors.dark : theme.colors.light
                  }`} />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeSelector;