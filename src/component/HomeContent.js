import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./HomeContent.css";
import service_01 from "../images/service_01.jpeg";
import service_02 from "../images/service_02.jpeg";
import service_03 from "../images/service_03.jpeg";
import zumarock from "../images/more-info.jpg";

function HomeContent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 89) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval); // Stops the interval when count reaches 89
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const [count2, setCount2] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count2 < 58) {
        setCount2((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval); // Stops the interval when count reaches 89
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [count2]);

  const [count3, setCount3] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count3 < 45) {
        setCount3((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval); // Stops the interval when count reaches 89
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [count3]);
  return (
    <>
      <div
        style={{ margin: "4.5rem 0.5rem" }}
        className="p-3 rounded-4 row justify-content-center text-start py-5 "
      >
        <Link
          to="/payment"
          id="button"
          className="rounded-pill apply text-center mb-4"
        >
          Apply Now
        </Link>
        <div className="col-md-12">
          <h2 className="mb-4 mx-auto fs-1 fw-bolder text-center col-md-6 pb-2">
            WASE & <span style={{ color: "#6acf06" }}>YOU</span>
          </h2>
          <p className="text-center fs-4 fw-bold">
            Unlock Your Heritage: Your Indigenous Certificate Awaits!
          </p>
          <div className="row justify-content-center">
            <div id="review" className="col-lg-3 rounded shadow m-3 p-4">
              <img
                src={service_01}
                className="card-img-top"
                style={{ height: "400px" }}
                alt="..."
              />
              <div className="card-body fs-4">
                <h5 className="card-title my-2 fs-3 fw-bold">
                  Easy Application
                </h5>
                <p className="card-text">
                  Our user-friendly platform simplifies the indigenous
                  certificate application process. Say goodbye to paperwork and
                  long queues. Apply from the comfort of your home, and get
                  started on your cultural heritage journey with just a few
                  clicks.
                </p>
              </div>
            </div>
            <div id="review" className="col-lg-3 rounded shadow m-3 p-4">
              <img src={service_02} className="card-img-top" alt="..." />
              <div className="card-body fs-4">
                <h5 className="card-title my-2 fs-3 fw-bold">
                  Dedicated Assistance
                </h5>
                <p className="card-text">
                  Our support team is here for you every step of the way. Have
                  questions or need guidance? We're just an email, chat, or
                  phone call away. Count on our experts to ensure a smooth
                  application experience.
                </p>
              </div>
            </div>
            <div id="review" className="col-lg-3 rounded shadow m-3 p-4">
              <img src={service_03} className="card-img-top col-12" alt="..." />
              <div className="card-body fs-4">
                <h5 className="card-title my-2 fs-3 fw-bold">
                  Clear Fee Structure
                </h5>
                <p className="card-text">
                  No hidden costs or surprises! Our transparent fee structure
                  ensures you know exactly what you're paying for. Affordable
                  pricing makes obtaining your indigenous certificate accessible
                  to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="funfacts"
        style={{ margin: "4.5rem 0rem" }}
        className="row text-start align-items-center"
      >
        <div className="col-lg-5 mx-auto py-5">
          <h5 id="primary" className="fs-5 my-1 text-white">
            WASE CERTIFICATE OF INDIGENESHIP
          </h5>
          <h3 id="primary1" className="fw-bolder mb-0 text-white">
            Aims and Objectives
          </h3>
          <h3 id="summary" className="fw-bold mb-5">
            Summary
          </h3>
          <p id="parag" className="fs-5 text-white">
            Our primary aim is to simplify and expedite the process of obtaining
            an indigenous certificate. We aim to eliminate unnecessary
            bureaucratic hurdles and reduce the time and effort required to
            complete the application.
          </p>
          <p className="text-white fs-5">
            We aim to promote and preserve the cultural heritage of indigenous
            communities by facilitating the issuance of indigenous certificates.
            This, in turn, helps individuals and communities maintain a strong
            connection to their roots and traditions.
          </p>
        </div>
        <div className="col-lg-5 mx-auto py-5">
          <div className="container col-12 text-center">
            <div className="row row-cols-md-12">
              <div id="counts" className="col-md-5 bg-dark p-5 m-1">
                <div className="fs-1 fw-bolder">{count}</div>
                <div className="text-white fs-4 fw-bold">Application</div>
              </div>
              <div id="counts" className="col-md-5 bg-dark p-5 m-1">
                <div className="fs-1 fw-bolder">{count2}</div>
                <div className="text-white fs-4 fw-bold">Process</div>
              </div>
              <div id="counts" className="col-md-5 bg-dark p-5 m-1">
                <div className="fs-1 fw-bolder">{count3}</div>
                <div className="text-white fs-4 fw-bold">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 mx-auto">
        <div id="card-section" className="row d-flex align-items-center">
          <div className="col-md-6 p-0">
            <img src={zumarock} className="img-fluid col-12" alt="..." />
          </div>
          <div className="col-md-6 p-5">
            <div>
              <p className="fs-5">
                Administratively, Wase is divided into four districts, namely:
                Wase, Bashar, Lamba, and Kadarko.
              </p>
              <h5 className="card-title mb-4 fs-2 fw-bolder">
                Wase <span className="text-success">Town</span>{" "}
              </h5>
              <p className="card-text fs-5">
                "Wase is a town and Local Government Area (LGA) of Plateau
                State, Nigeria, situated some 216 km south east of Jos, the
                Plateau State capital. It shares its name with the nearby Wase
                River. "
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
