import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import BaseButton from '../baseComp/BaseButton';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mx: 'auto',
        px: '120px',
        py: '15px',
        borderBottom: '1px solid gray',
      }}
    >
      <Link component={RouterNavLink} to="/" variant="h4" sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <HomeIcon sx={{ fontSize: 'inherit' }} /> */}
        {/* <Box component="img" src="/logo.svg" sx={{ width: '40px', height: '40px' }} /> */}
        <Icon sx={{ fontSize: 'inherit', '& img': { height: '100%' } }}>
          <img src="/logo.svg" />
        </Icon>
        요즘시세
      </Link>
      <Box sx={{ display: 'flex', gap: '2rem' }}>
        <Box sx={{ flex: 1, display: 'flex', gap: '1rem' }}>
          <Link variant="h6" component={RouterNavLink} to="/">
            home
          </Link>
          <Link variant="h6" component={RouterNavLink} to="/sample">
            component sample
          </Link>
        </Box>
        <Box>
          <Button component={RouterNavLink} to="/login" variant="contained">
            로그인 | 회원가입
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
