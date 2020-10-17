import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="card">
        <div
          className="card-header text-center"
          style={{ fontFamily: "raleway" }}
        >
          <h5 className="display-5" style={{ fontWeight: "bold" }}>
            LOGIN
          </h5>
          <div className="dropdown-divider"></div>
          <p className="lead text-success" style={{ fontSize: "1rem" }}>
            I have a user id and password to login
          </p>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="login_username">Enter Username</label>
              <input
                type="text"
                name="username"
                id="login_username"
                className="form-control"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="login_password">Enter password</label>
              <input
                type="password"
                name="password"
                id="login_password"
                className="form-control"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="dropdown-divider"></div>
            <button
              className="btn btn-secondary mr-3"
              type="submit"
              onClick={this.handleSubmit}
            >
              LOGIN
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={signInWithGoogle}
            >
              LOGIN WITH GOOGLE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
