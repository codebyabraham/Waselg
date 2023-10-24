import React from 'react'
import Navbar from './Navbar.js'
import HomeContent from './HomeContent.js'
import Footer from './Footer.js'
import HomeBanner from './HomeBanner.js'

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