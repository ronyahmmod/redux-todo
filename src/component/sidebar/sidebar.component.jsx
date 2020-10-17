import React from "react";
import { NavLink } from "react-router-dom";

function SideBar(props) {
  return (
    <div className="list-group list-group-flush">
      <NavLink
        to="/home"
        className="list-group-item list-group-item-action"
        activeClassName="active"
        exact
      >
        Home
      </NavLink>
      <div className="dropdown-divider"></div>
      <NavLink
        to="/addTodo"
        className="list-group-item list-group-item-action"
        activeClassName="active"
        exact
      >
        Add Todo
      </NavLink>
      <NavLink
        to="/allTodo"
        className="list-group-item list-group-item-action"
        activeClassName="active"
        exact
      >
        All Todo
      </NavLink>
      <div className="dropdown-divider"></div>
      <NavLink
        to="/statistics"
        className="list-group-item list-group-item-action"
        activeClassName="active"
        exact
      >
        Statistics
      </NavLink>
      <NavLink
        to="/userInfo"
        className="list-group-item list-group-item-action"
        activeClassName="active"
        exact
      >
        User Information
      </NavLink>
    </div>
  );
}

export default SideBar;
