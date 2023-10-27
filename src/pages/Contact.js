import React from 'react'
import ContactBanner from '../component/ContactBanner.js'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
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
                  
                    <p id='info' class="mt-3 ">090-654-345-56</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3">
                <img className='m-3' width="50" height="50" src="https://img.icons8.com/fluency-systems-filled/48/02A12F/new-post.png" alt="new-post"/>
                    <div class="h4 text-black">Email</div>
                    <div class="text-muted mb-3">Fell free to send us messege</div>
             
                    <p id='info'class="mt-3 ">info@wasss.com.ng</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3">
                <img className='m-3' width="50" height="50" src="https://img.icons8.com/ios-filled/50/02A12F/marker.png" alt="marker"/>
                    <div class="h4 text-black">Location</div>
                    <div class="text-muted mb-3">Along Emir Street Opp. Unity Bank PLC</div>
             
                    <p id='info' class="mt-3 ">View on Goggle Maps</p>
                </div>
            </div>
        </div>
  </div>
  <div id='our-team1'>
  <form class="row g-3 col-8 mx-auto">
<h1 class='text-center fs-2'>Send us a <span id='member'>message</span></h1>
<p class='text-center fw-bold text-muted '>THIS IS ANOTHER OPTION YOU CAN USE TO CANTACT USS</p>
  <div class="col-md-4">
    <label for="inputText4" class="form-label"></label>
    <input type="text" class="form-control" placeholder='Full Name' name="" id="" />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"></label>
    <input type="email" class="form-control" placeholder='Email Address' name="" id="" />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"></label>
    <input type="text" class="form-control" placeholder='Subject' name="" id="" />
    
  </div>
  <div class="col-12">
   <textarea class='form-control' placeholder='Your Message' id="floatingTextarea"></textarea>
  </div>
 
 
  <div class="col text-center p-5">
    <button type="submit" class="btn btn-primary col-5">Sign in</button>
  </div>
</form>
  </div>

<Footer/>
  </>
  )
}

export default Contact