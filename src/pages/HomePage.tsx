import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Campers of your dreams
        </Typography>
        <Typography variant="h5" paragraph>
          Find your perfect camper and start your adventure today!
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          component={Link}
          to="/catalog"
        >
          View Catalog
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
