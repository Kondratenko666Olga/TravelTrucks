import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg'; // Змініть шлях на правильний


const Header: React.FC = () => {
  return (
    <AppBar className={styles.headerContainer} position="static">
      <Container className={styles.headerContainer}>
        <Toolbar >
        <img src={logo} alt="TravelTrucks Logo" className={styles.homeLogo} />
          <Button className={styles.btnHeader}
          component={Link} to="/">
            Home
          </Button>
          <Button className={styles.btnHeader}
          component={Link} to="/catalog">
            Catalog
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
