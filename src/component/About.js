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
              <h4 id='primary1' class="fs-6 my-3 text-dark">SHAPING A BRIGHT FUTURE.</h4>
                <h1 id='primary' class="fs-3 my-4 mt-2 text-success">WE POSITION</h1>
               <p id='parag' class="fs-5">People need what you're offering, but don't know why they should choose you over your competitors. With our branding and design services, we dress up your company  and ensure your customers can’t say NO to your offers.
               </p>
               <Link href="#" id='button' class="btn btn-primary">Go somewhere</Link>
        
            </div>
            <div class="col-lg-6">
          
  <img src={oga} class="card-img-top" alt="..."/>
  {/* <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div> */}

            </div>
           
        </div>
        <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 row justify-content-center text-center py-5 ">
        <div class="col-md-12">
            <h2 id='primary' class="mb-4 mx-auto shadow-sm col-md-6 pb-2" style={{borderBottom: '1px blue solid'}}>Our team <span class='text-success'>members</span><h5 CLASS='fs-6 mt-4'>SUSPENDISSE A ANTE IN  NEQUE IACULIS LACINIA</h5></h2>
            
            <div class="row justify-content-center">
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    
                    <div class="h4 text-black fs-3">Bill Gates</div>
                    {/* <div class="text-muted mb-3 text-success">Founder, Microsoft</div> */}
                  
                    <p class="mt-3 text-success">"JL Media transformed our processes, boosting productivity and saving costs."</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    {/* <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/> */}
                    <div class="h4 text-black fs-3">Bill Gates</div>
                    {/* <div class="text-muted mb-3">Founder, Microsoft</div> */}
             
                    <p class="mt-3 text-success">"Our digital presence soared with this tech company's cutting-edge solutions."</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    {/* <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/> */}
                    <div class="h4 text-black fs-3">Bill Gates</div>
                    {/* <div class="text-muted mb-3">Founder, Microsoft</div> */}
             
                    <p class="mt-3 text-success">"Impressed by this tech company's seamless solutions. ."</p>
                </div>
            </div>
        </div>
        </div>

                <div id="funfacts" style={{margin:'4.5rem 0.5rem'}} class="row text-start align-items-center">
            <div id='aims' class="col-lg-6">
                <h5 id='primary' class="fs-5 my-4 text-white">WASE STUDENT SCHOLARSHIP SCHEME</h5>
                <h3 id='primary1' class="fs-5 my-4 text-white" >Aims and Objectives</h3>
                <h3 id='primary2' class="fs-5 my-4 text-success" >Summary</h3>
               <p id='parag' class="fs-5 text-white">The aim of the "Wase Student Scholarship Scheme" is to provide financial assistance and support to deserving students, empowering them to pursue higher education and achieve their academic and career aspirations
               </p>
               <p className='text-white'>
               We strive to foster educational excellence, create opportunities for personal growth, and contribute to the development of well-rounded individuals who will make a positive impact in their communities and beyond.
               </p>
                <Link to="#" id='btn2' class="btn my-4 col-md-6">Go somewhere</Link>
        
            </div>
            <div class="col-lg-6">
            <div class="container col-12 text-center">
  <div class="row row-cols-md-12">
    <div id='counts' class="col-md-5 bg-dark p-5 m-1"><div>89</div><div className='text-white'>Application</div></div>
    <div id='counts' class="col-md-5 bg-dark p-5 m-1"><div>89</div><div className='text-white'>Application</div></div>
    <div id='counts' class="col-md-5 bg-dark p-5 m-1"><div>89</div><div className='text-white'>Application</div></div>
    <div id='counts' class="col-md-5 bg-dark p-5 m-1"><div>89</div><div className='text-white'>Application</div></div>
  </div>
</div>
  </div>
  </div>
        <Footer />
    </>
  )
}

export default About




