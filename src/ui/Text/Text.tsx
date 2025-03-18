import { FC, ReactNode } from 'react';

import { TextStyled, TextStyledProps } from './Text.style';

interface TextProps extends TextStyledProps {
  children: ReactNode;
}

export const Text: FC<TextProps> = ({ children, ...props }) => {
  return <TextStyled {...props}>{children}</TextStyled>;
};
