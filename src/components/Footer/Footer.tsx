import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', p: 2, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="inherit">
          &copy; {new Date().getFullYear()} TravelTrucks. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
