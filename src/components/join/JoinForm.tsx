import { FormControl } from '@mui/material';
import React from 'react';
import BaseForm from '../baseComp/BaseForm';
import BaseInput from '../baseComp/BaseInput';

const JoinForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('join form submit');
  };
  return (
    <>
      <BaseForm heading="회원가입" buttonText="가입하기" onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ '& > div': { mb: '40px' } }}>
          <BaseInput label="이메일" type="email" />
          <BaseInput label="이름" type="text" />
          <BaseInput label="비밀번호" type="password" />
          <BaseInput label="비밀번호 확인" type="password" />
        </FormControl>
      </BaseForm>
    </>
  );
};

export default JoinForm;
