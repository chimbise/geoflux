import React from 'react';
import { Users, Award, Target, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Shield size={32} />,
      title: 'Quality & Safety',
      description: 'ISO 9001 certified processes ensure the highest standards in every project we undertake.'
    },
    {
      icon: <Target size={32} />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and methods to deliver superior engineering solutions.'
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'Committed to exceeding client expectations through technical expertise and dedication.'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'Working closely with clients and stakeholders to achieve project success together.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '15+', label: 'Years of Experience' },
    { number: '50+', label: 'Expert Engineers' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title fade-in">About GeoFlux Engineering</h2>
          <p className="section-description fade-in">
            Building a sustainable future through innovative engineering excellence
          </p>
        </div>

        <div className="about-content">
          <div className="about-text fade-in">
            <h3 className="about-subtitle">Who We Are</h3>
            <p>
              GeoFlux Engineering is a leading provider of comprehensive engineering services, 
              specializing in structural, geotechnical, and environmental engineering solutions. 
              With over 15 years of industry experience, we've successfully delivered more than 
              500 projects across various sectors.
            </p>
            <p>
              Our team of certified engineers combines technical expertise with innovative 
              problem-solving to tackle complex engineering challenges. We are committed to 
              sustainable practices, quality management, and data protection compliance, 
              ensuring that every project meets the highest industry standards.
            </p>
            <p>
              As an ISO 9001 certified company and GDPR compliant organization, we maintain 
              rigorous quality control processes and respect client data privacy at every step 
              of our engagement.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-value">{stat.number}</div>
                <div className="stat-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title text-center">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications">
          <h3 className="certifications-title text-center">Certifications & Compliance</h3>
          <div className="certifications-grid">
            <div className="cert-badge">
              <div className="cert-icon">✓</div>
              <div className="cert-text">
                <div className="cert-name">ISO 9001:2015</div>
                <div className="cert-description">Quality Management System</div>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">✓</div>
              <div className="cert-text">
                <div className="cert-name">GDPR Compliant</div>
                <div className="cert-description">Data Protection Standards</div>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">✓</div>
              <div className="cert-text">
                <div className="cert-name">Professional Engineering</div>
                <div className="cert-description">Licensed & Insured</div>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">✓</div>
              <div className="cert-text">
                <div className="cert-name">Environmental Standards</div>
                <div className="cert-description">Sustainable Practices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
