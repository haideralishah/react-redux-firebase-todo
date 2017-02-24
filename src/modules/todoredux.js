import { handleActions } from 'redux-actions';


const AUTHENTICATION = 'reducer/AUTHENTICATION'
const ADD_TODOS = 'reducer/ADD_TODOS'

module.exports = {

    authentication: () => ({
        type: AUTHENTICATION,
    }),
    addTodos: (todos) => ({
        type: ADD_TODOS,
        todos
    }),
    reducer: handleActions({
        [AUTHENTICATION]: (state, action) => ({
            ...state,
            authenticated: !state.authenticated
        }),
        [ADD_TODOS]: (state, action) => ({
            ...state,
            todos: action.todos
        })

    }, {
            todos: [],
            editTodo: {},
            editStatus: false,
            authenticated: false
        })
}

