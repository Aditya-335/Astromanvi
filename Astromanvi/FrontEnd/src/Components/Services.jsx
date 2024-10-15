import React, { useState } from 'react';
import { RotateCw, ChevronRight } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ title, icon, description, details, actionText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className={`service-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        <div className="card-front">
          <div className="icon">{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleFlip} className="flip-button">
            Learn More <ChevronRight size={16} />
          </button>
        </div>
        <div className="card-back">
          <h3>{title}</h3>
          <p>{details}</p>
          <button className="action-button" 
            onClick={()=> { 
              const section = document.getElementById("contact");          
              section.scrollIntoView({ behavior: "smooth" });         
          }}>{actionText}</button>
          <button onClick={handleFlip} className="flip-button reverse">
            <RotateCw size={16} /> Back
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Tarot Reading',
      icon: '🃏',
      description: 'Discover insights about your past, present, and future.',
      details: 'Our expert tarot readers use ancient wisdom and modern insights to provide you with accurate and insightful readings. Whether you\'re seeking guidance on love, career, or personal growth, our tarot services can illuminate your path forward.',
      actionText: 'Book a Reading'
    },
    {
      title: 'Astrology Chart',
      icon: '🌠',
      description: 'Understand how celestial bodies influence your life.',
      details: 'Get a personalized astrological chart that maps the positions of planets and stars at the time of your birth. Our astrologers will interpret this cosmic snapshot to provide deep insights into your personality, strengths, challenges, and life path.',
      actionText: 'Create Your Chart'
    },
    {
      title: 'Numerology Analysis',
      icon: '🔢',
      description: 'Uncover the hidden meanings in your life\'s numbers.',
      details: 'Numbers carry vibrations that can reveal much about your life purpose, talents, and challenges. Our numerology experts will analyze your name and birth date to provide a comprehensive numerological profile that can guide your decisions and personal growth.',
      actionText: 'Get Your Analysis'
    },
    // Add more services as needed
  ];

  return (
    <div className="services-container">
      <h1>Our Mystical Services</h1>
      <p className="subtitle">Unlock the Secrets of the Universe</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;