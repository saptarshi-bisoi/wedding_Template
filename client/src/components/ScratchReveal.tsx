import { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ScratchReveal() {
  const [scratched, setScratched] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Set actual size in memory (scaled to account for offset dimensions)
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Draw scratch cover
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#e2c275');
    gradient.addColorStop(0.5, '#b8860b');
    gradient.addColorStop(1, '#d4af37');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px "Playfair Display", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ Scratch to Reveal ✦', width / 2, height / 2);

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 35;
    ctx.globalCompositeOperation = 'destination-out';

    const getMousePos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const handleDown = (e: MouseEvent | TouchEvent) => {
      if (scratched) return;
      isDrawing.current = true;
      const { x, y } = getMousePos(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing.current || scratched) return;
      e.preventDefault(); // Prevent scrolling on touch
      const { x, y } = getMousePos(e);
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const checkScratched = () => {
      if (scratched) return;
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] < 128) transparentPixels++;
      }
      
      const totalPixels = pixels.length / 4;
      const percentage = (transparentPixels / totalPixels) * 100;
      
      if (percentage > 35) {
        triggerReveal();
      }
    };

    const handleUp = () => {
      if (!isDrawing.current || scratched) return;
      isDrawing.current = false;
      checkScratched();
    };

    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mousemove', handleMove, { passive: false });
    canvas.addEventListener('mouseup', handleUp);
    canvas.addEventListener('mouseleave', handleUp);
    
    canvas.addEventListener('touchstart', handleDown);
    canvas.addEventListener('touchmove', handleMove, { passive: false });
    canvas.addEventListener('touchend', handleUp);

    return () => {
      canvas.removeEventListener('mousedown', handleDown);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseup', handleUp);
      canvas.removeEventListener('mouseleave', handleUp);
      
      canvas.removeEventListener('touchstart', handleDown);
      canvas.removeEventListener('touchmove', handleMove);
      canvas.removeEventListener('touchend', handleUp);
    };
  }, [scratched]);

  const triggerReveal = () => {
    if (!scratched) {
      setScratched(true);
      
      // Initial burst from center
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        startVelocity: 45,
        colors: ['#d4af37', '#e2c275', '#ffd700', '#ffffff'],
        gravity: 0.8,
        scalar: 1.2
      });

      // Side bursts for party effect
      setTimeout(() => {
        confetti({
          particleCount: 60,
          spread: 100,
          origin: { x: 0.2, y: 0.3 },
          startVelocity: 35,
          colors: ['#d4af37', '#e2c275', '#ffd700'],
          gravity: 0.8
        });

        confetti({
          particleCount: 60,
          spread: 100,
          origin: { x: 0.8, y: 0.3 },
          startVelocity: 35,
          colors: ['#d4af37', '#e2c275', '#ffd700'],
          gravity: 0.8
        });
      }, 100);

      // Sustained shower effect
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 25, spread: 360, ticks: 80, zIndex: 0, colors: ['#d4af37', '#e2c275', '#ffffff', '#ffd700'] };

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 30 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
      }, 200);
    }
  };

  return (
    <section className="section-container scratch-section fade-up">
      <div className="line-separator" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="diamond" style={{ width: '4px', height: '4px' }}></div>
        <div className="diamond" style={{ width: '4px', height: '4px' }}></div>
        <div className="diamond" style={{ width: '4px', height: '4px' }}></div>
      </div>
      
      <p className="invitation-quote" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '1.5rem', lineHeight: '1.8', color: 'rgb(235, 231, 224)' }}>
        With hearts full of love and joy, we warmly invite you to share in the celebration of our union. 
        Your presence would mean the world to us as we begin this beautiful journey together.
      </p>

      <div className="line-separator" style={{ width: '100%', maxWidth: '400px', marginBottom: '80px' }}>
        <div className="diamond" style={{ width: '4px', height: '4px' }}></div>
        <div className="diamond" style={{ width: '4px', height: '4px' }}></div>
        <div className="diamond" style={{ width: '4px', height: '4px' }}></div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-passions)', fontSize: '3.5rem', marginBottom: '20px', color: 'rgb(200, 155, 65)', fontWeight: 400, lineHeight: 1.2 }}>
        {scratched ? 'Our forever begins' : 'Scratch to Reveal'}
      </h2>
      <div className="line-separator" style={{ marginBottom: '40px' }}><div className="diamond"></div></div>

      <div className="scratch-box gold-glow" style={{ position: 'relative' }}>
        <canvas 
          ref={canvasRef}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            transition: 'opacity 1s ease',
            opacity: scratched ? 0 : 1,
            pointerEvents: scratched ? 'none' : 'auto',
            touchAction: 'none',
            borderRadius: '12px'
          }}
        />
        <div className="scratch-content" style={{ zIndex: 1 }}>
          <p style={{ color: 'var(--gold-secondary)', fontStyle: 'italic', fontFamily: 'var(--font-playfair)' }}>You're Invited!</p>
          <h3 style={{ fontSize: '2rem', margin: '10px 0' }}>June 15, 2026</h3>
          <p style={{ color: 'var(--gold-dim)', marginBottom: '5px' }}>Monday</p>
          <p style={{ color: 'var(--text-secondary)' }}>5:00 PM</p>
        </div>
      </div>
    </section>
  );
}
