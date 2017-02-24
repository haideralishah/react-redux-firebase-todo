import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as firebase from 'firebase';
import Todo from './Todo';
class Home extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(ev) {
        ev.preventDefault();
        // console.log('this.refs', this.refs);
        let currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid, 'auth--------------')
        firebase.database().ref('todos/' + currentUser.uid).push({ todo: this.refs.todo.value })
            .then((v) => {
                this.refs.todo.value = '';
            })


    }
    render() {
        return (
            <div>
                <div>
                    <form className="center-content" onSubmit={this.addTodo}>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="todo">Add Todo:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="todo" placeholder="Enter Todo" ref='todo' />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
                <br /> <br />
                <Todo />
            </div >
        );
    }
}

module.exports = connect()(Home)
