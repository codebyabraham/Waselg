import React from 'react'
import "../App.css";
import {Link} from 'react-router-dom'


function Vnin() {
  return (
    <>
    <div style={{height:'50vh', margin:'15%'}} className="row">
        <div className="col-md-4">
        <div class="rounded-4 text-white bg-success mb-3">
  <div class="card-body text-center p-4">
    <h5 class="card-title">DIAL *346*3*YOUR-NIN*11987#</h5>
  </div>
</div>
        </div>
    <div  class='col-md-6 mx-auto'>
    <form style={{height:'50vh'}} class="row  col-md-12 d-flex justify-content-center align-items-center mx-auto text-center">
   <h1 class="fw-bold">Input your Virtual NIN</h1>
  <div class="col-12 ">
    {/* <label for="inputPassword2" class="visually-hidden">Password</label> */}
    <input type="text" class="form-control" id="vnin"  placeholder="Enter here.."/>
  </div>
 <div>
  <img width="150" height="150" class="mx-auto d-block" src="https://img.icons8.com/metro/600/decision.png" alt="decision"/>
 </div>
  
  <div class="col-12 ">
    <Link to='/register' type="submit" style={{backgroundColor:'#469c4b', color:'#ffff', borderRadius:'2rem'}} class="btn mb-3 px-5">Generate</Link>
  </div>
</form>
    </div>
    </div>
    </>
  )
}

export default Vnin