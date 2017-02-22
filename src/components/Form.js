import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form className="center-content top-position">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                </div>
                <br /><br />
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" />
                    </div>
                </div>
                <br /><br />
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </div>
            </form>

        );
    }
}

export default Form;
