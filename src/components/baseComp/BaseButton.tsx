import React from 'react';
import { Button, ButtonProps } from '@mui/material';
/**
 * 참고: https://mui.com/material-ui/react-button/#basic-button
 */
type BaseButtonProps = ButtonProps & {
  text: string;
};

/**
 * @param text 버튼에 표시될 문구
 * @param variant 버튼 스타일
 * @param size 버튼 사이즈
 * @param onClickHandler 버튼 onClick 콜백함수
 */
const BaseButton = ({ ...props }: BaseButtonProps) => {
  return <Button {...props}>{props.text}</Button>;
};

export default BaseButton;
