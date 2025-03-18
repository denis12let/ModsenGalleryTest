import styled from 'styled-components';
import { TextStyled } from '@ui/Text/Text.style';

interface ImageItemProps {
  src: string;
}

interface ImageItemTextProps {
  maxWidth: string;
}

export const ImageItemWrapper = styled.div<ImageItemProps>`
  width: 100%;
  height: 100%;
  position: relative;

  margin: 0 auto;

  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const ImageItemInner = styled.div`
  width: 100%;
  height: 58px;
  padding: 3px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid rgb(240, 241, 241);

  @media ${({ theme }) => theme.media.large} {
    height: 35px;
  }
`;

export const ImageItemText = styled(TextStyled)<ImageItemTextProps>`
  max-width: ${({ maxWidth }) => maxWidth};
  color: rgb(57, 57, 57);
  font-family: Lexend Deca;
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -3%;
  text-align: left;
  @media ${({ theme }) => theme.media.large} {
    text-wrap: nowrap;
  }
`;

export const FavoriteButton = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  &:hover {
    background-color: #f9f9f9;
  }

  &:active {
    background-color: inherit;
  }

  @media ${({ theme }) => theme.media.large} {
    width: 29px;
    height: 29px;
  }
`;
