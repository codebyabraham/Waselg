import React from 'react'
import Navbar from '../component/Navbar'
import About from '../component/About'
import AboutBanner from '../component/AboutBanner'
import Contact from '../component/Contact'
import ContactBanner from '../component/ContactBanner'
import Footer from '../component/Footer'
import HomeBanner from '../component/HomeBanner'

function Home() {
  return (
    <>
      <Navbar/>
      <About/>
      <AboutBanner/>
      <Contact/>
      <ContactBanner/>
      <Footer/>
      <HomeBanner/>


    </>
  )
}

export default Home