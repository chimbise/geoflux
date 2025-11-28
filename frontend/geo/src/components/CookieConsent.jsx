import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(savedPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key) => {
    if (key === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent">
        {!showSettings ? (
          <>
            <div className="cookie-content">
              <h3 className="cookie-title">We Value Your Privacy</h3>
              <p className="cookie-description">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                Read our <a href="#privacy" className="cookie-link">Privacy Policy</a> and{' '}
                <a href="#cookies" className="cookie-link">Cookie Policy</a> to learn more.
              </p>
            </div>
            <div className="cookie-actions">
              <button 
                className="btn btn-secondary cookie-btn"
                onClick={handleRejectAll}
              >
                Reject All
              </button>
              <button 
                className="btn btn-secondary cookie-btn"
                onClick={() => setShowSettings(true)}
              >
                Customize
              </button>
              <button 
                className="btn btn-primary cookie-btn"
                onClick={handleAcceptAll}
              >
                Accept All
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-content">
              <h3 className="cookie-title">Cookie Preferences</h3>
              <p className="cookie-description">
                Manage your cookie preferences below. You can enable or disable different types 
                of cookies according to your preferences.
              </p>
              
              <div className="cookie-settings">
                <div className="cookie-setting">
                  <div className="cookie-setting-header">
                    <label className="cookie-setting-label">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="cookie-checkbox"
                      />
                      <span className="cookie-setting-title">Necessary Cookies</span>
                    </label>
                    <span className="cookie-badge required">Required</span>
                  </div>
                  <p className="cookie-setting-description">
                    Essential for the website to function properly. These cannot be disabled.
                  </p>
                </div>

                <div className="cookie-setting">
                  <div className="cookie-setting-header">
                    <label className="cookie-setting-label">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handlePreferenceChange('functional')}
                        className="cookie-checkbox"
                      />
                      <span className="cookie-setting-title">Functional Cookies</span>
                    </label>
                  </div>
                  <p className="cookie-setting-description">
                    Enable personalized features and remember your preferences.
                  </p>
                </div>

                <div className="cookie-setting">
                  <div className="cookie-setting-header">
                    <label className="cookie-setting-label">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="cookie-checkbox"
                      />
                      <span className="cookie-setting-title">Analytics Cookies</span>
                    </label>
                  </div>
                  <p className="cookie-setting-description">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>

                <div className="cookie-setting">
                  <div className="cookie-setting-header">
                    <label className="cookie-setting-label">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="cookie-checkbox"
                      />
                      <span className="cookie-setting-title">Marketing Cookies</span>
                    </label>
                  </div>
                  <p className="cookie-setting-description">
                    Used to deliver relevant advertisements and track campaign performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="cookie-actions">
              <button 
                className="btn btn-secondary cookie-btn"
                onClick={() => setShowSettings(false)}
              >
                Back
              </button>
              <button 
                className="btn btn-primary cookie-btn"
                onClick={handleSavePreferences}
              >
                Save Preferences
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
