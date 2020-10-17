import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './component/header/header.component';
import SideBar from './component/sidebar/sidebar.component';
import AddTodo from './component/addtodo/addtodo.component';
import TodoList from './component/todolist/todolist.component';

import HomePage from './page/homepage/homepage.page';
import RegisterLogin from './page/register-login-page/register-login.page';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // SET USER REDUCER AND SET CURRENT USER AS THIS USER
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.props.setLoginUser({
            id: userRef.id,
            ...snapshot.data(),
          });
        });
      } else {
        this.props.setLoginUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mt-3">
            <div className="col-sm-6 col-md-3">
              {this.props.currentUser ? (
                <>
                  {/* SIDEBAR */}
                  <SideBar />
                </>
              ) : null}
            </div>

            <div className="col-sm-6 col-md-9">
              {/* COMPONENT */}
              <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/addTodo" component={AddTodo} />
                <Route exact path="/allTodo" component={TodoList} />
                {/* <Route exact path="/statistics" component={Statistics} /> */}
                {/* <Route exact path="/userInfo" component={UserInfo} /> */}
                <Route exact path="/" component={RegisterLogin} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLoginUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
