import React from 'react';
import { Container } from '@mui/material';
import CampersList from '../../components/CampersList/CampersList';

const CatalogPage: React.FC = () => {
  return (
    <Container>
      <CampersList />
    </Container>
  );
};

export default CatalogPage;
