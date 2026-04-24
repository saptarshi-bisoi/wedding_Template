import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

export default function HeroHeader() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create sparkles
    const sparkleCount = 40;
    const container = containerRef.current;
    
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      container.appendChild(sparkle);
      
      const size = Math.random() * 3 + 1;
      
      gsap.set(sparkle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        width: size,
        height: size,
        opacity: Math.random() * 0.6 + 0.2,
      });

      gsap.to(sparkle, {
        y: `-=${Math.random() * 150 + 50}`,
        x: `+=${Math.random() * 60 - 30}`,
        opacity: 0,
        duration: Math.random() * 4 + 3,
        repeat: -1,
        delay: Math.random() * 3,
        ease: 'sine.inOut',
      });
    }

    return () => {
      // Cleanup sparkles
      const sparkles = container.querySelectorAll('.sparkle');
      sparkles.forEach(s => {
        gsap.killTweensOf(s);
        s.remove();
      });
    };
  }, []);

  return (
    <section ref={containerRef} className="hero-header fade-up" style={{ overflow: 'hidden' }}>
      <div className="line-separator" style={{ marginBottom: '40px', position: 'relative', zIndex: 2 }}><div className="diamond"></div></div>
      
      <p className="hero-getting-married" style={{ position: 'relative', zIndex: 2 }}>We're getting married</p>
      
      <h1 className="hero-names" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', position: 'relative', zIndex: 2 }}>
        Vijay
        <div className="line-separator" style={{ margin: '15px 0' }}><div className="diamond"></div></div>
        Rashmika
      </h1>
      
      <p style={{ marginTop: '40px', color: 'var(--gold-dim)', fontStyle: 'italic', fontFamily: 'var(--font-playfair)', position: 'relative', zIndex: 2 }}>
        Request the honour of your presence
      </p>

      <div className="scroll-indicator" style={{ position: 'absolute', zIndex: 2 }}>
        <div className="line-separator"><div className="diamond"></div></div>
        <span>Scroll</span>
        <ArrowDown size={14} className="icon" />
      </div>
    </section>
  );
}
