import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addTodos, toggleEdit
} from '../modules/todoredux.js';
import * as firebase from 'firebase';

class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.saveEditedTodo = this.saveEditedTodo.bind(this);
        const {
            todos,
            editStatus,
            editTodo
        } = this.props
    }
    saveEditedTodo(ev) {
        ev.preventDefault();
        console.log(this.refs.editedTodo.value);
        let currentUser = firebase.auth().currentUser;
        firebase.database().ref('todos/' + currentUser.uid + '/' + this.props.editTodo.id).set({
            todo: this.refs.editedTodo.value
        });
        this.props.toggleEdit({});

    }
    render() {
        return (
            <div>
                <form onSubmit={this.saveEditedTodo}>
                    <input type="text" defaultValue={this.props.editTodo.todo} ref='editedTodo' />
                    <button>Save</button>
                </form>

            </div>
        )
    }
}

module.exports = connect(state => ({
    todos: state.todo.todos,
    editStatus: state.todo.editStatus,
    editTodo: state.todo.editTodo
}), {
        addTodos, toggleEdit
    })(EditTodo)
