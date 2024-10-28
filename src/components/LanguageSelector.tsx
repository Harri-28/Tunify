import React from 'react';

const languages = ['Hindi', 'Telugu', 'Tamil', 'Kannada', 'Bengali'];

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  isDarkMode: boolean;
  theme: string;
}

function LanguageSelector({ selectedLanguage, onLanguageChange, isDarkMode, theme }: LanguageSelectorProps) {
  const getThemeColors = () => {
    switch (theme) {
      case 'spotify':
        return {
          active: 'bg-[#1ED760] text-black',
          inactive: isDarkMode ? 'bg-[#282828] hover:bg-[#3E3E3E] text-white' : 'bg-[#1ED760]/20 hover:bg-[#1ED760]/30 text-black',
        };
      case 'youtube-music':
        return {
          active: 'bg-[#FF0000] text-white',
          inactive: isDarkMode ? 'bg-[#212121] hover:bg-[#3D3D3D] text-white' : 'bg-[#FF0000]/20 hover:bg-[#FF0000]/30 text-black',
        };
      case 'apple-music':
        return {
          active: 'bg-[#FA2C55] text-white',
          inactive: isDarkMode ? 'bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white' : 'bg-[#FA2C55]/20 hover:bg-[#FA2C55]/30 text-black',
        };
      default:
        return {
          active: isDarkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white',
          inactive: isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700',
        };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => onLanguageChange(language)}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedLanguage === language ? colors.active : colors.inactive
          }`}
        >
          {language}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;