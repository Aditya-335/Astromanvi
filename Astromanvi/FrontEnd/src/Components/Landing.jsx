import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import starsBackground from '../assets/stars1.jpg';
import horoscopeCircle from '../assets/chart.png';

const LandingPage = () => {
    return (
        <>
    <div className="landing-container">
      <nav className="navbar">
        <h1 className='sitelogo'>ASTROMANVI</h1> 
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1 className="main-title">Align With the Universe</h1>
        <p className="subtitle">Let the stars guide your path</p>
        <button className="cta-button">Begin your journey</button>
      </div>

      <div className="horoscope-container">
        <img src={horoscopeCircle} alt="Horoscope Circle" className="horoscope-img" />
      </div>
    </div>

        </>
    );
};

export default LandingPage;
