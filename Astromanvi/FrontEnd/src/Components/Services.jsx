import React from 'react';
import './Services.css';

const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    <div className="icon">
      <img src="https://cdn-icons-png.flaticon.com/128/6902/6902023.png" alt="Sun and Moon icon" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button>Read more ▼</button>
  </div>
);

const Services = () => {
  const services = Array(6).fill({
    title: 'Tarot',
    description: 'Discover how the planets at your birth influence your personality and life path.'
  });

  return (
    <div className="services-container">
      <h1>OUR SERVICES</h1>
      <p className="subtitle">Discover Your Path with Our Expert Astrology Services</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;