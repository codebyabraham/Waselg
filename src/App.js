import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from "./component/Contact"
import Footer from './component/Footer'
import About from "./component/About"
import Navbar from "./component/Navbar"
import ContactBanner from "./component/ContactBanner"
import AboutBanner from './component/AboutBanner'
import HomeBanner from './component/HomeBanner'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/navbar" element={<Navbar />}></Route>
      <Route path="/contactbanner" element={<ContactBanner />}></Route>
      <Route path="/aboutbanner" element={<AboutBanner/>}></Route>
      <Route path="/homebanner" element={<HomeBanner/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
