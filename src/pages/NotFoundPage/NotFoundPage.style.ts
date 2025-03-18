import { TextStyled } from '@ui/Text/Text.style';
import styled from 'styled-components';

export const NotFoundText = styled(TextStyled)`
  font-family: Lexend Deca;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  text-transform: capitalize;
  max-width: 680px;
  padding-bottom: 600px;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 390px;
  }
  @media (max-width: 360px) {
    text-wrap: wrap;
  }
`;
