import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(ev) {
        ev.preventDefault();
        console.log(this.refs.email.value);
        console.log(this.refs.password.value);
        let credentials = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }

        return this.props.formhandler(credentials);
    }

    render() {
        return (
            <div>
                <form className="center-content top-position" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" ref='email' />
                        </div>
                    </div>
                    <br /><br />
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" ref='password' />
                        </div>
                    </div>
                    <br /><br />
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
