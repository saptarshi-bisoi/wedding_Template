import { MapPin } from 'lucide-react';

export default function VenueMap() {
  return (
    <section className="section-container fade-up">
      <div className="flex-center" style={{ flexDirection: 'column', marginBottom: '40px' }}>
        <MapPin size={32} color="var(--gold-primary)" style={{ marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '2.5rem' }}>
          Venue
        </h2>
        <div className="line-separator" style={{ width: '150px' }}><div className="diamond"></div></div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>The Grand Palace</h3>
        <p style={{ color: 'var(--text-secondary)' }}>123 Royal Avenue, London</p>
      </div>

      <div className="map-wrapper fade-up">
        {/* Placeholder iframe for Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39736.93299778211!2d-0.127592!3d51.5072178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2sThe%20Grand!5e0!3m2!1sen!2sus!4v1689269785834!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for The Grand Palace"
          ></iframe>
      </div>

      <button className="gold-btn fade-up" style={{ marginTop: '20px' }}>
        View on Google Maps
      </button>

    </section>
  );
}
