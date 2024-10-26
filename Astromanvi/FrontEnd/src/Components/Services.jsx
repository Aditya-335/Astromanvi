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
      icon: <img src='https://cdn-icons-png.flaticon.com/128/5019/5019983.png'></img>,
      description: 'Discover insights about your past, present, and future.',
      details: 'With ancient wisdom and modern insights we provide you with accurate and insightful readings. Whether you\'re seeking guidance on love, career, or personal growth, our tarot services can illuminate your path forward.',
      actionText: 'Book a Reading'
    },
    {
      title: 'Maa Durga Healing',
      icon: <img src='https://cdn-icons-png.flaticon.com/128/4086/4086544.png'></img> ,
      description: 'Heal your soul with divine blessings and spiritual energy.',
      details: 'Experience the powerful blessings of Maa Durga to cleanse negative energy and restore balance in your life. Our spiritual healing sessions focus on channeling divine energy to help you overcome personal obstacles and connect with your higher self.',
      actionText: 'Start Your Healing'
    },
    {
      title: 'Spiritual Counselling',
      icon: <img src='https://cdn-icons-png.flaticon.com/128/8795/8795859.png'></img>,
      description: 'Find peace and clarity through spiritual guidance.',
      details: 'We offer personalized guidance to help you navigate life’s challenges. Whether you’re dealing with emotional stress, difficult decisions, or seeking deeper meaning, we provide support to help you find clarity and inner peace.',
      actionText: 'Get Counselling'
    },
    {
      title: 'Crystal Therapy',
      icon: <img src='https://cdn-icons-png.flaticon.com/128/6577/6577788.png'></img>,
      description: 'Harness the healing power of crystals.',
      details: 'Crystals are known for their ability to heal, protect, and energize. We will help you understand the properties of various crystals and how to use them to improve your mental, emotional, and physical well-being.',
      actionText: 'Start Crystal Healing'
    },
    {
      title: 'Numerology',
      icon: <img src='https://cdn-icons-png.flaticon.com/128/6766/6766640.png'></img>,
      description: 'Uncover the hidden meanings in your life\'s numbers.',
      details: 'Numbers carry vibrations that reveal insights into your life purpose, talents, and challenges. We will analyze your name and birth date to provide a comprehensive numerological profile, guiding your decisions and personal growth.',
      actionText: 'Get Your Analysis'
    },
    {
      title: 'Vastu Consultancy',
      icon: <img src='https://cdn-icons-png.flaticon.com/128/2144/2144772.png' alt='Vastu Consultancy Icon' />,
      description: 'Harmonize your living space with ancient Vastu principles.',
      details: 'We provide personalized consultations to help you align your home or workspace with the natural forces of the universe. Discover how the layout and energy flow of your environment can impact your health, wealth, and happiness.',
      actionText: 'Book a Consultation'
    }
    
    
  ];

  return (
    <section id='services'>
      <div className="services-container">
        <h1>Our Mystical Services</h1>
        <p className="subtitle">Unlock the Secrets of the Universe</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;