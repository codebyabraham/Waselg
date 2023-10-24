import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
impor

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/websiteform" element={<Websiteform />}></Route>
      <Route path="/brandingform" element={<Brandingform />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/navbar" element={<Navbar />}></Route>
      <Route path="/content" element={<Content />}></Route>
      <Route path="/learnmore" element={<Learnmore/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
