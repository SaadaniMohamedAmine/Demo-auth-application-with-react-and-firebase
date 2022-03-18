import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="container py-5 my-5">
        <h1 className="py-3 text-center">
          Sorry,the url you look for is not acquired!!
        </h1>
        <h3 className="py-3 text-center">
          Please,check the information you look for first !!
        </h3>
        <div className="text-center">
          <Link to="/" className="btn bnt-secondary bg-dark text-light">
            Return to home
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
