import { FC, ReactNode } from 'react';

import { NavLink } from '@ui';

import { NavbarItemStyled } from './NavbarItem.style';
import { theme } from '@styles';

interface NavbarItemProps {
  to: string;
  children: ReactNode;
}

export const NavbarItem: FC<NavbarItemProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      color={theme.colors.milk}
      activecolor={theme.colors.yellow}
    >
      <NavbarItemStyled>{children}</NavbarItemStyled>
    </NavLink>
  );
};
