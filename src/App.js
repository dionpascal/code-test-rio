import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Card from './components/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {data} from './assets/data/data';
import {Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';

function App() {
  const [datas, setDatas] = useState([])
  const [page, setPage] = useState(1)
  const counts = data.length;
  useEffect(() => {
    setDatas(data)
  },[])

  const handleSearch = (search) => {
    const filter = datas.filter(
      (item) => item.name === search
    );
    if (!search) {
      setDatas(data)
    } else {
      setDatas(filter)
    }
  }

  const handlePagination = (event, value) => {
    setPage(value)
  };

  return (
    <div className="App">
      <Container>
        <Grid
          container s
          pacing={2}
         sx={{
          marginTop : '20px',
          marginBottom : '20px',
        }}>
          <Grid item xs={6} md={6}>
            <Typography sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  marginLeft: '10px'
              }}>
               POKEDEX
            </Typography>
          </Grid>
          <Grid item xs={6} md={6}>
           <TextField  onChange={e => handleSearch(e.target.value)} id="outlined-search" label="Search field" type="search" sx={{
            width: '100%',
           }}/>
          </Grid>

        </Grid>
        <Grid container spacing={2} sx={{
          marginTop:'20px',
          marginBottom:'20px',
        }}>
        <Pagination count={counts} onChange={handlePagination}
        />
        </Grid>
        <Grid container spacing={2}>
          {datas.map((item) => (
             <Card name={item.name} url={item.url}/>
          ))}
        </Grid>
      </Container>
      
      
    </div>
  );
}

export default App;
