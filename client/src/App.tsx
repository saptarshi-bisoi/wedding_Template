import { useEffect, useState } from 'react';
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

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    if (!isEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
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
