import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

function Header(props) {
  const { user } = props;
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
          {user ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="" onClick={() => auth.signOut()} className="nav-link">
                  LOGOUT
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item" style={{ fontFamily: "Raleway" }}>
                <Link className="nav-link " to="/">
                  REGISTER
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  LOGIN
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
