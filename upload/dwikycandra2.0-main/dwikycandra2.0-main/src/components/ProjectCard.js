import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({
  title,
  description,
  techStack,
  demoLink,
  codeLink,
  role,
  onRoleClick,
  delay = 0
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 50, y: 50 });
      }}
    >
      {/* Main Card */}
      <div className="card-main">
        {/* Gradient overlay */}
        <div className="card-gradient-overlay" />

        {/* Spotlight effect */}
        <motion.div
          className="card-spotlight"
          animate={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(
              600px circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(155, 89, 255, 0.08),
              transparent 40%
            )`
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="card-content">
          {/* Title */}
          <h3 className="card-title">{title}</h3>

          {/* Description */}
          <p className="card-description">{description}</p>

          {/* Role Badge */}
          {role && (
            <button
              className="card-role-badge"
              onClick={onRoleClick}
            >
              <span className="role-icon">→</span>
              {role}
            </button>
          )}

          {/* Tech Stack */}
          <div className="card-tech-stack">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="card-actions">
            {demoLink && (
              <a
                href={demoLink}
                className="card-action-link primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Live Demo</span>
              </a>
            )}
            {codeLink && codeLink !== '#' && (
              <a
                href={codeLink}
                className="card-action-link secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Accent line */}
        <motion.div
          className="card-accent-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;