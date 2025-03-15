import { Footer } from '../Footer';
import { Header } from '../Header';
import { LayoutWrapper } from './Layout.style';
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};
