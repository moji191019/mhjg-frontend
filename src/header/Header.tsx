import React from 'react';
import styles from './Header.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Link } from '@mui/material';
import BaseButton from '../components/baseComp/BaseButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link variant="h2">
        <HomeIcon></HomeIcon>
        LOGO
      </Link>
      <Box className={styles.menu}>
        <Link variant="h5">메뉴1</Link>
        <Link variant="h5">메뉴2</Link>
        <Link variant="h5">메뉴3</Link>
        <Link variant="h5">메뉴4</Link>
      </Box>
      <Box>
        <BaseButton text={'로그인 | 회원가입'} variant="contained"></BaseButton>
      </Box>
    </header>
  );
};

export default Header;
