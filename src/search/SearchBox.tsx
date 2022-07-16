import { Box, Container, InputAdornment } from '@mui/material';
import React from 'react';
import BaseInput from '../components/baseComp/BaseInput';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBox.module.scss';

const SearchBox = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', height: '40vh', alignItems: 'center' }}>
        <BaseInput
          label={'검색어 입력'}
          inputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            flexGrow: 1,
          }}
        ></BaseInput>
      </Box>
    </Container>
  );
};

export default SearchBox;
