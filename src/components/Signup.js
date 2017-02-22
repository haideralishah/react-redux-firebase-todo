import React, { Component } from 'react';
import Form from './Form.js';
import * as firebase from 'firebase';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
    }

    signup(credentials) {
        console.log(credentials);
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((user) => {
                console.log(user, 'user');
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
                <h2 className='heading-2'>Signup</h2>
                <Form formhandler={this.signup}></Form>
            </div>
        );
    }
}

export default Signup;
