import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import BaseButton from './BaseButton';

interface BaseFormProps {
  heading: string;
  buttonText: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const BaseForm = ({ children, ...props }: BaseFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => props.onSubmit(event);
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
          <Box sx={{ mb: '120px' }}>
            <Typography variant="h4">{props.heading}</Typography>
          </Box>
          <Box sx={{ mb: '30px' }}>
            <form onSubmit={handleSubmit}>
              {children}
              <BaseButton text={props.buttonText} variant="contained" fullWidth type="submit"></BaseButton>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default BaseForm;
