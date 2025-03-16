import styled from 'styled-components';
import { TextStyled } from '@components/Text/Text.style';

interface ImagesGalleryItemWrapperProps {
  src: string;
  alt: string;
}

export const ImagesGalleryItemWrapper = styled.div<ImagesGalleryItemWrapperProps>`
  width: 285px;
  height: 244px;

  margin: 0 auto;

  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10px;

  @media (max-width: 1000px) {
    width: 100%;
    height: 180px;
  }
`;

export const ImagesGalleryItemInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImagesGalleryItemText = styled(TextStyled)`
  position: absolute;
  left: 0;
  bottom: 0;
  color: rgb(57, 57, 57);
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -3%;
  text-align: left;
`;
