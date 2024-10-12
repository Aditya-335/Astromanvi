import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-form">
        <h2>Connect with Us</h2>
        <p>Connect with the stars and unveil your destiny</p>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Value" />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" placeholder="dd/mm/yyyy" />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact number</label>
            <input type="tel" id="contactNumber" name="contactNumber" placeholder="+91" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" placeholder="Value" required />
          </div>
          <button type="submit" className="submit-btn">Join Us</button>
        </form>
      </div>
      <div className="destiny-info">
        <h1>Destiny Awaits</h1>
        <div className="zodiac-icons">
          <span className="icon">♋</span>
          <span className="icon">♌</span>
          <span className="icon">♏</span>
        </div>
        <h2>LEO</h2>
        <p className="date-range">JUL 23 - AUG 22</p>
        <p className="description">
          Leo, the fifth zodiac sign, is symbolized by the Lion and ruled by the
          Sun. Known for their confidence, creativity, and generosity, Leos are
          natural leaders who thrive in the spotlight.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;