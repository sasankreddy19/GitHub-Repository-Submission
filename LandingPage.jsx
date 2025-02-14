// LandingPage.jsx
import React from 'react';
import './LandingPage.css'; // CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>My Company</h1> {/* Company Name */}
      </header>
      <main className="landing-content">
        <p>
          Welcome to My Company! We specialize in providing the best solutions for your needs. Our mission is to deliver quality and excellence in every project we undertake.
        </p> {/* Paragraph about the company */}
      </main>
    </div>
  );
};

export default LandingPage;
