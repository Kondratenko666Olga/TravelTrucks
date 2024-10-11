import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, CardMedia, Box } from '@mui/material';
import { getCamperById } from '../services/campersService';
import { Camper } from '../redux/types';

const CamperDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState<Camper | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCamperById(id!)
      .then((response) => setCamper(response.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      {camper ? (
        <>
          <Typography variant="h4" gutterBottom>
            {camper.name}
          </Typography>
          
          {/* Box with Flexbox for layout */}
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
            {/* Image container */}
            <Box flex={1}>
              <CardMedia
                component="img"
                image={camper.imageUrl}
                alt={camper.name}
                style={{ maxWidth: '100%', borderRadius: '8px' }}
              />
            </Box>

            {/* Camper details */}
            <Box flex={1}>
              <Typography variant="h6">Price: €{camper.price}</Typography>
              <Typography variant="body1" paragraph>{camper.description}</Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Typography variant="h6">Camper not found.</Typography>
      )}
    </Container>
  );
};

export default CamperDetailsPage;
