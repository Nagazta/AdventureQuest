import { useState, useEffect } from 'react';
import '../components/styles/HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated Background Elements */}
      <div className="hero-bg-decoration">
        <div className="floating-book book-1">📚</div>
        <div className="floating-book book-2">📖</div>
        <div className="floating-book book-3">✨</div>
        <div className="floating-star star-1">⭐</div>
        <div className="floating-star star-2">⭐</div>
        <div className="floating-star star-3">🌟</div>
      </div>

      <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
        {/* Main Hero Text */}
        <div className="hero-text-container">
          <span className="hero-badge">Grade 3 Reading Program</span>
          <h1 className="hero-title">
            Embark on a 
            <span className="hero-title-highlight"> Reading Adventure!</span>
          </h1>
          <p className="hero-subtitle">
            Join thousands of Grade 3 learners in an exciting quest to enhance reading comprehension 
            through fun and interactive stories. Build confidence, unlock achievements, and become a reading champion!
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-container">
            <a href="#features" className="hero-cta-button primary">
              <span>Start Your Quest</span>
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#about" className="hero-cta-button secondary">
              <span>Learn More</span>
            </a>
          </div>

          {/* Stats Section */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Active Readers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Story Adventures</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Improvement Rate</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <svg className="hero-illustration" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Open Book */}
              <rect x="100" y="150" width="200" height="180" rx="10" fill="#FFFEF2" stroke="#6B3E1D" strokeWidth="4"/>
              <line x1="200" y1="150" x2="200" y2="330" stroke="#6B3E1D" strokeWidth="4"/>
              
              {/* Book Pages Lines */}
              <line x1="120" y1="180" x2="180" y2="180" stroke="#94785C" strokeWidth="2"/>
              <line x1="120" y1="200" x2="180" y2="200" stroke="#94785C" strokeWidth="2"/>
              <line x1="120" y1="220" x2="180" y2="220" stroke="#94785C" strokeWidth="2"/>
              <line x1="220" y1="180" x2="280" y2="180" stroke="#94785C" strokeWidth="2"/>
              <line x1="220" y1="200" x2="280" y2="200" stroke="#94785C" strokeWidth="2"/>
              <line x1="220" y1="220" x2="280" y2="220" stroke="#94785C" strokeWidth="2"/>
              
              {/* Stars around book */}
              <circle cx="80" cy="130" r="8" fill="#FCD765"/>
              <circle cx="320" cy="130" r="8" fill="#FCD765"/>
              <circle cx="90" cy="350" r="6" fill="#B96C25"/>
              <circle cx="310" cy="350" r="6" fill="#B96C25"/>
              
              {/* Character reading (simplified) */}
              <circle cx="200" cy="100" r="25" fill="#B96C25"/>
              <rect x="180" y="120" width="40" height="35" rx="5" fill="#6B3E1D"/>
            </svg>
            
            {/* Decorative circles */}
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;