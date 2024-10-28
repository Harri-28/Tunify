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

const emotions = ['happy', 'sad', 'angry', 'fearful', 'neutral'];
const themes = [
  { id: 'default', name: 'Default', colors: { dark: 'from-purple-900 via-gray-900 to-black', light: 'from-purple-100 via-gray-100 to-white' } },
  { id: 'spotify', name: 'Spotify', colors: { dark: 'from-[#121212] via-[#181818] to-[#282828]', light: 'from-[#1ED760]/50 via-white to-[#1ED760]/30' } },
  { id: 'youtube-music', name: 'YouTube Music', colors: { dark: 'from-[#030303] via-[#0F0F0F] to-[#1F1F1F]', light: 'from-[#FF0000]/30 via-white to-[#FF0000]/20' } },
  { id: 'apple-music', name: 'Apple Music', colors: { dark: 'from-[#1A1A1A] via-[#2A2A2A] to-[#3A3A3A]', light: 'from-[#FA2C55]/30 via-white to-[#FA2C55]/20' } }
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [detectedEmotion, setDetectedEmotion] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [showGoodbye, setShowGoodbye] = useState(false);
  const { speak } = useVoiceSynthesis();

  useEffect(() => {
    if (isLoggedIn) {
      speak('Welcome to Tunify! Please select your preferred language and tell me about your day.', 'male');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && selectedLanguage) {
      startRecording();
    }
  }, [selectedLanguage]);

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
        
        // Speak the emotion and a random quote
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
    setShowGoodbye(true);
    speak('Thank you for using Tunify. Please visit again!', 'male');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  const currentTheme = themes.find(t => t.id === selectedTheme) || themes[0];
  const themeColors = isDarkMode ? currentTheme.colors.dark : currentTheme.colors.light;

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-gradient-to-br ${themeColors} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
          <h1 className={`text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
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

          {!detectedEmotion && (
            <div className="flex flex-col items-center justify-center mt-12">
              <button
                onClick={startRecording}
                disabled={isRecording || isProcessing}
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isRecording
                    ? 'bg-red-600 animate-pulse'
                    : `bg-purple-600 hover:bg-purple-700`
                }`}
              >
                {isProcessing ? (
                  <Loader2 className="w-12 h-12 animate-spin" />
                ) : isRecording ? (
                  <MicOff className="w-12 h-12" />
                ) : (
                  <Mic className="w-12 h-12" />
                )}
              </button>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {isProcessing
                  ? 'Analyzing your voice...'
                  : isRecording
                  ? 'Recording... Speak about your day'
                  : 'Click to start recording'}
              </p>
            </div>
          )}

          {detectedEmotion && (
            <>
              <EmotionDisplay 
                emotion={detectedEmotion} 
                isDarkMode={isDarkMode}
                theme={selectedTheme}
              />
              <EmotionQuote
                emotion={detectedEmotion}
                isDarkMode={isDarkMode}
                theme={selectedTheme}
              />
              <SongList
                emotion={detectedEmotion}
                language={selectedLanguage}
                theme={selectedTheme}
                isDarkMode={isDarkMode}
                onSongSelect={handleSongSelect}
              />
              {showGoodbye && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-8 text-2xl font-bold text-purple-400"
                >
                  Thank you for using Tunify. Please visit again!
                </motion.div>
              )}
              <div className="text-center mt-8">
                <button
                  onClick={resetRecording}
                  className="px-6 py-3 rounded-full transition-colors flex items-center gap-2 mx-auto bg-purple-600 hover:bg-purple-700"
                >
                  <RefreshCw className="w-4 h-4" />
                  Record Again
                </button>
              </div>
            </>
          )}
        </div>

        <Testimonials isDarkMode={isDarkMode} theme={selectedTheme} />
      </div>
    </div>
  );
}

export default App;