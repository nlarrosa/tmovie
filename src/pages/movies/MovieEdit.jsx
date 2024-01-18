import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';


export const MovieEdit = () => {


    
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={3} sx={{ mt: 3 }}>
            <img src={`https://image.tmdb.org/t/p/w500/acNRGwBz22E2m5OEWOhS8RiqiXM.jpg`} width={250} />
        </Grid>
        <Grid item xs={12} sm={7}>
            <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            name={'tmbdId'}
                            id={'tmbdId'}
                            type={'hidden'}
                        />
                        <TextField
                            name="title"
                            required
                            fullWidth
                            id="title"
                            label="Titulo"
                            autoFocus
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
                            autoComplete="email"
                        />
                    </Grid>
                </Grid>
                <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    // loading={isLoading}
                    sx={{ mt: 3, mb: 2 }}
                >
                    ACTUALIZAR
                </LoadingButton>
            </Box>
        </Grid>
    </Grid>
  )
}
