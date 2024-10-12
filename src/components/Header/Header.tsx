import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
// import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';


const HeaderButton = styled(Button)({
  // paddingLeft: 50,
  // paddingRight: 50,
  gap: 32,
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 1.5,
  backgroundColor: 'none',
  color: '#101828',
  fontFamily: 'Inter',
  '&:hover': {
    color: '#D84343',
    backgroundColor: 'unset',
  },
  '&:active': {
    color: '#D84343',
    backgroundColor: 'unset',
  },
  '&:focus': {
    color: '#D84343',
    backgroundColor: 'unset',
    outline: 'none',
  },
});

const Header: React.FC = () => {
  return (
    <AppBar>
      <Container disableGutters={true} className={styles.headerContainer} maxWidth={false}>
      <img src={logo} alt="TravelTrucks Logo" className={styles.homeLogo} />
        <Toolbar className={styles.headerTolbar}>
          <HeaderButton>
          {/* component={Link} to="/" */}
            Home
          </HeaderButton>
          <HeaderButton>
          {/* component={Link} to="/catalog" */}
            Catalog
          </HeaderButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
