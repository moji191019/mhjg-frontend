import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Box, ButtonGroup, Container } from '@mui/material';
import styles from './App.module.scss';
import BaseButton from './components/baseComp/BaseButton';
import BaseInput from './components/baseComp/BaseInput';
import Header from './header/Header';
import SearchBox from './search/SearchBox';

const ComponentSample = () => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('handleButtonClick', event.target);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleInputChange', event.target.value);
  };
  return (
    <>
      <section className={styles.buttonSection}>
        <BaseButton text="contained 버튼" variant="contained" onClickHandler={handleButtonClick} />
        <BaseButton text="outelined 버튼" variant="outlined" onClickHandler={handleButtonClick} />
        <BaseButton text="text 버튼" variant="text" onClickHandler={handleButtonClick} />
        <ButtonGroup>
          <BaseButton text="ButtonGroup 버튼" variant="contained" onClickHandler={handleButtonClick} />
          <BaseButton text="ButtonGroup 버튼" variant="outlined" onClickHandler={handleButtonClick} />
          <BaseButton text="ButtonGroup 버튼" variant="text" onClickHandler={handleButtonClick} />
        </ButtonGroup>
      </section>
      <section className={styles.inputSection}>
        <Box>
          <BaseInput label="filled 인풋" defaultValue=" 기본값" variant="filled"></BaseInput>
          <BaseInput label="outlined 인풋" defaultValue="" variant="outlined"></BaseInput>
          <BaseInput label="standard 인풋" defaultValue="" variant="standard"></BaseInput>
          <BaseInput label="helperText 인풋" helperText="도움말같은거 적는 곳" variant="outlined"></BaseInput>
        </Box>
        <Box>
          <BaseInput label="small 인풋" size="small" variant="outlined"></BaseInput>
          <BaseInput label="normal 인풋" size="medium" variant="outlined"></BaseInput>
        </Box>
        <Box>
          <BaseInput label="controlled 인풋" onChangeHandler={handleInputChange} variant="outlined"></BaseInput>
          <BaseInput label="uncontrolled 인풋" variant="outlined"></BaseInput>
        </Box>
      </section>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container component="main">
        <Routes>
          <Route path="/" element={<SearchBox />} />
          <Route path="home" element={<SearchBox />} />
          <Route path="sample" element={<ComponentSample />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
