import { Gift } from 'lucide-react';

export default function TravelGifts() {
  return (
    <section className="section-container fade-up" style={{ background: '#131315', minHeight: 'auto', padding: '5rem 2rem' }}>
      
      {/* Gifts */}
      <div className="flex-center fade-up" style={{ flexDirection: 'column', textAlign: 'center' }}>
        <Gift size={32} color="var(--gold-primary)" style={{ marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'var(--font-passions)', fontSize: '3.5rem', color: 'rgb(200, 155, 65)', fontWeight: 400, lineHeight: 1.2 }}>
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
