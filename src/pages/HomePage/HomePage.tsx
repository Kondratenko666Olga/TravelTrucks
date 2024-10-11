import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'

const HomePage: React.FC = () => {
  return (
    <Container className={styles.container}>
      <Box className={styles.homeBox}>
        <Typography className={styles.h3Box} variant="h3" component="h1" gutterBottom>
          Campers of your dreams
        </Typography>
        <Typography className={styles.h5Box} variant="h5" paragraph>
          Find your perfect camper and start your adventure today!
        </Typography>
        <Button className={styles.buttonBox}
          // variant="contained"
          // size="large"
          // color="primary"
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
