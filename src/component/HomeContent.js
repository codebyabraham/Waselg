import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import '../App.css'
import service_01 from '../images/service_01.jpg';
import service_02 from '../images/service_02.jpg';
import service_03 from '../images/service_03.jpg';
import zumarock from '../images/more-info.jpg'

function HomeContent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 89) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval); // Stops the interval when count reaches 89
      }
    }, 20); 

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
    <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 row justify-content-center text-start py-5 ">
        <div class="col-md-12">
            <h2 class="mb-4 mx-auto text-center col-md-6 pb-2">WASSS & YOU</h2>
            <p className='text-center'>AT THE HEART OF OUR SCHOLARSHIP SCHEME IS THE BELIEF THAT EDUCATION IS A POWERFUL TOOL FOR PERSONAL AND SOCIETAL GROWTH</p>
            <div class="row justify-content-center">
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                   
                <img src={service_01}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title my-2" >Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" id='btn2' class="btn">Go somewhere</Link>
  </div>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                   
                   <img src={service_02}class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title my-2">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <Link to="#" id='btn2' class="btn">Go somewhere</Link>
     </div>
                   </div>
                   <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                   
                   <img src={service_03}class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title my-2">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <Link href="#" id='btn2' class="btn">Go somewhere</Link>
     </div>
                   </div>
            </div>
        </div>
        </div>
        <div id="funfacts" style={{margin:'4.5rem 0.5rem'}} class="row text-start align-items-center">
            <div id='aims' class="col-lg-6">
                <h5 id='primary' class="fs-5 my-1 text-white">WASE STUDENT SCHOLARSHIP SCHEME</h5>
                <h3 id='primary1' class="fw-bolde text-white" >Aims and Objectives</h3>
                <h3 id='summary' class="fw-bold mb-5" >Summary</h3>
               <p id='parag' class="fs-5 text-white">The aim of the "Wase Student Scholarship Scheme" is to provide financial assistance and support to deserving students, empowering them to pursue higher education and achieve their academic and career aspirations
               </p>
               <p className='text-white fs-5'>
               We strive to foster educational excellence, create opportunities for personal growth, and contribute to the development of well-rounded individuals who will make a positive impact in their communities and beyond.
               </p>
                <Link to="#" id='btn2' class="btn my-4 fs-4 col-md-6">Go somewhere</Link>
        
            </div>
            <div class="col-lg-6">
            <div class="container col-12 text-center">
  <div class="row row-cols-md-12">
    <div id='counts' class="col-md-5 bg-dark p-5 m-2"><div class="fs-1 fw-bolder">{count}</div><div className='text-white fs-4'>Application</div></div>
    <div id='counts' class="col-md-5 bg-dark p-5 m-2"><div class="fs-1 fw-bolder">89</div><div className='text-white fs-4'>Application</div></div>
    <div id='counts' class="col-md-5 bg-dark p-5 m-2"><div class="fs-1 fw-bolder">89</div><div className='text-white fs-4'>Application</div></div>
    <div id='counts' class="col-md-5 bg-dark p-5 m-2"><div class="fs-1 fw-bolder">89</div><div className='text-white fs-4'>Application</div></div>
  </div>
</div>
  </div>
           
        </div>
        <div class="container mb-5 mx-auto">
  <div class="row ">
    <div class="col-md-6 p-0">
      <img src={zumarock} class="img-fluid" alt="..."/>
    </div>
    <div id='card-section' class="col-md-6 p-5">
      <div>
        <p>
        A LETTER TO WASE STUDENT (BROTHERS / SISTERS)
        </p>
        <h5 class="card-title mb-4">My Dear <span class="text-success">One</span> </h5>
        <p class="card-text">"Believe in your potential, embrace the power of education, and let your dreams ignite the path to success. Dare to dream, persevere through challenges, and unlock your limitless potential. Your journey begins now, and we are here to champion your success every step of the way. Together, let's write a story of determination, resilience, and achievement. The world is waiting for your brilliance to shine. Apply for the "Wase Student Scholarship Scheme" and let your dreams take flight!"</p>
        <p class="card-text">Thank you</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default HomeContent