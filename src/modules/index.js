import { combineReducers } from 'redux';
const {
    reducer: todo
} = require('./todoredux')

module.exports = combineReducers({
    todo
})
