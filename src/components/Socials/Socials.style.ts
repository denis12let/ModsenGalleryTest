import { theme } from '@styles/theme';
import { NavLink } from '@ui/NavLink';
import styled from 'styled-components';

interface SocialItemStyledProps {
  backgroundcolor?: string;
}

export const SocialsStyled = styled.ul`
  display: flex;
  gap: 12px;
`;

export const SocialItemStyled = styled.li<SocialItemStyledProps>`
  width: 28px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.colors.black};
    fill: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};

    svg {
      color: ${({ theme }) => theme.colors.white};
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SocialLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
