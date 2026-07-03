import React from 'react';
import './testimonials.css';

const items = [
  { 
    text: "Delivered production-ready code with 95% test coverage. Consistently meets deadlines with clean, maintainable solutions.", 
    who: "IDCamp Technical Mentor" 
  },
  { 
    text: "Led frontend architecture decisions that reduced load time by 65%. Strong technical leadership and clear communication.", 
    who: "Team Lead — Career Pods" 
  },
  { 
    text: "Exceeded project requirements. Delivered 2 weeks early with comprehensive documentation and 99.5% uptime.", 
    who: "FoodConnect Client" 
  },
  { 
    text: "Intuitive UI with flawless mobile responsiveness. Performance optimizations made the app feel instant.", 
    who: "Z Studio Beta Tester" 
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" aria-label="Testimoni">
      <div className="container">
        <h3>Client Feedback</h3>
        <div className="testi-marquee" role="list">
          <div className="testi-track">
            {items.concat(items).map((it, idx) => (
              <div key={idx} className="testi-item" role="listitem">
                <div className="quote-icon">"</div>
                <p className="testi-text">{it.text}</p>
                <div className="testi-who">{it.who}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
