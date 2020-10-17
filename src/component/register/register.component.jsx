import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayname: "",
      username: "",
      password: "",
      passwordConfirm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { displayname, username, password, passwordConfirm } = this.state;
    if (password !== passwordConfirm) {
      alert("Password and Confirm password dose not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        username,
        password
      );
      await createUserProfileDocument({ ...user, displayName: displayname });
      this.setState({
        displayname: "",
        username: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (err) {
      console.log(err);
    }
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
            REGISTER
          </h5>
          <div className="dropdown-divider"></div>
          <p className="lead text-success" style={{ fontSize: "1rem" }}>
            I am new on this service
          </p>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="displayname">Enter Username</label>
              <input
                type="text"
                name="displayname"
                id="displayname"
                className="form-control"
                placeholder="Enter Displayname"
                value={this.state.displayname}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Enter Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm">Enter password again</label>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                className="form-control"
                placeholder="Enter password again"
                value={this.state.passwordConfirm}
                onChange={this.handleChange}
              />
            </div>
            <div className="dropdown-divider"></div>
            <button
              className="btn btn-secondary mr-3"
              type="submit"
              onClick={this.handleSubmit}
            >
              Register
            </button>
            <button className="btn btn-primary" type="button">
              REGISTER WITH GOOGLE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
