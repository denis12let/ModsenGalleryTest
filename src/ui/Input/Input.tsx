import { FC } from 'react';
import { InputStyle } from './Input.style';

interface InputProps {
  text: string;
  setText: (value: string) => void;
}

export const Input: FC<InputProps> = ({ text, setText }) => {
  return (
    <InputStyle
      value={text}
      onChange={(e) => setText(e.target.value)}
    ></InputStyle>
  );
};
