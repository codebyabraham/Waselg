import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import AboutBanner from "../component/AboutBanner.js";
import oga from "../images/oga.jpg";
import "../App.css";
import Footer from "../component/Footer.js";

function About() {
  useEffect(() => {
    document.title = "WaseLg | About";
  }, []);
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
      <Navbar />
      <AboutBanner />
      <div
        style={{ margin: "4.5rem 0rem " }}
        class="p-3 col-10 row mx-auto text-start align-items-center"
      >
        <div class="col-lg-5">
          {/* <h4 id='primary1' class="fs-6 my-3 text-dark">SHAPING A BRIGHT FUTURE.</h4> */}
          <h1 id="primary" class="fs-3 my-4 mt-2 ">
            CERTIFICATE OF INDIGENESHIP
          </h1>
          <p id="parag">
            Our Local government is our identity; it forms the singular basis
            for the Federal Character principle and its application in Nigeria.
            In essence, it is the remarkable instrument that unifies and
            determines true Federalism in the country.
          </p>

          <p>
            This platform targets at providing a means of indigenes of local
            governments desirous of authenticating their Origin to do so online,
            allowing the local Governments control of the instrument and giving
            institutions requiring them an opportunity to verify the
            authenticity and identity behind the document.
          </p>
          <p>
            We are proud to be associated with the regime of His Excellency
            Governor Caleb Manasseh Mutfwang, a renowned Human Being committed
            to promoting excellence in education and humanity at large. With our
            scholarship program, we aim to foster a culture of meritocracy and
            empower students from diverse backgrounds to thrive academically.
          </p>
        </div>
        <div class="col-lg-5 mx-auto">
          <img src={oga} class="card-img-top" alt="..." />
          <div class="card-body">
            {/* <h5 class="card-title">Card title</h5> */}
            {/* <p class="card-text">We invite you to explore our website and learn more about the eligibility criteria, application process, and benefits of our scholarship program. Whether you are a prospective applicant, a dedicated supporter, or a potential partner, we welcome your involvement and collaboration. Together, we can empower talented individuals to shape a brighter future.</p> */}
          </div>
        </div>
      </div>
      <div class=" rounded-4 row justify-content-center text-center ">
        <div id="our-team" class="col-md-12 ">
          <h2 id="primary" class="mb-4 mx-auto col-md-6 pb-2">
            Our team <span id="member">members</span>
            <h5 CLASS="fs-6 mt-4">
              SUSPENDISSE A ANTE IN NEQUE IACULIS LACINIA
            </h5>
          </h2>

          <div class="row justify-content-center">
            <div class="col-lg-3  m-3 p-4 bg-white">
              <div class="h4 text-black fs-3">Ado Ibrahim</div>
              {/* <div class="text-muted mb-3 text-success">Founder, Microsoft</div> */}

              <p id="review1" class="mt-3 ">
                "JL Media transformed our processes, boosting productivity and
                saving costs."
              </p>
            </div>
            <div class="col-lg-3  m-3 p-4 bg-white">
              {/* <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/> */}
              <div class="h4 text-black fs-3">Kabiru abdullahi</div>
              {/* <div class="text-muted mb-3">Founder, Microsoft</div> */}

              <p id="review1" class="mt-3">
                "Our digital presence soared with this tech company's
                cutting-edge solutions."
              </p>
            </div>
            <div class="col-lg-3  m-3 p-4 bg-white">
              {/* <img class="img-fluid rounded-circle mb-3" src={bill} alt="Client 1"/> */}
              <div class="h4 text-black fs-3">Hajiya Inno</div>
              {/* <div class="text-muted mb-3">Founder, Microsoft</div> */}

              <p id="review1" class="mt-3">
                "Impressed by this tech company's seamless solutions. ."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="funfacts"
        style={{ margin: "4.5rem 0rem"}}
        class="row text-start align-items-center"
      >
        <div class="col-lg-5 mx-auto py-5">
          <h5 id="primary" class="fs-5 my-1 text-white">
            WASE CERTIFICATE OF INDIGENESHIP
          </h5>
          <h3 id="primary1" class="fw-bolder mb-0 text-white">
            Aims and Objectives
          </h3>
          <h3 id="summary" class="fw-bold mb-5">
            Summary
          </h3>
          <p id="parag" class="fs-5 text-white">
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
          {/* <Link to="#" id='btn2' class="btn my-4 fs-4 col-md-6 rounded-pill">Go somewhere</Link> */}
        </div>
        <div class="col-lg-5 mx-auto py-5">
          <div class="container col-12 text-center">
            <div class="row row-cols-md-12">
              <div id="counts" class="col-md-5 bg-dark p-5 m-1">
                <div class="fs-1 fw-bolder">{count}</div>
                <div className="text-white fs-4 fw-bold">Application</div>
              </div>
              <div id="counts" class="col-md-5 bg-dark p-5 m-1">
                <div class="fs-1 fw-bolder">{count2}</div>
                <div className="text-white fs-4 fw-bold">Process</div>
              </div>
              <div id="counts" class="col-md-5 bg-dark p-5 m-1">
                <div class="fs-1 fw-bolder">{count3}</div>
                <div className="text-white fs-4 fw-bold">Awards</div>
              </div>
              {/* <div id='counts' class="col-md-5 bg-dark p-5 m-2"><div class="fs-1 fw-bolder">76</div><div className='text-white fs-4 fw-bold'>Application</div></div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
