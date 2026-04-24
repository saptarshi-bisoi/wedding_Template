import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function HeroHeader() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bokehRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<HTMLHeadingElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);
  const scrollIconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Sparkles Generation
    const sparkleCount = 40;
    const sparklesLayer = sparklesRef.current;
    if (sparklesLayer) {
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparklesLayer.appendChild(sparkle);
        
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
    }

    // Parallax
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(bgRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: container, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(sparklesRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: container, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(bokehRef.current, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: { trigger: container, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(namesRef.current, {
        yPercent: 60,
        ease: "none",
        scrollTrigger: { trigger: container, start: "top top", end: "bottom top", scrub: true }
      });
    });

    // Mask Reveal Animation for Text
    gsap.fromTo('.hero-getting-married', 
      { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0 },
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1, duration: 1.5, ease: 'power3.inOut', delay: 1.5 }
    );

    gsap.fromTo('.hero-names', 
      { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0 },
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1, duration: 2, ease: 'power3.inOut', delay: 1.8 }
    );

    // Ornament Path Animation
    gsap.fromTo('.ornamental-path',
      { strokeDasharray: 200, strokeDashoffset: 200 },
      { strokeDashoffset: 0, duration: 2, ease: 'power2.out', delay: 1.8 }
    );

    // Scroll Indicator Animation
    const scrollTl = gsap.timeline({ repeat: -1 });
    scrollTl.fromTo(scrollLineRef.current, 
      { scaleY: 0, transformOrigin: 'top', opacity: 1 }, 
      { scaleY: 1, duration: 1, ease: 'power2.inOut' }
    )
    .fromTo(scrollIconRef.current, 
      { opacity: 0, y: -5 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, "-=0.2"
    )
    .to([scrollLineRef.current, scrollIconRef.current], {
      opacity: 0, duration: 0.5, delay: 0.5
    });

    // Magnetic Hover
    const namesEl = namesRef.current;
    const onMouseMove = (e: MouseEvent) => {
      if (!namesEl) return;
      const rect = namesEl.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
      gsap.to(namesEl, { x, y, duration: 0.5, ease: 'power2.out' });
    };
    const onMouseLeave = () => {
      if (!namesEl) return;
      gsap.to(namesEl, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
    };

    if (namesEl) {
      namesEl.addEventListener('mousemove', onMouseMove);
      namesEl.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      if (sparklesLayer) sparklesLayer.innerHTML = '';
      mm.revert();
      if (namesEl) {
        namesEl.removeEventListener('mousemove', onMouseMove);
        namesEl.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="hero-header fade-up">
      <div className="hero-vignette"></div>
      
      <div ref={bgRef} className="hero-bg-layer"></div>
      <div ref={bokehRef} className="hero-bokeh-layer"></div>
      <div ref={sparklesRef} className="hero-sparkles-layer"></div>
      
      <div className="hero-content-layer">
        <svg className="ornamental-divider top" width="100" height="20" viewBox="0 0 100 20">
          <path className="ornamental-path" d="M0,10 L45,10 L50,5 L55,10 L100,10" fill="none" stroke="var(--gold-dim)" strokeWidth="1" />
        </svg>
        
        <p className="hero-getting-married">We're getting married</p>
        
        <div className="names-wrapper hover-target">
          <div className="breathing-glow"></div>
          <h1 ref={namesRef} className="hero-names">
            <span>Vijay</span>
            <svg className="ornamental-divider center" width="60" height="20" viewBox="0 0 60 20" style={{ margin: '15px auto', display: 'block' }}>
              <path className="ornamental-path" d="M0,10 L25,10 L30,5 L35,10 L60,10" fill="none" stroke="var(--gold-dim)" strokeWidth="1" />
            </svg>
            <span>Rashmika</span>
          </h1>
        </div>
        
        <p className="hero-subtitle">
          Request the honour of your presence
        </p>

        <div className="scroll-indicator-modern">
          <div ref={scrollLineRef} className="scroll-line"></div>
          <ChevronDown ref={scrollIconRef} size={16} className="scroll-chevron" />
        </div>
      </div>
    </section>
  );
}
