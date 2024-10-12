import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'

const HomeButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '16px 60px',
  fontStyle: 'normal',
  fontWeight: 500,
  borderRadius: 200,
  lineHeight: 1.5,
  backgroundColor: '#E44848',
  fontFamily: [
    'Inter',
  ].join(','),
  '&:hover': {
    backgroundColor: '#D84343',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#D84343',
    border: 'none',
  },
  '&:focus': {
    boxShadow: 'none',
    outline: 'none',
  },
});

const HomePage: React.FC = () => {
  return (
    <Container disableGutters={true} className={styles.container} maxWidth={false}>
      <Box className={styles.homeBox}>
        <Box className={styles.textBox}>
          <Typography gutterBottom={false} className={styles.h3Box} variant="h3" component="h1">
            Campers of your dreams
          </Typography>
          <Typography gutterBottom={false} className={styles.h5Box} variant="h5">
            You can find everything you want in our catalog
          </Typography>
        </Box>

        <HomeButton 
        variant="contained"
        // component={Link}
        //   to="/catalog"
        >
          View Now
        </HomeButton>
      </Box>
    </Container>
  );
};

export default HomePage;
