import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar'
import AboutBanner from "../component/AboutBanner.js"
import oga from '../images/oga.jpg'
import '../App.css'
import Footer from '../component/Footer.js'

function About() {
  return (
    <>
   
    <Navbar />
      <AboutBanner />
      <div style={{margin:'4.5rem 0rem '}} class="p-3 col-10 row mx-auto text-start align-items-center">
            <div class="col-lg-5">
              <h4 id='primary1' class="fs-6 my-3 text-dark">SHAPING A BRIGHT FUTURE.</h4>
                <h1 id='primary' class="fs-3 my-4 mt-2 ">Wase Student Scholarship Scheme (WASSS)</h1>
               <p id='parag' >Welcome to the "Wase Student Scholarship Scheme (WASSS)"! We are dedicated to empowering students and supporting their educational aspirations through our scholarship program. Our mission is to provide financial assistance and opportunities to deserving students, enabling them to achieve their academic goals and unlock their full potential.</p>

<p>At the heart of our scholarship scheme is the belief that education is a powerful tool for personal and societal growth. We understand that many students face financial barriers that can hinder their educational pursuits, and we are committed to bridging that gap by offering scholarships to eligible individuals indigine of Wase Local Goverment.</p>
<p>We are proud to be associated with the regime of His Excellency Governor Caleb Manasseh Mutfwang, a renowned Human Being committed to promoting excellence in education and humanity at large. With our scholarship program, we aim to foster a culture of meritocracy and empower students from diverse backgrounds to thrive academically.</p>


               
               <Link href="#" id='button' class="btn btn-primary">READ MORE</Link>
        
            </div>
            <div class="col-lg-5 mx-auto">
          
  <img src={oga} class="card-img-top" alt="..."/>
  <div class="card-body">
    {/* <h5 class="card-title">Card title</h5> */}
    <p class="card-text">We invite you to explore our website and learn more about the eligibility criteria, application process, and benefits of our scholarship program. Whether you are a prospective applicant, a dedicated supporter, or a potential partner, we welcome your involvement and collaboration. Together, we can empower talented individuals to shape a brighter future.</p>
   
  </div>

            </div>
           
        </div>
        <div  class=" rounded-4 row justify-content-center text-center ">
        <div id='our-team' class="col-md-12 ">
            <h2 id='primary' class="mb-4 mx-auto col-md-6 pb-2" >Our team <span id='member'>members</span><h5 CLASS='fs-6 mt-4'>SUSPENDISSE A ANTE IN  NEQUE IACULIS LACINIA</h5></h2>
            
            <div class="row justify-content-center">
                <div class="col-lg-3  m-3 p-4 bg-white">
                    
                    <div class="h4 text-black fs-3">Ado Ibrahim</div>
                    {/* <div class="text-muted mb-3 text-success">Founder, Microsoft</div> */}
                  
                    <p id='review1'class="mt-3 ">"JL Media transformed our processes, boosting productivity and saving costs."</p>
                </div>
                <div  class="col-lg-3  m-3 p-4 bg-white">
                    {/* <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/> */}
                    <div class="h4 text-black fs-3">Kabiru abdullahi</div>
                    {/* <div class="text-muted mb-3">Founder, Microsoft</div> */}
             
                    <p id='review1' class="mt-3">"Our digital presence soared with this tech company's cutting-edge solutions."</p>
                </div>
                <div  class="col-lg-3  m-3 p-4 bg-white">
                    {/* <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/> */}
                    <div class="h4 text-black fs-3">Hajiya Inno</div>
                    {/* <div class="text-muted mb-3">Founder, Microsoft</div> */}
             
                    <p id='review1' class="mt-3">"Impressed by this tech company's seamless solutions. ."</p>
                </div>
            </div>
        </div>
        </div>

                <div id="funfacts" style={{margin:'0rem 0rem'}} class="row text-start align-items-center">
            <div id='aims' class="col-lg-6">
                <h5 id='primary' class="fs-6 my-4 text-white">WASE STUDENT SCHOLARSHIP SCHEME</h5>
                <h3 id='primary1' class="fs-3 my-4 text-white" >Aims and Objectives</h3>
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




