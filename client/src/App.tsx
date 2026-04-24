import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WelcomeGate from './components/WelcomeGate';
import HeroHeader from './components/HeroHeader';
import ScratchReveal from './components/ScratchReveal';
import PhotoGallery from './components/PhotoGallery';
import ProgramTimeline from './components/ProgramTimeline';
import DressCode from './components/DressCode';
import TravelGifts from './components/TravelGifts';
import VenueMap from './components/VenueMap';
import AudioPlayer from './components/AudioPlayer';
import CustomCursor from './components/CustomCursor';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const letterboxTopRef = useRef<HTMLDivElement>(null);
  const letterboxBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      
      // Animate cinematic letterbox out when entered
      if (letterboxTopRef.current && letterboxBottomRef.current) {
        gsap.to([letterboxTopRef.current, letterboxBottomRef.current], {
          scaleY: 0,
          duration: 1.5,
          ease: "power3.inOut",
          delay: 0.5
        });
      }
    }
  }, [isEntered]);

  useEffect(() => {

    // Initialize Vanilla Lenis
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Basic GSAP fade-ins for scroll
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-up').forEach((elem: any) => {
        gsap.fromTo(elem, {
          y: 50,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          }
        });
      });
    });

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* Noise Texture Overlay */}
      <div className="noise-overlay"></div>
      <svg style={{ display: 'none' }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>

      {/* Cinematic Letterbox */}
      <div ref={letterboxTopRef} className="cinematic-letterbox top"></div>
      <div ref={letterboxBottomRef} className="cinematic-letterbox bottom"></div>

      <AudioPlayer play={isEntered} />
      {!isEntered && <WelcomeGate onEnter={() => setIsEntered(true)} />}
      <main className="main-content">
        <HeroHeader />
        <ScratchReveal />
        <ProgramTimeline />
        <DressCode />
        <TravelGifts />
        <PhotoGallery />
        <VenueMap />
      </main>
    </>
  );
}

export default App;
