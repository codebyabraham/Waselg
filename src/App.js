import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutBanner from "./component/AboutBanner.js";
import About from "./pages/About.js";
import HomeBanner from "./component/HomeBanner.js";
import Home from "./pages/Home.js";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import Contact from './pages/Contact.js'
import ContactBanner from "./component/ContactBanner.js";
import HomeContent from "./component/HomeContent.js";
import Vnin from "./component/Vnin.js";
import Register from "./pages/Register.js";
import Payment from "./pages/Payment.js";


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
        <Route path="/virtualnin" element= {<Vnin />}></Route>
        <Route path="/register" element= {<Register />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
