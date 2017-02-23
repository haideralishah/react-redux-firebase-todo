import React from 'react';
// import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home.js';
// import Content from './components/Content.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import Signup from './components/Signup.js';
import * as firebase from 'firebase';
var fb = firebase.initializeApp({
    apiKey: "AIzaSyAUTWn2F8u3Q7oeYrYHp8OwsDajPk_RB-A",
    authDomain: "test-01-141907.firebaseapp.com",
    databaseURL: "https://test-01-141907.firebaseio.com",
    storageBucket: "test-01-141907.appspot.com",
    messagingSenderId: "906558294346"
});




module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Navbar} >
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
        </Route>

    </Router>
)


/*
class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Navbar} >
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                </Route>
                <Route path="/home" component={Home} />
            </Router>
        );
    }
}*/

// export default Routes;
