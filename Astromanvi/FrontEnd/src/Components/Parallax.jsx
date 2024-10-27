import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import aries from '../assets/aries.png';
import gemini from '../assets/gemini.png';
import taurus from '../assets/taurus.png';
import cancer from '../assets/cancer.png';
import leo from '../assets/leo.png';
import virgo from '../assets/virgo.png';
import libra from '../assets/libra.png';
import scorpio from '../assets/scorpio.png';
import sagittarius from '../assets/sagittarius.png';
import capricorn from '../assets/capricorn.png';
import aquarius from '../assets/aquarius.png';
import pisces from '../assets/pisces.png';
import './Parallax.css';

const ZODIAC_SIGNS = [
  { name: 'Aries', symbol: <img src={aries} className='z'></img>, element: 'Fire', dates: 'Mar 21 - Apr 19' },
  { name: 'Taurus', symbol: <img src={taurus} className='z'></img>, element: 'Earth', dates: 'Apr 20 - May 20' },
  { name: 'Gemini', symbol: <img src={gemini} className='z'></img>, element: 'Air', dates: 'May 21 - Jun 20' },
  { name: 'Cancer', symbol: <img src={cancer} className='z'></img>, element: 'Water', dates: 'Jun 21 - Jul 22' },
  { name: 'Leo', symbol: <img src={leo} className='z'></img>, element: 'Fire', dates: 'Jul 23 - Aug 22' },
  { name: 'Virgo', symbol: <img src={virgo} className='z'></img>, element: 'Earth', dates: 'Aug 23 - Sep 22' },
  { name: 'Libra', symbol: <img src={libra} className='z'></img>, element: 'Air', dates: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', symbol: <img src={scorpio} className='z'></img>, element: 'Water', dates: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', symbol: <img src={sagittarius} className='z'></img>, element: 'Fire', dates: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', symbol: <img src={capricorn} className='z'></img>, element: 'Earth', dates: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', symbol: <img src={aquarius} className='z'></img>, element: 'Air', dates: 'Jan 20 - Feb 18' },
  { name: 'Pisces', symbol: <img src={pisces} className='z'></img>, element: 'Water', dates: 'Feb 19 - Mar 20' }
];

const Info = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(1);

  const currentSign = ZODIAC_SIGNS[currentIndex];

  

  const nextSign = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % ZODIAC_SIGNS.length);
  };


  useEffect(() => {
    const timer = setInterval(nextSign, 5000);
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
        <div className="stars-background">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>
      
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
            
          </div>

          {/* Daily Information Section */}
          <div className="info-section">
            <h2 className="info">Discover the Stars, Unlock Your Potential</h2>
            <p className='para'>Dive into the mysteries of the universe and let your zodiac guide you toward clarity, growth, and self-discovery. Each day brings cosmic insights just for you!</p>
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