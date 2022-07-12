import React, { useState } from 'react';
import { ButtonGroup } from '@mui/material';
import styles from './App.module.scss';
import BaseButton from './components/baseComp/BaseButton';
import BaseInput from './components/baseComp/BaseInput';

const App = () => {
  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('handleButtonClick', event.target);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <main>
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
          <BaseInput label="filled 인풋" defaultValue=" 기본값" variant="filled"></BaseInput>
          <BaseInput label="outlined 인풋" defaultValue="" variant="outlined"></BaseInput>
          <BaseInput label="standard 인풋" defaultValue="" variant="standard"></BaseInput>
          <BaseInput label="helperText 인풋" helperText="도움말같은거 적는 곳" variant="outlined"></BaseInput>
          <BaseInput label="small 인풋" size="small" variant="outlined"></BaseInput>
          <BaseInput label="normal 인풋" size="medium" variant="outlined"></BaseInput>
          <BaseInput label="controlled 인풋" onChangeHandler={handleInputChange} variant="outlined"></BaseInput>
          <BaseInput label="uncontrolled 인풋" variant="outlined"></BaseInput>
        </section>
      </main>
    </div>
  );
};

export default App;
