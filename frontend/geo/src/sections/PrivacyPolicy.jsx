import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="section legal-section">
      <div className="container">
        <div className="legal-content">
          <h2 className="legal-title">Privacy Policy</h2>
          <p className="legal-updated">Last Updated: November 28, 2025</p>

          <div className="legal-section-content">
            <h3>1. Introduction</h3>
            <p>
              GeoFlux Engineering ("we", "our", or "us") is committed to protecting your privacy 
              and ensuring the security of your personal data. This Privacy Policy explains how 
              we collect, use, disclose, and safeguard your information in compliance with the 
              General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>2. Information We Collect</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
              <li><strong>Professional Information:</strong> Job title, industry, project details</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on site, navigation patterns</li>
              <li><strong>Communication Data:</strong> Records of correspondence and inquiries</li>
            </ul>
          </div>

          <div className="legal-section-content">
            <h3>3. Legal Basis for Processing</h3>
            <p>We process your personal data based on:</p>
            <ul>
              <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
              <li><strong>Contract:</strong> Processing is necessary to fulfill our contractual obligations</li>
              <li><strong>Legal Obligation:</strong> We must comply with legal or regulatory requirements</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</li>
            </ul>
          </div>

          <div className="legal-section-content">
            <h3>4. How We Use Your Information</h3>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to inquiries and provide requested services</li>
              <li>Process and manage project engagements</li>
              <li>Improve our website and service offerings</li>
              <li>Send relevant updates and communications (with consent)</li>
              <li>Comply with legal obligations and industry standards</li>
              <li>Maintain security and prevent fraud</li>
            </ul>
          </div>

          <div className="legal-section-content">
            <h3>5. Data Sharing and Disclosure</h3>
            <p>
              We do not sell your personal data. We may share information with:
            </p>
            <ul>
              <li>Service providers who assist in business operations (under strict confidentiality agreements)</li>
              <li>Professional advisors (lawyers, accountants, auditors)</li>
              <li>Regulatory authorities when legally required</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </div>

          <div className="legal-section-content">
            <h3>6. Your Rights Under GDPR</h3>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Restriction:</strong> Limit how we use your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at <a href="mailto:privacy@geoflux.com">privacy@geoflux.com</a>
            </p>
          </div>

          <div className="legal-section-content">
            <h3>7. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal data, including encryption, access controls, secure servers, and regular 
              security assessments. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>8. Data Retention</h3>
            <p>
              We retain personal data only as long as necessary for the purposes outlined in this 
              policy or as required by law. Project-related data is typically retained for 7 years 
              in accordance with professional engineering standards.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>9. Cookies</h3>
            <p>
              Our website uses cookies to enhance user experience. See our{' '}
              <a href="#cookies">Cookie Policy</a> for detailed information.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>10. International Transfers</h3>
            <p>
              If we transfer data outside the Botswana, we ensure appropriate safeguards are in place, 
              such as standard contractual clauses approved by the Botswana Data Protection Act.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>11. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page 
              with an updated revision date.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>12. Contact Us</h3>
            <p>
              For questions about this Privacy Policy or our data practices, contact:<br />
              <strong>Data Protection Officer</strong><br />
              GeoFlux Engineering<br />
              Email: <a href="mailto:privacy@geoflux.com">privacy@geoflux.com</a><br />
              Phone: +267 3975105
            </p>
          </div>

          <div className="legal-section-content">
            <h3>13. Supervisory Authority</h3>
            <p>
              You have the right to lodge a complaint with your local data protection authority 
              if you believe we have not handled your personal data properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
