export default function VenueFooter() {
  return (
    <section className="venue-footer fade-up">
      {/* Decorative Venue Illustration */}
      <div className="venue-illustration-wrapper">
        <svg
          viewBox="0 0 500 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="venue-illustration"
        >
          {/* Left minaret */}
          <rect x="28" y="60" width="10" height="100" stroke="#c9a84c" strokeWidth="1" />
          <rect x="24" y="54" width="18" height="10" stroke="#c9a84c" strokeWidth="1" />
          <ellipse cx="33" cy="52" rx="6" ry="8" stroke="#c9a84c" strokeWidth="1" />
          <line x1="33" y1="44" x2="33" y2="38" stroke="#c9a84c" strokeWidth="1" />

          {/* Far left arch */}
          <path d="M60 160 L60 100 Q75 80 90 100 L90 160" stroke="#c9a84c" strokeWidth="1" />

          {/* Left dome wing */}
          <rect x="100" y="90" width="70" height="70" stroke="#c9a84c" strokeWidth="1" />
          <path d="M100 90 Q135 55 170 90" stroke="#c9a84c" strokeWidth="1.2" />
          {/* Dome top */}
          <ellipse cx="135" cy="56" rx="6" ry="10" stroke="#c9a84c" strokeWidth="1" />
          <line x1="135" y1="46" x2="135" y2="38" stroke="#c9a84c" strokeWidth="1" />
          {/* Arch detail */}
          <path d="M115 160 L115 120 Q135 105 155 120 L155 160" stroke="#c9a84c" strokeWidth="0.8" />

          {/* Center main dome */}
          <rect x="185" y="100" width="130" height="62" stroke="#c9a84c" strokeWidth="1" />
          <path d="M185 100 Q250 45 315 100" stroke="#c9a84c" strokeWidth="1.5" />
          {/* Center dome top */}
          <ellipse cx="250" cy="47" rx="9" ry="14" stroke="#c9a84c" strokeWidth="1" />
          <line x1="250" y1="33" x2="250" y2="22" stroke="#c9a84c" strokeWidth="1" />
          {/* Center arch */}
          <path d="M218 162 L218 130 Q250 110 282 130 L282 162" stroke="#c9a84c" strokeWidth="1" />
          {/* Window details */}
          <path d="M200 118 Q210 110 220 118" stroke="#c9a84c" strokeWidth="0.7" />
          <path d="M280 118 Q290 110 300 118" stroke="#c9a84c" strokeWidth="0.7" />

          {/* Right dome wing */}
          <rect x="330" y="90" width="70" height="70" stroke="#c9a84c" strokeWidth="1" />
          <path d="M330 90 Q365 55 400 90" stroke="#c9a84c" strokeWidth="1.2" />
          <ellipse cx="365" cy="56" rx="6" ry="10" stroke="#c9a84c" strokeWidth="1" />
          <line x1="365" y1="46" x2="365" y2="38" stroke="#c9a84c" strokeWidth="1" />
          <path d="M345 160 L345 120 Q365 105 385 120 L385 160" stroke="#c9a84c" strokeWidth="0.8" />

          {/* Far right arch */}
          <path d="M410 160 L410 100 Q425 80 440 100 L440 160" stroke="#c9a84c" strokeWidth="1" />

          {/* Right minaret */}
          <rect x="462" y="60" width="10" height="100" stroke="#c9a84c" strokeWidth="1" />
          <rect x="458" y="54" width="18" height="10" stroke="#c9a84c" strokeWidth="1" />
          <ellipse cx="467" cy="52" rx="6" ry="8" stroke="#c9a84c" strokeWidth="1" />
          <line x1="467" y1="44" x2="467" y2="38" stroke="#c9a84c" strokeWidth="1" />

          {/* Ground line */}
          <line x1="0" y1="162" x2="500" y2="162" stroke="#c9a84c" strokeWidth="0.6" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* CTA Button */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+London"
        target="_blank"
        rel="noopener noreferrer"
        className="gold-btn venue-map-btn"
      >
        View on Google Maps
      </a>

      {/* Footer note */}
      <p className="venue-footer-note">
        Made with ❤️ for Vijay & Rashmika
      </p>
    </section>
  );
}
