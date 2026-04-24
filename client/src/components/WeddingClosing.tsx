export default function WeddingClosing() {
  return (
    <>
      {/* Closing Quote Section */}
      <section className="wedding-closing fade-up">

        {/* Top wavy ornament */}
        <div className="closing-ornament">
          <svg viewBox="0 0 800 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave-svg">
            <path
              d="M0,30 C100,10 150,50 200,30 C250,10 300,50 350,30 C400,10 450,50 500,30 C550,10 600,50 650,30 C700,10 750,50 800,30"
              stroke="#c9a84c"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="100" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="250" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="400" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="550" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="700" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="175" cy="43" r="1.5" fill="#c9a84c" opacity="0.4" />
            <circle cx="325" cy="43" r="1.5" fill="#c9a84c" opacity="0.4" />
            <circle cx="475" cy="43" r="1.5" fill="#c9a84c" opacity="0.4" />
            <circle cx="625" cy="43" r="1.5" fill="#c9a84c" opacity="0.4" />
          </svg>
          {/* Corner star decorations */}
          <svg className="corner-star top-left" viewBox="0 0 30 30" width="30" height="30">
            <line x1="15" y1="0" x2="15" y2="30" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
            <line x1="0" y1="15" x2="30" y2="15" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
            <line x1="4" y1="4" x2="26" y2="26" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
            <line x1="26" y1="4" x2="4" y2="26" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
          </svg>
          <svg className="corner-star top-right" viewBox="0 0 30 30" width="30" height="30">
            <line x1="15" y1="0" x2="15" y2="30" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
            <line x1="0" y1="15" x2="30" y2="15" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
            <line x1="4" y1="4" x2="26" y2="26" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
            <line x1="26" y1="4" x2="4" y2="26" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
          </svg>
        </div>

        {/* Main closing quote */}
        <div className="closing-content">
          <h2 className="closing-quote">
            We can't wait to celebrate with you!
          </h2>
          <p className="closing-names">Vijay &amp; Rashmika</p>
        </div>

        {/* Bottom wavy ornament */}
        <div className="closing-ornament">
          <svg viewBox="0 0 800 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave-svg">
            <path
              d="M0,30 C100,10 150,50 200,30 C250,10 300,50 350,30 C400,10 450,50 500,30 C550,10 600,50 650,30 C700,10 750,50 800,30"
              stroke="#c9a84c"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="100" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="250" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="400" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="550" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="700" cy="17" r="2" fill="#c9a84c" opacity="0.5" />
            <circle cx="175" cy="43" r="1.5" fill="#c9a84c" opacity="0.4" />
            <circle cx="325" cy="43" r="1.5" fill="#c9a84c" opacity="0.4" />
            <circle cx="475" cy="43" r="1.5" fill="#c9a84c" opacity="0.4" />
            <circle cx="625" cy="43" r="1.5" fill="#c9a84c" opacity="0.4" />
          </svg>
        </div>
      </section>

      {/* Footer Bar */}
      <footer className="wedding-footer">
        <p className="footer-couple-name">Vijay &amp; Rashmika</p>
        <p className="footer-credit">
          A luxury wedding invitation experience
        </p>
      </footer>
    </>
  );
}
