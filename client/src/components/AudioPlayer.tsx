import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  play: boolean;
}

export default function AudioPlayer({ play }: AudioPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (play) {
        if (!isMuted) {
          audioRef.current.play().catch(e => console.log('Auto-play prevented:', e));
        }
      }
    }
  }, [play]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      if (nextMuted) {
        audioRef.current.pause();
      } else if (play) {
        audioRef.current.play().catch(e => console.log('Auto-play prevented:', e));
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/dear_comrade.mp3" loop />
      <button 
        className={`audio-toggle-btn ${play ? 'visible' : ''}`}
        onClick={toggleMute}
        aria-label="Toggle Background Music"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
}
