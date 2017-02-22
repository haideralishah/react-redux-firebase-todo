import React, { Component } from 'react';
import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home.js';
import Content from './components/Content.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Navbar} >
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />

        </Route>
      </Router>
    );
  }
}

export default App;
