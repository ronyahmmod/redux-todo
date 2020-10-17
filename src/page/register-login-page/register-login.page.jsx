import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Login from "../../component/login/login.component";
import Register from "../../component/register/register.component";

function RegisterLogin(props) {
  const { currentUser } = props;
  return (
    <>
      {!currentUser ? (
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              {/* Login Component */}
              <Login />
            </div>
            <div className="col-sm-6 col-md-6">
              {/* Register Component */}
              <Register />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default withRouter(connect(mapStateToProps)(RegisterLogin));
