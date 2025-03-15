import { Footer } from '../Footer';
import { Header } from '../Header';
import { LayoutWrapper } from './Layout.style';
import { FC, ReactNode } from 'react';
import { Main } from './Main';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
};
