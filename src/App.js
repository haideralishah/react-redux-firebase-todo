import React, { Component } from 'react';
import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home.js';
import Content from './components/Content.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import Signup from './components/Signup.js';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Navbar} >
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />

        </Route>
      </Router>
    );
  }
}

export default App;
