import { TextStyled } from '@components/Text/Text.style';
import { RouterNavLink } from '@ui/NavLink/NavLink.style';
import styled from 'styled-components';

export const FooterLinksContainer = styled.div`
  display: flex;
  max-width: 900px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 900px) and (min-width: 500px) {
    flex-direction: column;
    align-items: end;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media (max-width: 900px) {
  }
`;

export const FooterTitle = styled(TextStyled)`
  margin-bottom: 26px;

  color: ${({ theme }) => theme.colors.yellow};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 3px;
  text-align: left;
  text-transform: uppercase;
`;

export const FooterLink = styled(RouterNavLink)`
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.6);
  &.active {
    color: rgba(255, 255, 255, 0.6);
  }
  @media (max-width: 900px) {
    margin-bottom: 0;
  }
`;

export const FooterLinkText = styled(TextStyled)`
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.6);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 140px;

  @media (max-width: 900px) {
    display: none;
  }
`;
