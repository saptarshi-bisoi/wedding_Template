import { Car, Building2, Gift } from 'lucide-react';

export default function TravelGifts() {
  return (
    <section className="section-container fade-up" style={{ background: '#131315' }}>
      
      {/* Gifts */}
      <div className="flex-center fade-up" style={{ flexDirection: 'column', textAlign: 'center' }}>
        <Gift size={32} color="var(--gold-primary)" style={{ marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '2.5rem' }}>
          Gifts
        </h2>
        <div className="line-separator" style={{ width: '150px' }}><div className="diamond"></div></div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
          Your love, blessings, and presence are the greatest gifts we could ever ask for.
        </p>
      </div>

    </section>
  );
}
