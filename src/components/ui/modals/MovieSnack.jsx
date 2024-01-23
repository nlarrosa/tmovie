import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export const MovieSnack = ({handleClose, open, msg, color}) => {


  return (
    <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose}
        anchorOrigin={{vertical:'top', horizontal:'right'}}
    >
        <Alert
            onClose={handleClose}
            severity={color}
            variant="filled"
            sx={{ width: '100%' }}
        >
            {msg}
        </Alert>
    </Snackbar>
  )
}
