import React from 'react';
import { TextField } from '@mui/material';
/**
 * 참고: https://mui.com/material-ui/react-text-field/#basic-textfield
 */
type BaseTextFieldProps = {
  label: string;
  variant?: 'standard' | 'outlined' | 'filled';
  defaultValue?: string;
  helperText?: string;
  size?: 'small' | 'medium';
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const BaseInput = ({ ...props }: BaseTextFieldProps) => {
  const { label, variant, defaultValue, helperText, size, onChangeHandler } = props;
  return (
    <TextField
      size={size}
      label={label}
      defaultValue={defaultValue}
      variant={variant}
      helperText={helperText}
      onChange={onChangeHandler}
    />
  );
};

export default BaseInput;
