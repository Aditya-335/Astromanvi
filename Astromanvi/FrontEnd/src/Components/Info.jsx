import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import './Info.css';

const ZODIAC_SIGNS = [
  { name: 'Aries', symbol: '♈', element: 'Fire', dates: 'Mar 21 - Apr 19' },
  { name: 'Taurus', symbol: '♉', element: 'Earth', dates: 'Apr 20 - May 20' },
  { name: 'Gemini', symbol: '♊', element: 'Air', dates: 'May 21 - Jun 20' },
  { name: 'Cancer', symbol: '♋', element: 'Water', dates: 'Jun 21 - Jul 22' },
  { name: 'Leo', symbol: '♌', element: 'Fire', dates: 'Jul 23 - Aug 22' },
  { name: 'Virgo', symbol: '♍', element: 'Earth', dates: 'Aug 23 - Sep 22' },
  { name: 'Libra', symbol: '♎', element: 'Air', dates: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', symbol: '♏', element: 'Water', dates: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', symbol: '♐', element: 'Fire', dates: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', symbol: '♑', element: 'Earth', dates: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', symbol: '♒', element: 'Air', dates: 'Jan 20 - Feb 18' },
  { name: 'Pisces', symbol: '♓', element: 'Water', dates: 'Feb 19 - Mar 20' }
];

const Info = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(1);

  const currentSign = ZODIAC_SIGNS[currentIndex];

  
  useEffect(() => {
    const fetchHoroscope = async (retries = 3) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${currentSign.name.toLowerCase()}&day=today`,
          {
            method: 'POST',
            headers: {
              'X-RapidAPI-Key': 'f590ece804msh175b06cfa6e2602p102e55jsn9efe20b05b6e',
              'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
            }
          }
        );
  
        if (!response.ok) {
          throw new Error('Failed to fetch horoscope');
        }
  
        const data = await response.json();
        setHoroscope(data.description || "Unable to load horoscope at this time.");
      } catch (error) {
        console.error('Error fetching horoscope:', error);
  
        if (retries > 0) {
          // Retry fetching after a delay
          setTimeout(() => fetchHoroscope(retries - 1), 2000);
        } else {
          // If retries are exhausted, show fallback message
          setHoroscope("Service temporarily unavailable. Please try again later.");
        }
      }
      setLoading(false);
    };
  
    fetchHoroscope();
  }, [currentIndex]);
  
  

  const nextSign = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % ZODIAC_SIGNS.length);
  };

  const prevSign = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + ZODIAC_SIGNS.length) % ZODIAC_SIGNS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSign, 10000);
    return () => clearInterval(timer);
  }, []);

  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const pageTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20
  };

  return (
    <div className="container">
      <div className="card">
        <div className="content-grid">
          {/* Zodiac Sign Section */}
          <div className="sign-section">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={pageTransition}
                className="sign-content"
              >
                <div className="zodiac-symbol">{currentSign.symbol}</div>
                <h2 className="zodiac-name">{currentSign.name}</h2>
                <p className="zodiac-dates">{currentSign.dates}</p>
                <p className="zodiac-element">Element: {currentSign.element}</p>
              </motion.div>
            </AnimatePresence>
            
            <div className="button-container">
              <button onClick={prevSign} className="nav-button">
                Previous
              </button>
              <button onClick={nextSign} className="nav-button">
                Next
              </button>
            </div>
          </div>

          {/* Daily Information Section */}
          <div className="info-section">
            <h3 className="info-title">Daily Horoscope</h3>
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="loader-container"
                >
                  <Loader2 className="loader" />
                </motion.div>
              ) : (
                <motion.p
                  key={horoscope}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="horoscope-text"
                >
                  {horoscope}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;