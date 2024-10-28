import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        options: {
          height: string;
          width: string;
          videoId: string;
          playerVars: {
            autoplay: number;
            modestbranding: number;
            rel: number;
          };
          events: {
            onReady: () => void;
          };
        }
      ) => void;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  videoId: string;
  onClose: () => void;
}

function YouTubePlayer({ videoId, onClose }: YouTubePlayerProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            if (playerRef.current) {
              playerRef.current.playVideo();
            }
          },
        },
      });
    };

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  // Close player when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-black">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <div id={`youtube-player-${videoId}`} className="w-full h-full" />
    </div>
  );
}

export default YouTubePlayer;