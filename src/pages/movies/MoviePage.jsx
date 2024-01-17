import React, { useContext, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { MoviesContext } from '../../contexts/MoviesContext';
import { MovieModal } from '../../components/ui/modals/MovieModal';
import { useModal } from '../../Hooks/useModal';



export const MoviePage = () => {

  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const { getAllMovies, state} = useContext(MoviesContext);
  const { open, handleClose, handleOpen } = useModal();




useEffect(() => {
 init();
}, [])

const init = async() => {
    getAllMovies();
}




  const getButtonsActions = () => {

    return (
      <>
          <IconButton
            color='info'
            title='Ver Reseña'
            onClick={() => handleOpen()}
          >
            <VideoChatIcon
              fontSize='medium'
              color='info'
            />
          </IconButton>
          <IconButton
            color='info'
            title='Editar'
            onClick={() =>{}}
          >
            <EditNoteIcon
              fontSize='medium'
              color='info'
            />
          </IconButton>
      </>
    )
  }

  const columns = [
  
    {
      flex: 0.1,
      field: 'tmbdId',
      headerName: 'ID',
      minWidth: 50,
    },

    {
      flex: 0.15,
      field: 'poster',
      headerName: 'Portada',
      minWidth: 100,
      renderCell: ({ row }) => {
        return(
          <Avatar alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w500/${row.poster}`} sx={{ width: 50, height: 50 }}/>
        )
      }
    }, 

    {
      flex: 0.25,
      field: 'title',
      headerName: 'Pelicula',
      minWidth: 150,
    },
    {
      flex: 0.50,
      field: 'description',
      headerName: 'Historia',
      minWidth: 150,
    },
    {
      flex: 0,
      field: 'acciones',
      headerName: 'Acciones',
      minWidth: 150,
      renderCell: ({ row }) => {
        return (
          <Box>
            {getButtonsActions()}
          </Box>
        )
      }
    },
  ];


    
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{  
              marginLeft: 3, 
          }}
      >
          <Typography 
            variant='h5' 
            fontFamily={'fantasy'}
          >
            Lista de Peliculas
          </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper>
          <div style={{ width: '100%', height: 650 }}>
            <DataGrid 
              // loading={isLoading}
              // autoHeight
              // checkboxSelection
              rows={state?.movies} 
              getRowId={(row) => row.tmbdId}
              columns={columns} 
              paginationMode='client'
              pageSize={pageSize}
              page={page}
              // pageSizeOptions={[10, 25, 50]}
              sx={{ 
                boxShadow: 1,
                border: 1,
                borderColor: '#ccc',
                '& .MuiDataGrid-columnHeaders': { 
                  borderRadius: 0, 
                  backgroundColor: "rgba(0,141,255,0.2)" 
                } 
              }}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              onPageChange={(newPage) => setPage(newPage)}
              // localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            />
          </div>
        </Paper>
      </Grid>
      <MovieModal 
        openModal={open}
        modalClose={handleClose}
      />
    </Grid>
  )
}
