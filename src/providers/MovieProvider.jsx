import React, { useReducer } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import { MovieReducer } from '../reducers/MovieReducer';
import { axiosDash } from '../config/dashAxios';
import { types } from '../types/types';

const initialValue = {
    movies: [],
    isLoading: true,
    search: ''
}

export const MovieProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(MovieReducer, initialValue);


    const getAllMovies = async() => {

        try {

            const { data } = await axiosDash.get('/movies?limit=100&page=1');
            const {resp } = data;


            dispatch({
                type: types.movie.getMovies,
                payload: {
                    movies: resp.movies,
                    search: ''
                }
            });
            
        } catch (error) {
            console.log(error.response.data)
        }
    }


  return (
    <MoviesContext.Provider value={{
        state,
        getAllMovies
    }}>
        { children }
    </MoviesContext.Provider>
  )
}
