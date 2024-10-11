import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Camper } from '../../redux/types';

interface CamperCardProps {
  camper: Camper;
}

const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={camper.imageUrl}
        alt={camper.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {camper.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {camper.description}
        </Typography>
        <Typography variant="h6" color="primary">
          €{camper.price}
        </Typography>
        <Button component={Link} to={`/catalog/${camper.id}`} variant="contained" sx={{ mt: 2 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CamperCard;
