import React, { useContext, useEffect, useReducer } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router';
import { MoviesContext } from '../../contexts/MoviesContext';
import { useForm } from '../../Hooks/useForm';
import { MovieSnack } from '../../components/ui/modals/MovieSnack';
import { useModal } from '../../Hooks/useModal';
import { alertStatus } from '../../config/alertStatus';
import { AlertReducer } from '../../reducers/AlertReducer';
import { types } from '../../types/types';



export const MovieEdit = () => {

    const {tmbdId} = useParams();
    const { getMovieRatingById, updateMovieById, state, stateAlert, clearAlertMsg } = useContext(MoviesContext);
    const { formState, onChangeInput, setFormState } = useForm();
    const { open, handleClose, handleOpen } = useModal();
   
    useEffect(() => {
        getMovieRatingById(tmbdId);
    }, []);

    useEffect(() => {
        if(stateAlert.type == alertStatus.success){
            handleOpen();
            setTimeout(() => {
                clearAlertMsg();
            }, 4000);
        }
    }, [stateAlert.type]);
    


    useEffect(() => {
      setFormState({
        tmbdId: state?.movie?.tmbdId,
        title: state?.movie?.title,
        description: state?.movie?.description,
        releaseDate: state?.movie?.releaseDate
      })
    }, [state.movie]);


    const handleSubmitForm = (event) => {
        event.preventDefault();
        updateMovieById(formState);

    }
    
    

    
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={3} sx={{ mt: 3 }}>
            <img src={`https://image.tmdb.org/t/p/w500/${state.movie?.poster}`} width={250} />
        </Grid>
        <Grid item xs={12} sm={7}>
            <Box component="form" noValidate onSubmit={handleSubmitForm} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            name={'tmbdId'}
                            id={'tmbdId'}
                            type={'hidden'}
                            value={formState.tmbdId || ''}
                        />
                        <TextField
                            name="title"
                            required
                            fullWidth
                            id="title"
                            label="Titulo"
                            autoFocus
                            value={formState.title || ''}
                            onChange={onChangeInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            type='date'
                            required
                            fullWidth
                            id="releaseDate"
                            label="Fecha de Estreno"
                            name="releaseDate"
                            value={formState.releaseDate || ''}
                            onChange={onChangeInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            multiline
                            rows={6}
                            fullWidth
                            id="description"
                            label="Descripcion"
                            name="description"
                            value={formState.description || ''}
                            onChange={onChangeInput}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    // loading={isLoading}
                    sx={{ mt: 3, mb: 2 }}
                >
                    ACTUALIZAR
                </Button>
            </Box>
        </Grid>
        <MovieSnack 
            open={open}
            handleClose={handleClose}
            msg={stateAlert?.msg}
            color={stateAlert.color}
        />
    </Grid>
  )
}
