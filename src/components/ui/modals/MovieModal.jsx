import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid, Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const MovieModal = ({ openModal, modalClose }) => {


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
            <Grid xs={12} sm={4}>
              <img src={`https://image.tmdb.org/t/p/w500/acNRGwBz22E2m5OEWOhS8RiqiXM.jpg`} width={200} />
            </Grid>
            <Grid xs={12} sm={8}>
              <Typography variant='h4'>Title</Typography>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={modalClose}>Disagree</Button>
            <Button onClick={modalClose}>Agree</Button>
        </DialogActions>
        </Dialog>
    </>
  )
}
