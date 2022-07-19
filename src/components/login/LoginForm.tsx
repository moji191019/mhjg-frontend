import { Box, Container, FormControl, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import BaseButton from '../baseComp/BaseButton';
import BaseInput from '../baseComp/BaseInput';
import { login } from '../../store/api';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: 'a@b.c', password: 'aa' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('handleSubmit', formData);
    login(formData);
  };
  return (
    <>
      <Container maxWidth="sm" sx={{ height: '100%', display: 'flex', alignItems: 'center', minWidth: '370px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '40px',
            border: '1px solid gray',
            borderRadius: '10px',
            width: '100%',
          }}
        >
          <Box sx={{ mb: '30px' }}>
            <Typography variant="h5">로그인</Typography>
          </Box>
          <Box sx={{ mb: '30px' }}>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth sx={{ '& > div': { mb: '10px' }, '& > div:nth-of-type(3)': { mb: '20px' } }}>
                <BaseInput
                  label="이메일"
                  type="email"
                  name="email"
                  fullWidth
                  onChange={handleInputChange}
                  value={formData.email}
                ></BaseInput>
                <BaseInput
                  label="비밀번호"
                  type="password"
                  name="password"
                  fullWidth
                  onChange={handleInputChange}
                  value={formData.password}
                ></BaseInput>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <Typography variant="subtitle2">아직 회원이 아니신가요?</Typography>
                  <Link sx={{ fontSize: 'inherit' }}>회원가입</Link>
                </Box>
                <BaseButton text="로그인" variant="contained" fullWidth type="submit"></BaseButton>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;
