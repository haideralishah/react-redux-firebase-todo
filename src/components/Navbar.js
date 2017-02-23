import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
    authentication
} from '../modules/todoredux.js';
import * as firebase from 'firebase';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        firebase.auth().signOut()
            .then(() => {
                // Sign-out successful.
                console.log('logout ');
                this.props.authentication();
            }, (error) => {
                // An error happened.
            });
    }

    render() {
        const {
            auth
        } = this.props
        return (
            <div>
                <nav className="navbar navbar-inverse success-background">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand brand-link">ReduxFire-Todo</a>
                        </div>
                        <ul className="nav navbar-nav">
                        </ul>
                        {(auth === false) ? (
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/signup" activeClassName="success-active"><span className="glyphicon glyphicon-log-in success-link"> Sign Up </span></Link></li>
                                <li><Link to="/login" activeClassName="success-active"><span className="glyphicon glyphicon-log-in success-link"> Login </span></Link></li>
                            </ul>
                        ) : (
                                <ul className="nav navbar-nav navbar-right">
                                    <li onClick={this.logout}><Link to="/signup" activeClassName="success-active"><span className="glyphicon glyphicon glyphicon-log-out success-link"> Logout </span></Link></li>
                                </ul>
                            )}
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

module.exports = connect(state => ({
    auth: state.todo.authenticated
}), {
        authentication
    })(Navbar)
