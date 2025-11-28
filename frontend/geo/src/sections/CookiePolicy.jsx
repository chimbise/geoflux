import React from 'react';
import './Legal.css';

const CookiePolicy = () => {
  return (
    <section id="cookies" className="section legal-section">
      <div className="container">
        <div className="legal-content">
          <h2 className="legal-title">Cookie Policy</h2>
          <p className="legal-updated">Last Updated: November 28, 2025</p>

          <div className="legal-section-content">
            <h3>1. What Are Cookies</h3>
            <p>
              Cookies are small text files stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences 
              and understanding how you use our site.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>2. Types of Cookies We Use</h3>
            
            <h4>Necessary Cookies (Always Active)</h4>
            <p>
              These cookies are essential for the website to function properly. They enable basic 
              features like page navigation and access to secure areas. The website cannot function 
              properly without these cookies.
            </p>
            
            <h4>Functional Cookies (Optional)</h4>
            <p>
              These cookies enable personalized features and remember your preferences such as 
              language settings and region.
            </p>
            
            <h4>Analytics Cookies (Optional)</h4>
            <p>
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. This helps us improve our website's performance 
              and user experience.
            </p>
            
            <h4>Marketing Cookies (Optional)</h4>
            <p>
              These cookies track your browsing activity to deliver relevant advertisements and 
              measure the effectiveness of our marketing campaigns.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>3. Cookie Management</h3>
            <p>
              You can manage your cookie preferences at any time using our cookie consent banner. 
              You can also control cookies through your browser settings:
            </p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>
            <p>
              Note: Disabling certain cookies may affect website functionality.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>4. Third-Party Cookies</h3>
            <p>
              We may use third-party services that set cookies on our behalf, including:
            </p>
            <ul>
              <li>Google Analytics (for website analytics)</li>
              <li>Social media platforms (for social sharing features)</li>
            </ul>
            <p>
              These third parties have their own privacy policies governing their use of cookies.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>5. Cookie Duration</h3>
            <p>
              <strong>Session Cookies:</strong> Temporary cookies deleted when you close your browser.<br />
              <strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>6. Updates to This Policy</h3>
            <p>
              We may update this Cookie Policy periodically. The "Last Updated" date at the top 
              indicates when changes were last made. Continued use of our website constitutes 
              acceptance of any updates.
            </p>
          </div>

          <div className="legal-section-content">
            <h3>7. Contact Us</h3>
            <p>
              For questions about our use of cookies:<br />
              <strong>GeoFlux Engineering</strong><br />
              Email: <a href="mailto:privacy@geoflux.com">privacy@geoflux.com</a><br />
              Phone: (+267) 3975105
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
