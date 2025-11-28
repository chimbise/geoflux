import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsOfService from './sections/TermsOfService';
import CookiePolicy from './sections/CookiePolicy';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <Services />
                <Projects />
                <About />
                <Contact />
              </main>
              <Footer />
              <CookieConsent />
              <ScrollToTop />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
