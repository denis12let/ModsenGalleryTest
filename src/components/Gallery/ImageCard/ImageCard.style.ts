import styled from 'styled-components';
import { TextStyled } from '@components/Text/Text.style';

interface ImageItemProps {
  src: string;
  alt: string;
}

export const ImageItemWrapper = styled.div<ImageItemProps>`
  width: 285px;
  height: 232px;
  position: relative;

  margin: 0 auto;

  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center calc(100% - 60px);
  background-size: cover;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1000px) {
    width: 100%;
    height: 170px;
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

  @media (max-width: 1000px) {
    height: 35px;
  }
`;

export const ImageItemText = styled(TextStyled)`
  max-width: 200px;
  color: rgb(57, 57, 57);
  font-family: Lexend Deca;
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -3%;
  text-align: left;
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
`;
