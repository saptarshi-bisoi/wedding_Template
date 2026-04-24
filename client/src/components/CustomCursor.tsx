import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Media query to check if it's a touch device
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update ring immediately
      gsap.set(ring, {
        x: mouseX,
        y: mouseY,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // RAF for smooth lerp on the dot
    const render = () => {
      // Lerp logic for the dot
      dotX += (mouseX - dotX) * 0.15;
      dotY += (mouseY - dotY) * 0.15;
      
      gsap.set(dot, {
        x: dotX,
        y: dotY,
      });

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // Hover state
    const handleHoverEnter = () => {
      ring.classList.add('hovered');
    };
    
    const handleHoverLeave = () => {
      ring.classList.remove('hovered');
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .hover-target').forEach((el) => {
        el.addEventListener('mouseenter', handleHoverEnter);
        el.addEventListener('mouseleave', handleHoverLeave);
      });
    };

    addHoverListeners();

    // Use MutationObserver to add listeners to dynamically added elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      document.querySelectorAll('a, button, .hover-target').forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot"></div>
      <div ref={ringRef} className="custom-cursor-ring"></div>
    </>
  );
}
