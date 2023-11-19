import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import AboutBanner from "../component/AboutBanner.js";
import Footer from "../component/Footer";
import image from "../images/image.jpeg";
import axios from "axios";
import image2 from "../images/laoding.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  useEffect(() => {
    document.title = "WaseLg | Register";
  }, []);
  const [Selected, setSelected] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // State to hold the generated application numbers
  const [Application_nos, setApplicationNumbers] = useState(null);

  // Function to generate a random integer between min (inclusive) and max (exclusive)
  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  // Effect to run once when the component mounts
  useEffect(() => {
    // Generate 6 random application numbers
    const newApplicationNumber = getRandomInt(100000, 999999);

    // Set the generated numbers in the state
    setApplicationNumbers(newApplicationNumber);
  }, []);

  let Imagedata, Names, storedData; // Declare the variables outside the try-catch block

  try {
    const storedData = localStorage.getItem("Data");

    if (storedData) {
      const data1 = JSON.parse(storedData);
      Imagedata = data1.imageData;
      Names = data1.name;
      // Continue using Imagedata and Names as needed
    } else {
      console.error("No data stored");
      // Handle the case where no data is found
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    // Handle the parsing error as needed
  }

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
  if (Selected === "BASHAR DISTRICT") {
    type = city;
  } else if (Selected === "KADARKO DISTRICT") {
    type = city2;
  } else if (Selected === "WASE DISTRICT") {
    type = city3;
  } else if (Selected === "LAMBA DISTRICT") {
    type = city4;
  }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Family, setFamily] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [Email, setEmail] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  const data = {
    Selected,
    Address1,
    Address2,
    Family,
    Landmark,
    Names,
    Imagedata,
    Email,
    Application_nos,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://nimc-backend.onrender.com/api/adddata",
        data
      );
      const responseDataFromApi = response.data.message;
      switch (responseDataFromApi) {
        case "":
          toast("Kindly attempt to submit again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/register");
          break;
        case undefined:
          toast("Kindly attempt to submit again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/register");
          break;
        case null:
          toast("Kindly attempt to submit again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/register");
          break;
        default:
          toast("Registered successfull");
          navigate("/success");
          break;
      }
      setLoading(false);
    } catch (error) {
      // Handle the error as needed
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <AboutBanner />
      {loading && (
        <div className="overlay">
          <img
            src={image2} // Replace with the path to your loading GIF
            alt="Loading"
          />
          <h4>Generating...</h4>
        </div>
      )}{" "}
      <div className="row my-5">
        <h1
          style={{ borderBottom: "1px solid green" }}
          class="text-center container mx-auto fs-3 fw-bolder text-success pb-3 mb-4"
        >
          APPLICATION FORM
        </h1>
        <div className="container col-md-5 p-5 bg-secondary fs-3">
          <p>Name: {Names}</p>

          {storedData ? (
            // eslint-disable-next-line no-unused-vars
            <img src={Imagedata} alt="img" style={{ width: "100%" }} />
          ) : (
            // eslint-disable-next-line no-unused-vars
            <img src={image} alt="img" style={{ width: "100%" }} />
          )}
        </div>
        <div className="container p-5 text-start col-md-6">
          <form onSubmit={handleSubmit}>
            <label class="mb-0 fw-bold fs-5">
              District<span className="form-box-asterix">*</span>
            </label>
            <div class="col-12 my-2">
              <select
                class="form-select px-3 py-2 fs-5 rounded-pill shadow mb-4 form-select-sm"
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
              <label class="mb-0 fs-5 fw-bold">
                Wards<span className="form-box-asterix">*</span>
              </label>
              <select class="form-select form-select-sm px-3 py-2 fs-5 rounded-pill shadow mb-4">
                {
                  /** This is where we have used our options variable */
                  options
                }
              </select>
            </div>
            <div>
              <label
                class="form-label mb-0 fs-5 fw-bold"
                for="formGroupFamilyInput"
              >
                Family Head Name
                <span className="form-box-asterix">*</span>
              </label>
            </div>
            <input
              className="form-control px-3 py-2 fs-5 rounded-pill shadow mb-4"
              type="text"
              value={Family}
              onChange={(e) => setFamily(e.target.value)}
              required
            />

            <label class="form-label mb-0 fw-bold fs-5">
              Address Line 1<span className="form-box-asterix">*</span>
            </label>
            <input
              className="form-control px-3 py-2 fs-5 rounded-pill shadow mb-4"
              type="text"
              value={Address1}
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
            <label class="form-label mb-0 fs-5 fw-bold">
              Address line 2<span className="form-box-asterix">*</span>
            </label>
            <input
              className="form-control px-3 py-2 fs-5 rounded-pill shadow mb-4"
              type="text"
              value={Address2}
              onChange={(e) => setAddress2(e.target.value)}
              required
            />
            <label class="form-label mb-0 fs-5 fw-bold">
              Landmark<span className="form-box-asterix">*</span>
            </label>
            <input
              className="form-control px-3 py-2 fs-5 rounded-pill shadow mb-4"
              type="text"
              value={Landmark}
              onChange={(e) => setLandmark(e.target.value)}
              required
            />
            <label class="form-label mb-0 fs-5 fw-bold">
              Email<span className="form-box-asterix">*</span>
            </label>
            <input
              className="form-control px-3 py-2 fs-5 rounded-pill shadow mb-4"
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="btn btn-success rounded-pill col-7 btn-md fs-4"
              type="submit"
              value="Continue"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
