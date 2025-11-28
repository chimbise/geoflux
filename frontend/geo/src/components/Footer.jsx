import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">GeoFlux Engineering</h3>
            <p className="footer-description">
              Delivering innovative engineering solutions with a commitment to quality, 
              sustainability, and excellence in every project.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/geoflux-pty-ltd" aria-label="LinkedIn" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/p/Geoflux-Pty-Ltd-61576339855310/" aria-label="Facebook" className="social-link">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Civil and Structural Engineering</a></li>
              <li><a href="#services">Electrical & Mechanical Engineering</a></li>
              <li><a href="#services">Water Resources Studies</a></li>
              <li><a href="#services">Mineral Exploration and Resource Evaluation</a></li>
              <li><a href="#services">Environmental studies</a></li>
              <li><a href="#services">Geographic Information Systems (GIS)</a></li>
              <li><a href="#services">Training</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={18} />
                <a href="mailto:info@geoflux.com">info@geoflux.com</a>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+1234567890">(+267) 3975105</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Plot 10224, Mokolwane Road, Boradhurst Industrial, Gaborone, South East</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} GeoFlux Engineering. All rights reserved.</p>
            <div className="footer-legal">
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              <span className="separator">|</span>
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
              <span className="separator">|</span>
              <a href="/cookies" target="_blank" rel="noopener noreferrer">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
