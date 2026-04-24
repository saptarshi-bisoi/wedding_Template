import { MapPin } from 'lucide-react';

export default function VenueMap() {
  return (
    <section className="section-container fade-up">
      <div className="flex-center" style={{ flexDirection: 'column', marginBottom: '40px' }}>
        <MapPin size={32} color="var(--gold-primary)" style={{ marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'var(--font-passions)', fontSize: '3.5rem', color: 'rgb(200, 155, 65)', fontWeight: 400, lineHeight: 1.2 }}>
          Venue
        </h2>
        <div className="line-separator" style={{ width: '150px' }}><div className="diamond"></div></div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>Mementos by ITC Hotels, Ekaaya Udaipur</h3>
        <p style={{ color: 'var(--text-secondary)' }}>Udaipur, Rajasthan, India</p>
      </div>

      <div className="map-wrapper fade-up">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14489.501220367883!2d73.68855228225743!3d24.7825991308444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968084aea666db9%3A0x90ff0f546ba69fcc!2sMementos%20by%20ITC%20Hotels%2C%20Ekaaya%20Udaipur!5e0!3m2!1sen!2sin!4v1777053650710!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location for Mementos by ITC Hotels, Ekaaya Udaipur"
        ></iframe>
      </div>

      {/* Palace Illustration */}
      <div className="venue-illustration-wrapper fade-up">
        <svg
          viewBox="0 0 500 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="venue-illustration"
        >
          {/* Left minaret */}
          <rect x="28" y="60" width="10" height="102" stroke="#c9a84c" strokeWidth="1" />
          <rect x="24" y="54" width="18" height="10" stroke="#c9a84c" strokeWidth="1" />
          <ellipse cx="33" cy="52" rx="6" ry="8" stroke="#c9a84c" strokeWidth="1" />
          <line x1="33" y1="44" x2="33" y2="38" stroke="#c9a84c" strokeWidth="1" />

          {/* Far left arch */}
          <path d="M60 162 L60 100 Q75 80 90 100 L90 162" stroke="#c9a84c" strokeWidth="1" />

          {/* Left dome wing */}
          <rect x="100" y="90" width="70" height="72" stroke="#c9a84c" strokeWidth="1" />
          <path d="M100 90 Q135 55 170 90" stroke="#c9a84c" strokeWidth="1.2" />
          <ellipse cx="135" cy="56" rx="6" ry="10" stroke="#c9a84c" strokeWidth="1" />
          <line x1="135" y1="46" x2="135" y2="38" stroke="#c9a84c" strokeWidth="1" />
          <path d="M115 162 L115 120 Q135 105 155 120 L155 162" stroke="#c9a84c" strokeWidth="0.8" />

          {/* Center main dome */}
          <rect x="185" y="100" width="130" height="62" stroke="#c9a84c" strokeWidth="1" />
          <path d="M185 100 Q250 45 315 100" stroke="#c9a84c" strokeWidth="1.5" />
          <ellipse cx="250" cy="47" rx="9" ry="14" stroke="#c9a84c" strokeWidth="1" />
          <line x1="250" y1="33" x2="250" y2="22" stroke="#c9a84c" strokeWidth="1" />
          <path d="M218 162 L218 130 Q250 110 282 130 L282 162" stroke="#c9a84c" strokeWidth="1" />
          <path d="M200 118 Q210 110 220 118" stroke="#c9a84c" strokeWidth="0.7" />
          <path d="M280 118 Q290 110 300 118" stroke="#c9a84c" strokeWidth="0.7" />

          {/* Right dome wing */}
          <rect x="330" y="90" width="70" height="72" stroke="#c9a84c" strokeWidth="1" />
          <path d="M330 90 Q365 55 400 90" stroke="#c9a84c" strokeWidth="1.2" />
          <ellipse cx="365" cy="56" rx="6" ry="10" stroke="#c9a84c" strokeWidth="1" />
          <line x1="365" y1="46" x2="365" y2="38" stroke="#c9a84c" strokeWidth="1" />
          <path d="M345 162 L345 120 Q365 105 385 120 L385 162" stroke="#c9a84c" strokeWidth="0.8" />

          {/* Far right arch */}
          <path d="M410 162 L410 100 Q425 80 440 100 L440 162" stroke="#c9a84c" strokeWidth="1" />

          {/* Right minaret */}
          <rect x="462" y="60" width="10" height="102" stroke="#c9a84c" strokeWidth="1" />
          <rect x="458" y="54" width="18" height="10" stroke="#c9a84c" strokeWidth="1" />
          <ellipse cx="467" cy="52" rx="6" ry="8" stroke="#c9a84c" strokeWidth="1" />
          <line x1="467" y1="44" x2="467" y2="38" stroke="#c9a84c" strokeWidth="1" />

          {/* Ground line */}
          <line x1="0" y1="162" x2="500" y2="162" stroke="#c9a84c" strokeWidth="0.6" strokeDasharray="4 4" />
        </svg>
      </div>

      <a
        href="https://maps.app.goo.gl/TnDmXQabEbLhL11G9"
        target="_blank"
        rel="noopener noreferrer"
        className="venue-map-btn fade-up"
        style={{ marginTop: '10px' }}
      >
        View on Google Maps
      </a>

    </section>
  );
}
