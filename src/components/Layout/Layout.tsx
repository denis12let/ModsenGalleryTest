import { FC, ReactNode } from 'react';

import { Header, Footer } from '@components';
import { Main } from './Main';

import { LayoutWrapper } from './Layout.style';

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
