import { useCallback } from 'react';

const useVoiceSynthesis = () => {
  const speak = useCallback((text: string, voice: 'male' | 'female' = 'male') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices();
      
      // Try to find a male/female voice, fallback to default
      utterance.voice = voices.find(v => 
        voice === 'male' ? v.name.includes('Male') : v.name.includes('Female')
      ) || voices[0];
      
      utterance.pitch = voice === 'male' ? 0.9 : 1.1;
      utterance.rate = 1;
      
      speechSynthesis.speak(utterance);
    }
  }, []);

  return { speak };
};

export default useVoiceSynthesis;