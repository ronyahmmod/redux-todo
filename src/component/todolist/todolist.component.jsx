import React, { Component } from "react";
// import { firestore } from "firebase";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-brand">ALL TODOS</div>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              onChange={this.handleChange}
            />
            <button className="btn btn-outline-success my-2 my-sm-0">
              Search
            </button>
          </form>
        </nav>
        <div className="container-fluid bg-light">
          <table className="table">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default TodoList;
