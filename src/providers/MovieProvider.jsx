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


    const getMovieRatingById = async(tmbdId) => {

        try {
            const {data } = await axiosDash.get(`/movies/${tmbdId}/reviews`);
            const { resp } = data;
            const { reviews } = resp;
            let rating = 0;

            reviews.forEach(review => {
                rating = rating + review.rating;
            });

            rating = (rating / reviews.length).toFixed(2);

            const newMovie = {
                tmbdId: resp.tmbdId,
                title: resp.title,
                description: resp.description,
                poster: resp.poster,
                releaseDate: resp.releaseDate,
                rating: rating
            }

            dispatch({
                type: types.movie.getMovie,
                payload: {
                    movie: newMovie
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    };


    const updateMovieById = async(objectMovie) => {

        try {
            const { tmbdId } = objectMovie;
            const { data } = await axiosDash.put(`/movies/${tmbdId}`, objectMovie);
            console.log(data);
            
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <MoviesContext.Provider value={{
        state,
        getAllMovies,
        getMovieRatingById,
        updateMovieById
    }}>
        { children }
    </MoviesContext.Provider>
  )
}
