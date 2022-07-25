import { Box, Container, FormControl, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import BaseButton from '../baseComp/BaseButton';
import BaseInput from '../baseComp/BaseInput';
import { login } from '../../store/api';
import { useAppSelector, useAppDispatch } from '../../sample/store/config';
import { setLoginData } from '../../sample/store/slices/loginSlice';
import BaseForm from '../baseComp/BaseForm';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: 'a@b.c', password: 'aa' });
  const loginData = useAppSelector((state) => state.loginData);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('handleSubmit', formData);
    // login(formData);
    dispatch(setLoginData(formData));
  };
  return (
    <>
      <BaseForm heading="로그인" buttonText="로그인" onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ '& > div': { mb: '20px' }, '& > div:nth-of-type(3)': { mb: '40px' } }}>
          <BaseInput
            label="이메일"
            type="email"
            name="email"
            fullWidth
            onChange={handleInputChange}
            value={formData.email}
          />
          <BaseInput
            label="비밀번호"
            type="password"
            name="password"
            fullWidth
            onChange={handleInputChange}
            value={formData.password}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
            <Typography variant="subtitle2">아직 회원이 아니신가요?</Typography>
            <Link component={RouterNavLink} to="/join" sx={{ fontSize: 'inherit' }}>
              회원가입
            </Link>
          </Box>
        </FormControl>
      </BaseForm>
    </>
  );
};

export default LoginForm;
