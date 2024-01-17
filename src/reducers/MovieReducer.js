import { types } from "../types/types"



export const MovieReducer = (state={}, action) => {

    switch (action.type) {
        case types.movie.getMovies:
            return {
                ...state,
                movies: action.payload.movies,
                isLoading: false,
                search: action.payload.search
            }
    
        default:
            return state
    }

}