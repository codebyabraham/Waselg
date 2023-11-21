import React, { useEffect } from "react";
import { FcHome } from "react-icons/fc";

import { Link } from "react-router-dom";

function Success() {
  useEffect(() => {
    document.title = "WaseLg | Success";
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h1 className="text-center display-3 py-5">
            Dear applicant, thanks for applying!
          </h1>
          <p className="py-3">
            Your application has been received, you'll receive a short message
            soon in your email address for next step regarding your application.
            Cheers{" "}
            <span role="img" aria-labelledby="emoji">
              🎉🎉🎉!
            </span>
          </p>
          <div className="text-center">
            <Link to="/" className="btn btn-normal btn-dark m-5">
              Back to Home <FcHome size={35} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
