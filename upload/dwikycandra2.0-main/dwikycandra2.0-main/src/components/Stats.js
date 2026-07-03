import React, { useEffect, useRef } from 'react';
import './stats.css';

function useCountUp(ref, to, duration = 1200, suffix = '') {
  useEffect(() => {
    let start = 0;
    const el = ref.current;
    if (!el) return;
    const stepTime = Math.max(Math.floor(duration / to), 10);
    const timer = setInterval(() => {
      start += 1;
      el.textContent = start + suffix;
      if (start >= to) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [ref, to, duration, suffix]);
}

export default function Stats() {
  const projectsRef = useRef(null);
  const usersRef = useRef(null);
  const teamsRef = useRef(null);

  useCountUp(projectsRef, 15, 1000, '+');
  useCountUp(usersRef, 800, 1500, '+');
  useCountUp(teamsRef, 3, 800);

  return (
    <section className="stats" aria-label="Statistics">
      <div className="container stats-grid">
        <div className="stat">
          <div className="stat-num" ref={projectsRef}>0</div>
          <div className="stat-label">Production Projects</div>
        </div>
        <div className="stat">
          <div className="stat-num" ref={usersRef}>0</div>
          <div className="stat-label">Active Users Served</div>
        </div>
        <div className="stat">
          <div className="stat-num" ref={teamsRef}>0</div>
          <div className="stat-label">Teams Led</div>
        </div>
      </div>
    </section>
  );
}
