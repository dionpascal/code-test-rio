import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';

function Card(props) {
   
    return (
        <Grid item xs={3} md={3}>
        <Box
            sx={{
                width: '100%',
                height: '100px',
                border: '1px solid grey',
                backgroundColor: '#fffff',
                mergin: '10px 10px 10px 10px',
                borderRadius: '8px',
            }}
        >
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                marginLeft: '10px'
            }}>
               {props.name}
            </Typography>
            <Typography sx={{
                fontWeight: '400',
                fontSize: '12px',
                marginLeft: '10px'

            }}>
               {props.url}
            </Typography>
        </Box>
        </Grid>
      );
}

export default Card;