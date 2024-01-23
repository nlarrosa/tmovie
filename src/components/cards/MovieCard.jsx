import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  Rating  from '@mui/material/Rating';


export default function MovieCard({ dataMovie }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
        <CardMedia
            component="img"
            sx={{ width: 150, p:2}}
            image={`https://image.tmdb.org/t/p/w500/`}
            alt="Live from space album cover"
        />
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            p:1
        }}>
            <CardContent sx={{ height:145, px:0}}>
                <Typography 
                    component="div" 
                    variant="caption"
                    fontWeight={'bold'}
                >
                    Titutlo de la Pelicula
                </Typography>
                <Typography 
                    variant="caption" 
                    color="text.secondary" 
                    component="div"
                >
                    descripcion de la pelicula
                    {/* {dataMovie.description.substr(0, 50)} */}
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', pb: 1, justifyContent: 'start' }}>
                <div style={{ marginTop: 15}}>
                    <Rating
                        size="large"
                        name="movieRating" 
                        value={3} 
                        max={5} 
                        precision={0.5} 
                        // onClick={(event) => console.log(event.target.value)}
                    />
                </div>
            </Box>
        </Box>
    </Card>
  );
}