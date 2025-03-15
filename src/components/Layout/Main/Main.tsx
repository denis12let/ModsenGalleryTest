import { FC, ReactNode } from 'react';
import { MainWrapper } from './Main.style';

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};
