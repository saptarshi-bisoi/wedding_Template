import { MousePointer2, Clock, MessageCircle, Music, MapPin, Sparkles, Image as ImageIcon, Palette } from 'lucide-react';

const features = [
  { icon: MousePointer2, title: 'Scratch to Reveal Date', desc: 'Interactive scratch card reveals the wedding date with a delightful surprise' },
  { icon: Clock, title: 'Live Countdown', desc: 'Animated countdown timer to your special day' },
  { icon: MessageCircle, title: 'Guest Messaging & Inbox', desc: 'Receive messages, attendance confirmations & guest counts' },
  { icon: Music, title: 'Background Music', desc: 'Romantic instrumentals with elegant mute toggle' },
  { icon: MapPin, title: 'Venue with Maps', desc: 'Embedded Google Maps for seamless directions' },
  { icon: Sparkles, title: 'Premium Animations', desc: '3D door reveals, curtains, sparkles & more' },
  { icon: ImageIcon, title: 'Custom Image Upload', desc: 'Upload slideshow photos & hero background images' },
  { icon: Palette, title: 'Full Customization', desc: 'Toggle sections, dress codes, events & more' }
];

export default function PremiumFeatures() {
  return (
    <section className="section-container section-light fade-up">
      <div className="flex-center" style={{ flexDirection: 'column', marginBottom: '60px' }}>
        <p style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-inter)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '10px' }}>
          Everything You Need
        </p>
        <h2 className="section-title" style={{ color: '#111' }}>
          Premium Features
        </h2>
        <p style={{ color: '#666', maxWidth: '600px', textAlign: 'center', lineHeight: '1.6' }}>
          Every invitation comes packed with interactive features that make your wedding announcement unforgettable.
        </p>
        <div className="line-separator" style={{ width: '150px', marginTop: '20px' }}></div>
      </div>

      <div className="content-grid">
        {features.map((feature, i) => (
          <div className="feature-card fade-up" key={i}>
            <div className="feature-icon-wrapper">
              <feature.icon size={24} />
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
