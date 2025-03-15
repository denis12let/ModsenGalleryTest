import { FC, ReactNode } from 'react';
import { NavbarItemStyled } from './NavbarItem.style';
import { NavLink } from '@ui/NavLink';
import { theme } from '@styles/theme';

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
