import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import AboutBanner from "./AboutBanner.js"
import oga from '../images/oga.jpg'
import '../App.css'
import Footer from './Footer.js'

function About() {
  return (
    <>
   
    <Navbar />
      <AboutBanner />
      <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow row container mx-auto text-start align-items-center">
            <div class="col-lg-6">
                <h1 id='primary' class="fs-3 my-4">WE POSITION</h1>
               <p id='parag' class="fs-5">People need what you're offering, but don't know why they should choose you over your competitors. With our branding and design services, we dress up your company  and ensure your customers can’t say NO to your offers.
               </p>
               <Link href="#" class="btn btn-primary">Go somewhere</Link>
        
            </div>
            <div class="col-lg-6">
          
  <img src={oga} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>

            </div>
           
        </div>
        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 row justify-content-center text-center py-5 text-white">
        <div class="col-md-12">
            <h2 id='primary' class="mb-4 mx-auto shadow-sm col-md-6 pb-2" style={{borderBottom: '1px blue solid'}}>What our Clients are saying</h2>
            <div class="row justify-content-center">
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    {/* <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/> */}
                    <div class="h4 text-black">Bill Gates</div>
                    <div class="text-muted mb-3">Founder, Microsoft</div>
                  
                    <p class="mt-3 text-black">"JL Media transformed our processes, boosting productivity and saving costs. Their tailored approach was a game-changer for our growth."</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    {/* <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/> */}
                    <div class="h4 text-black">Bill Gates</div>
                    <div class="text-muted mb-3">Founder, Microsoft</div>
             
                    <p class="mt-3 text-black">"Our digital presence soared with this tech company's cutting-edge solutions. Increased engagement led to higher revenue and market share. A decision we celebrate."</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    {/* <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/> */}
                    <div class="h4 text-black">Bill Gates</div>
                    <div class="text-muted mb-3">Founder, Microsoft</div>
             
                    <p class="mt-3 text-black">"Impressed by this tech company's seamless solutions. They made us agile, enhancing collaboration and scalability. Highly recommend for any business aiming to thrive."</p>
                </div>
            </div>
        </div>
        </div>
        <div id="funfacts" style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow row text-start align-items-center">
            <div class="col-lg-6">
                <h1 id='primary' class="fs-3 my-4">WE POSITION</h1>
               <p id='parag' class="fs-5">People need what you're offering, but don't know why they should choose you over your competitors. With our branding and design services, we dress up your company  and ensure your customers can’t say NO to your offers.
               </p>
                <Link to="/brandingform" id='btt' class="btn rounded-1 p-3 my-4 col-md-6 btn-md">Get a Free Brand Audit</Link>
        
            </div>
            <div class="col-lg-6">
            <div class="container text-center">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-8">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
            </div>
           
        </div>
        <Footer />
    </>
  )
}

export default About




