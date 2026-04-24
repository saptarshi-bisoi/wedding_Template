import { useState, useRef } from 'react';
import gsap from 'gsap';

export default function WelcomeGate({ onEnter }: { onEnter: () => void }) {
  const [opened, setOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (opened) return;
    setOpened(true);

    const tl = gsap.timeline({
      onComplete: () => {
        onEnter();
      }
    });

    // Fade out button and vertical lines
    tl.to(contentRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    }, 0);

    // True Curtain Pull
    tl.to(leftDoorRef.current, {
      xPercent: -100,
      scaleX: 0.5,
      borderBottomRightRadius: '100% 50%',
      duration: 2,
      ease: 'power3.inOut'
    }, 0.3);

    tl.to(rightDoorRef.current, {
      xPercent: 100,
      scaleX: 0.5,
      borderBottomLeftRadius: '100% 50%',
      duration: 2,
      ease: 'power3.inOut'
    }, 0.3);

    // Hide container
    tl.to(containerRef.current, {
      autoAlpha: 0,
      duration: 0.5
    }, "-=0.5");
  };

  return (
    <div 
      ref={containerRef}
      className="welcome-gate" 
      style={{ perspective: '1200px', backgroundColor: 'transparent' }}
    >
      <div 
        ref={leftDoorRef}
        className="curtain curtain-left" 
        style={{ transformStyle: 'preserve-3d', backgroundColor: 'var(--bg-dark)' }}
      ></div>
      <div 
        ref={rightDoorRef}
        className="curtain curtain-right" 
        style={{ transformStyle: 'preserve-3d', backgroundColor: 'var(--bg-dark)' }}
      ></div>
      
      <div ref={contentRef} className="gate-content" style={{ width: '100%', zIndex: 10 }}>
        <div className="line-vertical" style={{ height: '30vh', transform: 'translateY(-20px)' }}></div>
        
        <div 
          className="open-button-wrapper" 
          onClick={handleEnter}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if(e.key === 'Enter') handleEnter(); }}
          aria-label="Open wedding invitation"
        >
          <div className="open-btn">
            <div className="open-btn-rings"></div>
            <span className="letter-z" style={{ fontSize: '1.4rem', textAlign: 'center', margin: '0', letterSpacing: '1px' }}>ViRosh</span>
            <span className="tap-text" style={{ marginTop: '5px' }}>Tap to open</span>
          </div>
        </div>
        
        <div className="line-vertical" style={{ height: '30vh', transform: 'translateY(20px)' }}></div>
      </div>
    </div>
  );
}
