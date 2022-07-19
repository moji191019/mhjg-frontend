import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Box, ButtonGroup, Container } from '@mui/material';
import styles from './App.module.scss';
import BaseButton from './components/baseComp/BaseButton';
import BaseInput from './components/baseComp/BaseInput';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './pages/Login';

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
        <BaseButton text="contained 버튼" variant="contained" onClick={handleButtonClick} />
        <BaseButton text="outelined 버튼" variant="outlined" onClick={handleButtonClick} />
        <BaseButton text="text 버튼" variant="text" onClick={handleButtonClick} />
        <ButtonGroup>
          <BaseButton text="ButtonGroup 버튼" variant="contained" onClick={handleButtonClick} />
          <BaseButton text="ButtonGroup 버튼" variant="outlined" onClick={handleButtonClick} />
          <BaseButton text="ButtonGroup 버튼" variant="text" onClick={handleButtonClick} />
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
          <BaseInput label="controlled 인풋" onChange={handleInputChange} variant="outlined"></BaseInput>
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
      <Container component="main" sx={{ height: '90%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="sample" element={<ComponentSample />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
