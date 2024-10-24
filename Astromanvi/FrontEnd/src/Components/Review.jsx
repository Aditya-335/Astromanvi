import React from 'react';
import './Review.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const TestimonialCard = ({ stars, text, name }) => (
  <div className="testimonial-card">
    <div className="stars">{'★'.repeat(stars)}</div>
    <blockquote>`{text}`</blockquote>
    <p className="name">-- {name}</p>
  </div>
);

const Review = () => {
  const settings = {
    className: "testimonials",
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          waitForAnimate: false
        }
      }
    ]
  };

  const testimonials = [
    { stars: 5, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,dictum interdum,", name: "Name" },
    { stars: 4, text: " nulla et dictum interdum,", name: "Name" },
    { stars: 3, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
    { stars: 2, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
    { stars: 1, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
    { stars: 4, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
    { stars: 3, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
    { stars: 4, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
  ];

  return (
    <section id="reviews">
      <div className="review-container">
        <h1 className='review-heading'>WHAT OUR CUSTOMERS SAY</h1>
        <div className="testimonials">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Slider>
        </div>
        
        <footer className="contact-footer">
          <div className="footer-content">
            <div className="company-info">
              <h2 className="company-name">Astromanvi</h2>
              <address className="company-address">
                123 Spiritual Avenue<br />
                Mystic Valley, MV 12345
              </address>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>contact@mysticalservices.com</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Astromanvi Services. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Review;