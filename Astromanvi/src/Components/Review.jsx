import React from 'react';
import './Review.css';

const TestimonialCard = ({ stars, text, name }) => (
  <div className="testimonial-card">
    <div className="stars">{'★'.repeat(stars)}</div>
    <blockquote>`{text}`</blockquote>
    <p className="name">-- {name}</p>
  </div>
);

const Review = () => {
  const testimonials = [
    { stars: 5, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
    { stars: 5, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
    { stars: 5, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
    { stars: 5, text: "Lorem ipsum dolor sit amet, consectur adipicing elit. ellus imperdiet, nulla et dictum interdum,", name: "Name" },
  ];

  return (
    <div className="review-container">
      <h1 className='review-heading'>WHAT OUR CUSTOMERS SAY</h1>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
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