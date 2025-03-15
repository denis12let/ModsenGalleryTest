import { FC, ReactNode } from 'react';
import { ContainerStyle } from './Container.style';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};
