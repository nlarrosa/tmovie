import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid, Rating, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const MovieModal = ({ openModal, modalClose, data }) => {


  return (
    <>
        <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={modalClose}
        aria-describedby="alert-dialog-slide-description"
        >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={12}>
              <Grid item xs={4}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${data?.poster}`}
                  width={200}
                  height={280}
                />
              </Grid>
              <Grid item xs={8}>
                <div><Typography fontWeight={'bold'} mb={2} variant='body2'>{data?.title}</Typography></div>
                <div style={{ minHeight: 150, maxHeight:150}}><Typography variant='caption'>{ data?.description}</Typography></div>
                <div style={{ marginTop: 15}}><Rating name="read-only" value={data.rating} max={10} precision={0.5} readOnly /></div>
                <div style={{ marginTop: 10}}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" startIcon={<DeleteIcon />} color='error'>
                    Eliminar
                  </Button>
                </Stack>
                </div>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        </Dialog>
    </>
  )
}
