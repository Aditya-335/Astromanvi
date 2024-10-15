import React, { useState } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import starsBackground from '../assets/stars1.jpg';
import horoscopeCircle from '../assets/chart.png';
import { Menu, X } from 'lucide-react';

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="landing-container">
            <nav className="navbar">
                <h1 className='sitelogo'>ASTROMANVI</h1> 
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                        <li><a href="#reviews" onClick={toggleMenu}>Reviews</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
                    </ul>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </nav>

            <div className="content-wrapper">
                <div className="content">
                    <h1 className="main-title">Align With the Universe</h1>
                    <h3 className="sub-title">Let the stars guide your path</h3>
                    <button className="cta-button"
                     onClick={()=> { 
                      const section = document.getElementById("services");          
                      section.scrollIntoView({ behavior: "smooth" });         
                    }}>
                      Begin your journey
                      </button>
                </div>

                <div className="horoscope-container">
                    <img src={horoscopeCircle} alt="Horoscope Circle" className="horoscope-img" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;