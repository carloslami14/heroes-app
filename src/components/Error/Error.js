import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Errror() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };

    return (
        <Container maxWidth="sm">
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12}>
                    <h1>Hubo un error en la peticion!</h1>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleHome}>Volver al Inicio</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Errror;
