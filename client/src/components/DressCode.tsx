import { Shirt, PartyPopper } from 'lucide-react';

export default function DressCode() {
  return (
    <section className="section-container fade-up">
      <div className="flex-center" style={{ flexDirection: 'column', marginBottom: '40px' }}>
        <Shirt size={32} color="var(--gold-primary)" style={{ marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'var(--font-passions)', fontSize: '3.5rem', color: 'rgb(200, 155, 65)', fontWeight: 400, lineHeight: 1.2 }}>
          Dress Code
        </h2>
        <div className="line-separator" style={{ width: '200px' }}><div className="diamond"></div></div>
      </div>

      <div style={{ display: 'flex', gap: '4rem', marginBottom: '6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '250px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Women</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Elegant formal attire in pastel or jewel tones
          </p>
        </div>
        <div style={{ textAlign: 'center', maxWidth: '250px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Men</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Suit or traditional formal wear
          </p>
        </div>
      </div>

      <div className="flex-center" style={{ flexDirection: 'column', marginBottom: '40px' }}>
        <PartyPopper size={32} color="var(--gold-primary)" style={{ marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'var(--font-passions)', fontSize: '3.5rem', color: 'rgb(200, 155, 65)', fontWeight: 400, lineHeight: 1.2 }}>
          Pre-Wedding Events
        </h2>
        <div className="line-separator" style={{ width: '200px' }}><div className="diamond"></div></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', textAlign: 'center' }}>
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>Mehendi</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>June 13, 3:00 PM at Bride's Home</p>
        </div>
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>Haldi</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>June 14, 10:00 AM at Groom's Home</p>
        </div>
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>Sangeet</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>June 14, 7:00 PM at Grand Palace Hall</p>
        </div>
      </div>
    </section>
  );
}
