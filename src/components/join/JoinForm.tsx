import { FormControl } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../sample/store/config';
import { setJoinData } from '../../sample/store/slices/joinSlice';
import BaseForm from '../baseComp/BaseForm';
import BaseInput from '../baseComp/BaseInput';

const JoinForm = () => {
  const joinData = useAppSelector((state) => state.joinData);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('join form submit');
  };

  const handlePasswordBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('handle blur', event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setJoinData({ ...joinData, [name]: value }));
  };
  return (
    <>
      <BaseForm heading="회원가입" buttonText="가입하기" onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ '& > div': { mb: '40px' }, '& > div:nth-of-type(4)': { mb: '60px' } }}>
          <BaseInput label="이메일" type="email" name="email" onChange={handleInputChange} />
          <BaseInput label="이름" type="text" name="name" onChange={handleInputChange} />
          <BaseInput
            label="비밀번호"
            type="password"
            name="password"
            helperText="영문 대/소문자, 숫자를 포함하여 8자리 이상을 입력하세요"
            onBlur={handlePasswordBlur}
            onChange={handleInputChange}
          />
          <BaseInput
            label="비밀번호 확인"
            type="password"
            name="password_check"
            onBlur={handlePasswordBlur}
            onChange={handleInputChange}
          />
        </FormControl>
      </BaseForm>
    </>
  );
};

export default JoinForm;
