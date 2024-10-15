import React, { useState } from "react";
import './ContactUs.css';
import Circle from '../assets/chart.png';



const ContactUs = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async(e) => {
    e.preventDefault();
    let dataSend ={
      name : name,
      email : email,
      dob : dob,
      phone : phone,
  
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
  }


  // const Signs = [
  //   { index: 1,img:Circle,Name: "Leo", Date: "JUL 23 - AUG 22", Description: "Leo, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 2,img:Circle,Name: "Scropio", Date: "JUL 23 - AUG 22", Description: "Scropio, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 3,img:Circle,Name: "Gemini", Date: "JUL 23 - AUG 22", Description: "Gemini, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 4,img:Circle,Name: "Capricorn", Date: "JUL 23 - AUG 22", Description: "Capricorn, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 5,img:Circle,Name: "Libra", Date: "JUL 23 - AUG 22", Description: "Libra, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 6,img:Circle,Name: "Aqurious", Date: "JUL 23 - AUG 22", Description: "Aqurious, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 7,img:Circle,Name: "Sagitarious", Date: "JUL 23 - AUG 22", Description: "Sagitarious, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 8,img:Circle,Name: "Pisces", Date: "JUL 23 - AUG 22", Description: "Pisces, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 9,img:Circle,Name: "Aries", Date: "JUL 23 - AUG 22", Description: "Aries, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 10,img:Circle,Name: "Taures", Date: "JUL 23 - AUG 22", Description: "Taures, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 11,img:Circle,Name: "Virgo", Date: "JUL 23 - AUG 22", Description: "Virgo, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  //   { index: 12,img:Circle,Name: "Cancer", Date: "JUL 23 - AUG 22", Description: "Cancer, the fifth zodiac sign, is symbolized by the Lion and ruled by the Sun. Known for their confidence, creativity, and generosity, Leos are natural leaders who thrive in the spotlight." },
  // ];

  // const [formData, setFormData] = useState({
  //   name: "",
  //   dob: "",
  //   email: "",
  //   phone: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.dob || !formData.email || !formData.phone) {
  //     alert("Please fill in all the required fields.");
  //     return;
  //   }
  //   fetch("http://localhost:3001/send-email", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         alert("Form submitted successfully!");
  //       } else {
  //         alert("Error submitting form.");
  //       }
  //     })
  //     .catch((error) => {
  //       alert("Error: " + error);
  //     });
  // };


  return (
    <div className="contact-us-container">
      {isSubmitted ? ( 
        <div className="contact-form">
        <h2>Thank you for reaching out! Our team will get back to you shortly to assist with your request.</h2>
        </div>
      ) :(
      <div className="contact-form">
        <h2>Connect with Us</h2>
        <p>Connect with the stars and unveil your destiny</p>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Value" onChange={(e) => setName(e.target.value)} required  />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" placeholder="dd/mm/yyyy" onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact number</label>
            <input type="tel" id="contactNumber" name="contactNumber" placeholder="+91" onChange={(e) => setPhone(e.target.value)} required  />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" placeholder="Value" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <button type="submit" className="submit-btn">Join Us</button>
        </form>
      </div>)}
      {/* <div className="destiny-info">
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
      </div> */}
    </div>
  );
};

export default ContactUs;