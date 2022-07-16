import React from 'react';
import styles from './Header.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import BaseButton from '../components/baseComp/BaseButton';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        mx: 'auto',
        px: '120px',
        py: '15px',
        borderBottom: '1px solid gray',
      }}
    >
      <Link variant="h4" sx={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon sx={{ fontSize: 'inherit' }} />
        LOGO
      </Link>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Link variant="h6">메뉴1</Link>
        <Link variant="h6">메뉴2</Link>
        <Link variant="h6">메뉴3</Link>
        <Link variant="h6">메뉴4</Link>
      </Box>
      <Box>
        <BaseButton text={'로그인 | 회원가입'} variant="contained"></BaseButton>
      </Box>
    </Box>
  );
};

export default Header;
