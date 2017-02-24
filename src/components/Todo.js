import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addTodos
} from '../modules/todoredux.js';
import * as firebase from 'firebase';

class Todo extends Component {
    constructor(props) {
        super(props);
        let currentUser = firebase.auth().currentUser;
        // console.log(props);
        const {
            todos
        } = this.props
        firebase.database().ref('todos/' + currentUser.uid).on('child_added', (data) => {
            // console.log(data, '************');
            let obj = data.val();
            obj.id = data.key;
            let currentTodos = this.props.todos;
            currentTodos = currentTodos.concat(obj)
            // this.setState({ todos: currentTodos })
            this.props.addTodos(currentTodos);
            console.log(todos, 'obj');
        })

    }
    render() {
        console.log(this.props.todos, '-----------');
        return (
            <div>
                <br />
                {this.props.todos.map((v, i) => {
                    return (
                        <h1 key={i}>{v.todo} </h1>
                    )
                })
                }

            </div>
        )
    }
}

module.exports = connect(state => ({
    todos: state.todo.todos
}), {
        addTodos
    })(Todo)
