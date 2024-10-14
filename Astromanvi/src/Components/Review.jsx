import React from 'react';
import './Review.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TestimonialCard = ({ stars, text, name }) => (
  <div className="testimonial-card">
    <div className="stars">{'★'.repeat(stars)}</div>
    <blockquote>`{text}`</blockquote>
    <p className="name">-- {name}</p>
  </div>
);

const Review = () => {

  const settings ={
    className:"testimonials",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
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
    <div className="review-container">
      <h1 className='review-heading'>WHAT OUR CUSTOMERS SAY</h1>
      <div className="testimonials">
        
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
        
        
      </div>
      
      <footer>
        <div className="logo">
          <span className="logo-icon">88</span>
        </div>
        <div className="social-icons">
          <a href="#" className="icon-x">𝕏</a>
          <a href="#" className="icon-instagram">Ⓘ</a>
          <a href="#" className="icon-youtube">▶</a>
          <a href="#" className="icon-linkedin">ℹ</a>
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h3>Use cases</h3>
            <a href="#">UI design</a>
            <a href="#">UX design</a>
            <a href="#">Wireframing</a>
            <a href="#">Diagramming</a>
            <a href="#">Brainstorming</a>
            <a href="#">Online whiteboard</a>
            <a href="#">Team collaboration</a>
          </div>
          <div className="link-column">
            <h3>Explore</h3>
            <a href="#">Design</a>
            <a href="#">Prototyping</a>
            <a href="#">Development features</a>
            <a href="#">Design systems</a>
            <a href="#">Collaboration features</a>
            <a href="#">Design process</a>
            <a href="#">FigJam</a>
          </div>
          <div className="link-column">
            <h3>Resources</h3>
            <a href="#">Blog</a>
            <a href="#">Best practices</a>
            <a href="#">Colors</a>
            <a href="#">Color wheel</a>
            <a href="#">Support</a>
            <a href="#">Developers</a>
            <a href="#">Resource library</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Review;