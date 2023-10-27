import React from 'react'
import Navbar from '../component/Navbar.js'
import HomeContent from '../component/HomeContent.js'
import Footer from '../component/Footer.js'
import HomeBanner from '../component/HomeBanner.js'

function Home() {
  return (
    <>
      <Navbar/>
      <HomeBanner/>
      <HomeContent />
      <Footer/>
    </>
  )
}

export default Home