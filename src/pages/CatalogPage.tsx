import React from 'react';
import { Container, Typography } from '@mui/material';
import CampersList from '../components/CampersList';

const CatalogPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Camper Catalog
      </Typography>
      <CampersList />
    </Container>
  );
};

export default CatalogPage;
