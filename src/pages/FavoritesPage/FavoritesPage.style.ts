import { TextStyled } from '@components/Text/Text.style';
import styled from 'styled-components';

export const FavoritesWrapper = styled.div`
  width: 100%;
  padding-bottom: 600px;
  padding-top: 60px;
`;

export const FavoritesNotFoundText = styled(TextStyled)`
  font-family: Lexend Deca;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  text-transform: capitalize;
  max-width: 680px;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 400px;
  }
`;

export const FavoritesTitle = styled(TextStyled)`
  color: rgb(57, 57, 57);
  font-family: Roboto;
  font-size: 40px;
  font-weight: 400;
  line-height: 47px;
  padding-bottom: 25px;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const FavoritesSubtitle = styled(TextStyled)`
  color: rgb(224, 164, 73);
  font-family: Roboto;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
