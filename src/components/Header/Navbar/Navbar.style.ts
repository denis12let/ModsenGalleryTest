import styled from 'styled-components';

interface MenuProps {
  isRow: boolean;
}

export const Menu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: ${({ isRow }) => (isRow ? 'row' : 'column')};
  gap: ${({ isRow }) => (isRow ? '44px' : '11px')};
`;
