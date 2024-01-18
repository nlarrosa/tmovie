import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export const MovieSnack = ({handleClose, open}) => {


  return (
    <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose}
        anchorOrigin={{vertical:'top', horizontal:'right'}}
    >
        <Alert
            onClose={handleClose}
            severity={'error'}
            variant="filled"
            sx={{ width: '100%' }}
        >
            un mensaje
        </Alert>
    </Snackbar>
  )
}
