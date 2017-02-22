import React, { Component } from 'react';
import { Link } from 'react-router';


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse success-background">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand brand-link">ReduxFire-Todo</a>
                        </div>
                        <ul className="nav navbar-nav">
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup" activeClassName="success-active"><span className="glyphicon glyphicon-log-in success-link"> Sign Up </span></Link></li>
                            <li><Link to="/login" activeClassName="success-active"><span className="glyphicon glyphicon-log-in success-link"> Login </span></Link></li>
                        </ul>

                    </div>
                </nav>
                {this.props.children}
            </div>
            /*<div>
                <h1>Node.University</h1>
                <div className="navbar navbar-default">
                    <ul className="nav nav-pills navbar-nav ">
                        <li>
                            <Link to="/about" activeClassName="active">
                                About
                             </Link>
                        </li>


                        <li>
                            <Link to="/login" activeClassName="active">
                                Login
                             </Link>
                        </li>
                    </ul>
                </div>
                {this.props.children}
            </div>*/
        )
    }
}
export default Navbar;
