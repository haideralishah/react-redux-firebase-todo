import { handleActions } from 'redux-actions';

const FETCH_MOVIES = 'movies/FETCH_MOVIES'
const FETCH_MOVIE = 'movies/FETCH_MOVIE'
const AUTHENTICATION = 'reducer/AUTHENTICATION'

module.exports = {
    fetchMovies: (movies) => ({
        type: FETCH_MOVIES,
        movies
    }),
    fetchMovie: (index) => ({
        type: FETCH_MOVIE,
        index
    }),
    authentication: () => ({
        type: AUTHENTICATION,
    }),
    reducer: handleActions({
        // [FETCH_MOVIES]: (state, action) => ({
        //     ...state,
        //     all: action.movies
        // }),
        // [FETCH_MOVIE]: (state, action) => ({
        //     ...state,
        //     current: state.all[action.index - 1]
        // }),
        [AUTHENTICATION]: (state, action) => ({
            ...state,
            authenticated: !state.authenticated
        })

    }, {
            todos: [],
            editTodo: {},
            editStatus: false,
            authenticated: false
        })
}

