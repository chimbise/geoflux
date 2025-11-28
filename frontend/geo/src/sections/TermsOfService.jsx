import React from 'react';
import './Legal.css';

const TermsOfService = () => {
  return (
    <section id="terms" className="section legal-section">
      <div className="container">
        <div className="legal-content">
          <h2 className="legal-title">Terms of Service</h2>
          <p className="legal-updated">Last Updated: November 28, 2025</p>

          <div className="legal-section-content">
            <h3>1. Agreement to Terms</h3>
            <p>
              By accessing or using the GeoFlux Engineering website and services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>2. Services Provided</h3>
            <p>
              GeoFlux Engineering provides professional engineering services including but not limited to:
            </p>
            <ul>
              <li>Civil and Structural Engineering</li>
              <li>Electrical & Mechanical Engineering</li>
              <li>Water Resources Studies</li>
              <li>Mineral Exploration and Resource Evaluation</li>
              <li>Environmental Studies</li>
              <li>Geographic Information Systems (GIS)</li>
              <li>Training and Consultation</li>
            </ul>
          </div>

          <div className="legal-section-content">
            <h3>3. Professional Standards</h3>
            <p>
              All services are provided in accordance with ISO 9001:2015 quality management standards and 
              professional engineering regulations. We maintain professional liability insurance and adhere 
              to industry best practices.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>4. Client Obligations</h3>
            <p>Clients engaging our services agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Respond to requests for information in a timely manner</li>
              <li>Pay fees according to agreed terms</li>
              <li>Comply with professional recommendations</li>
            </ul>
          </div>

          <div className="legal-section-content">
            <h3>5. Intellectual Property</h3>
            <p>
              All deliverables, reports, designs, and documentation remain the intellectual property of 
              GeoFlux Engineering until full payment is received. Upon payment, clients receive a license 
              to use the materials for the specific project purpose.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>6. Limitation of Liability</h3>
            <p>
              GeoFlux Engineering's liability is limited to the fees paid for the specific service. 
              We are not liable for indirect, consequential, or incidental damages arising from our services.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>7. Confidentiality</h3>
            <p>
              We maintain strict confidentiality of all client information and project details. 
              Information is only shared with third parties with explicit client consent or as required by law.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>8. Termination</h3>
            <p>
              Either party may terminate services with written notice. Clients remain responsible for 
              fees for work completed up to the termination date.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>9. Governing Law</h3>
            <p>
              These terms are governed by the laws of Botswana. Any disputes shall be resolved through 
              arbitration in Gaborone, Botswana.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>10. Contact</h3>
            <p>
              For questions about these Terms of Service:<br />
              <strong>GeoFlux Engineering</strong><br />
              Email: <a href="mailto:info@geoflux.com">info@geoflux.com</a><br />
              Phone: (+267) 3975105
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
