import React from 'react'
// import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
     <div id='bottom' style={{maxHeight:'250vh',padding: '18vh 0 0', position: 'relative' }} className="container-fluid bg-black text-white mx-auto">
         <div className="container">
    <div className="row">
    <div className="col-md-3">
            <h3 style={{color:'#ffff', fontWeight:'700'}}>Lorem</h3>
            <p>Loremm is a fast rising digital marketing agency with the aim to help business and brand grow fast and grow global.</p>
            <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="facebook--v1"/>
            <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/ffffff/twitterx--v1.png" alt="twitterx--v1"/>
            <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin"/>
          </div>
       
          <div className="col-md-3">
          <h3 style={{color:'#ffff', fontWeight:'700'}}>Services</h3>
            <ul className="list-unstyled">
              <li>SEO</li>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Content Creation</li>
              <li>Digital Marketing</li>
              <li>Consultancy</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h3 style={{color:'#ffff', fontWeight:'700'}}>Connect with Us</h3>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Tiktok</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h3 style={{color:'#ffff', fontWeight:'700'}}>Connect with Us</h3>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Tiktok</li>
            </ul>
          </div>
    </div>
      <div className="col-md-12 text-center" style={{ borderTop: '1px solid #009900' }}>
        <p className="mb-0 pt-4 pb-5">Wass.ng@2023</p>
      </div>
    
  </div>
  </div>
    </>
  )
}

export default Footer