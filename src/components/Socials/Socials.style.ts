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
  background: ${({ backgroundcolor }) => backgroundcolor || theme.colors.white};
  border-radius: 50%;
`;

export const SocialLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
