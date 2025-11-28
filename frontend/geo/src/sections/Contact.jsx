import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setFormStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setFormStatus(null);
    }, 3000);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <p className="section-description fade-in">
            Ready to start your project? Contact us today for a consultation. 
            Our team is here to answer your questions and discuss how we can help.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card fade-in">
              <h3 className="contact-subtitle">Contact Information</h3>
              <p className="contact-text">
                Have questions or need expert engineering consultation? 
                Reach out to us through any of the following channels.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Email</div>
                    <a href="mailto:info@geoflux.com" className="contact-value">
                      info@geoflux.com
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Phone</div>
                    <a href="tel:+1234567890" className="contact-value">
                      +(267) 3975105
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Office</div>
                    <div className="contact-value">
                      Plot 10224, Mokolwane Road, Boradhurst Industrial <br />
                      Gaborone, South East
                    </div>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Business Hours</div>
                    <div className="contact-value">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat - Sun: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card privacy-notice fade-in">
              <h4 className="privacy-title">Privacy & Data Protection</h4>
              <p className="privacy-text">
                We respect your privacy and are committed to protecting your personal data. 
                All information submitted through this form is handled in accordance with 
                GDPR regulations and our <a href="/privacy" target="_blank" rel="noopener noreferrer" className="privacy-link">Privacy Policy</a>.
              </p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form fade-in" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=""
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=""
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-input"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Service Interest <span className="required">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  className="form-input"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="structural">Civil and Structural Engineering</option>
                  <option value="geotechnical">Electrical & Mechanical Engineering</option>
                  <option value="environmental">Environmental Engineering</option>
                  <option value="project-management">Water Resources Studies</option>
                  <option value="cad">Mineral Exploration and Resource Evaluation</option>
                  <option value="inspection">Geographic Information Systems (GIS)</option>
                  <option value="training">Training</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="form-group form-group-full">
                <label className="checkbox-label">
                  <input type="checkbox" required className="form-checkbox" />
                  <span>
                    I agree to the <a href="/privacy" target="_blank" rel="noopener noreferrer" className="privacy-link">Privacy Policy</a> and 
                    consent to the processing of my personal data.
                  </span>
                </label>
              </div>

              {formStatus === 'success' && (
                <div className="form-success">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-lg btn-full">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
