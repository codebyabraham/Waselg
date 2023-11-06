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
            <h2 class="mb-4 mx-auto fs-1 fw-bolder text-center col-md-6 pb-2">WASSS & <span style={{color:'#6acf06'}}>YOU</span></h2>
            <p className='text-center fs-4 fw-bold'>AT THE HEART OF OUR SCHOLARSHIP SCHEME IS THE BELIEF THAT EDUCATION IS A POWERFUL TOOL FOR PERSONAL AND SOCIETAL GROWTH</p>
            <div class="row justify-content-center">
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                   
                <img src={service_01}class="card-img-top" alt="..."/>
  <div class="card-body fs-4">
    <h5 class="card-title my-2 fs-3 fw-bold" >Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" id='btn2' class="btn rounded-pill">Go somewhere</Link>
  </div>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                   
                   <img src={service_02}class="card-img-top" alt="..."/>
     <div class="card-body fs-4">
       <h5 class="card-title my-2 fs-3 fw-bold">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <Link to="#" id='btn2' class="btn rounded-pill">Go somewhere</Link>
     </div>
                   </div>
                   <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                   
                   <img src={service_03}class="card-img-top" alt="..."/>
     <div class="card-body fs-4">
       <h5 class="card-title my-2 fs-3 fw-bold">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <Link href="#" id='btn2' class="btn rounded-pill">Go somewhere</Link>
     </div>
                   </div>
            </div>
        </div>
        </div>
        <div id="funfacts" style={{margin:'4.5rem 0.5rem'}} class="row text-start align-items-center">
            <div id='aims' class="col-lg-6">
                <h5 id='primary' class="fs-5 my-1 text-white">WASE CERTIFICATE OF INDIGENESHIP</h5>
                <h3 id='primary1' class="fw-bolder text-white" >Aims and Objectives</h3>
                <h3 id='summary' class="fw-bold mb-5" >Summary</h3>
               <p id='parag' class="fs-5 text-white">Our primary aim is to simplify and expedite the process of obtaining an indigenous certificate. We aim to eliminate unnecessary bureaucratic hurdles and reduce the time and effort required to complete the application.
               </p>
               <p className='text-white fs-5'>
               We aim to promote and preserve the cultural heritage of indigenous communities by facilitating the issuance of indigenous certificates. This, in turn, helps individuals and communities maintain a strong connection to their roots and traditions.
               </p>
                <Link to="#" id='btn2' class="btn my-4 fs-4 col-md-6 rounded-pill">Go somewhere</Link>
        
            </div>
            <div class="col-lg-6">
            <div class="container col-12 text-center">
  <div class="row row-cols-md-12">
    <div id='counts' class="col-md-5 bg-dark p-5 m-2"><div class="fs-1 fw-bolder">{count}</div><div className='text-white fs-4 fw-bold'>Application</div></div>
    <div id='counts' class="col-md-5 bg-dark p-5 m-2"><div class="fs-1 fw-bolder">58</div><div className='text-white fs-4 fw-bold'>Application</div></div>
    <div id='counts' class="col-md-5 bg-dark p-5 m-2"><div class="fs-1 fw-bolder">45</div><div className='text-white fs-4 fw-bold'>Application</div></div>
    <div id='counts' class="col-md-5 bg-dark p-5 m-2"><div class="fs-1 fw-bolder">76</div><div className='text-white fs-4 fw-bold'>Application</div></div>
  </div>
</div>
  </div>
           
        </div>
        <div class="container mb-5 mx-auto">
  <div class="row ">
    <div class="col-md-6 p-0">
      <img src={zumarock} class="img-fluid col-12" alt="..."/>
    </div>
    <div id='card-section' class="col-md-6 p-5">
      <div>
        <p class="fs-5">
        Administratively, Wase is divided into four districts, namely: Wase, Bashar, Lamba, and Kadarko.
        </p>
        <h5 class="card-title mb-4 fs-2 fw-bolder">Wase <span class="text-success">Town</span> </h5>
        <p class="card-text fs-5">"Wase is a town and Local Government Area (LGA) of Plateau State, Nigeria, situated some 216 km south east of Jos, the Plateau State capital. It shares its name with the nearby Wase River. "</p>
        {/* <p class="card-text fs-5">Thank you</p> */}
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default HomeContent