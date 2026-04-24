import { useState, useEffect } from 'react';

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

  return (
    <section className="section-container fade-up">
      
      <div className="gallery-grid fade-up" style={{ marginBottom: '60px' }}>
        {[
          '/images/sadhi01.jpg',
          '/images/sadhi02.jpg', 
          '/images/sadhi03.jpg',
          '/images/sadhi04.jpg',
          '/images/haldi01.jpg',
          '/images/haldi02.jpg',
          '/images/sangetth01.jpg'
        ].map((imgSrc, index) => (
          <div key={index} className="gallery-wrapper">
            <img 
              src={imgSrc} 
              alt={`Wedding moment ${index + 1}`} 
              className="gallery-img"
              loading="lazy"
              width="500"
              height="500"
            />
          </div>
        ))}
      </div>

      <div className="flex-center fade-up" style={{ flexDirection: 'column', marginTop: '20px' }}>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '2rem', color: 'var(--gold-primary)' }}>
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
