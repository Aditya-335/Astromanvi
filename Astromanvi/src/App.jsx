import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import ContactUs from './Components/ContactUs'
import Review from './Components/Review'
function App() {

  return (
    <>
    <Landing/>
    <AboutUs/>
    <Services/>
    <ContactUs/>
    <Review/>

    {/* <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Review" element={<Review />} />

      </Routes>
    </Router> */}
    </>
  )
}

export default App
