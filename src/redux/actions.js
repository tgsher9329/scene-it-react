export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SET_LOADING = 'SET_LOADING'
export const SET_DATA = 'SET_DATA'

export function createAddMovie(movie) {
    return {
        type: ADD_MOVIE,
        movie,
    }
}

export function createDeleteMovie(movie) {
    return {
        type: DELETE_MOVIE,
        movie,
    }
}

export function setLoading(value) {
    return {
        type: SET_LOADING,
        value
    }
}

export const setData = (data) => {
    return {
        type: SET_DATA,
        data
    }
}
