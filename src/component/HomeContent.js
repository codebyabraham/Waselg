import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import service_01 from '../images/service_01.jpg';
import service_02 from '../images/service_02.jpg';
import service_03 from '../images/service_03.jpg';

function HomeContent() {
  return (
    <>
    <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 row justify-content-center text-start py-5 ">
        <div class="col-md-12">
            <h2 id='primary' class="mb-4 mx-auto shadow-sm col-md-6 pb-2" style={{borderBottom: '1px blue solid'}}>What our Clients are saying</h2>
            <div class="row justify-content-center">
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                   
                <img src={service_01}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title my-2" >Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" id='btn2' class="btn btn-primary">Go somewhere</a>
  </div>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                   
                   <img src={service_02}class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title my-2">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" id='btn2' class="btn btn-primary">Go somewhere</a>
     </div>
                   </div>
                   <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                   
                   <img src={service_03}class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title my-2">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" id='btn2' class="btn btn-primary">Go somewhere</a>
     </div>
                   </div>
            </div>
        </div>
        </div>
        <div id="funfacts" style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 shadow row text-start align-items-center">
            <div class="col-lg-6">
                <h1 id='primary' class="fs-5 my-4 text-white ">WE POSITION</h1>
                <h3 id='primary1' class="fs-5 my-4 text-white" >Aims and Objectives</h3>
                <h3 id='primary2' class="fs-5 my-4 text-success" >Summary</h3>

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
        <div class="card container mb-3 mx-auto">
  <div class="row ">
    <div class="col-md-6">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default HomeContent