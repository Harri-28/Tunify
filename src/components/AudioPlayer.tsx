import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  url: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

function AudioPlayer({ url, isPlaying, onPlayPause }: AudioPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onPlayPause}
        className="p-2 hover:bg-purple-600/20 rounded-full transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-purple-400" />
        ) : (
          <Play className="w-5 h-5 text-purple-400" />
        )}
      </button>
      
      <button
        onClick={toggleMute}
        className="p-2 hover:bg-purple-600/20 rounded-full transition-colors"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-purple-400" />
        ) : (
          <Volume2 className="w-5 h-5 text-purple-400" />
        )}
      </button>
      
      <audio
        ref={audioRef}
        src={url}
        onEnded={onPlayPause}
        className="hidden"
      />
    </div>
  );
}

export default AudioPlayer;