import React, { Component } from 'react';
import { firestore } from 'firebase';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const todos = this.props.todos;

    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-brand">ALL TODOS</div>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-level="Search"
              onChange={this.handleChange}
            />
            <button className="btn btn-outline-success my-2 my-sm-0">
              Search
            </button>
          </form>
        </nav>
        <div className="container-fluid bg-light">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Start</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              {todos ? (
                todos.map((todo) => (
                  <tr key={todo.name}>
                    <td>1</td>
                    <td>{todo.name}</td>
                    <td>{todo.startDate}</td>
                    <td>{todo.endDate}</td>
                  </tr>
                ))
              ) : (
                <div>
                  <p className="lead">There is no database</p>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});
export default connect(mapStateToProps)(TodoList);
