import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function Heroe() {
  const { heroeId } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    axios.get(`http://localhost:5000/heroes/${heroeId}`)
    .then((response) => {
      setLoading(false);
      setHero(response.data);
    })
    .catch(error => {
      console.log(error);
      navigate("/Error");
    });
  }, [heroeId]);

  const handleVolver = () => {
    navigate(-1);
  };

  useEffect(() => {}, [] );

  return (
    <Container maxWidth="sm">
      <br />
      <br />
      {loading ? <CircularProgress />
        : (
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image={`/assets/${hero.id}.jpg`}
                alt={hero.superHero}
              />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Super Heroe: {hero.superhero}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Editora: {hero.publisher}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Personajes: {hero.characters}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Primera Aparición: {hero.first_appearance}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleVolver}>Volver</Button>
            </Grid>
          </Grid>)}

    </Container>
  );
}

export default Heroe;
