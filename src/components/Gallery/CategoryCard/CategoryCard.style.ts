import styled from 'styled-components';

import { TextStyled } from '@ui/Text/Text.style';

interface CategoryItemProps {
  src: string;
}

export const CategoryItemWrapper = styled.div<CategoryItemProps>`
  width: 100%;
  height: 100%;

  margin: 0 auto;

  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10px;

  @media ${({ theme }) => theme.media.large} {
    height: 180px;
  }
`;

export const CategoryItemInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CategoryItemText = styled(TextStyled)`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
`;
