import React, { useState } from "react";
import './ContactUs.css';
import Circle from '../assets/chart.png';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [dobWithTime, setDobWithTime] = useState(""); // Combined State for DOB and Time
  const [birthPlace, setBirthPlace] = useState(""); // State for Birth Place
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async(e) => {
    e.preventDefault();
    let dataSend = {
      name: name,
      email: email,
      dobWithTime: dobWithTime, 
      birthPlace: birthPlace,
      phone: phone,
    };
    try {
      const res = await fetch("http://localhost:8080/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    }
  };

  return (
    <section id="contact">
      <div className="contact-us-container">
        {isSubmitted ? (
          <div className="contact-form">
            <h2>Thank you for reaching out! Our team will get back to you shortly to assist with your request.</h2>
          </div>
        ) : (
          <div className="contact-form">
            <h2>Connect with Us</h2>
            <p>Connect with the stars and unveil your destiny</p>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Value" onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="dobWithTime">Date and Time of Birth</label>
                <input type="datetime-local" id="dobWithTime" name="dobWithTime" onChange={(e) => setDobWithTime(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="birthPlace">Birth Place</label>
                <input type="text" id="birthPlace" name="birthPlace" placeholder="City or Town" onChange={(e) => setBirthPlace(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="tel" id="contactNumber" name="contactNumber" placeholder="+91" onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Value" onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <button type="submit" className="submit-btn">Join Us</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
