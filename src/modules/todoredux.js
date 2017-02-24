import { handleActions } from 'redux-actions';


const AUTHENTICATION = 'reducer/AUTHENTICATION'
const ADD_TODOS = 'reducer/ADD_TODOS'
const TOGGLE_EDIT = 'reducer/TOGGLE_EDIT'

module.exports = {

    authentication: () => ({
        type: AUTHENTICATION,
    }),
    addTodos: (todos) => ({
        type: ADD_TODOS,
        todos
    }),
    toggleEdit: (editTodo) => ({
        type: TOGGLE_EDIT,
        editTodo
    }),
    reducer: handleActions({
        [AUTHENTICATION]: (state, action) => ({
            ...state,
            authenticated: !state.authenticated
        }),
        [ADD_TODOS]: (state, action) => ({
            ...state,
            todos: action.todos
        }),
        [TOGGLE_EDIT]: (state, action) => ({
            ...state,
            editStatus: !state.editStatus,
            editTodo: action.editTodo
        })

    }, {
            todos: [],
            editTodo: {},
            editStatus: false,
            authenticated: false
        })
}

