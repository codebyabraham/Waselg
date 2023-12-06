import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../images/image.jpeg";
import image2 from "../images/laoding.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./Loading.css";

function Vnin() {
  useEffect(() => {
    document.title = "WaseLg | VirtualNIN";
  }, []);
  const [vNIN, setvNIN] = useState("");
  const [loading, setLoading] = useState(false);

  const [responseData, setResponseData] = useState("");

  const onChangevNIN = (e) => setvNIN(e.target.value);
  const data = {
    vNIN: vNIN,
  };
  const navigate = useNavigate();
  const imageData = `data:image/jpeg;base64,${responseData?.photograph || ""}`;
  const fullName =
    responseData &&
    responseData.firstName &&
    responseData.surname &&
    responseData.middleName
      ? `${responseData.firstName} ${responseData.surname} ${responseData.middleName}`
      : "";

  const Data = {
    name: fullName,
    imageData: responseData
      ? `data:image/jpeg;base64,${responseData.photograph}`
      : "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://nimc-backend.onrender.com/api/fetchdata",
        data
      );
      const responseDataFromApi = response.data.message;

      setResponseData(responseDataFromApi);

      switch (responseDataFromApi) {
        case "":
          toast("vNIN unverified, please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/Virtualnin");
          break;
        case undefined:
          toast("vNIN unverified, please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/Virtualnin");
          break;
        case null:
          toast("vNIN unverified, please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/Virtualnin");
          break;
        default:
          toast("VNIN verified");
          // Convert the object to a JSON string before storing
          localStorage.setItem("Data", JSON.stringify(Data));
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
      {loading && (
        <div className="overlay">
          <img
            src={image2} // Replace with the path to your loading GIF
            alt="Loading"
          />
          <h4>Generating...</h4>
        </div>
      )}{" "}
      {/* Display loading overlay */}
      <div style={{ height: "50vh", margin: "15%" }} className="row">
        <div className="col-md-12 mb-3">
          <div className="rounded-4 text-white bg-success">
            <div className="card-body text-center p-4">
              <h5 className="card-title">DIAL *346*3*YOUR-NIN*11987#</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mx-auto">
          <form onSubmit={handleSubmit} className="text-center">
            <h1 className="fw-bold mb-3">Input your Virtual NIN</h1>
            <div className="mb-3">
              <input
                type="text"
                className="form-control px-3 py-2 fs-5 rounded-pill shadow"
                id="vnin"
                value={vNIN}
                onChange={onChangevNIN}
                placeholder="Enter virtual nin"
              />
            </div>
            <div className="mb-3">
              {responseData &&
                responseData.firstName &&
                responseData.surname && (
                  <h3>
                    Name: {responseData.firstName} {responseData.surname}
                  </h3>
                )}
              {responseData ? (
                <img src={imageData} alt="img" style={{ width: "100%" }} />
              ) : (
                <img src={image} alt="img" style={{ width: "100%" }} />
              )}
            </div>{" "}
            {responseData ? (
              <Link
                to="/register"
                className="image-submit btn btn-success"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                continue
              </Link>
            ) : (
              <input
                className="image-submit"
                type="submit"
                value="Generate"
                style={{ fontSize: "20px" }}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Vnin;
