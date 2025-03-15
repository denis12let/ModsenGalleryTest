import { FC, ReactNode } from 'react';
import { ButtonStyled } from './Button.style';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
