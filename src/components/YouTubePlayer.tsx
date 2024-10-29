import React, { useEffect, useRef, useState } from 'react';
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
            onStateChange: (event: { data: number }) => void; // Add state change event
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
  recommendations: string[]; // Array of recommended video IDs or thumbnails
}

function YouTubePlayer({ videoId, onClose, recommendations }: YouTubePlayerProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy(); // Destroy previous player instance
      }
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
            setLoading(false); // Video is ready
            playerRef.current.playVideo();
          },
          onStateChange: (event) => {
            // Handle state change to manage loading
            if (event.data === window.YT.PlayerState.BUFFERING) {
              setLoading(true); // Show loading when buffering
            } else if (event.data === window.YT.PlayerState.PLAYING) {
              setLoading(false); // Hide loading when playing
            }
          },
        },
      });
    };

    if (window.YT) {
      initPlayer(); // Initialize player immediately if YT is already available
    } else {
      window.onYouTubeIframeAPIReady = initPlayer; // Set up callback for when API is ready
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null; // Clear reference to the player
      }
    };
  }, [videoId]);

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
    <div ref={containerRef} className="relative w-full h-full bg-black flex flex-col">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio 16:9 */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <p className="text-white">Loading...</p> {/* Placeholder for loading state */}
          </div>
        )}
        <div id={`youtube-player-${videoId}`} className="absolute inset-0" />
      </div>
      <div className="mt-4 p-2">
        <h2 className="text-white text-lg">Recommended Videos</h2>
        <div className="grid grid-cols-2 gap-4 transition-all duration-300">
          {recommendations.map((recommendationId) => (
            <div key={recommendationId} className="relative group">
              <div className="bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${recommendationId}/hqdefault.jpg`}
                  alt="Thumbnail"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <p className="text-white">Watch</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YouTubePlayer;
