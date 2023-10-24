import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutBanner from "./component/AboutBanner.js";
import About from "./component/About.js";
import HomeBanner from "./component/HomeBanner.js";
import Home from "./component/Home.js";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import Contact from './component/Contact.js'
import ContactBanner from "./component/ContactBanner.js";
import HomeContent from "./component/HomeContent.js";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutbanner" element={<AboutBanner />}></Route>
        <Route path="/homebanner" element={<HomeBanner />}></Route>
        <Route path="/contactbanner" element={<ContactBanner />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path='/homecontent' element={<HomeContent/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
