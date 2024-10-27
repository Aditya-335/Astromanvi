import React from 'react';
import './Review.css';
import Slider from "react-slick";
import address from "../assets/address.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../assets/quote.png"
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const TestimonialCard = ({ stars, text, name }) => (
  <div className="testimonial-card">
    <div className="stars"><img src={quote} height='20px'></img></div>
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
    { stars: 5, text: "I had consulted with Astrologer Shekhar and I found him very authentic and geniune. His guidance in astrology and vastu has brought immense change and clarity to my life. Highly recommend!", name: "Renuka Sharma" },
    { stars: 4, text: "Very insightful readings. He understood my concerns and provided practical advice. Truly grateful!", name: "Ananya Singh" },
    { stars: 5, text: "An amazing experience! Shekhar ji is very knowledgable in numerology and vastu. He said so many things that resonated with me and I am glad I spoke to him.", name: "Ravi Nair" },
    { stars: 4, text: "Shekhar Ji’s insights were very valuable to me. It gave me a fresh perspective on my career. I highly recommend Shekhar Ji for anyone looking for genuine guidance.", name: "Kavya Desai" },
    { stars: 5, text: "I was so impressed by his accuracy and the depth of his readings. Would definitely recommend to others!", name: "Arjun Bhatia" },
    { stars: 4, text: "Shekhar Ji guided us before marriage, and two years later, we still seek his advice whenever life presents challenges. Recently, his Vastu insights were invaluable as we bought our new home.", name: "Mayur Mane" },
    { stars: 5, text: "Astrologer Shekhar's advice has truly changed my outlook. I feel so much more at peace and focused.", name: "Devika Chawla" },
    // { stars: 4, text: "Very insightful session! The advice I received was practical and truly resonated with my life.", name: "Rahul Joshi" },
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
                D-16 Eastern Court Condominium<br />
                BT Kawade Rd , 411001

              </address>
              <a href="https://www.google.com/maps/place/Eastern+Court+Condominium/@18.5271171,73.9056251,17.9z/data=!4m6!3m5!1s0x3bc2c1a40e16ef27:0x85c691da9906cf8a!8m2!3d18.5273041!4d73.9059147!16s%2Fg%2F1z3t9vc3f?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"><img src={address} alt="" height="200px"/></a>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <span>+91 9022778286</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>shekharmanvi@hotmail.com</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/astromanvi?igsh=YWI0MXpqcmR3Mzhj" aria-label="Instagram">
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