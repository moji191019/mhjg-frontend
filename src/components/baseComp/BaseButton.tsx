import React from 'react';
import { Button } from '@mui/material';
/**
 * 참고: https://mui.com/material-ui/react-button/#basic-button
 */
type BaseButtonProps = {
  text: string;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  size?: 'small' | 'medium' | 'large';
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const BaseButton = ({ ...props }: BaseButtonProps) => {
  const { text, variant, size, onClickHandler } = props;
  {
    /* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */
  }
  return (
    <Button variant={variant} onClick={onClickHandler} size={size}>
      {text}
    </Button>
  );
};

export default BaseButton;
