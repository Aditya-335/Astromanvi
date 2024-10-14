import React from 'react';
import './ContactUs.css';
import Circle from '../assets/chart.png';

const ContactUs = () => {
  const Signs = [
    { index: 1,img:Circle,Name: "Leo", Date: "JUL 23 - AUG 22", Description: "Leo, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 2,img:Circle,Name: "Scropio", Date: "JUL 23 - AUG 22", Description: "Scropio, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 3,img:Circle,Name: "Gemini", Date: "JUL 23 - AUG 22", Description: "Gemini, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 4,img:Circle,Name: "Capricorn", Date: "JUL 23 - AUG 22", Description: "Capricorn, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 5,img:Circle,Name: "Libra", Date: "JUL 23 - AUG 22", Description: "Libra, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 6,img:Circle,Name: "Aqurious", Date: "JUL 23 - AUG 22", Description: "Aqurious, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 7,img:Circle,Name: "Sagitarious", Date: "JUL 23 - AUG 22", Description: "Sagitarious, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 8,img:Circle,Name: "Pisces", Date: "JUL 23 - AUG 22", Description: "Pisces, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 9,img:Circle,Name: "Aries", Date: "JUL 23 - AUG 22", Description: "Aries, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 10,img:Circle,Name: "Taures", Date: "JUL 23 - AUG 22", Description: "Taures, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 11,img:Circle,Name: "Virgo", Date: "JUL 23 - AUG 22", Description: "Virgo, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
    { index: 12,img:Circle,Name: "Cancer", Date: "JUL 23 - AUG 22", Description: "Cancer, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  ];
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