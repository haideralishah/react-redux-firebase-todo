import React, { Component } from 'react';
import Form from './Form.js';
import { connect } from 'react-redux';
import {
  authentication
} from '../modules/todoredux.js';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    const {
      auth
    } = this.props
    console.log(auth, '+++++++++++++');
  }

  login(credentials) {
    console.log(credentials);

    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((user) => {
        console.log(user, 'user');
        console.log(user, 'user');
        this.props.authentication()
        browserHistory.push('/signup');


        // this.props.router.push('/signup');
        //  console.log(user, 'user');
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  render() {



    return (
      <div>
        <h2 className='heading-2'>Login</h2>
        <Form formhandler={this.login}></Form>
      </div>
    );
  }
}


module.exports = connect(state => ({
  auth: state.todo.authenticated
}), {
    authentication
  })(Login)
