import { Clock } from 'lucide-react';

const timelineEvents = [
  { time: "4:00 PM", title: "Guest Arrival" },
  { time: "5:00 PM", title: "Wedding Ceremony" },
  { time: "6:30 PM", title: "Cocktail Hour" },
  { time: "7:00 PM", title: "Dinner Reception" },
  { time: "9:00 PM", title: "Dance & Celebration" },
];

export default function ProgramTimeline() {
  return (
    <section className="section-container fade-up" style={{ background: 'var(--bg-lighter)' }}>
      <div className="flex-center" style={{ flexDirection: 'column', marginBottom: '40px' }}>
        <Clock size={32} color="var(--gold-primary)" style={{ marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'var(--font-passions)', fontSize: '3.5rem', color: 'rgb(200, 155, 65)', fontWeight: 400, lineHeight: 1.2 }}>
          Program Timeline
        </h2>
        <div className="line-separator" style={{ width: '200px' }}><div className="diamond"></div></div>
      </div>

      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <div className="timeline-item fade-up" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-content">
              <div className="timeline-time">{event.time}</div>
              <div className="timeline-title">{event.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
