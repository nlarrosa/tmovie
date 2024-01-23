import React from 'react';
import {Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../../components/cards/MovieCard';
import SearchMovie from '../../components/ui/fields/SearchMovie';
import { useDispatch } from 'react-redux';




export const MoviePageRedux = () => {


  

    
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <SearchMovie />
      </Grid>
      {[0,1,2,3,4,5,6,7,8,9].map( (movie, index) => (
        <Grid key={index} item xs={12} md={4}>
            <MovieCard dataMovie={[]}/>
        </Grid>
      ))}
    </Grid>
    
  )
}
