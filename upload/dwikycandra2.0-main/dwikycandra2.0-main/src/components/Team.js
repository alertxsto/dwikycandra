import React from 'react';
import './team.css';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import teamMember1 from '../images/team-member-1.jpg';
import teamMember2 from '../images/team-member-2.png';
import teamMember3 from '../images/team-member-3.jpg';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Zaky Purwana',
      role: 'Frontend Developer — Career Pods',
      image: teamMember1,
      bio: 'Collaborated on responsive UI components and state management. Delivered pixel-perfect designs with 95% cross-browser compatibility.',
      links: {
        github: 'https://github.com/zeekkk246',
        portfolio: 'https://zeekkk246.github.io/portfolio/'
      }
    },
    {
      id: 2,
      name: 'Nico Johannes Sirait',
      role: 'Backend Developer — FoodConnect',
      image: teamMember2,
      bio: 'Built RESTful APIs and database architecture. Optimized queries reducing response time from 800ms to 200ms.',
      links: {
        github: 'https://github.com/nicoyhnnssiraitt',
        portfolio: 'https://nicoyhnnssiraitt.github.io/portfolio'
      }
    },
    {
      id: 3,
      name: 'Rivaldo Haryono',
      role: 'DevOps Engineer — Z Studio',
      image: teamMember3,
      bio: 'Managed CI/CD pipelines and AWS infrastructure. Achieved 99.5% uptime with automated deployment workflows.',
      links: {
        github: 'https://github.com/xenscreww',
        portfolio: 'https://xenscreww.github.io/portfolio'
      }
    },
    // Tambah lebih banyak team members di sini
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Collaborative Work</h2>
        <p className="team-subtitle">
          Cross-functional collaboration on production projects
        </p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-card-image">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-photo"
                  onError={(e) => {
                    e.target.style.backgroundColor = '#9b59ff';
                    e.target.style.backgroundImage = 'linear-gradient(135deg, #9b59ff, #6432ff)';
                    e.target.style.width = '100%';
                    e.target.style.height = '100%';
                    e.target.style.display = 'flex';
                    e.target.style.alignItems = 'center';
                    e.target.style.justifyContent = 'center';
                    e.target.style.color = '#fff';
                    e.target.style.fontSize = '32px';
                    e.target.style.fontWeight = 'bold';
                    e.target.textContent = member.name.split(' ')[0][0];
                  }}
                />
              </div>

              <div className="team-card-content">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>

                <div className="team-links">
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-link"
                      title="GitHub Profile"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {member.links.portfolio && (
                    <a
                      href={member.links.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-link"
                      title="Portfolio"
                    >
                      <FiGlobe />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
