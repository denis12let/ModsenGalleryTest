import styled from 'styled-components';

import { TextStyled } from '@ui/Text/Text.style';
import heroBg from '@assets/images/heroSectionBg.png';

export const HeroSectionWrapper = styled.div`
  width: 100%;
  height: 420px;
  background: url(${heroBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.media.preLarge} and (min-width: 600px) {
    height: 300px;
  }
  @media ${({ theme }) => theme.media.preLarge} {
    height: 200px;
  }
`;

export const HeroSectionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 87px;
  @media ${({ theme }) => theme.media.preLarge} {
    gap: 10px;
  }
`;

export const HeroText = styled(TextStyled)`
  color: #fff;
  font-family: Roboto;
  font-size: ${({ fontSize }) => fontSize || '48px'};
  font-weight: 700;
  line-height: ${({ lineheight }) => lineheight || '48px'};
  text-align: center;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
  text-wrap: nowrap;
  @media ${({ theme }) => theme.media.preLarge} {
    font-size: ${({ fontSize = '48px' }) => parseInt(fontSize) / 2 + 'px'};
    line-height: 56px;
  }
  @media ${({ theme }) => theme.media.small} {
    text-wrap: wrap;
  }
`;
