import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './component/header/header.component';
import SideBar from './component/sidebar/sidebar.component';

import HomePage from './page/homepage/homepage.page';
import AddTodo from './component/addtodo/addtodo.component';
import TodoList from './component/todolist/todolist.component';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-6 col-md-3">
            {/* SIDEBAR */}
            <SideBar />
          </div>
          <div className="col-sm-6 col-md-9">
            {/* COMPONENT */}
            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/addTodo" component={AddTodo} />
              <Route exact path="/allTodo" component={TodoList} />
              {/* <Route exact path="/statistics" component={Statistics} /> */}
              {/* <Route exact path="/userInfo" component={UserInfo} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
