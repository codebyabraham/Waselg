import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Footer from "./component/Footer.js";
import Contact from "./pages/Contact.js";
import Vnin from "./pages/Vnin.js";
import Register from "./pages/Register.js";
import Payment from "./pages/Payment.js";
import Success from "./pages/success.js";
import PrivateRoute from "./Utils/privateroute.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/virtualnin" element={<Vnin />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
