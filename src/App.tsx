import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Loader2, RefreshCw, Sun, Moon } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import SongList from './components/SongList';
import EmotionDisplay from './components/EmotionDisplay';
import EmotionQuote from './components/EmotionQuote';
import LoginPage from './components/LoginPage';
import ThemeSelector from './components/ThemeSelector';
import Testimonials from './components/Testimonials';
import useVoiceSynthesis from './hooks/useVoiceSynthesis';
import { emotionQuotes } from './data/quotes';
import './styles.css';

const emotions = ['happy', 'sad', 'angry', 'fearful', 'neutral'];
const themes = [
  { id: 'default', name: 'Default', colors: { dark: 'from-purple-900 via-gray-900 to-black', light: 'from-purple-100 via-gray-100 to-white' } },
  { id: 'spotify', name: 'Spotify', colors: { dark: 'from-[#121212] via-[#181818] to-[#282828]', light: 'from-[#1ED760]/50 via-white to-[#1ED760]/30' } },
  { id: 'youtube-music', name: 'YouTube Music', colors: { dark: 'from-[#030303] via-[#0F0F0F] to-[#1F1F1F]', light: 'from-[#FF0000]/30 via-white to-[#FF0000]/20' } },
  { id: 'apple-music', name: 'Apple Music', colors: { dark: 'from-[#1A1A1A] via-[#2A2A2A] to-[#3A3A3A]', light: 'from-[#FA2C55]/30 via-white to-[#FA2C55]/20' } }
];

const messageColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFD700']; // Array of colors

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [detectedEmotion, setDetectedEmotion] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [showGoodbye, setShowGoodbye] = useState(false);
  const [colorIndex, setColorIndex] = useState(0); // Track current message color
  const { speak } = useVoiceSynthesis();

  // Welcome message after login
  useEffect(() => {
    if (isLoggedIn) {
      speak('Welcome to Tunify! Please select your preferred language and tell me about your day.', 'male');
    }
  }, [isLoggedIn]);

  // Start recording automatically after language selection
  useEffect(() => {
    if (isLoggedIn && selectedLanguage) {
      startRecording();
    }
  }, [selectedLanguage]);

  // Change the message color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % messageColors.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const startRecording = () => {
    setIsRecording(true);
    speak('Recording started. Please speak about your day.', 'male');

    setTimeout(() => {
      setIsRecording(false);
      setIsProcessing(true);

      setTimeout(() => {
        setIsProcessing(false);
        const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
        setDetectedEmotion(randomEmotion);

        speak(`I detect that you're feeling ${randomEmotion}`, 'female');
        const quotes = emotionQuotes[randomEmotion as keyof typeof emotionQuotes];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        setTimeout(() => {
          speak(randomQuote, 'male');
          setTimeout(() => {
            speak('Here are some songs that match your mood!', 'male');
          }, 5000);
        }, 3000);
      }, 2000);
    }, 5000);
  };

  const resetRecording = () => {
    setDetectedEmotion(null);
    setIsRecording(false);
    setIsProcessing(false);
    setShowGoodbye(false);
  };

  const handleSongSelect = () => {
    setShowGoodbye(true); // Trigger the goodbye message
    speak('Thank you for using Tunify. Please visit again!', 'male');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  const currentTheme = themes.find((t) => t.id === selectedTheme) || themes[0];
  const themeColors = isDarkMode ? currentTheme.colors.dark : currentTheme.colors.light;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 bg-gradient-to-br ${themeColors} ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 relative">
          <div className="absolute right-0 top-0 flex gap-2">
            <ThemeSelector
              selectedTheme={selectedTheme}
              onThemeChange={setSelectedTheme}
              isDarkMode={isDarkMode}
            />
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-900'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          <h1
            className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Tunify
          </h1>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            Discover music that matches your mood
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            isDarkMode={isDarkMode}
            theme={selectedTheme}
          />

          {isRecording && (
            <div className="text-center mt-8 text-2xl font-bold">
              <span className="animate-pulse">🔴Analysing voice ...</span>
            </div>
          )}

          {detectedEmotion && (
            <>
              <EmotionDisplay emotion={detectedEmotion} isDarkMode={isDarkMode} theme={selectedTheme} />
              <EmotionQuote emotion={detectedEmotion} isDarkMode={isDarkMode} theme={selectedTheme} />
              <SongList
                emotion={detectedEmotion}
                language={selectedLanguage}
                theme={selectedTheme}
                isDarkMode={isDarkMode}
                onSongSelect={handleSongSelect}
              />
              <button
                onClick={resetRecording}
                className="mt-4 mx-auto block px-4 py-2 bg-blue-500 text-white rounded"
              >
                Try Again
              </button>
            </>
          )}

          {showGoodbye && (
            <div
              className="text-center mt-8 text-2xl font-bold animate-bounce"
              style={{ color: messageColors[colorIndex] }}
            >
              Thank you, visit again - Harish M
            </div>
          )}
        </div>

        <Testimonials isDarkMode={isDarkMode} theme={selectedTheme} />
      </div>
    </div>
  );
}

export default App;
