import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function HeroeCard({ id, superhero }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image={`/assets/${id}.jpg`}
                alt={superhero}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {superhero}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HeroeCard;
