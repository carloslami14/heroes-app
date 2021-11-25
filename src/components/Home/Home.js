import React, { useState, useMemo } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import HeroeCard from '../Heroe/HeroeCard';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    axios.get(`http://localhost:5000/heroes`)
      .then((response) => {
        setLoading(false);
        setHeroes(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <Container maxWidth="sm">
      <br />
      <br />
      {loading ? <CircularProgress />
        : (<Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <h1>Listado de Super Heroes</h1>
          </Grid>
          {
            heroes.map(heroe => (
              <Grid key={heroe.id} item xs={6} sm={4} md={4} lg={3}>
                <Link to={`heroe/${heroe.id}`}>
                  <HeroeCard key={heroe.id} {...heroe} />
                </Link>
              </Grid>
            ))
          }
        </Grid>)
      }
    </Container>
  );
}

export default Home;
