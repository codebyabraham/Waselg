import React from 'react'
import pageheading from '../images/page-heading-bg.jpg'
import '../App.css'

function AboutBanner() {
  return (
    <>

    {/* <div  class="card text-bg-dark">
  <img id="page-heading" src={pageheading} class="card-img" alt="..."/>
  <div class="card-img-overlay text-center" style={{padding:'230px 0px 30px'}}>
    <h5 class="card-title align-bottom">Card title</h5>
    <p class="card-text align-bottom">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text align-bottom"><small>Last updated 3 mins ago</small></p>
  </div>
</div> */}
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src={pageheading} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-md-block" >
        <h5 class="fs-1">About Us</h5>
        <p>SUPPORTING NUMEROUS STUDENTS IN THEIR EDUCATION JOURNEY!</p>
      </div>
    </div>
</div>
</div>
</>

  )
}

export default AboutBanner