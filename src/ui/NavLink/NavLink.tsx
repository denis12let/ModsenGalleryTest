import { RouterNavLink, RouterNavLinkProps } from './NavLink.style';
import { FC, ReactNode } from 'react';

interface NavLinkProps extends RouterNavLinkProps {
  children: ReactNode;
  to: string;
}

export const NavLink: FC<NavLinkProps> = ({ children, ...props }) => {
  return <RouterNavLink {...props}>{children}</RouterNavLink>;
};
