import React, { Component } from "react";
// import { addTodo as addTodoToDB } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { addTodo } from "../../redux/todo/todo.actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      details: "",
      startDate: "",
      endDate: "",
      remark: "",
      alert: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    // if (this.state) {
    //   const todoRef = await addTodoToDB(this.state);
    //   todoRef.onSnapshot((snapshot) => {
    //     this.props.addTodoToReducer(snapshot.data());
    //     console.log(snapshot.data());
    //   });
    // } else {
    //   this.props.addTodoToReducer(this.state);
    // }
    this.props.addTodoToReducer(this.state);
  }

  render() {
    return (
      <div className="container">
        <h5 className="display-5 ml-5" style={{ fontFamily: "Raleway" }}>
          ADD A TODO
        </h5>
        <div className="col-sm-6 col-md-10">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Enter todo name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter todo name"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.name}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="details">Enter Details</label>
                  <textarea
                    name="details"
                    id="details"
                    placeholder="Enter details of this todo"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.details}
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="startDate">Enter start date</label>
                  <input
                    type="text"
                    name="startDate"
                    id="startDate"
                    className="form-control"
                    placeholder="DD-MM-YYYY:HH-MM-SS"
                    onChange={this.handleChange}
                    value={this.state.startDate}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="endDate">Enter end date</label>
                  <input
                    type="text"
                    name="endDate"
                    id="endDate"
                    className="form-control"
                    placeholder="DD-MM-YYYY:HH-MM-SS"
                    onChange={this.handleChange}
                    value={this.state.endDate}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="remark">Enter remark</label>
                  <input
                    type="text"
                    name="remark"
                    id="remark"
                    placeholder="Enter remark"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.remark}
                    required
                  />
                </div>
                <div className="dropdown-divider"></div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="true"
                    name="alert"
                    onChange={this.handleChange}
                    value={true}
                  />
                  <label className="form-check-label" htmlFor="true">
                    Alert On
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="false"
                    name="alert"
                    onChange={this.handleChange}
                    value={false}
                  />
                  <label className="form-check-label" htmlFor="false">
                    Alert Off
                  </label>
                </div>

                <div className="dropdown-divider"></div>
                <button
                  type="submit"
                  className="btn btn-primary mr-3"
                  onClick={this.handleSubmit}
                >
                  Add Todo
                </button>
                <button type="reset" className="btn btn-danger">
                  Reset Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addTodoToReducer: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
