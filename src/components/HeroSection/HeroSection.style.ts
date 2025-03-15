import styled from 'styled-components';
import { TextStyled } from '@components/Text/Text.style';

export const HeroSectionWrapper = styled.div`
  width: 100%;
  height: 420px;
  background: url('src/assets/images/heroSectionBg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) and (min-width: 600px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    height: 200px;
  }
`;

export const HeroSectionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 87px;
  @media (max-width: 600px) {
    gap: 25px;
  }
`;

export const HeroText = styled(TextStyled)`
  color: #fff;
  font-family: Roboto;
  font-size: 96px;
  font-weight: 700;
  line-height: 113px;
  text-align: center;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
  text-wrap: nowrap;
  @media (max-width: 900px) {
    font-size: 48px;
    line-height: 56px;
  }
  @media (max-width: 360px) {
    text-wrap: wrap;
  }
`;
