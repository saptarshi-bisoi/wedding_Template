import { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

export default function PhotoGallery() {
  const [timeLeft, setTimeLeft] = useState({ days: 59, hours: 5, minutes: 23, seconds: 32 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 0) { seconds = 59; minutes -= 1; }
        if (minutes < 0) { minutes = 59; hours -= 1; }
        if (hours < 0) { hours = 23; days -= 1; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const galleryImages = [
    { src: '/images/sadhi01.jpg', alt: 'Wedding moment - Sadhi 01' },
    { src: '/images/sadhi02.jpg', alt: 'Wedding moment - Sadhi 02' },
    { src: '/images/sadhi03.jpg', alt: 'Wedding moment - Sadhi 03' },
    { src: '/images/sadhi04.jpg', alt: 'Wedding moment - Sadhi 04' },
    { src: '/images/haldi01.jpg', alt: 'Wedding moment - Haldi 01' },
    { src: '/images/haldi02.jpg', alt: 'Wedding moment - Haldi 02' },
    { src: '/images/sangetth01.jpg', alt: 'Wedding moment - Sangetth 01' },
  ];

  return (
    <section className="section-container fade-up">
      
      <div className="gallery-grid fade-up" style={{ marginBottom: '60px' }}>
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-wrapper">
            <OptimizedImage 
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="gallery-img"
              loading={index < 3 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      <div className="flex-center fade-up" style={{ flexDirection: 'column', marginTop: '20px' }}>
        <h2 style={{ fontFamily: 'var(--font-passions)', fontSize: '3.5rem', color: 'rgb(200, 155, 65)', fontWeight: 400, lineHeight: 1.2 }}>
          Counting Down to Forever
        </h2>
        <div className="line-separator" style={{ width: '200px', margin: '20px 0 40px' }}><div className="diamond"></div></div>
      </div>

      <div className="countdown-grid fade-up">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="countdown-box">
            <span className="countdown-number">{value.toString().padStart(2, '0')}</span>
            <span className="countdown-label">{unit.toUpperCase()}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
