import React from 'react'
import ContactBanner from './ContactBanner.js'
import Navbar from './Navbar'
import Footer from './Footer'
import '../App.css'


function Contact() {
  return (
  <>

<Navbar />
<ContactBanner />
  <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 row justify-content-center text-center py-5 text-white">
        <div class="col-md-12 container-fluid">
            <div class="row justify-content-center">
                <div id='review' class="col-lg-3 rounded shadow m-3">
                <img className='m-3' width="50" height="50" src="https://img.icons8.com/ios-filled/50/02A12F/phone.png" alt="phone"/>
                    <div class="h4 text-black">Phone</div>
                    <div class="text-muted mb-3">Call or send sms any time of the day</div>
                  
                    <p class="mt-3 text-black">Along Emir Street Opp. Unity Bank PLC</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3">
                <img className='m-3' width="50" height="50" src="https://img.icons8.com/fluency-systems-filled/48/02A12F/new-post.png" alt="new-post"/>
                    <div class="h4 text-black">Email</div>
                    <div class="text-muted mb-3">Fell free to send us messege</div>
             
                    <p class="mt-3 text-black">info@wasss.com.ng</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3">
                <img className='m-3' width="50" height="50" src="https://img.icons8.com/ios-filled/50/02A12F/marker.png" alt="marker"/>
                    <div class="h4 text-black">Location</div>
                    <div class="text-muted mb-3">Along Emir Street Opp. Unity Bank PLC</div>
             
                    <p class="mt-3 text-black">Along Emir Street Opp. Unity Bank PLC</p>
                </div>
            </div>
        </div>
  </div>
<form  class="row g-3 col-8 mx-auto m-4">
  <div class="col-md-4">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St "/>
  </div>
 
 
  <div class="col text-center">
    <button type="submit" class="btn btn-primary col-5">Sign in</button>
  </div>
</form>
<Footer/>
  </>
  )
}

export default Contact