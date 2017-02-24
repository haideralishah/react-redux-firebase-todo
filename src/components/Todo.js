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
        this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
        this.editTodoHandler = this.editTodoHandler.bind(this);
        const {
            todos,
            editStatus
        } = this.props
        firebase.database().ref('todos/' + currentUser.uid).on('child_added', (data) => {
            let obj = data.val();
            obj.id = data.key;
            let currentTodos = this.props.todos;
            currentTodos = currentTodos.concat(obj)
            this.props.addTodos(currentTodos);
        })
        firebase.database().ref('todos/' + currentUser.uid).on('child_changed', (data) => {
            let obj = data.val();
            obj.id = data.key;
            let currentTodos = this.props.todos;
            currentTodos = currentTodos.concat(obj)
            this.props.addTodos(currentTodos);
        })

    }
    editTodoHandler(ev) {
        console.log(ev.target.dataset);
    }
    deleteTodoHandler(ev) {
        let todoKey = ev.target.dataset.id;
        let currentUser = firebase.auth().currentUser;
        firebase.database().ref('todos/' + currentUser.uid + '/' + todoKey).remove()
            .then((v) => {
                let currentTodo = this.props.todos;
                let indexRemove;
                for (var i = 0; i < currentTodo.length; i++) {
                    if (currentTodo[i].id === todoKey) {
                        indexRemove = i;
                    }
                }
                currentTodo = currentTodo.slice(0, indexRemove).concat(currentTodo.slice(indexRemove + 1));
                this.props.addTodos(currentTodo);
            });
    }

    render() {
        console.log(this.props.todos, '-----------');
        return (
            <div>
                <br />
                {this.props.todos.map((v, i) => {
                    return (
                        <h1 key={i} className='heading-2'>{v.todo} {(!this.props.editStatus) ? (
                            <span>
                                <button data-id={v.id} onClick={this.deleteTodoHandler} className="btn btn-primary">Delete</button>
                                <button data-id={v.id} data-todo={v.todo} onClick={this.editTodoHandler} className="btn btn-primary">Edit</button>
                            </span>
                        ) : ''} </h1>
                    )
                })
                }

            </div>
        )
    }
}

module.exports = connect(state => ({
    todos: state.todo.todos,
    editStatus: state.todo.editStatus
}), {
        addTodos
    })(Todo)
