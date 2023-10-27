import React, { useState } from "react";
import Navbar from '../component/Navbar'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AboutBanner from "../component/AboutBanner.js"
import Footer from '../component/Footer'



function Register() {
  const [selected, setSelected] = useState("");
  console.log(selected);
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  const city = ["Bashar", "Nyalum", "Gaji", "Kampani", "Gujus", "yuli"];
  const city2 = ["Mavo", "Kadarko", "Kumgbong", "kumbur", "Wadata", "Gimbi"];
  const city3 = ["Kuyambana", "Danbiram", "Mallam Adams", "Garkuwa"];
  const city4 = ["Wase Tofa", "Lamba", "Yola Wakat", "Saluwe"];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "BASHAR DISTRICT") {
    type = city;
  } else if (selected === "KADARKO DISTRICT") {
    type = city2;
  } else if (selected === "WASE DISTRICT") {
    type = city3;
  } else if (selected === "LAMBA DISTRICT") {
    type = city4;
  }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  // const dispatch = useDispatch();
  let Navigate = useNavigate();

  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Family, setFamily] = useState("");
  const [Landmark, setLandmark] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  const data = {
    selected,
    Address1,
    Address2,
    Family,
    Landmark,
  };


  return (
    <>
    <Navbar />
    <AboutBanner />
    <div className="row my-5">
      <h1 class="text-center fs-4 text-success text-decoration-underline mb-4">APPLICATION FORM</h1>
      <div className="container col-md-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ipsam aliquid beatae perferendis, officia doloribus laudantium sed, nisi vero dignissimos iste ex vitae voluptatum temporibus a eaque. Quis, accusantium rerum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae deleniti hic, incidunt amet quisquam architecto dicta veniam tempore sunt quos omnis, suscipit placeat mollitia nisi neque rerum praesentium molestiae animi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut, quia fuga, ea eos neque sit ducimus accusamus nostrum nihil earum veniam error. Ea nihil mollitia vero, non quia voluptatibus?
      </div>
        <div className="container text-start col-md-5">
          <form>
            <p class="mb-0">
              District<span className="form-box-asterix">*</span>
            </p>
            <div class='col-12 my-2'>
              <select class="form-select form-select-sm mb-3" 
                onChange={changeSelectOptionHandler}
              >
                <option>Choose...</option>
                <option>BASHAR DISTRICT</option>
                <option>KADARKO DISTRICT</option>
                <option>WASE DISTRICT</option>
                <option>LAMBA DISTRICT</option>
              </select>
            </div>

    

            <div>
              <label class="mb-0">
                Wards<span className="form-box-asterix">*</span>
              </label>
              <select class="form-select form-select-sm mb-3">
                {
                  /** This is where we have used our options variable */
                  options
                }
              </select>
            </div>
            <div>
            <label class="form-label mb-0" for="formGroupFamilyInput">
              Family Head Name
              <span className="form-box-asterix">*</span>
            </label>

            </div>
            <input
              className="form-control mb-3"
              type="text"
              value={Family}
              onChange={(e) => setFamily(e.target.value)}
              required
            />

            <label class="form-label mb-0">
              Address Line 1<span className="form-box-asterix">*</span>
            </label>
            <input
              className="form-control mb-3"
              type="text"
              value={Address1}
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
            <label class="form-label mb-0">
              Address line 2<span className="form-box-asterix">*</span>
            </label>
            <input
              className="form-control mb-3"
              type="text"
              value={Address2}
              onChange={(e) => setAddress2(e.target.value)}
              required
            />
            <label class="form-label mb-0">
              Landmark<span className="form-box-asterix">*</span>
            </label>
            <input
              className="form-control mb-3"
              type="text"
              value={Landmark}
              onChange={(e) => setLandmark(e.target.value)}
              required
            />
            <Link class="btn btn-success" type="submit">Continue</Link>
          </form>
        </div>
    </div>
    <Footer/> 
    </>
    
  );
}

export default Register;