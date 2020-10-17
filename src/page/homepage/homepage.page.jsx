import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { protect } from "../../utils/auth.utils";

function HomePage(props) {
  const { user } = props;
  return (
    <>
      {protect(user) ? (
        <div className="card">
          <div className="card-header">
            <h4 className="display-4">HomePage</h4>
          </div>
          <div className="card-body">
            <p className="lead">
              Welcome to redux-todo app. This application is working about
              storing todo, update, delte todo. If any todo task is comming near
              to the ending date time it will inform you with an alart message.
              It also use a trush thant contains delete todo item. After
              finishing one item it will automaticaly delete This todo from the
              trush. For further information you can contact with me on
              facebook.{" "}
              <a
                href="https://www.facebook.com/rony.ahmmod"
                className="streched-link"
              >
                Rony Ahmmod
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            You are not logged in {""}
            <Link to="/">LogIn</Link>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(HomePage);
