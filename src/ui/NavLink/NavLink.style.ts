import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface RouterNavLinkProps {
  color?: string;
  activecolor?: string;
}

export const RouterNavLink = styled(NavLink)<RouterNavLinkProps>`
  widht: 100%;
  text-decoration: none;
  color: ${({ color, theme }) => color || theme.colors.milk};
  &.active {
    color: ${({ activecolor }) => activecolor || 'inherit'};
  }
`;
