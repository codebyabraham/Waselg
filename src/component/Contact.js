import React from 'react'

function Contact() {
  return (
  <>
  <div style={{margin:'4.5rem 0.5rem'}} class="p-3 rounded-4 row justify-content-center text-center py-5 text-white">
        <div class="col-md-12">
            <h2 id='primary' class="mb-4 mx-auto shadow-sm col-md-6 pb-2" style={{borderBottom: '1px blue solid'}}>What our Clients are saying</h2>
            <div class="row justify-content-center">
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/>
                    <div class="h4 text-black">Bill Gates</div>
                    <div class="text-muted mb-3">Founder, Microsoft</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"JL Media transformed our processes, boosting productivity and saving costs. Their tailored approach was a game-changer for our growth."</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/>
                    <div class="h4 text-black">Bill Gates</div>
                    <div class="text-muted mb-3">Founder, Microsoft</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"Our digital presence soared with this tech company's cutting-edge solutions. Increased engagement led to higher revenue and market share. A decision we celebrate."</p>
                </div>
                <div id='review' class="col-lg-3 rounded shadow m-3 p-4">
                    <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/>
                    <div class="h4 text-black">Bill Gates</div>
                    <div class="text-muted mb-3">Founder, Microsoft</div>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <img class="img-fluid mb-3" src={star} alt="Client 1"/>
                    <p class="mt-3 text-black">"Impressed by this tech company's seamless solutions. They made us agile, enhancing collaboration and scalability. Highly recommend for any business aiming to thrive."</p>
                </div>
            </div>
        </div>
        </div>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

  </>
  )
}

export default Contact