import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              Engineering Excellence
              <br />
              <span className="hero-highlight">For a Sustainable Future</span>
            </h1>
            <p className="hero-description">
              Geoflux was founded in Botswana in 1989 with the prime aim of providing best-in-class Engineering consultancy services.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle className="feature-icon" size={20} />
                <span>ISO 9001 Certified</span>
              </div>
              <div className="hero-feature">
                <CheckCircle className="feature-icon" size={20} />
                <span>GDPR Compliant</span>
              </div>
              <div className="hero-feature">
                <CheckCircle className="feature-icon" size={20} />
                <span>Sustainable Solutions</span>
              </div>
            </div>
            <div className="hero-actions">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
                <ArrowRight size={20} />
              </button>
              <button 
                className="btn btn-secondary btn-lg"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="hero-image slide-in-right">
            <div className="hero-card">
              <div className="hero-stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
