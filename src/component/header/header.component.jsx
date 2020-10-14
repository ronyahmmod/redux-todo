import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ fontFamily: "Raleway" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          REDUX TODO
        </Link>

        <button
          className="navbar-toggler"
          data-target="#navbarSupportedContent"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Login | Register | Logout Pannel */}
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item" style={{ fontFamily: "Raleway" }}>
              <Link className="nav-link " to="/register">
                REGISTER
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
