import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../hooks/authContext";

const Navbar = () => {
  const { authStatus} = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React application
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {authStatus ? (
              <li className="nav-item">
                <React.Fragment>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/feed"
                  >
                    Profile
                  </Link>
                </React.Fragment>
              </li>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
